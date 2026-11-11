(() => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const area = form.querySelector("#contactArea");
  const reply = form.querySelector('input[name="_replyto"]');
  const email = form.querySelector("#contactEmail");
  const contactMethod = form.querySelector("#contactMethod");
  const subject = form.querySelector('input[name="subject"]');
  const languageSwitch = document.getElementById("languageSwitch");
  const messages = {
    en: {
      sending: "Sending…",
      success: "Message submitted. Thank you. Your contact preference has been included.",
      error: "The message could not be submitted. Please try again or email me directly.",
      emailRequired: "Enter your email if you choose email contact.",
      contactRequired: "Choose how you would like to be contacted."
    },
    es: {
      sending: "Enviando…",
      success: "Mensaje enviado. Gracias. Se incluyó tu preferencia de contacto.",
      error: "No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme directamente.",
      emailRequired: "Escribe tu correo si eliges que te contacte por email.",
      contactRequired: "Indica cómo prefieres que te contacte."
    }
  };
  const getLang = () => document.documentElement.lang === "es" ? "es" : "en";
  const status = document.createElement("p");
  status.className = "contact-form-status";
  status.setAttribute("role", "status");
  status.setAttribute("aria-live", "polite");
  form.append(status);

  const syncContactFields = () => {
    const wantsEmail = contactMethod?.value === "Email";
    if (email) {
      email.required = wantsEmail;
      email.setAttribute("aria-required", String(wantsEmail));
    }
  };
  contactMethod?.addEventListener("change", syncContactFields);
  syncContactFields();

  form.addEventListener("submit", async event => {
    event.preventDefault();
    syncContactFields();
    if (!form.reportValidity()) return;

    if (reply) reply.value = email?.value.trim() || "";
    const submit = form.querySelector('button[type="submit"]');
    const label = submit?.querySelector("span");
    const prior = label?.textContent || "";
    if (submit) submit.disabled = true;
    if (label) label.textContent = messages[getLang()].sending;
    status.textContent = "";

    try {
      const response = await fetch("https://formsubmit.co/ajax/parkingsv1@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries()))
      });
      let result;
      try { result = await response.json(); }
      catch (_) { throw new Error("Invalid response from form service"); }

      if (!response.ok || result.success === false || result.success === "false") {
        throw new Error(result.message || "Submission rejected");
      }

      status.textContent = messages[getLang()].success;
      form.reset();
      if (reply) reply.value = "";
      syncContactFields();
    } catch (error) {
      status.textContent = messages[getLang()].error;
    } finally {
      if (submit) submit.disabled = false;
      if (label) label.textContent = prior;
    }
  });

  area?.addEventListener("change", () => {
    const value = area.value;
    if (value && subject && (!subject.value.trim() || subject.dataset.auto === "true")) {
      subject.value = getLang() === "es" ? value + " — consulta" : value + " inquiry";
      subject.dataset.auto = "true";
    }
  });
  subject?.addEventListener("input", () => { subject.dataset.auto = "false"; });

  languageSwitch?.addEventListener("click", () => {
    requestAnimationFrame(() => {
      status.textContent = "";
      form.querySelectorAll("label span").forEach(el => {
        const value = window.TRANSLATIONS?.[getLang()]?.[el.dataset.i18n];
        if (value) el.textContent = value;
      });
    });
  });
})();