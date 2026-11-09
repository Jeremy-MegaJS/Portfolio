(() => {
  const params = new URLSearchParams(location.search);
  const id = params.get("project");
  const project = [...(window.PROJECTS?.featured || []), ...(window.PROJECTS?.lab || [])].find(item => item.id === id);
  const root = document.getElementById("detailMain");
  const switcher = document.getElementById("detailLanguage");
  let lang = (() => { try { return localStorage.getItem("portfolio-language") === "es" ? "es" : "en"; } catch (_) { return "en"; } })();
  const esc = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const data = {
    "natural-soap": {
      role:["Independent website project","Proyecto web individual"],
      summary:["A bilingual product and brand website built to present a catalogue and educational content through a responsive, static multi-page experience.","Sitio bilingüe de productos y marca, creado para presentar un catálogo y contenido educativo mediante una experiencia estática, adaptable y de varias páginas."],
      contribution:["Independent design and implementation of the website structure, responsive styling and language switching.","Diseño e implementación individual de la estructura web, estilos adaptables y selector de idioma."],
      milestones:[["Project delivery","No independently verified public delivery date is recorded."],["Scope","Static multi-page product presentation; not an online store or order-management backend."]],
      milestonesEs:[["Entrega del proyecto","No hay una fecha pública de entrega verificada de forma independiente."],["Alcance","Presentación estática de productos en varias páginas; no es una tienda en línea ni un backend de gestión de pedidos."]],
      team:["Individual project","Proyecto individual"], languages:["HTML5","CSS3","JavaScript"], events:[]
    },
    "parking-sv": {
      role:["Collaborative academic full-stack prototype","Prototipo full-stack académico y colaborativo"],
      summary:["A bilingual parking-discovery concept with customer and owner journeys, searchable listings and a Supabase-backed data layer. The deployed experience uses demonstration data and is not a live reservation marketplace.","Concepto bilingüe para descubrir parqueos, con recorridos de clientes y propietarios, publicaciones consultables y una capa de datos conectada a Supabase. La versión desplegada utiliza datos demostrativos y no es un marketplace de reservas activo."],
      contribution:["My work focused on the JavaScript / TypeScript workstream: Next.js implementation, frontend integration, Supabase connectivity and deployment validation. Jossybeth also worked in this stream. Four other students worked on a separate Python stream.","Mi trabajo se concentró en la línea JavaScript / TypeScript: implementación con Next.js, integración frontend, conexión con Supabase y validación del despliegue. Jossybeth también trabajó en esta línea. Otros cuatro estudiantes desarrollaron una línea Python separada."],
      milestones:[["2025 · Expo de Logros ¡Supérate! ADOC","Presented in English as part of the student project exhibition; local press coverage was reported. The exact calendar date is not confirmed in the available project records."],["2026 · Expo Tech ¡Supérate! ADOC","The team qualified to participate and presented in English. The exact calendar date is not confirmed in the available project records. No award is claimed."],["Product status","Academic prototype. No commercial launch, real parking availability or confirmed reservations."]],
      milestonesEs:[["2025 · Expo de Logros ¡Supérate! ADOC","Presentado en inglés como parte de la exposición de proyectos estudiantiles; se reportó cobertura de prensa local. La fecha exacta no está confirmada en los registros disponibles del proyecto."],["2026 · Expo Tech ¡Supérate! ADOC","El equipo clasificó para participar y presentó en inglés. La fecha exacta no está confirmada en los registros disponibles del proyecto. No se reclama ningún premio."],["Estado del producto","Prototipo académico. Sin lanzamiento comercial, disponibilidad real de parqueos ni reservas confirmadas."]],
      team:["Six students across two technical workstreams","Seis estudiantes en dos líneas técnicas"], languages:["JavaScript","TypeScript","Next.js","React","Supabase","PostgreSQL","Tailwind CSS"], events:["Expo de Logros ADOC 2025","Expo Tech ADOC 2026"]
    },
    "radio-transmission": {
      role:["Web audio and infrastructure demonstration","Demostración de audio web e infraestructura"],
      summary:["A public-stream web player and a separate monitoring-dashboard demonstration. The dashboard intentionally uses simulated metrics and is not connected to production telemetry.","Reproductor web conectado a una señal pública y una demostración independiente de panel de monitoreo. El panel utiliza métricas simuladas y no está conectado a telemetría de producción."],
      contribution:["Work covered the browser player and technical exploration around Linux server administration, remote access, reverse proxy configuration and streaming software.","El trabajo abarcó el reproductor web y exploración técnica de administración de servidores Linux, acceso remoto, configuración de proxy inverso y software de streaming."],
      milestones:[["Public demo","The monitoring demo is a sanitized static presentation with simulated data."],["Infrastructure scope","Ubuntu, SSH, Nginx, DuckDNS and Omnia were part of the broader technical environment."],["Operational boundary","No production server address, credentials, private telemetry or sensitive configuration is published here."]],
      milestonesEs:[["Demo pública","La demo de monitoreo es una presentación estática saneada con datos simulados."],["Alcance de infraestructura","Ubuntu, SSH, Nginx, DuckDNS y Omnia formaron parte del entorno técnico general."],["Límite operativo","Aquí no se publica dirección de servidor de producción, credenciales, telemetría privada ni configuración sensible."]],
      team:["Individual web demo; wider operational context involved external systems","Demo web individual; el contexto operativo amplio involucró sistemas externos"], languages:["HTML5","CSS3","JavaScript","Ubuntu","SSH","Nginx","Omnia"], events:[]
    },
    "discomovil": {
      role:["Independent promotional website","Sitio promocional individual"],
      summary:["A responsive promotional website for a family-owned DJ and event-services business, designed to communicate services and create a distinctive visual identity.","Sitio promocional adaptable para un negocio familiar de DJ y servicios para eventos, diseñado para comunicar servicios y construir una identidad visual distintiva."],
      contribution:["Independent website design and implementation, including responsive sections and visual effects adapted to different screens.","Diseño e implementación individual del sitio, incluidas secciones adaptables y efectos visuales ajustados a distintas pantallas."],
      milestones:[["Project context","Built for a real family business; no independently confirmed launch or event date is published in this portfolio."],["Scope","Promotional website. It is not an event-booking or payment platform."]],
      milestonesEs:[["Contexto","Desarrollado para un negocio familiar real; este portafolio no publica una fecha de lanzamiento o evento confirmada de forma independiente."],["Alcance","Sitio promocional. No es una plataforma de reservas ni de pagos para eventos."]],
      team:["Individual project","Proyecto individual"], languages:["HTML5","CSS3","JavaScript","Intersection Observer"], events:[]
    },
    "identify": {
      role:["Collaborative educational AI prototype","Prototipo educativo colaborativo de IA"],
      summary:["An educational image-classification experiment combining a Teachable Machine model and TensorFlow.js to compare camera frames with trained classes.","Experimento educativo de clasificación de imágenes que combina un modelo de Teachable Machine y TensorFlow.js para comparar fotogramas de cámara con clases entrenadas."],
      contribution:["Collaborative frontend and model-integration work. The project is presented as a learning prototype, not a dependable identity-verification or access-control product.","Trabajo colaborativo de frontend e integración del modelo. El proyecto se presenta como prototipo de aprendizaje, no como producto fiable de verificación de identidad o control de acceso."],
      milestones:[["Prototype scope","Browser camera access and client-side model inference are used for demonstration."],["Safety and accuracy boundary","Classification output is not proof of identity and must not be used for access decisions."],["Team and date","The portfolio does not currently hold a verified roster of contributors or a confirmed presentation date."]],
      milestonesEs:[["Alcance del prototipo","Se utiliza acceso a la cámara del navegador e inferencia del modelo en el cliente con fines demostrativos."],["Límite de seguridad y precisión","El resultado de clasificación no demuestra identidad y no debe utilizarse para decisiones de acceso."],["Equipo y fecha","El portafolio no dispone actualmente de una lista verificada de colaboradores ni de una fecha confirmada de presentación."]],
      team:["Collaborative academic prototype; contributor roster not verified here","Prototipo académico colaborativo; lista de integrantes no verificada aquí"], languages:["JavaScript","TensorFlow.js","Teachable Machine","Camera API"], events:[]
    }

    "arch-keyboard-virtual-mouse": {
      role:["Linux accessibility and input utility","Utilidad Linux de accesibilidad y entrada"],
      summary:["A Linux utility that maps keyboard input to pointer movement, clicks and scrolling. It explores lower-level input handling through evdev and uinput, with keyd and systemd integration.","Utilidad para Linux que asigna entradas del teclado al movimiento del puntero, clics y desplazamiento. Explora manejo de entrada de bajo nivel mediante evdev y uinput, con integración de keyd y systemd."],
      contribution:["Individual technical utility: implementation, Linux integration and repository documentation.","Utilidad técnica individual: implementación, integración con Linux y documentación del repositorio."],
      milestones:[["Project status","Public source repository. No confirmed public release date or external event is recorded."],["Technical scope","Keyboard input mapping, virtual input devices and service-level integration."]],
      milestonesEs:[["Estado","Repositorio de código público. No se registra una fecha de lanzamiento público ni un evento externo confirmado."],["Alcance técnico","Asignación de entradas del teclado, dispositivos de entrada virtuales e integración a nivel de servicio."]],
      team:["Individual project","Proyecto individual"],languages:["Python","Linux","evdev","uinput","keyd","systemd"],events:[]
    },
    "warp-toggle-masque": {
      role:["Linux desktop utility","Utilidad para escritorio Linux"],
      summary:["A KDE control layer for the official Cloudflare WARP client. The utility focuses on explicit connect and disconnect actions, status checks and connectivity verification.","Capa de control para KDE sobre el cliente oficial de Cloudflare WARP. La utilidad se enfoca en acciones explícitas de conexión y desconexión, comprobación de estado y verificación de conectividad."],
      contribution:["Individual implementation of shell automation and desktop integration, with emphasis on predictable state changes and safe restoration of network settings.","Implementación individual de automatización shell e integración con el escritorio, con énfasis en cambios de estado predecibles y restauración segura de ajustes de red."],
      milestones:[["Project status","Public utility repository. No confirmed release date or public event is recorded."],["Operational boundary","This is a local control utility, not a VPN service or a replacement for the official WARP client."]],
      milestonesEs:[["Estado","Repositorio público de utilidad. No se registra una fecha de lanzamiento ni un evento público confirmado."],["Límite operativo","Es una utilidad de control local, no un servicio VPN ni un reemplazo del cliente oficial de WARP."]],
      team:["Individual project","Proyecto individual"],languages:["Bash","KDE Plasma","WARP CLI","MASQUE"],events:[]
    },
    "car-dashboard": {
      role:["Collaborative academic frontend exercise","Ejercicio frontend académico y colaborativo"],
      summary:["A simplified vehicle dashboard exercise built to practice HTML structure, CSS presentation and JavaScript-driven DOM interactions.","Ejercicio de tablero de vehículo simplificado, desarrollado para practicar estructura HTML, presentación CSS e interacciones DOM con JavaScript."],
      contribution:["Collaborative classroom exercise. The portfolio does not claim sole authorship or a production-ready automotive interface.","Ejercicio colaborativo de clase. El portafolio no reclama autoría exclusiva ni presenta la interfaz como producto automotriz listo para producción."],
      milestones:[["Project status","Academic exercise. No confirmed public event or exact delivery date is recorded."],["Scope","A learning interface simulation; not connected to a vehicle or real telemetry."]],
      milestonesEs:[["Estado","Ejercicio académico. No se registra un evento público ni una fecha exacta de entrega confirmados."],["Alcance","Simulación de interfaz de aprendizaje; no está conectada a un vehículo ni a telemetría real."]],
      team:["Collaborative classroom project; full contributor roster not confirmed","Proyecto colaborativo de clase; lista completa de integrantes no confirmada"],languages:["HTML","CSS","JavaScript","DOM"],events:[]
    },
    "f1-team-profiles": {
      role:["Collaborative academic frontend exercise","Ejercicio frontend académico y colaborativo"],
      summary:["A frontend exercise presenting Formula 1 team profile cards, responsive layout and sample statistics. It focuses on organizing content into reusable visual components.","Ejercicio frontend que presenta tarjetas de perfiles de equipos de Fórmula 1, diseño adaptable y estadísticas de ejemplo. Se enfoca en organizar contenido mediante componentes visuales reutilizables."],
      contribution:["Collaborative classroom frontend work. Team authorship is retained; this portfolio does not claim the project as an individual product.","Trabajo frontend colaborativo de clase. Se reconoce la autoría del equipo; este portafolio no presenta el proyecto como producto individual."],
      milestones:[["Project status","Academic exercise. Statistics are sample content, not a live sports data feed."],["Dates and team","No confirmed exact delivery date or complete contributor roster is recorded here."]],
      milestonesEs:[["Estado","Ejercicio académico. Las estadísticas son contenido de ejemplo, no un feed de datos deportivos en vivo."],["Fechas y equipo","Aquí no se registra una fecha exacta de entrega ni una lista completa de integrantes confirmadas."]],
      team:["Collaborative classroom project; full contributor roster not confirmed","Proyecto colaborativo de clase; lista completa de integrantes no confirmada"],languages:["HTML","CSS","JavaScript"],events:[]
    },
  };
  const copy = data[id];
  function render() {
    if (!project || !copy) {
      root.innerHTML = '<p class="section-index">PROJECT NOT FOUND</p><h1>Project dossier unavailable.</h1><a class="button button-primary" href="index.html#work">Back to projects ↗</a>';
      return;
    }
    const es = lang === "es";
    const milestones = es ? copy.milestonesEs : copy.milestones;
    const labels = es ? {back:"← Volver a proyectos",overview:"Resumen",role:"Tipo de proyecto",work:"Mi contribución",team:"Equipo",stack:"Tecnologías utilizadas",timeline:"Hitos y fechas",links:"Explorar el proyecto",demo:"Abrir demostración",repo:"Ver repositorio",other:"Reproductor público",limit:"Alcance y transparencia"} : {back:"← Back to projects",overview:"Overview",role:"Project type",work:"My contribution",team:"Team",stack:"Technologies used",timeline:"Milestones & dates",links:"Explore the project",demo:"Open live demo",repo:"View source repository",other:"Public player",limit:"Scope & transparency"};
    const demo = project.demo ? '<a class="button button-primary" href="'+esc(project.demo)+'" target="_blank" rel="noopener noreferrer">'+labels.demo+' ↗</a>' : "";
    const repo = project.repo ? '<a class="button button-ghost" href="'+esc(project.repo)+'" target="_blank" rel="noopener noreferrer">'+labels.repo+' ↗</a>' : "";
    const extra = project.extra ? '<a class="detail-text-link" href="'+esc(project.extra)+'" target="_blank" rel="noopener noreferrer">'+labels.other+' ↗</a>' : "";
    root.innerHTML = '<a class="detail-back" href="index.html#work">'+labels.back+'</a><div class="detail-hero"><div><p class="detail-kicker">'+esc(project.category)+' / CASE '+String(([...(window.PROJECTS.featured || []), ...(window.PROJECTS.lab || [])].indexOf(project)+1)).padStart(2,"0")+'</p><h1>'+esc(project.title)+'</h1><p class="detail-role">'+esc(copy.role[lang==="es"?1:0])+'</p><p class="detail-lead">'+esc(copy.summary[lang==="es"?1:0])+'</p><div class="detail-actions">'+demo+repo+'</div>'+extra+'</div><div class="detail-art visual-'+esc(project.visual)+'"><img class="detail-preview" src="assets/images/projects/'+esc(project.id)+'.svg" alt="" decoding="async"><span class="detail-art-code">DOSSIER / '+esc(id.toUpperCase())+'</span></div></div><section class="detail-section"><p class="section-index">01 / '+labels.overview.toUpperCase()+'</p><div class="detail-two-col"><div><h2>'+labels.work+'</h2><p>'+esc(copy.contribution[lang==="es"?1:0])+'</p></div><div><h2>'+labels.team+'</h2><p>'+esc(copy.team[lang==="es"?1:0])+'</p></div></div></section><section class="detail-section"><p class="section-index">02 / '+labels.stack.toUpperCase()+'</p><div class="detail-stack">'+copy.languages.map((x,i)=>'<span><b>'+String(i+1).padStart(2,"0")+'</b>'+esc(x)+'</span>').join("")+'</div></section><section class="detail-section"><p class="section-index">03 / '+labels.timeline.toUpperCase()+'</p><div class="detail-timeline">'+milestones.map((m,i)=>'<article><span>'+String(i+1).padStart(2,"0")+'</span><div><h3>'+esc(m[0])+'</h3><p>'+esc(m[1])+'</p></div></article>').join("")+'</div></section><p class="detail-disclaimer"><strong>'+labels.limit+':</strong> '+esc(project[lang==="es"?"es":"en"])+'</p>';
    document.title = project.title + " — Jeremy Torres";
    document.documentElement.lang = lang;
    switcher?.querySelectorAll(".lang-option").forEach(el => el.classList.toggle("active",el.dataset.lang===lang));
    const backLink = document.querySelector("[data-detail-i18n=backProjects]");
    if (backLink) backLink.textContent = labels.back.replace("← ","");
    if (switcher) switcher.setAttribute("aria-label",es ? "Cambiar idioma" : "Change language");
    const footerNote = document.querySelector(".footer-inner > p");
    if (footerNote) footerNote.textContent = es ? "Hecho con intención. Diseñado para ser ligero." : "Built with intent. Kept lightweight.";
    const privacyLink = document.querySelector(".footer-links a");
    if (privacyLink) privacyLink.textContent = es ? "Privacidad y rendimiento" : "Privacy & performance";
    root.querySelectorAll(".detail-section, .detail-hero").forEach(el => el.classList.add("reveal","is-visible"));
  }
  switcher?.addEventListener("click",()=>{lang=lang==="en"?"es":"en";try{localStorage.setItem("portfolio-language",lang)}catch(_){}render()});
  render();
})();