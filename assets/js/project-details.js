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
      timeline:[["Project context","Students developing a natural-soap venture asked me to create a website to present their products and explain their catalogue."],["Scope","Bilingual static multi-page presentation; not an online store or order-management backend."]],
      timelineEs:[["Contexto","Unas estudiantes que desarrollaban un emprendimiento de jabones naturales me pidieron crear un sitio para presentar sus productos y catálogo."],["Alcance","Presentación estática bilingüe de varias páginas; no es una tienda en línea ni un backend de gestión de pedidos."]]
    },
    "parking-sv": {
      role:["Collaborative academic full-stack prototype","Prototipo full-stack académico y colaborativo"],
      contribution:["My work focused on the JavaScript / TypeScript workstream: Next.js implementation, frontend integration, Supabase connectivity and deployment validation. Jossybeth also worked in this stream. Four other students worked on a separate Python stream.","Mi trabajo se concentró en la línea JavaScript / TypeScript: implementación con Next.js, integración frontend, conexión con Supabase y validación del despliegue. Jossybeth también trabajó en esta línea. Otros cuatro estudiantes desarrollaron una línea Python separada."],
      team:["Six students across two technical workstreams","Seis estudiantes en dos líneas técnicas"],
      technologies:["Next.js","React","TypeScript","Supabase","PostgreSQL","Tailwind CSS","Vercel"],
      timeline:[["2025 · Expo de Logros ¡Supérate! ADOC","A separate student exhibition milestone: our team presented ParkingSV in English, sharing the project with visitors and evaluators. Local press coverage was also reported."],["2026 · Expo Tech ¡Supérate! ADOC","A distinct follow-up event the next year: the team qualified for Expo Tech and presented ParkingSV in English. This is a participation milestone, not an award claim."],["Product status","Academic prototype with synthetic demonstration data. No commercial launch, real-time parking availability or confirmed reservations."]],
      timelineEs:[["2025 · Expo de Logros ¡Supérate! ADOC","Hito independiente de exposición estudiantil: el equipo presentó ParkingSV en inglés ante visitantes y evaluadores. También se reportó cobertura de prensa local."],["2026 · Expo Tech ¡Supérate! ADOC","Evento distinto realizado al año siguiente: el equipo clasificó para Expo Tech y presentó ParkingSV en inglés. Es un hito de participación, no una afirmación de premio."],["Estado del producto","Prototipo académico con datos sintéticos de demostración. Sin lanzamiento comercial, disponibilidad de parqueos en tiempo real ni reservas confirmadas."]]
    },
    "radio-transmission": {
      role:["Web audio and infrastructure demonstration","Demostración de audio web e infraestructura"],
      contribution:["Work covered the browser player and technical exploration around Linux server administration, remote access, reverse proxy configuration and streaming software.","El trabajo abarcó el reproductor web y exploración técnica de administración de servidores Linux, acceso remoto, configuración de proxy inverso y software de streaming."],
      team:["Individual web demo; wider operational context involved external systems","Demo web individual; el contexto operativo amplio involucró sistemas externos"],
      technologies:["HTML5","CSS3","JavaScript","Ubuntu","SSH","Nginx","DuckDNS","Omnia"],
      timeline:[["Why the church requested help","An evangelical church asked me to improve access to its online radio stream because professional retransmission fees had become difficult to sustain and previous web players were not listener-friendly."],["Public player","I helped provide a simpler web experience for listeners to access the church’s stream."],["Separate monitoring demo","The public dashboard is a sanitized demonstration with simulated metrics. The production radio and monitoring endpoints, infrastructure and private telemetry remain private and are not published here."]],
      timelineEs:[["Por qué la iglesia pidió ayuda","Una iglesia evangélica me pidió mejorar el acceso a su transmisión de radio por internet, porque las tarifas de retransmisión profesional se habían vuelto difíciles de sostener y los reproductores web anteriores no eran amigables para los oyentes."],["Reproductor público","Ayudé a ofrecer una experiencia web más sencilla para que los oyentes accedieran a la señal de la iglesia."],["Demo de monitoreo separada","El panel público es una demostración saneada con métricas simuladas. Los endpoints de producción de la radio y el monitoreo, la infraestructura y la telemetría privada no se publican."]]
    },
    "discomovil": {
      role:["Independent promotional website","Sitio promocional individual"],
      contribution:["Independent website design and implementation, including responsive sections and visual effects adapted to different screens.","Diseño e implementación individual del sitio, incluidas secciones adaptables y efectos visuales ajustados a distintas pantallas."],
      team:["Individual project","Proyecto individual"],
      technologies:["HTML5","CSS3","JavaScript","Intersection Observer"],
      timeline:[["Project context","Built for my father’s family business, Discomóvil Extreme Galaxy, to make its DJ and event services easier to share with potential customers."],["Scope","Promotional website for a real family business; it is not an event-booking or payment platform."]],
      timelineEs:[["Contexto","Desarrollado para el negocio familiar de mi padre, Discomóvil Extreme Galaxy, para facilitar que sus servicios de DJ y eventos se compartan con posibles clientes."],["Alcance","Sitio promocional para un negocio familiar real; no es una plataforma de reservas ni de pagos para eventos."]]
    },
    "identify": {
      role:["Collaborative educational AI prototype","Prototipo educativo colaborativo de IA"],
      contribution:["Collaborative frontend and model-integration work. The project is presented as a learning prototype, not a dependable identity-verification or access-control product.","Trabajo colaborativo de frontend e integración del modelo. El proyecto se presenta como prototipo de aprendizaje, no como producto fiable de verificación de identidad o control de acceso."],
      team:["Collaborative academic prototype","Prototipo académico colaborativo"],
      technologies:["JavaScript","TensorFlow.js","Teachable Machine","Camera API"],
      timeline:[["Prototype scope","Browser camera access and client-side model inference are used for demonstration."],["Safety and accuracy boundary","Classification output is not proof of identity and must not be used for access decisions."],],
      timelineEs:[["Alcance del prototipo","Se utiliza acceso a la cámara del navegador e inferencia del modelo en el cliente con fines demostrativos."],["Límite de seguridad y precisión","El resultado de clasificación no demuestra identidad y no debe utilizarse para decisiones de acceso."],]
    },
    "arch-keyboard-virtual-mouse": {
      role:["Linux accessibility and input utility","Utilidad Linux de accesibilidad y entrada"],
      contribution:["Individual technical utility: implementation, Linux integration and repository documentation.","Utilidad técnica individual: implementación, integración con Linux y documentación del repositorio."],
      team:["Individual project","Proyecto individual"],
      technologies:["Python","Linux","evdev","uinput","keyd","systemd"],
      timeline:[["Why I built it","A personal Arch Linux utility adapted to my laptop and preferred workflow, making pointer actions available through keyboard shortcuts when a mouse is inconvenient."],["Who may reuse it","The documented approach can also help other early Arch Linux users customize input and desktop comfort."]],
      timelineEs:[["Por qué la desarrollé","Utilidad personal para Arch Linux, adaptada a mi laptop y a mi flujo de trabajo, que permite ejecutar acciones del puntero con atajos de teclado cuando usar un mouse resulta incómodo."],["A quién puede servirle","El enfoque documentado también puede ayudar a otros usuarios que comienzan con Arch Linux a personalizar la entrada y la comodidad del escritorio."]]
    },
    "warp-toggle-masque": {
      role:["Linux desktop utility","Utilidad para escritorio Linux"],
      contribution:["Individual implementation of shell automation and desktop integration, with emphasis on predictable state changes and safe restoration of network settings.","Implementación individual de automatización shell e integración con el escritorio, con énfasis en cambios de estado predecibles y restauración segura de ajustes de red."],
      team:["Individual project","Proyecto individual"],
      technologies:["Bash","KDE Plasma","WARP CLI","MASQUE"],
      timeline:[["Why I built it","A personal Arch Linux/KDE utility adapted to my laptop and network preferences, making the official WARP client easier to connect, disconnect and inspect."],["Operational boundary","It is a local convenience and control tool for my desktop workflow, not a VPN service or a replacement for the official WARP client."]],
      timelineEs:[["Por qué la desarrollé","Utilidad personal para Arch Linux/KDE, adaptada a mi laptop y preferencias de red, que facilita conectar, desconectar y consultar el cliente oficial de WARP."],["Límite operativo","Es una herramienta local de comodidad y control para mi flujo de escritorio, no un servicio VPN ni un reemplazo del cliente oficial de WARP."]]
    },
    "car-dashboard": {
      role:["Collaborative academic frontend exercise","Ejercicio frontend académico y colaborativo"],
      contribution:["Collaborative classroom exercise. The portfolio does not claim sole authorship or a production-ready automotive interface.","Ejercicio colaborativo de clase. El portafolio no reclama autoría exclusiva ni presenta la interfaz como producto automotriz listo para producción."],
      team:["Collaborative classroom project","Proyecto colaborativo de clase"],
      technologies:["HTML","CSS","JavaScript","DOM"],
      timeline:[["Project status","Academic interface exercise focused on organizing vehicle information."],["Scope","A learning interface simulation; not connected to a vehicle or real telemetry."]],
      timelineEs:[["Estado","Ejercicio académico de interfaz enfocado en organizar información de un vehículo."],["Alcance","Simulación de interfaz de aprendizaje; no está conectada a un vehículo ni a telemetría real."]]
    },
    "f1-team-profiles": {
      role:["Collaborative academic frontend exercise","Ejercicio frontend académico y colaborativo"],
      contribution:["Collaborative classroom frontend work. Team authorship is retained; this portfolio does not claim the project as an individual product.","Trabajo frontend colaborativo de clase. Se reconoce la autoría del equipo; este portafolio no presenta el proyecto como producto individual."],
      team:["Collaborative classroom project","Proyecto colaborativo de clase"],
      technologies:["HTML","CSS","JavaScript"],
      timeline:[["Project status","Academic exercise using sample Formula 1 team information and statistics."]],
      timelineEs:[["Estado","Ejercicio académico con información y estadísticas de muestra de equipos de Fórmula 1."]]
    }
  };

  const dossier = dossiers[id];


  async function loadProjectGallery(projectId, openText){
    const grid=document.getElementById("projectGalleryGrid");
    if(!grid)return;
    try{
      const response=await fetch("assets/images/project-galleries/"+encodeURIComponent(projectId)+"/gallery.json");
      if(!response.ok)throw new Error("Gallery manifest unavailable");
      const manifest=await response.json();
      const images=Array.isArray(manifest.images)?manifest.images:[];
      if(!images.length){grid.closest('#projectGallery')?.remove();return}
      grid.innerHTML=images.map((item,index)=>{
        const src="assets/images/project-galleries/"+encodeURIComponent(projectId)+"/"+encodeURIComponent(item.src||"");
        const alt=escapeHTML(item.alt||"Project image "+(index+1));
        const caption=escapeHTML(item.caption||"");
        return '<figure class="project-gallery-item"><a href="'+src+'" target="_blank" rel="noopener noreferrer" aria-label="'+escapeHTML(openText)+': '+alt+'"><img src="'+src+'" alt="'+alt+'" loading="lazy" decoding="async"></a>'+(caption?'<figcaption>'+caption+'</figcaption>':'')+'</figure>';
      }).join("");
    }catch(error){grid.closest('#projectGallery')?.remove()}
  }

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
      back:"← Volver a proyectos",overview:"Contexto",audience:"A quién ayuda",purpose:"Por qué lo trabajé",contribution:"Mi contribución",team:"Equipo",problem:"Problema y contexto",process:"Proceso",solution:"Solución",result:"Resultado y estado",
      stack:"Tecnologías utilizadas",timelineTitle:"Hitos y fechas",demo:"Abrir demostración",repo:"Ver repositorio",extra:"Reproductor público",scope:"Alcance y transparencia",
      contact:"Contactarme",gallery:"Galería del proyecto"
    } : {
      back:"← Back to projects",overview:"Context",audience:"Who it helps",purpose:"Why I worked on it",contribution:"My contribution",team:"Team",problem:"Problem & context",process:"Process",solution:"Solution",result:"Result & status",
      stack:"Technologies used",timelineTitle:"Milestones & dates",demo:"Open live demo",repo:"View source repository",extra:"Public player",scope:"Scope & transparency",
      contact:"Contact me",gallery:"Project gallery"
    };

    const demo = project.demo ? '<a class="button button-primary" href="'+escapeHTML(project.demo)+'" target="_blank" rel="noopener noreferrer">'+labels.demo+' ↗</a>' : "";
    const repo = project.repo ? '<a class="button button-ghost" href="'+escapeHTML(project.repo)+'" target="_blank" rel="noopener noreferrer">'+labels.repo+' ↗</a>' : "";
    const extra = project.extra ? '<a class="project-action action-demo" href="'+escapeHTML(project.extra)+'" target="_blank" rel="noopener noreferrer">'+labels.extra+' ↗</a>' : "";
    const number = String(projects.indexOf(project)+1).padStart(2,"0");
    const gallerySection = '<section class="detail-section" id="projectGallery"><p class="section-index">04 / '+labels.gallery.toUpperCase()+'</p><div class="project-gallery-grid" id="projectGalleryGrid"></div></section>';


    root.innerHTML =
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
      gallerySection;

    loadProjectGallery(project.id, es ? "Abrir imagen ampliada" : "Open full-size image");
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

  function initDetailMotion(){ /* Intentionally static: no parallax or animated background. */ }

  languageButton?.addEventListener("click", () => {
    language = language === "en" ? "es" : "en";
    try { localStorage.setItem("portfolio-language", language); } catch (_) {}
    render();
  });
  render();
  initDetailMotion();
})();
