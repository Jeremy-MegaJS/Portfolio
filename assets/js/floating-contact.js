(() => {
  if (document.querySelector(".floating-contact")) return;

  const copy = {
    en: { button: "Contact me", email: "Email", github: "GitHub", form: "Contact form", cv: "View my CV", hint: "OPEN", arrow: "Go to next step and contact" },
    es: { button: "Contáctame", email: "Correo electrónico", github: "GitHub", form: "Formulario de contacto", cv: "Ver mi CV", hint: "ABRIR", arrow: "Ir al siguiente paso y contactar" }
  };
  const wrap = document.createElement("aside");
  wrap.className = "floating-contact";
  wrap.setAttribute("aria-label", "Quick contact");
  wrap.innerHTML = `
    <div class="floating-contact-menu" id="floatingContactMenu" role="group" aria-label="Contact options" hidden>
      <a href="https://github.com/Jeremy-MegaJS" target="_blank" rel="noopener noreferrer"><span class="contact-menu-icon" aria-hidden="true">GH</span><span data-contact-label="github">GitHub</span><span class="contact-menu-hint" aria-hidden="true">↗</span></a>
      <a href="mailto:jeremy.torres.1.2026@gmail.com"><span class="contact-menu-icon" aria-hidden="true">@</span><span data-contact-label="email">Email</span><span class="contact-menu-hint" aria-hidden="true">↗</span></a>
      <a href="index.html#contactFormAnchor"><span class="contact-menu-icon" aria-hidden="true">↗</span><span data-contact-label="form">Contact form</span><span class="contact-menu-hint" aria-hidden="true">↗</span></a>
      <a href="cv.html"><span class="contact-menu-icon" aria-hidden="true">CV</span><span data-contact-label="cv">View my CV</span><span class="contact-menu-hint" aria-hidden="true">↗</span></a>
    </div>
    <button class="floating-contact-main" type="button" aria-expanded="false" aria-controls="floatingContactMenu"><span class="floating-contact-symbol" aria-hidden="true">✦</span><span data-contact-label="button">Contact me</span><span class="contact-chevron" aria-hidden="true">⌄</span></button>`;
  document.body.appendChild(wrap);

  const mobileArrow = document.createElement("a");
  mobileArrow.className = "mobile-next-step";
  mobileArrow.href = "#contact";
  mobileArrow.setAttribute("aria-label", copy.en.arrow);
  mobileArrow.innerHTML = '<span aria-hidden="true">↘</span>';
  document.body.appendChild(mobileArrow);

  const button = wrap.querySelector(".floating-contact-main");
  const menu = wrap.querySelector(".floating-contact-menu");
  let closeTimer;
  const updateLanguage = () => {
    const language = document.documentElement.lang === "es" ? "es" : "en";
    wrap.querySelectorAll("[data-contact-label]").forEach(node => {
      const key = node.dataset.contactLabel;
      node.textContent = copy[language][key] || node.textContent;
    });
    wrap.setAttribute("aria-label", language === "es" ? "Contacto rápido" : "Quick contact");
    menu.setAttribute("aria-label", language === "es" ? "Opciones de contacto" : "Contact options");
    mobileArrow.setAttribute("aria-label", copy[language].arrow);
  };
  const openMenu = () => {
    window.clearTimeout(closeTimer);
    menu.hidden = false;
    window.requestAnimationFrame(() => menu.classList.add("is-open"));
    button.setAttribute("aria-expanded", "true");
  };
  const closeMenu = () => {
    menu.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
    closeTimer = window.setTimeout(() => { menu.hidden = true; }, 360);
  };
  button.addEventListener("click", () => {
    button.getAttribute("aria-expanded") === "true" ? closeMenu() : openMenu();
  });
  document.addEventListener("click", event => {
    if (!wrap.contains(event.target) && button.getAttribute("aria-expanded") === "true") closeMenu();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
      closeMenu();
      button.focus();
    }
  });
  menu.querySelectorAll("a").forEach(anchor => anchor.addEventListener("click", closeMenu));
  document.querySelectorAll("#pageLanguage, #languageSwitch").forEach(control => control.addEventListener("click", updateLanguage));
  updateLanguage();
})();