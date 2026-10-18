const header = document.querySelector(".site-header");
const year = document.querySelector("#year");
const members = document.querySelectorAll(".member-list li");
const LANG_KEY = "suqoor-lang";

const I18N = {
  ar: {
    dir: "rtl",
    title: "صقور طويق حائل",
    description: "فريق صقور طويق حائل — بروفايل الفريق، المعلومات، والحسابات الرسمية.",
    lang_code: "EN",
    lang_label: "Switch to English",
    brand: "صقور طويق",
    nav_label: "القائمة الرئيسية",
    nav_about: "من نحن",
    nav_achievements: "إنجازاتنا",
    nav_members: "الأعضاء",
    nav_contact: "تواصل معنا",
    tiktok: "تيك توك صقور طويق",
    hero_label: "مقدمة الفريق",
    logo_alt: "شعار صقور طويق حائل",
    hero_title: "نحلق فوق القمم",
    hero_lede:
      "في فريق صقور طويق نؤمن بأنه لا حدود للشغف لتحقيقه وأستلهامنا من طموح وطننا الذي لا يرضى إلا بالقمة ونبتكر اليوم لنبني حلول الغد ونحاط بالطاقات الواعدة لنصنع أثراً حقيقياً يلامس عنان السماء.",
    cta_about: "تعرّف علينا",
    about_lead:
      "فريق من المهندسات يجمعنا الطموح والشغف، ونحوّل التحديات إلى إنجازات. نهتم بالبرمجة وتحليل البيانات وحل المشكلات وتطوير الحلول التقنية وبناء الاستراتيجيات، ونؤمن بأن الابتكار يبدأ بفكرة ويكبر بالشغف ويتحقق بالعمل الجماعي ليصنع أثرًا يدوم.",
    fact_location: "المقر",
    fact_location_value: "حائل، المملكة العربية السعودية",
    fact_experience: "الخبرات",
    fact_experience_value: "أكثر من ٩ سنوات مجتمعة",
    fact_focus: "التخصص",
    fact_focus_value: "تطوير · منصات · بيانات · استراتيجيات · KPIs · برمجة · أردوينو · تحول رقمي",
    achievements_lead: "مسيرة عملية في الواجهات الحكومية، الهيكلة التقنية، والابتكار.",
    ach1_title: "بناء واجهات حكومية",
    ach1_desc: "تصميم وتطوير واجهات رقمية لمشاريع حكومية.",
    ach2_title: "إعادة تصحيح الهيكل",
    ach2_desc: "إعادة هيكلة الأنظمة وتحسين البنية التقنية.",
    ach3_title: "هاكاثون طيف لينك — المركز الثاني",
    ach3_desc: "مشاركة في الهاكاثون والفوز بالمركز الثاني.",
    ach4_title: "تقارير التحول الرقمي",
    ach4_desc: "إعداد تقارير تقنية حول التحول الرقمي.",
    ach5_title: "منصة عود السعودية — المركز الأول",
    ach5_desc: "بناء منصة لحل مشاكل البيئة والاستثمار فيها، والفوز بالمركز الأول في هاكاثون جادةثون في حائل.",
    ach6_title: "AgentX الشرقية — التأهل للمرحلة الثانية",
    ach6_desc:
      "مشاركة بمنصة عود السعودية بعد تطويرها بتقنية الأردوينو والدرون، والتأهل للمرحلة الثانية في AgentX المنطقة الشرقية.",
    ach7_title: "نظام Quantum-Safe Health Insurance — هاكاثون هيلثون",
    ach7_desc:
      "معالجة تلاعب بعض المستشفيات بفحوصات وعلاجات مكررة غير مبررة، مما يعرّض المريض لمخاطر صحية ويستنزف رصيده التأميني.",
    ach8_title: "نظام Quantum Safe Network — هاكاثون فضاء أجاء — المركز السادس",
    ach8_desc: "حماية البيانات والمعاملات المالية ضد مخاطر الاختراق الكمومي المستقبلي.",
    ach9_title: "مشروع عشيبة السعودية — هاكاثون وزارة السياحة — المركز السادس",
    ach9_desc: "وكيل ذكي (Agent) لمساعدة السياح والزوار.",
    alt_hail_muni: "أمانة منطقة حائل",
    alt_hail_emirate: "إمارة منطقة حائل",
    alt_taiflink: "مركز طيف لينك",
    alt_oud: "منصة عود السعودية",
    alt_agentx: "AgentX",
    alt_ksu: "جامعة الملك سعود",
    alt_aja: "هاكاثون فضاء أجاء",
    alt_tourism: "وزارة السياحة",
    alt_ashaiba: "عشيبة",
    members_lead: "قائدة الفريق والأعضاء — تخصصات متكاملة لصناعة حلول تقنية.",
    role_leader: "قائدة الفريق",
    role_member: "عضو",
    name_munira: "منيرة فهيد الشمري",
    name_nouf: "نوف نايف الشمري",
    name_mona: "منى مرشد الشمري",
    name_abeer: "عبير الشمري",
    name_falak: "فلك سعد الدهام",
    name_anfal: "أنفال غانم الركاد",
    name_tala: "تالا المرمش",
    spec_munira: "مهندسة تطوير أنظمة برمجية",
    spec_nouf: "مهندسة أنظمة مدمجة",
    spec_mona: "مهندسة واجهات ومحللة بيانات",
    spec_abeer: "مهندسة في الاستراتيجيات",
    spec_falak: "هندسة برمجيات",
    spec_anfal: "هندسة برمجيات",
    spec_tala: "هندسة شبكات واتصالات",
    duty_falak: "تطوير الأفكار، فايب كودينغ",
    duty_anfal: "كتابة محتوى، تطوير مواقع ويب بلغة HTML",
    duty_tala: "تطوير الأفكار، علاقات اجتماعية",
    contacts_munira: "وسائل التواصل لمنيرة",
    contacts_nouf: "وسائل التواصل لنوف",
    contacts_mona: "وسائل التواصل لمنى",
    contacts_abeer: "وسائل التواصل لعبير",
    contacts_falak: "وسائل التواصل لفلك",
    contacts_anfal: "وسائل التواصل لأنفال",
    contacts_tala: "وسائل التواصل لتالا",
    contact_lead: "اضغطوا على الأيقونة للتواصل مباشرة.",
    footer_name: "صقور طويق حائل",
    short_munira: "منيرة",
    short_nouf: "نوف",
    short_mona: "منى",
    short_abeer: "عبير",
    short_falak: "فلك",
    short_anfal: "أنفال",
    short_tala: "تالا",
    action_call: "اتصال ب{name}",
    action_email: "إيميل {name}",
    action_linkedin: "لينكدإن {name}",
    action_github: "قيت هب {name}",
    action_portfolio: "بورتفوليو {name}",
    action_cv: "عرض سيرة {name} الذاتية",
  },
  en: {
    dir: "ltr",
    title: "Suqoor Tuwaiq Hail",
    description: "Suqoor Tuwaiq Hail — team profile, information, and official accounts.",
    lang_code: "ع",
    lang_label: "التبديل إلى العربية",
    brand: "Suqoor Tuwaiq",
    nav_label: "Main menu",
    nav_about: "About",
    nav_achievements: "Achievements",
    nav_members: "Members",
    nav_contact: "Contact",
    tiktok: "Suqoor Tuwaiq on TikTok",
    hero_label: "Team introduction",
    logo_alt: "Suqoor Tuwaiq Hail logo",
    hero_title: "We soar above the peaks",
    hero_lede:
      "At Suqoor Tuwaiq, we believe passion has no limits. We draw inspiration from our nation's ambition that settles for nothing less than the summit. We innovate today to build tomorrow's solutions, and we surround ourselves with promising talent to create a real impact that reaches the sky.",
    cta_about: "Meet us",
    about_lead:
      "We are a team of engineers united by ambition and passion, turning challenges into achievements. We focus on programming, data analysis, problem-solving, technical solutions, and strategy. We believe innovation starts with an idea, grows with passion, and is realized through teamwork to make a lasting impact.",
    fact_location: "Location",
    fact_location_value: "Hail, Saudi Arabia",
    fact_experience: "Experience",
    fact_experience_value: "More than 9 years combined",
    fact_focus: "Focus",
    fact_focus_value: "Development · Platforms · Data · Strategy · KPIs · Programming · Arduino · Digital transformation",
    achievements_lead: "A practical journey in government interfaces, technical restructuring, and innovation.",
    ach1_title: "Building government interfaces",
    ach1_desc: "Designing and developing digital interfaces for government projects.",
    ach2_title: "Restructuring",
    ach2_desc: "Reorganizing systems and improving the technical architecture.",
    ach3_title: "TaifLink Hackathon — 2nd place",
    ach3_desc: "Participating in the hackathon and winning second place.",
    ach4_title: "Digital transformation reports",
    ach4_desc: "Preparing technical reports on digital transformation.",
    ach5_title: "Oud Saudiya platform — 1st place",
    ach5_desc:
      "Building a platform to solve environmental challenges and invest in them, and winning first place at Jadahthon in Hail.",
    ach6_title: "AgentX Eastern Province — qualified for stage two",
    ach6_desc:
      "Participating with the Oud Saudiya platform after developing it with Arduino and drone technology, and qualifying for the second stage of AgentX in the Eastern Province.",
    ach7_title: "Quantum-Safe Health Insurance — Healthathon",
    ach7_desc:
      "Addressing some hospitals' manipulation through repeated, unjustified tests and treatments, which puts patients at health risk and drains their insurance balance.",
    ach8_title: "Quantum Safe Network — Aja Space Hackathon — 6th place",
    ach8_desc: "Protecting data and financial transactions against future quantum-computing threats.",
    ach9_title: "Ashaiba Saudi project — Ministry of Tourism Hackathon — 6th place",
    ach9_desc: "An AI agent to help tourists and visitors.",
    alt_hail_muni: "Hail Region Municipality",
    alt_hail_emirate: "Emirate of Hail Region",
    alt_taiflink: "TaifLink Center",
    alt_oud: "Oud Saudiya platform",
    alt_agentx: "AgentX",
    alt_ksu: "King Saud University",
    alt_aja: "Aja Space Hackathon",
    alt_tourism: "Ministry of Tourism",
    alt_ashaiba: "Ashaiba",
    members_lead: "Team leader and members — complementary specialties for building technical solutions.",
    role_leader: "Team leader",
    role_member: "Member",
    name_munira: "Munirah Fuhaid Al-Shammari",
    name_nouf: "Nouf Naif Al-Shammari",
    name_mona: "Mona Murshid Al-Shammari",
    name_abeer: "Abeer Al-Shammari",
    name_falak: "Falak Saad Al-Daham",
    name_anfal: "Anfal Ghanem Al-Rakad",
    name_tala: "Tala Al-Mermesh",
    spec_munira: "Software systems development engineer",
    spec_nouf: "Embedded systems engineer",
    spec_mona: "Interface engineer and data analyst",
    spec_abeer: "Strategy engineer",
    spec_falak: "Software engineering",
    spec_anfal: "Software engineering",
    spec_tala: "Networks and communications engineering",
    duty_falak: "Idea development, vibe coding",
    duty_anfal: "Content writing, HTML web development",
    duty_tala: "Idea development, social relations",
    contacts_munira: "Munira contact options",
    contacts_nouf: "Nouf contact options",
    contacts_mona: "Mona contact options",
    contacts_abeer: "Abeer contact options",
    contacts_falak: "Falak contact options",
    contacts_anfal: "Anfal contact options",
    contacts_tala: "Tala contact options",
    contact_lead: "Tap an icon to reach us directly.",
    footer_name: "Suqoor Tuwaiq Hail",
    short_munira: "Munira",
    short_nouf: "Nouf",
    short_mona: "Mona",
    short_abeer: "Abeer",
    short_falak: "Falak",
    short_anfal: "Anfal",
    short_tala: "Tala",
    action_call: "Call {name}",
    action_email: "Email {name}",
    action_linkedin: "LinkedIn — {name}",
    action_github: "GitHub — {name}",
    action_portfolio: "Portfolio — {name}",
    action_cv: "View {name}'s CV",
  },
};

const getLang = () => (localStorage.getItem(LANG_KEY) === "en" ? "en" : "ar");

const applyLanguage = (lang) => {
  const pack = I18N[lang] || I18N.ar;
  document.documentElement.lang = lang;
  document.documentElement.dir = pack.dir;
  document.title = pack.title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", pack.description);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (pack[key]) el.textContent = pack[key];
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (pack[key]) el.setAttribute("aria-label", pack[key]);
  });

  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.getAttribute("data-i18n-title");
    if (pack[key]) el.setAttribute("title", pack[key]);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (pack[key]) el.setAttribute("alt", pack[key]);
  });

  document.querySelectorAll("[data-action][data-person]").forEach((el) => {
    const actionKey = `action_${el.dataset.action}`;
    const nameKey = `short_${el.dataset.person}`;
    const template = pack[actionKey];
    const name = pack[nameKey];
    if (!template || !name) return;
    const label = template.replace("{name}", name);
    el.setAttribute("aria-label", label);
    el.setAttribute("title", label);
  });

  const toggle = document.querySelector("#lang-toggle");
  if (toggle) {
    const code = toggle.querySelector(".lang-code");
    if (code) code.textContent = pack.lang_code;
    toggle.setAttribute("aria-label", pack.lang_label);
    toggle.setAttribute("title", pack.lang_label);
  }
};

const currentLang = getLang();
applyLanguage(currentLang);

const langToggle = document.querySelector("#lang-toggle");
if (langToggle) {
  langToggle.addEventListener("click", () => {
    const next = getLang() === "ar" ? "en" : "ar";
    localStorage.setItem(LANG_KEY, next);
    applyLanguage(next);
  });
}

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

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-cv]");
  if (!trigger) return;
  const dialog = document.getElementById(`cv-${trigger.dataset.cv}`);
  if (dialog && typeof dialog.showModal === "function" && !dialog.open) {
    dialog.showModal();
  }
});

document.querySelectorAll(".cv-dialog").forEach((dialog) => {
  const closeBtn = dialog.querySelector(".cv-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => dialog.close());
  }

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
});
