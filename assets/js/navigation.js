(() => {
  const header=document.querySelector(".site-header");
  const toggle=document.getElementById("menuToggle");
  const nav=document.getElementById("mainNav");
  if(!header||!toggle||!nav)return;
  const close=()=>{nav.classList.remove("is-open");toggle.setAttribute("aria-expanded","false");toggle.setAttribute("aria-label",document.documentElement.lang==="es"?"Abrir navegación":"Open navigation");};
  const open=()=>{nav.classList.add("is-open");toggle.setAttribute("aria-expanded","true");toggle.setAttribute("aria-label",document.documentElement.lang==="es"?"Cerrar navegación":"Close navigation");};
  toggle.addEventListener("click",()=>toggle.getAttribute("aria-expanded")==="true"?close():open());
  nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",close));
  document.addEventListener("keydown",e=>{if(e.key==="Escape")close()});
  document.addEventListener("click",e=>{if(toggle.getAttribute("aria-expanded")==="true"&&!header.contains(e.target))close()});
  window.addEventListener("resize",()=>{if(window.innerWidth>820)close()});
})();