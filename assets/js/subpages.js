(() => {
  const button = document.getElementById("pageLanguage");
  const nodes = [...document.querySelectorAll("[data-en][data-es]")];
  const staticText = {
    "Home":"Inicio","About":"Perfil","About me":"Sobre mí","CV":"CV","Volunteering":"Voluntariado","Projects":"Proyectos","Contact":"Contacto",
    "Image credits":"Créditos de imágenes","Privacy":"Privacidad","Privacy & performance":"Privacidad y rendimiento",
    "Built with intent. Kept lightweight.":"Hecho con intención. Diseñado para ser ligero.",
    "PROFILE / BACKGROUND":"PERFIL / TRAYECTORIA","EDUCATION":"FORMACIÓN ACADÉMICA","HIGH SCHOOL":"BACHILLERATO",
    "ACADEMIC PROGRAM":"PROGRAMA ACADÉMICO","ENGLISH":"INGLÉS","MICROSOFT EXCEL":"MICROSOFT EXCEL",
    "TECHNICAL TRAINING":"FORMACIÓN TÉCNICA","SKILLS / EVIDENCE":"HABILIDADES / EVIDENCIA",
    "EVENTS / COLLABORATION":"EVENTOS / COLABORACIÓN","2024 / TEAM OF SEVEN":"2024 / EQUIPO DE SIETE",
    "01 / APPROACH":"01 / ENFOQUE","02 / VALUES":"02 / VALORES","Curiosity with execution":"Curiosidad con ejecución",
    "Useful, honest engineering":"Ingeniería útil y honesta","Academic background":"Formación académica",
    "Technical range":"Áreas técnicas","Projects beyond the classroom":"Proyectos más allá del aula",
    "Web development":"Desarrollo web","Systems & automation":"Sistemas y automatización",
    "Hardware & applied AI":"Hardware e IA aplicada","Product workflow":"Flujo de trabajo de producto",
    "Arduino & electronics":"Arduino y electrónica","View my CV ↗":"Ver mi CV ↗","Contact me":"Contáctame",
    "Contact ↗":"Contacto ↗","Academic profile ↗":"Perfil académico ↗","Project portfolio ↗":"Portafolio de proyectos ↗","Community involvement ↗":"Participación comunitaria ↗",
    "PROFESSIONAL PROFILE":"PERFIL PROFESIONAL","EDUCATION":"FORMACIÓN ACADÉMICA",
    "TECHNICAL & LEADERSHIP TRAINING":"FORMACIÓN TÉCNICA Y LIDERAZGO",
    "VERIFIED ACHIEVEMENTS":"LOGROS VERIFICABLES","ACADEMIC PERFORMANCE":"RENDIMIENTO ACADÉMICO",
    "Technical focus":"Enfoque técnico","FULL DOCUMENT":"DOCUMENTO COMPLETO","Curriculum vitae":"Currículum vitae",
    "OPEN FULL CV (PDF) ↗":"ABRIR CV COMPLETO (PDF) ↗","DOWNLOAD CV ↓":"DESCARGAR CV ↓","DOWNLOAD PDF":"DESCARGAR PDF",
    "Community volunteering":"Voluntariado comunitario","Community participation":"Participación comunitaria",
    "COMMUNITY SERVICE":"SERVICIO COMUNITARIO","Image credits":"Créditos de imágenes",
    "VISUAL ATTRIBUTION":"CRÉDITOS VISUALES","PROFILE PORTRAIT":"RETRATO DE PERFIL",
    "PROJECT ILLUSTRATIONS":"ILUSTRACIONES DE PROYECTOS","PROJECT & VOLUNTEERING PHOTOGRAPHS":"FOTOGRAFÍAS DE PROYECTOS Y VOLUNTARIADO",
    "TYPOGRAPHY":"TIPOGRAFÍA","BACK TO PORTFOLIO":"VOLVER AL PORTAFOLIO",
    "Home":"Inicio","Projects":"Proyectos","About":"Perfil","Contact":"Contacto",
    "PROFILE / BACKGROUND":"PERFIL / TRAYECTORIA","PROFILE / BACKGROUND":"PERFIL / TRAYECTORIA","EVENTS / COLLABORATION":"EVENTOS / COLABORACIÓN",
    "HIGH SCHOOL":"BACHILLERATO","ACADEMIC PROGRAM":"PROGRAMA ACADÉMICO","ENGLISH":"INGLÉS","TECHNICAL TRAINING":"FORMACIÓN TÉCNICA",
    "SKILLS / EVIDENCE":"HABILIDADES / EVIDENCIA","EDUCATION":"FORMACIÓN ACADÉMICA","ACADEMIC PERFORMANCE":"RENDIMIENTO ACADÉMICO",
    "TECHNICAL & LEADERSHIP TRAINING":"FORMACIÓN TÉCNICA Y LIDERAZGO","PROJECTS BEYOND THE CLASSROOM":"PROYECTOS MÁS ALLÁ DEL AULA",
    "01 / APPROACH":"01 / ENFOQUE","02 / VALUES":"02 / VALORES","2025 / 2026":"2025 / 2026","2024 / TEAM OF SEVEN":"2024 / EQUIPO DE SIETE",
    "PROFILE PORTRAIT":"RETRATO DE PERFIL","PROJECT ILLUSTRATIONS":"ILUSTRACIONES DE PROYECTOS","PROJECT & VOLUNTEERING PHOTOGRAPHS":"FOTOGRAFÍAS DE PROYECTOS Y VOLUNTARIADO",
    "TYPOGRAPHY":"TIPOGRAFÍA","COMMUNITY SERVICE":"SERVICIO COMUNITARIO","VERIFIED ACHIEVEMENTS":"LOGROS VERIFICABLES",
    "TECHNICAL FOCUS":"ENFOQUE TÉCNICO","FULL DOCUMENT":"DOCUMENTO COMPLETO","CURRICULUM VITAE":"CURRÍCULUM VITAE",
    "PROFILE / BACKGROUND":"PERFIL / TRAYECTORIA","View my CV ↗":"Ver mi CV ↗","Contact me":"Contáctame",
    "Contact ↗":"Contacto ↗","Academic profile ↗":"Perfil académico ↗","Project portfolio ↗":"Portafolio de proyectos ↗",
    "OPEN FULL CV (PDF) ↗":"ABRIR CV COMPLETO (PDF) ↗","DOWNLOAD CV ↓":"DESCARGAR CV ↓","DOWNLOAD PDF":"DESCARGAR PDF",
    "VISUAL ATTRIBUTION":"CRÉDITOS VISUALES","BACK TO PORTFOLIO":"VOLVER AL PORTAFOLIO",
    "CURRICULUM VITAE":"CURRÍCULUM VITAE","SUPPORT FOR OLDER ADULTS":"APOYO A PERSONAS ADULTAS MAYORES"
  };
  const originals = new WeakMap();
  const getLanguage = () => {
    try { return localStorage.getItem("portfolio-language") === "es" ? "es" : "en"; }
    catch (_) { return "en"; }
  };
  let language = getLanguage();

  function apply() {
    document.documentElement.lang = language;
    nodes.forEach(node => { node.innerHTML = node.dataset[language]; });
    document.querySelectorAll("body *").forEach(node => {
      if (node.children.length) return;
      if (!originals.has(node)) originals.set(node, node.textContent.trim());
      const original = originals.get(node);
      if (!original) return;
      const translated = staticText[original];
      if (translated) node.textContent = language === "es" ? translated : original;
    });
    document.querySelectorAll("[data-en-href][data-es-href]").forEach(node => {
      const attr = node.tagName === "IFRAME" ? "src" : "href";
      const target = language === "en" ? node.dataset.enHref : node.dataset.esHref;
      node.setAttribute(attr, target);
    });
    document.querySelectorAll("[data-en-title][data-es-title]").forEach(node => node.setAttribute("title", node.dataset[language + "Title"]));
    document.querySelectorAll("[data-en-alt][data-es-alt]").forEach(node => node.setAttribute("alt", node.dataset[language + "Alt"]));
    document.querySelectorAll("[data-en-download][data-es-download]").forEach(node => node.setAttribute("download", node.dataset[language + "Download"]));
    document.querySelectorAll("[aria-label]").forEach(node => {
      const original = node.getAttribute("data-original-aria") || node.getAttribute("aria-label");
      if (!node.hasAttribute("data-original-aria")) node.setAttribute("data-original-aria", original);
      const map = {"Open navigation":"Abrir navegación","Close navigation":"Cerrar navegación","Change language":"Cambiar idioma","Jeremy Alexander Torres Mercado — home":"Jeremy Alexander Torres Mercado — inicio"};
      node.setAttribute("aria-label", language === "es" ? (map[original] || original) : original);
    });
    document.querySelectorAll('meta[name="description"]').forEach(meta => {
      if (!meta.dataset.en) meta.dataset.en = meta.content;
      if (!meta.dataset.es) meta.dataset.es = meta.content;
      const translations = {
        "A detailed profile of Jeremy Torres: education, practical skills, projects, learning and achievements.":"Perfil detallado de Jeremy Torres: formación, habilidades prácticas, proyectos, aprendizaje y logros.",
        "Jeremy Torres — curriculum vitae, education, technical skills and verified achievements.":"Jeremy Torres — currículum, formación, habilidades técnicas y logros verificables.",
        "Community volunteering and service experience by Jeremy Torres.":"Experiencia de voluntariado y servicio comunitario de Jeremy Torres.",
        "Image authorship and attribution for the Jeremy Torres portfolio.":"Autoría y atribución de imágenes del portafolio de Jeremy Torres."
      };
      if (language === "es") meta.content = translations[meta.dataset.en] || meta.dataset.en;
      else meta.content = meta.dataset.en;
    });
    const title = document.querySelector("title");
    if (title) {
      if (!title.dataset.en) title.dataset.en = title.textContent;
      const titleMap = {"About me — Jeremy Torres":"Sobre mí — Jeremy Torres","Curriculum Vitae — Jeremy Torres":"Currículum — Jeremy Torres","Volunteering — Jeremy Torres":"Voluntariado — Jeremy Torres","Image credits — Jeremy Torres":"Créditos de imágenes — Jeremy Torres"};
      title.textContent = language === "es" ? (titleMap[title.dataset.en] || title.dataset.en) : title.dataset.en;
    }
    if (button) {
      button.textContent = "EN / ES";
      button.setAttribute("aria-label", language === "en" ? "Change language" : "Cambiar idioma");
      button.setAttribute("aria-pressed", String(language === "es"));
    }
    document.querySelectorAll("#menuToggle").forEach(toggle => toggle.setAttribute("aria-label", language === "es" ? "Abrir navegación" : "Open navigation"));
    window.dispatchEvent(new CustomEvent("portfolio:languagechange", { detail: { language } }));
  }
  button?.addEventListener("click", () => {
    language = language === "en" ? "es" : "en";
    try { localStorage.setItem("portfolio-language", language); } catch (_) {}
    apply();
  });
  window.addEventListener("storage", event => {
    if (event.key === "portfolio-language") { language = getLanguage(); apply(); }
  });
  apply();
})();
