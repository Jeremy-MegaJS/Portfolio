  const allProjects = [...projects.featured, ...projects.lab];
  const icon = (name) => {
    const paths = {
      html:'<path d="m6 3 1.4 15L12 20l4.6-2L18 3z"/><path d="M9 7h6M9.5 11h5M10 15h4"/>',
      css:'<path d="m6 3 1.4 15L12 20l4.6-2L18 3z"/><path d="m9 7 6 .1M9.5 11H15l-.4 4-2.6 1-2.6-1"/>',
      js:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M10 8v8a2 2 0 0 1-4 0M14 16c1 2 5 2 5-1 0-2-5-1-5-4 0-2 3-3 5-1"/>',
      ts:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M6 9h7M9.5 9v8M15 17v-8h3M15 13h3"/>',
      react:'<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="9" ry="4"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)"/>',
      next:'<path d="M4 18V6l14 12V6M18 18l2 2"/>',
      git:'<path d="m12 3 9 9-9 9-9-9z"/><path d="M9 9h.01M15 15h.01M9 9l6 6"/>',
      linux:'<path d="M12 3c-3 0-4 3-4 6 0 2-2 3-2 5 0 3 3 5 6 5s6-2 6-5c0-2-2-3-2-5 0-3-1-6-4-6z"/><path d="M9 11h.01M15 11h.01M10 15c1 1 3 1 4 0"/>',
      db:'<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0"/>',
      cloud:'<path d="M7 18h11a4 4 0 0 0 .5-8A6 6 0 0 0 7 8a5 5 0 0 0 0 10z"/><path d="m9 14 3-3 3 3"/>',
      code:'<path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>',
      circuit:'<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4"/>',
      ai:'<path d="M12 3 14 9l6 3-6 2-2 7-2-7-6-2 6-3z"/><path d="m19 3 .6 2.4L22 6l-2.4.6L19 9l-.6-2.4L16 6l2.4-.6z"/>'
    };
    return '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">'+(paths[name]||paths.code)+'</svg>';
  };
  const capabilityCatalog = [
    {name:"HTML5",icon:"html",group:"core",description:["Markup and semantic structure across my web work.","Estructura y marcado semántico en mis proyectos web."]},
    {name:"CSS3",icon:"css",group:"core",description:["Responsive layouts, visual systems and interaction styling.","Diseños adaptables, sistemas visuales y estilos de interacción."]},
    {name:"JavaScript",icon:"js",group:"core",description:["Browser logic, DOM behavior and interactive interfaces.","Lógica del navegador, comportamiento DOM e interfaces interactivas."]},
    {name:"Git & GitHub",icon:"git",group:"core",description:["Version control, repository workflows and project collaboration.","Control de versiones, flujos de repositorios y colaboración."]},
    {name:"Linux",icon:"linux",group:"core",description:["Daily development environment and practical system work.","Entorno habitual de desarrollo y trabajo práctico con sistemas."]},
    {name:"Arduino",icon:"circuit",group:"core",description:["Microcontroller programming and hands-on hardware exploration.","Programación de microcontroladores y experimentación con hardware."]},
    {name:"React",icon:"react",group:"applied",description:["Component-based UI in collaborative web application work.","Interfaces por componentes en proyectos web colaborativos."]},
    {name:"Next.js",icon:"next",group:"applied",description:["App Router and full-stack web application work in ParkingSV.","App Router y trabajo de aplicaciones web full-stack en ParkingSV."]},
    {name:"TypeScript",icon:"ts",group:"applied",description:["Typed application code in the ParkingSV JavaScript workstream.","Código tipado en la línea JavaScript de ParkingSV."]},
    {name:"Supabase / PostgreSQL",icon:"db",group:"applied",description:["Authentication and relational data integration in ParkingSV.","Integración de autenticación y datos relacionales en ParkingSV."]},
    {name:"Bash",icon:"code",group:"applied",description:["Shell automation in a focused Linux desktop utility.","Automatización shell en una utilidad específica para escritorio Linux."]},
    {name:"Python",icon:"code",group:"applied",description:["A focused input-control utility and technical exercises.","Una utilidad específica de control de entrada y ejercicios técnicos."]},
    {name:"Nginx / SSH",icon:"cloud",group:"applied",description:["Infrastructure exploration for a public streaming environment.","Exploración de infraestructura para un entorno público de streaming."]},
    {name:"TensorFlow.js",icon:"ai",group:"applied",description:["Browser-side model inference in the IDentify prototype.","Inferencia de modelos en navegador en el prototipo IDentify."]},
    {name:"Teachable Machine",icon:"ai",group:"applied",description:["Training image classes for an educational prototype.","Entrenamiento de clases de imágenes para un prototipo educativo."]},
    {name:"WARP CLI / MASQUE",icon:"cloud",group:"applied",description:["A focused control utility using the official client.","Una utilidad de control específica que utiliza el cliente oficial."]},
    {name:"Omnia",icon:"cloud",group:"applied",description:["Streaming software within the wider Radio FE environment.","Software de streaming en el entorno más amplio de Radio FE."]}
  ];
  const techMatches = {
    "HTML5":["natural-soap","radio-transmission","discomovil","car-dashboard","f1-team-profiles"],
    "CSS3":["natural-soap","radio-transmission","discomovil","car-dashboard","f1-team-profiles"],
    "JavaScript":["natural-soap","radio-transmission","discomovil","identify","car-dashboard","f1-team-profiles"],
    "Git & GitHub":allProjects.map(p=>p.id),
    "Linux":["radio-transmission","arch-keyboard-virtual-mouse","warp-toggle-masque"],
    "Arduino":[],
    "React":["parking-sv"],"Next.js":["parking-sv"],"TypeScript":["parking-sv"],
    "Supabase / PostgreSQL":["parking-sv"],
    "Bash":["warp-toggle-masque"],"Python":["arch-keyboard-virtual-mouse"],
    "Nginx / SSH":["radio-transmission"],"TensorFlow.js":["identify"],"Teachable Machine":["identify"],
    "WARP CLI / MASQUE":["warp-toggle-masque"],"Omnia":["radio-transmission"]
  };
  function renderCapabilities(){
    const core=document.getElementById("coreCapabilities"), applied=document.getElementById("appliedCapabilities");
    if(!core||!applied)return;
    const groups={core,applied};
    for(const item of capabilityCatalog){
      const count=(techMatches[item.name]||[]).length;
      const label=count===1?(language==="es"?"1 proyecto":"1 project"):(language==="es"?count+" proyectos":count+" projects");
      groups[item.group].insertAdjacentHTML("beforeend",'<article class="capability-card reveal"><div class="capability-card-top"><span class="capability-icon">'+icon(item.icon)+'</span><span class="capability-count">'+label+'</span></div><h4>'+escapeHtml(item.name)+'</h4><p>'+escapeHtml(item.description[language==="es"?1:0])+'</p><div class="capability-proof"><span style="--proof:'+Math.max(8,count/9*100)+'%"></span></div></article>');
    }
  }
  function projectCard(project, index) {
    const t = translations[language];
    const links = [
      '<a class="project-action action-details" href="project.html?project='+encodeURIComponent(project.id)+'">'+escapeHtml(t.details)+' <span>↗</span></a>'
    ];
    if (project.demo) links.push('<a class="project-action action-demo" href="'+escapeHtml(project.demo)+'" target="_blank" rel="noopener noreferrer">'+escapeHtml(t.demo)+' <span>↗</span></a>');
    if (project.extra) links.push('<a class="project-action action-extra" href="'+escapeHtml(project.extra)+'" target="_blank" rel="noopener noreferrer">'+(language === "es"?"Reproductor":"Player")+' <span>↗</span></a>');
    if (project.repo) links.push('<a class="project-action action-code" href="'+escapeHtml(project.repo)+'" target="_blank" rel="noopener noreferrer">'+escapeHtml(t.source)+' <span>↗</span></a>');
    const note = project.note === "simulated" ? '<span class="project-note">'+escapeHtml(t.simulated)+'</span>' : project.note === "camera" ? '<span class="project-note">'+escapeHtml(t.camera)+'</span>' : "";
    return '<article class="project-card reveal" style="--card-index:'+index+'"><div class="project-visual visual-'+escapeHtml(project.visual)+'"><span class="visual-label mono">'+escapeHtml(project.category)+'</span><span class="visual-code mono">'+String(index+1).padStart(2,"0")+' / 05</span><img class="project-preview" src="assets/images/projects/'+escapeHtml(project.id)+'.svg" alt="" loading="lazy" decoding="async"></div><div class="project-body"><div class="project-title-row"><h3>'+escapeHtml(project.title)+'</h3><span class="project-kind">'+escapeHtml(project.kind==="academic"?t.academic:t.individual)+'</span></div><p>'+escapeHtml(project[language])+'</p><div class="project-tags">'+project.stack.map(tag=>'<span>'+escapeHtml(tag)+'</span>').join("")+'</div>'+note+'<div class="project-links">'+links.join("")+'</div></div></article>';
  }
  function labCard(project, index) {
    return '<article class="lab-card reveal" style="--card-index:'+index+'"><div class="lab-preview"><img src="assets/images/projects/'+escapeHtml(project.id)+'.svg" alt="" loading="lazy" decoding="async"></div><span class="lab-card-index mono">LAB_'+String(index+1).padStart(2,"0")+'</span><h4>'+escapeHtml(project.title)+'</h4><p>'+escapeHtml(project[language])+'</p><div class="project-tags">'+project.stack.map(tag=>'<span>'+escapeHtml(tag)+'</span>').join("")+'</div><div class="lab-actions"><a class="project-action action-details" href="project.html?project='+encodeURIComponent(project.id)+'">'+escapeHtml(translations[language].details)+' <span>↗</span></a><a class="project-action action-code" href="'+escapeHtml(project.repo)+'" target="_blank" rel="noopener noreferrer">'+escapeHtml(translations[language].source)+' <span>↗</span></a></div></article>';
  }
  function applyLanguage(nextLanguage) {
    language = nextLanguage === "es" ? "es" : "en";
    document.documentElement.lang = language;
    document.querySelectorAll("[data-i18n]").forEach(element => {
      const value=translations[language][element.dataset.i18n];
      if(value!==undefined)element.innerHTML=value;
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach(element=>{
      const value=translations[language][element.dataset.i18nAriaLabel];
      if(value!==undefined)element.setAttribute("aria-label",value);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(element=>{
      const value=translations[language][element.dataset.i18nAlt];
      if(value!==undefined)element.setAttribute("alt",value);
    });
    document.querySelectorAll("[data-i18n-content]").forEach(element=>{
      const value=translations[language][element.dataset.i18nContent];
      if(value!==undefined)element.setAttribute("content",value);
    });
    document.querySelectorAll(".lang-option").forEach(el=>el.classList.toggle("active",el.dataset.lang===language));
    const projectGrid=document.getElementById("projectGrid"),labGrid=document.getElementById("labGrid");
    if(projectGrid)projectGrid.innerHTML=projects.featured.map(projectCard).join("");
    if(labGrid)labGrid.innerHTML=projects.lab.map(labCard).join("");
    const core=document.getElementById("coreCapabilities"),applied=document.getElementById("appliedCapabilities");
    if(core)core.innerHTML="";if(applied)applied.innerHTML="";
    renderCapabilities();
    try{localStorage.setItem("portfolio-language",language)}catch(_){}
    observeReveals();
  }
  let revealObserver;
  function observeReveals(){
    const targets=document.querySelectorAll(".reveal:not(.is-visible),.section-heading:not(.is-visible),.intro-content:not(.is-visible),.capability-group:not(.is-visible),.education-card:not(.is-visible),.contact-inner:not(.is-visible)");
    if(!("IntersectionObserver" in window)){targets.forEach(el=>el.classList.add("is-visible"));return;}
    if(revealObserver)revealObserver.disconnect();
    revealObserver=new IntersectionObserver((entries,observer)=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:"0px 0px -5% 0px"});
    targets.forEach(el=>{el.classList.add("reveal");revealObserver.observe(el)});
  }
  function initScrollNarrative(){
    const reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if(reduce)return;
    if(window.gsap && window.ScrollTrigger){
      gsap.registerPlugin(ScrollTrigger);
      gsap.utils.toArray(".story-section, .project-card, .capability-card, .education-card, .contact-inner").forEach((el,i)=>{
        gsap.fromTo(el,{y:44,opacity:0,rotateX:2},{y:0,opacity:1,rotateX:0,duration:1.25,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 88%",once:true},delay:(i%4)*.07});
      });
      gsap.utils.toArray(".story-panel").forEach(el=>gsap.fromTo(el,{y:70,scale:.96},{y:0,scale:1,ease:"none",scrollTrigger:{trigger:el,start:"top bottom",end:"bottom top",scrub:1.6}}));
      gsap.to(".liquid-aura",{backgroundPosition:"100% 50%",ease:"none",scrollTrigger:{trigger:"body",start:"top top",end:"bottom bottom",scrub:2}});
    } else {
      document.querySelectorAll(".reveal").forEach(el=>el.classList.add("is-visible"));
    }
  }
  if(languageSwitch)languageSwitch.addEventListener("click",()=>applyLanguage(language==="en"?"es":"en"));
  if(menuToggle&&nav){
    menuToggle.addEventListener("click",()=>{
      const expanded=menuToggle.getAttribute("aria-expanded")==="true";
      menuToggle.setAttribute("aria-expanded",String(!expanded));
      nav.classList.toggle("is-open",!expanded);
    });
    nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("is-open");menuToggle.setAttribute("aria-expanded","false")}));
  }
  const progress=document.getElementById("scrollProgress");
  if(progress){let ticking=false;window.addEventListener("scroll",()=>{if(ticking)return;ticking=true;requestAnimationFrame(()=>{const total=document.documentElement.scrollHeight-innerHeight;progress.style.transform="scaleX("+(total>0?scrollY/total:0)+")";ticking=false})},{passive:true})}
  const year=document.getElementById("year");if(year)year.textContent=new Date().getFullYear();
  applyLanguage(language);
  initScrollNarrative();
})();