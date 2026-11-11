(() => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const area = form.querySelector("#contactArea");
  const reply = form.querySelector('input[name="_replyto"]');
  const email = form.querySelector('input[name="email"]');
  const subject = form.querySelector('input[name="subject"]');
  const languageSwitch = document.getElementById("languageSwitch");
  const messages = {
    en: {
      sending: "Sending…",
      success: "Message submitted successfully. Thank you. If you included contact details, I can reply to you.",
      error: "The message could not be submitted. Please try again or email me directly.",
      required: "Please complete the required fields."
    },
    es: {
      sending: "Enviando…",
      success: "Mensaje enviado correctamente. Gracias. Si incluiste datos de contacto, podré responderte.",
      error: "No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme directamente.",
      required: "Completa los campos obligatorios."
    }
  };
  const getLang = () => document.documentElement.lang === "es" ? "es" : "en";
  const status = document.createElement("p");
  status.className = "contact-form-status";
  status.setAttribute("role", "status");
  status.setAttribute("aria-live", "polite");
  form.append(status);

  form.addEventListener("submit", async event => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    // Email is optional. Without it, the submission is received without a reply address.
    if (reply) reply.value = email?.value.trim() || "";

    const submit = form.querySelector('button[type="submit"]');
    const label = submit?.querySelector("span");
    const prior = label?.textContent || "";
    if (submit) submit.disabled = true;
    if (label) label.textContent = messages[getLang()].sending;
    status.textContent = "";

    try {
      const response = await fetch("https://formsubmit.co/ajax/jeremy.torres.1.2026@gmail.com", {
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
      subject.value = value + " inquiry";
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