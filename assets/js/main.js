(() => {
  const translations = window.TRANSLATIONS || {};
  const projects = window.PROJECTS || {featured:[],lab:[]};
  const languageSwitch = document.getElementById("languageSwitch");
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  const savedLanguage = (() => {
    try { return localStorage.getItem("portfolio-language"); } catch (_) { return null; }
  })();
  let language = savedLanguage === "es" ? "es" : "en";

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  })[char]);

  function projectCard(project, index) {
    const t = translations[language];
    const links = [];
    if (project.demo) links.push(`<a href="${escapeHtml(project.demo)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t.demo)} <span>↗</span></a>`);
    if (project.extra) links.push(`<a href="${escapeHtml(project.extra)}" target="_blank" rel="noopener noreferrer">${escapeHtml(language === "es" ? "Reproductor en vivo" : "Live player")} <span>↗</span></a>`);
    if (project.repo) links.push(`<a href="${escapeHtml(project.repo)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t.source)} <span>↗</span></a>`);
    const note = project.note === "simulated"
      ? `<span class="project-note">${escapeHtml(t.simulated)}</span>`
      : project.note === "camera" ? `<span class="project-note">${escapeHtml(t.camera)}</span>` : "";
    return `<article class="project-card reveal" style="--card-index:${index}">
      <div class="project-visual visual-${escapeHtml(project.visual)}">
        <span class="visual-label mono">${escapeHtml(project.category)}</span>
        <span class="visual-code mono">${String(index + 1).padStart(2,"0")} / 05</span>
        <div class="visual-art" aria-hidden="true"><span></span><span></span><span></span></div>
      </div>
      <div class="project-body">
        <div class="project-title-row"><h3>${escapeHtml(project.title)}</h3><span class="project-kind">${escapeHtml(project.kind === "academic" ? t.academic : t.individual)}</span></div>
        <p>${escapeHtml(project[language])}</p>
        <div class="project-tags">${project.stack.map(tag => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
        ${note}
        <div class="project-links">${links.join("")}</div>
      </div>
    </article>`;
  }

  function labCard(project, index) {
    return `<article class="lab-card reveal" style="--card-index:${index}">
      <span class="lab-card-index mono">LAB_${String(index + 1).padStart(2,"0")}</span>
      <h4>${escapeHtml(project.title)}</h4>
      <p>${escapeHtml(project[language])}</p>
      <div class="project-tags">${project.stack.map(tag => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
      <a href="${escapeHtml(project.repo)}" target="_blank" rel="noopener noreferrer">${escapeHtml(translations[language].source)} <span>↗</span></a>
    </article>`;
  }

  function applyLanguage(nextLanguage) {
    language = nextLanguage === "es" ? "es" : "en";
    document.documentElement.lang = language;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = translations[language][element.dataset.i18n];
      if (value !== undefined) element.innerHTML = value;
    });
    document.querySelectorAll(".lang-option").forEach((element) => {
      element.classList.toggle("active", element.dataset.lang === language);
    });
    const projectGrid = document.getElementById("projectGrid");
    const labGrid = document.getElementById("labGrid");
    if (projectGrid) projectGrid.innerHTML = projects.featured.map(projectCard).join("");
    if (labGrid) labGrid.innerHTML = projects.lab.map(labCard).join("");
    try { localStorage.setItem("portfolio-language", language); } catch (_) {}
    observeReveals();
  }

  let revealObserver;
  function observeReveals() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(el => el.classList.add("is-visible"));
      return;
    }
    if (revealObserver) revealObserver.disconnect();
    revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {threshold:0.12});
    document.querySelectorAll(".reveal:not(.is-visible)").forEach(el => revealObserver.observe(el));
  }

  if (languageSwitch) {
    languageSwitch.addEventListener("click", () => applyLanguage(language === "en" ? "es" : "en"));
  }
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("is-open", !expanded);
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded","false");
    }));
  }

  const progress = document.getElementById("scrollProgress");
  if (progress) {
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.transform = `scaleX(${total > 0 ? window.scrollY / total : 0})`;
        ticking = false;
      });
    }, {passive:true});
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
  applyLanguage(language);
})();