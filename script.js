const header = document.querySelector(".site-header");
const year = document.querySelector("#year");
const members = document.querySelectorAll(".member-list li");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

const onScroll = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

if ("IntersectionObserver" in window && members.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  members.forEach((item, index) => {
    item.style.transitionDelay = `${index * 80}ms`;
    observer.observe(item);
  });
} else {
  members.forEach((item) => item.classList.add("is-visible"));
}
