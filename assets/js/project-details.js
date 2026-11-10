(() => {
  const id = new URLSearchParams(window.location.search).get("project");
  const projects = [...(window.PROJECTS?.featured || []), ...(window.PROJECTS?.lab || [])];
  const project = projects.find(item => item.id === id);
  const root = document.getElementById("detailMain");
  const languageButton = document.getElementById("detailLanguage");
  let language = (() => {
    try { return localStorage.getItem("portfolio-language") === "es" ? "es" : "en"; }
    catch (_) { return "en"; }
  })();

  const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  }[char]));

  const dossiers = {
    "natural-soap": {
      role:["Independent website project","Proyecto web individual"],
      contribution:["Independent design and implementation of the website structure, responsive styling and language switching.","Diseño e implementación individual de la estructura web, estilos adaptables y selector de idioma."],
      team:["Individual project","Proyecto individual"],
      technologies:["HTML5","CSS3","JavaScript","GitHub Pages"],
      timeline:[["Project context","A bilingual product website created to help a small natural-soap brand communicate its catalogue and educational information."],["Delivery record","No independently verified public delivery date is recorded."],["Scope","Static multi-page presentation, not an online store or order-management backend."]],
      timelineEs:[["Contexto","Sitio web bilingüe creado para ayudar a una pequeña marca de jabones naturales a comunicar su catálogo e información educativa."],["Registro de entrega","No hay una fecha pública de entrega verificada de forma independiente."],["Alcance","Presentación estática de varias páginas; no es una tienda en línea ni un backend de gestión de pedidos."]]
    },
    "parking-sv": {
      role:["Collaborative academic full-stack prototype","Prototipo full-stack académico y colaborativo"],
      contribution:["My work focused on the JavaScript / TypeScript workstream: Next.js implementation, frontend integration, Supabase connectivity and deployment validation. Jossybeth also worked in this stream. Four other students worked on a separate Python stream.","Mi trabajo se concentró en la línea JavaScript / TypeScript: implementación con Next.js, integración frontend, conexión con Supabase y validación del despliegue. Jossybeth también trabajó en esta línea. Otros cuatro estudiantes desarrollaron una línea Python separada."],
      team:["Six students across two technical workstreams","Seis estudiantes en dos líneas técnicas"],
      technologies:["Next.js","React","TypeScript","Supabase","PostgreSQL","Tailwind CSS","Vercel"],
      timeline:[["2025 · Expo de Logros ¡Supérate! ADOC","Presented in English as part of the student project exhibition; local press coverage was reported. The exact calendar date is not confirmed in the available project records."],["2026 · Expo Tech ¡Supérate! ADOC","The team qualified to participate and presented in English. The exact calendar date is not confirmed in the available project records. No award is claimed."],["Product status","Academic prototype with synthetic demonstration data. No commercial launch, real-time parking availability or confirmed reservations."]],
      timelineEs:[["2025 · Expo de Logros ¡Supérate! ADOC","Presentado en inglés como parte de la exposición de proyectos estudiantiles; se reportó cobertura de prensa local. La fecha exacta no está confirmada en los registros disponibles del proyecto."],["2026 · Expo Tech ¡Supérate! ADOC","El equipo clasificó para participar y presentó en inglés. La fecha exacta no está confirmada en los registros disponibles del proyecto. No se reclama ningún premio."],["Estado del producto","Prototipo académico con datos sintéticos de demostración. Sin lanzamiento comercial, disponibilidad de parqueos en tiempo real ni reservas confirmadas."]]
    },
    "radio-transmission": {
      role:["Web audio and infrastructure demonstration","Demostración de audio web e infraestructura"],
      contribution:["Work covered the browser player and technical exploration around Linux server administration, remote access, reverse proxy configuration and streaming software.","El trabajo abarcó el reproductor web y exploración técnica de administración de servidores Linux, acceso remoto, configuración de proxy inverso y software de streaming."],
      team:["Individual web demo; wider operational context involved external systems","Demo web individual; el contexto operativo amplio involucró sistemas externos"],
      technologies:["HTML5","CSS3","JavaScript","Ubuntu","SSH","Nginx","DuckDNS","Omnia"],
      timeline:[["Public player","The public player connects visitors to a radio stream."],["Monitoring demo","The separate monitoring demo is a sanitized static presentation with simulated data."],["Operational boundary","No production server address, credentials, private telemetry or sensitive configuration is published here."]],
      timelineEs:[["Reproductor público","El reproductor público conecta a los visitantes con una señal de radio."],["Demo de monitoreo","La demo de monitoreo separada es una presentación estática saneada con datos simulados."],["Límite operativo","Aquí no se publica dirección de servidor de producción, credenciales, telemetría privada ni configuración sensible."]]
    },
    "discomovil": {
      role:["Independent promotional website","Sitio promocional individual"],
      contribution:["Independent website design and implementation, including responsive sections and visual effects adapted to different screens.","Diseño e implementación individual del sitio, incluidas secciones adaptables y efectos visuales ajustados a distintas pantallas."],
      team:["Individual project","Proyecto individual"],
      technologies:["HTML5","CSS3","JavaScript","Intersection Observer"],
      timeline:[["Project context","Built for a real family business; no independently confirmed launch or event date is published in this portfolio."],["Scope","Promotional website. It is not an event-booking or payment platform."]],
      timelineEs:[["Contexto","Desarrollado para un negocio familiar real; este portafolio no publica una fecha de lanzamiento o evento confirmada de forma independiente."],["Alcance","Sitio promocional. No es una plataforma de reservas ni de pagos para eventos."]]
    },
    "identify": {
      role:["Collaborative educational AI prototype","Prototipo educativo colaborativo de IA"],
      contribution:["Collaborative frontend and model-integration work. The project is presented as a learning prototype, not a dependable identity-verification or access-control product.","Trabajo colaborativo de frontend e integración del modelo. El proyecto se presenta como prototipo de aprendizaje, no como producto fiable de verificación de identidad o control de acceso."],
      team:["Collaborative academic prototype; contributor roster not verified here","Prototipo académico colaborativo; lista de integrantes no verificada aquí"],
      technologies:["JavaScript","TensorFlow.js","Teachable Machine","Camera API"],
      timeline:[["Prototype scope","Browser camera access and client-side model inference are used for demonstration."],["Safety and accuracy boundary","Classification output is not proof of identity and must not be used for access decisions."],["Team and date","The portfolio does not currently hold a verified roster of contributors or a confirmed presentation date."]],
      timelineEs:[["Alcance del prototipo","Se utiliza acceso a la cámara del navegador e inferencia del modelo en el cliente con fines demostrativos."],["Límite de seguridad y precisión","El resultado de clasificación no demuestra identidad y no debe utilizarse para decisiones de acceso."],["Equipo y fecha","El portafolio no dispone actualmente de una lista verificada de colaboradores ni de una fecha confirmada de presentación."]]
    },
    "arch-keyboard-virtual-mouse": {
      role:["Linux accessibility and input utility","Utilidad Linux de accesibilidad y entrada"],
      contribution:["Individual technical utility: implementation, Linux integration and repository documentation.","Utilidad técnica individual: implementación, integración con Linux y documentación del repositorio."],
      team:["Individual project","Proyecto individual"],
      technologies:["Python","Linux","evdev","uinput","keyd","systemd"],
      timeline:[["Project status","Public source repository. No confirmed public release date or external event is recorded."],["Technical scope","Keyboard input mapping, virtual input devices and service-level integration."]],
      timelineEs:[["Estado","Repositorio de código público. No se registra una fecha de lanzamiento público ni un evento externo confirmado."],["Alcance técnico","Asignación de entradas del teclado, dispositivos de entrada virtuales e integración a nivel de servicio."]]
    },
    "warp-toggle-masque": {
      role:["Linux desktop utility","Utilidad para escritorio Linux"],
      contribution:["Individual implementation of shell automation and desktop integration, with emphasis on predictable state changes and safe restoration of network settings.","Implementación individual de automatización shell e integración con el escritorio, con énfasis en cambios de estado predecibles y restauración segura de ajustes de red."],
      team:["Individual project","Proyecto individual"],
      technologies:["Bash","KDE Plasma","WARP CLI","MASQUE"],
      timeline:[["Project status","Public utility repository. No confirmed release date or public event is recorded."],["Operational boundary","This is a local control utility, not a VPN service or a replacement for the official WARP client."]],
      timelineEs:[["Estado","Repositorio público de utilidad. No se registra una fecha de lanzamiento ni un evento público confirmado."],["Límite operativo","Es una utilidad de control local, no un servicio VPN ni un reemplazo del cliente oficial de WARP."]]
    },
    "car-dashboard": {
      role:["Collaborative academic frontend exercise","Ejercicio frontend académico y colaborativo"],
      contribution:["Collaborative classroom exercise. The portfolio does not claim sole authorship or a production-ready automotive interface.","Ejercicio colaborativo de clase. El portafolio no reclama autoría exclusiva ni presenta la interfaz como producto automotriz listo para producción."],
      team:["Collaborative classroom project; full contributor roster not confirmed","Proyecto colaborativo de clase; lista completa de integrantes no confirmada"],
      technologies:["HTML","CSS","JavaScript","DOM"],
      timeline:[["Project status","Academic exercise. No confirmed public event or exact delivery date is recorded."],["Scope","A learning interface simulation; not connected to a vehicle or real telemetry."]],
      timelineEs:[["Estado","Ejercicio académico. No se registra un evento público ni una fecha exacta de entrega confirmados."],["Alcance","Simulación de interfaz de aprendizaje; no está conectada a un vehículo ni a telemetría real."]]
    },
    "f1-team-profiles": {
      role:["Collaborative academic frontend exercise","Ejercicio frontend académico y colaborativo"],
      contribution:["Collaborative classroom frontend work. Team authorship is retained; this portfolio does not claim the project as an individual product.","Trabajo frontend colaborativo de clase. Se reconoce la autoría del equipo; este portafolio no presenta el proyecto como producto individual."],
      team:["Collaborative classroom project; full contributor roster not confirmed","Proyecto colaborativo de clase; lista completa de integrantes no confirmada"],
      technologies:["HTML","CSS","JavaScript"],
      timeline:[["Project status","Academic exercise. Statistics are sample content, not a live sports data feed."],["Dates and team","No confirmed exact delivery date or complete contributor roster is recorded here."]],
      timelineEs:[["Estado","Ejercicio académico. Las estadísticas son contenido de ejemplo, no un feed de datos deportivos en vivo."],["Fechas y equipo","Aquí no se registra una fecha exacta de entrega ni una lista completa de integrantes confirmadas."]]
    }
  };

  const dossier = dossiers[id];

  function render() {
    if (!project || !dossier) {
      root.innerHTML = '<p class="section-index">PROJECT NOT FOUND</p><h1>Project dossier unavailable.</h1><a class="button button-primary" href="index.html#work">Back to projects ↗</a>';
      return;
    }
    const es = language === "es";
    const get = (en, esValue) => es ? esValue : en;
    const audience = get(project.audienceEn || "People who may benefit from this project.", project.audienceEs || "Personas que pueden beneficiarse de este proyecto.");
    const purpose = get(project.motivationEn || "I worked on this project to explore a practical problem.", project.motivationEs || "Trabajé en este proyecto para explorar un problema práctico.");
    const timeline = es ? dossier.timelineEs : dossier.timeline;
    const labels = es ? {
      back:"← Volver a proyectos",overview:"Contexto",audience:"A quién ayuda",purpose:"Por qué lo trabajé",contribution:"Mi contribución",team:"Equipo",
      stack:"Tecnologías utilizadas",timelineTitle:"Hitos y fechas",demo:"Abrir demostración",repo:"Ver repositorio",extra:"Reproductor público",scope:"Alcance y transparencia",
      contact:"Contactarme"
    } : {
      back:"← Back to projects",overview:"Context",audience:"Who it helps",purpose:"Why I worked on it",contribution:"My contribution",team:"Team",
      stack:"Technologies used",timelineTitle:"Milestones & dates",demo:"Open live demo",repo:"View source repository",extra:"Public player",scope:"Scope & transparency",
      contact:"Contact me"
    };

    const demo = project.demo ? '<a class="button button-primary" href="'+escapeHTML(project.demo)+'" target="_blank" rel="noopener noreferrer">'+labels.demo+' ↗</a>' : "";
    const repo = project.repo ? '<a class="button button-ghost" href="'+escapeHTML(project.repo)+'" target="_blank" rel="noopener noreferrer">'+labels.repo+' ↗</a>' : "";
    const extra = project.extra ? '<a class="project-action action-demo" href="'+escapeHTML(project.extra)+'" target="_blank" rel="noopener noreferrer">'+labels.extra+' ↗</a>' : "";
    const number = String(projects.indexOf(project)+1).padStart(2,"0");

    root.innerHTML =
      '<a class="detail-back" href="index.html#work">'+labels.back+'</a>'+
      '<div class="detail-hero"><div>'+
        '<p class="detail-kicker">'+escapeHTML(project.category || (es ? "LABORATORIO TÉCNICO" : "TECHNICAL LAB"))+' / CASE '+number+'</p>'+
        '<h1>'+escapeHTML(project.title)+'</h1>'+
        '<p class="detail-role">'+escapeHTML(dossier.role[es ? 1 : 0])+'</p>'+
        '<p class="detail-lead">'+escapeHTML(project[es ? "es" : "en"])+'</p>'+
        '<div class="detail-actions">'+demo+repo+'</div>'+extra+
      '</div>'+
      '<div class="detail-art visual-'+escapeHTML(project.visual || "lab")+'"><img class="detail-preview" src="assets/images/projects/'+escapeHTML(project.id)+'.svg" alt="" decoding="async"><span class="detail-art-code">DOSSIER / '+escapeHTML(id.toUpperCase())+'</span></div></div>'+
      '<section class="detail-section"><p class="section-index">01 / '+labels.overview.toUpperCase()+'</p>'+
        '<div class="detail-story-grid">'+
          '<article><span class="detail-story-icon">◎</span><h2>'+labels.audience+'</h2><p>'+escapeHTML(audience)+'</p></article>'+
          '<article><span class="detail-story-icon">✳</span><h2>'+labels.purpose+'</h2><p>'+escapeHTML(purpose)+'</p></article>'+
          '<article><span class="detail-story-icon">⌁</span><h2>'+labels.contribution+'</h2><p>'+escapeHTML(dossier.contribution[es ? 1 : 0])+'</p></article>'+
          '<article><span class="detail-story-icon">◈</span><h2>'+labels.team+'</h2><p>'+escapeHTML(dossier.team[es ? 1 : 0])+'</p></article>'+
        '</div>'+
      '</section>'+
      '<section class="detail-section"><p class="section-index">02 / '+labels.stack.toUpperCase()+'</p><div class="detail-stack">'+dossier.technologies.map((tech,i)=>'<span><b>'+String(i+1).padStart(2,"0")+'</b>'+escapeHTML(tech)+'</span>').join("")+'</div></section>'+
      '<section class="detail-section"><p class="section-index">03 / '+labels.timelineTitle.toUpperCase()+'</p><div class="detail-timeline">'+timeline.map((entry,i)=>'<article><span>'+String(i+1).padStart(2,"0")+'</span><div><h3>'+escapeHTML(entry[0])+'</h3><p>'+escapeHTML(entry[1])+'</p></div></article>').join("")+'</div></section>'+
      '<p class="detail-disclaimer"><strong>'+labels.scope+':</strong> '+escapeHTML(project[es ? "es" : "en"])+'</p>';

    document.title = project.title + " — Jeremy Torres";
    document.documentElement.lang = language;
    languageButton?.querySelectorAll(".lang-option").forEach(option => option.classList.toggle("active", option.dataset.lang === language));
    if (languageButton) languageButton.setAttribute("aria-label", es ? "Cambiar idioma" : "Change language");
    const backLink = document.querySelector("[data-detail-i18n=backProjects]");
    if (backLink) backLink.textContent = labels.back.replace("← ","");
    const footerCopy = document.querySelector(".footer-inner > p");
    if (footerCopy) footerCopy.textContent = es ? "Hecho con intención. Diseñado para ser ligero." : "Built with intent. Kept lightweight.";
    const privacyLink = document.querySelector(".footer-links a");
    if (privacyLink) privacyLink.textContent = es ? "Privacidad y rendimiento" : "Privacy & performance";
  }

  function initDetailMotion(){
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
    if(window.gsap && window.ScrollTrigger){
      gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo(".detail-hero",{y:40,opacity:0},{y:0,opacity:1,duration:1.2,ease:"power3.out"});
      gsap.utils.toArray(".detail-section, .detail-story-grid article, .detail-timeline article").forEach((el,i)=>{
        gsap.fromTo(el,{y:38,opacity:0},{y:0,opacity:1,duration:1,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 88%",once:true},delay:(i%3)*.06});
      });
      gsap.fromTo(".detail-preview",{scale:1.1,yPercent:4},{scale:1,yPercent:-3,ease:"none",scrollTrigger:{trigger:".detail-art",start:"top bottom",end:"bottom top",scrub:1.7}});
      ScrollTrigger.refresh();
    }
  }

  languageButton?.addEventListener("click", () => {
    language = language === "en" ? "es" : "en";
    try { localStorage.setItem("portfolio-language", language); } catch (_) {}
    render();
  });
  render();
  initDetailMotion();
})();
