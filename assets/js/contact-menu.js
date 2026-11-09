(() => {
  const root = document.getElementById("floatingContact");
  if (!root) return;
  const toggle = root.querySelector(".floating-contact-main");
  const menu = root.querySelector(".floating-contact-menu");
  if (!toggle || !menu) return;

  const label = root.querySelector("[data-contact-label]");
  const items = root.querySelectorAll("[data-contact-en][data-contact-es]");
  let closeTimer = 0;

  function syncLanguage() {
    const es = document.documentElement.lang === "es";
    if (label) label.textContent = es ? "Contáctame" : "Contact me";
    items.forEach(item => {
      item.textContent = es ? item.dataset.contactEs : item.dataset.contactEn;
      if (item.dataset.contactAriaEs) item.setAttribute("aria-label", es ? item.dataset.contactAriaEs : item.dataset.contactAriaEn);
    });
  }

  function openMenu() {
    window.clearTimeout(closeTimer);
    menu.hidden = false;
    menu.inert = false;
    toggle.setAttribute("aria-expanded", "true");
    requestAnimationFrame(() => menu.classList.add("is-open"));
  }

  function closeMenu(returnFocus = false) {
    if (toggle.getAttribute("aria-expanded") !== "true") return;
    toggle.setAttribute("aria-expanded", "false");
    menu.inert = true;
    menu.classList.remove("is-open");
    closeTimer = window.setTimeout(() => { menu.hidden = true; }, 360);
    if (returnFocus) toggle.focus();
  }

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    if (isOpen) closeMenu();
    else openMenu();
  });

  menu.addEventListener("click", event => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("click", event => {
    if (!root.contains(event.target)) closeMenu();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu(true);
  });

  const languageSwitch = document.getElementById("languageSwitch");
  const detailLanguage = document.getElementById("detailLanguage");
  languageSwitch?.addEventListener("click", () => requestAnimationFrame(syncLanguage));
  detailLanguage?.addEventListener("click", () => requestAnimationFrame(syncLanguage));
  syncLanguage();
})();
