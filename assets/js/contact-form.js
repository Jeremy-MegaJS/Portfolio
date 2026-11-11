(() => {
  const form=document.getElementById("contactForm");
  if(!form)return;
  const area=form.querySelector("#contactArea");
  const reply=form.querySelector('input[name="_replyto"]');
  const email=form.querySelector('input[name="email"]');
  const subject=form.querySelector('input[name="subject"]');
  const languageSwitch=document.getElementById("languageSwitch");
  const messages={
    en:{sending:"Sending…",success:"Message sent. Thank you — I’ll review your inquiry and reply by email.",error:"The message could not be sent. Please try again or email me directly.",required:"Please complete all required fields.",},
    es:{sending:"Enviando…",success:"Mensaje enviado. Gracias; revisaré tu consulta y responderé por correo.",error:"No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme directamente.",required:"Completa todos los campos obligatorios."}
  };
  const getLang=()=>document.documentElement.lang==="es"?"es":"en";
  const status=document.createElement("p");
  status.className="contact-form-status";
  status.setAttribute("role","status");
  status.setAttribute("aria-live","polite");
  form.append(status);
  form.addEventListener("submit",async event=>{
    event.preventDefault();
    if(!form.reportValidity())return;
    reply.value=email.value.trim();
    const submit=form.querySelector('button[type="submit"]');
    const label=submit.querySelector("span");
    const prior=label.textContent;
    submit.disabled=true;
    label.textContent=messages[getLang()].sending;
    status.textContent="";
    try{
      const response=await fetch("https://formsubmit.co/ajax/jeremy.torres.1.2026@gmail.com",{
        method:"POST",
        headers:{"Content-Type":"application/json","Accept":"application/json"},
        body:JSON.stringify(Object.fromEntries(new FormData(form).entries()))
      });
      const result=await response.json();
      if(!response.ok||result.success==="false"||result.success===false)throw new Error("Submission rejected");
      status.textContent=messages[getLang()].success;
      form.reset();
    }catch(error){
      status.textContent=messages[getLang()].error;
    }finally{
      submit.disabled=false;
      label.textContent=prior;
    }
  });
  area?.addEventListener("change",()=>{
    const value=area.value;
    if(value && (!subject.value.trim()||subject.dataset.auto==="true")){
      subject.value=value+" inquiry";
      subject.dataset.auto="true";
    }
  });
  subject?.addEventListener("input",()=>{subject.dataset.auto="false"});
  languageSwitch?.addEventListener("click",()=>{
    requestAnimationFrame(()=>{
      const es=getLang()==="es";
      status.textContent="";
      const labels=form.querySelectorAll("label span");
      labels.forEach(el=>{
        const key=el.dataset.i18n;
        const value=window.TRANSLATIONS?.[getLang()]?.[key];
        if(value)el.textContent=value;
      });
    });
  });
})();