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
    {name:"HTML5",icon:"html",group:"core",description:["Semantic structure for all web projects.","Estructura semántica para proyectos web."]},
    {name:"CSS3",icon:"css",group:"core",description:["Responsive styling, visual systems and motion.","Estilos adaptables, sistemas visuales y movimiento."]},
    {name:"JavaScript",icon:"js",group:"core",description:["Interactive browser behavior and DOM-based interfaces.","Interactividad en navegador e interfaces basadas en DOM."]},
    {name:"Git & GitHub",icon:"git",group:"core",description:["Version control, repository management and collaboration.","Control de versiones, gestión de repositorios y colaboración."]},
    {name:"Linux",icon:"linux",group:"core",description:["Daily development environment and hands-on system work.","Entorno habitual de desarrollo y trabajo práctico con sistemas."]},
    {name:"Arduino",icon:"circuit",group:"core",description:["Microcontroller programming and electronics practice.","Programación de microcontroladores y práctica de electrónica."]},
    {name:"React",icon:"react",group:"applied",description:["Applied in a collaborative full-stack web project.","Aplicado en un proyecto web full-stack colaborativo."]},
    {name:"Next.js",icon:"next",group:"applied",description:["App Router and web application development.","App Router y desarrollo de aplicaciones web."]},
    {name:"TypeScript",icon:"ts",group:"applied",description:["Typed code in the ParkingSV workstream.","Código tipado en la línea de trabajo de ParkingSV."]},
    {name:"Supabase / PostgreSQL",icon:"db",group:"applied",description:["Authentication and relational data in ParkingSV.","Autenticación y datos relacionales en ParkingSV."]},
    {name:"Bash",icon:"code",group:"applied",description:["Applied in one Linux utility; not a general mastery claim.","Aplicado en una utilidad Linux; no implica dominio general."]},
    {name:"Python",icon:"code",group:"applied",description:["Applied in a focused Linux input-control utility.","Aplicado en una utilidad específica de control de entrada Linux."]},
    {name:"Nginx / SSH",icon:"cloud",group:"applied",description:["Infrastructure exploration around a streaming environment.","Exploración de infraestructura en un entorno de streaming."]},
    {name:"TensorFlow.js",icon:"ai",group:"applied",description:["Used for browser-side inference in an academic prototype.","Utilizado para inferencia en navegador en un prototipo académico."]},
    {name:"Teachable Machine",icon:"ai",group:"applied",description:["Used to train image classes for a learning prototype.","Utilizado para entrenar clases de imágenes en un prototipo."]},
    {name:"WARP CLI / MASQUE",icon:"cloud",group:"applied",description:["Applied in a specific desktop connection-control utility.","Aplicado en una utilidad específica de control de conexión."]},
    {name:"Omnia",icon:"cloud",group:"applied",description:["Part of the wider Radio FE streaming environment.","Parte del entorno de streaming de Radio FE."]
    }
  ];
  const techMatches = {
    "HTML5":["natural-soap","radio-transmission","discomovil","car-dashboard","f1-team-profiles"],
    "CSS3":["natural-soap","radio-transmission","discomovil","car-dashboard","f1-team-profiles"],
    "JavaScript":["natural-soap","radio-transmission","discomovil","identify","car-dashboard","f1-team-profiles"],
    "Git & GitHub":allProjects.map(p=>p.id),
    "Linux":["radio-transmission","arch-keyboard-virtual-mouse","warp-toggle-masque"],
    "Arduino":["training"],
    "React":["parking-sv"],"Next.js":["parking-sv"],"TypeScript":["parking-sv"],
    "Supabase / PostgreSQL":["parking-sv"],
    "Bash":["warp-toggle-masque"],"Python":["arch-keyboard-virtual-mouse"],
    "Nginx / SSH":["radio-transmission"],"TensorFlow.js":["identify"],"Teachable Machine":["identify"],
    "WARP CLI / MASQUE":["warp-toggle-masque"],"Omnia":["radio-transmission"]
  };
  function renderCapabilities(){
    const core=document.getElementById("coreCapabilities"), applied=document.getElementById("appliedCapabilities");
    if(!core||!applied)return;
    const targets={core,applied};
    const projectTitles=new Map(allProjects.map(project=>[project.id,project.title]));
    for(const item of capabilityCatalog){
      const used=techMatches[item.name]||[];
      const count=used.filter(id=>id!=="training").length;
      const label=count===1?(language==="es"?"1 proyecto":"1 project"):(language==="es"?count+" proyectos":count+" projects");
      const evidence=used.filter(id=>id!=="training").map(id=>projectTitles.get(id)).filter(Boolean).join(" · ") || (language==="es"?"Diploma de formación y práctica con microcontroladores":"Arduino training diploma and hands-on microcontroller practice");
      targets[item.group].insertAdjacentHTML("beforeend",'<article class="capability-card reveal"><div class="capability-card-top"><span class="capability-icon">'+icon(item.icon)+'</span><span class="capability-count">'+label+'</span></div><h4>'+escapeHtml(item.name)+'</h4><p>'+escapeHtml(item.description[language==="es"?1:0])+'</p><div class="capability-proof"><span style="--proof:'+Math.max(8,count/9*100)+'%"></span></div><small class="capability-projects">'+(language==="es"?"EVIDENCIA: ":"PROJECT EVIDENCE: ")+escapeHtml(evidence)+'</small></article>');
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
    const langCore=document.getElementById("coreCapabilities"),langApplied=document.getElementById("appliedCapabilities");
    if(langCore)langCore.innerHTML="";
    if(langApplied)langApplied.innerHTML="";
    renderCapabilities();
    if(labGrid)labGrid.innerHTML=projects.lab.map(labCard).join("");

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
    if(reduce){
      document.querySelectorAll(".reveal").forEach(el=>el.classList.add("is-visible"));
      return;
    }
    if(window.gsap && window.ScrollTrigger){
      gsap.registerPlugin(ScrollTrigger);
      gsap.utils.toArray(".section-heading, .intro-content, .project-card, .lab-card, .capability-card, .education-card, .contact-inner").forEach((el,i)=>{
        gsap.fromTo(el,{y:48,opacity:0,filter:"blur(5px)"},{y:0,opacity:1,filter:"blur(0px)",duration:1.15,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 89%",once:true},delay:(i%3)*.08});
      });
      gsap.utils.toArray(".story-panel").forEach((el,i)=>{
        gsap.fromTo(el,{y:85,scale:.94,opacity:.36,rotateY:i%2?3:-3},{y:0,scale:1,opacity:1,rotateY:0,ease:"none",scrollTrigger:{trigger:el,start:"top 92%",end:"bottom 12%",scrub:1.8}});
      });
      const storyBar=document.querySelector("#storyProgress");
      if(storyBar)gsap.fromTo(storyBar,{scaleX:0},{scaleX:1,ease:"none",scrollTrigger:{trigger:"#storySequence",start:"top 80%",end:"bottom 20%",scrub:1.2}});
      gsap.utils.toArray(".project-card, .lab-card").forEach((el,i)=>{
        gsap.fromTo(el,{y:60,opacity:0,scale:.965},{y:0,opacity:1,scale:1,duration:1.2,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 90%",once:true},delay:(i%3)*.07});
      });
      gsap.utils.toArray(".detail-section").forEach((el,i)=>{
        gsap.fromTo(el,{y:48,opacity:0},{y:0,opacity:1,duration:1.1,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 86%",once:true},delay:(i%2)*.08});
      });
      gsap.to(".liquid-aura",{backgroundPosition:"100% 100%",ease:"none",scrollTrigger:{trigger:"body",start:"top top",end:"bottom bottom",scrub:2.4}});
      gsap.utils.toArray(".project-preview").forEach((img,i)=>{
        gsap.fromTo(img,{yPercent:4,scale:1.035},{yPercent:-4,scale:1,ease:"none",scrollTrigger:{trigger:img.closest(".project-card"),start:"top bottom",end:"bottom top",scrub:1.8}});
      });
      ScrollTrigger.refresh();
    } else {
      observeReveals();
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
)();