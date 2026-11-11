(() => {
  const button=document.getElementById("pageLanguage");
  const nodes=[...document.querySelectorAll("[data-en][data-es]")];
  let language="en";
  try{language=localStorage.getItem("portfolio-language")==="es"?"es":"en"}catch(_){}
  const apply=()=>{
    document.documentElement.lang=language;
    nodes.forEach(node=>{node.innerHTML=node.dataset[language]});
    if(button){button.textContent=language==="en"?"EN / ES":"ES / EN";button.setAttribute("aria-label",language==="en"?"Change language":"Cambiar idioma")}
  };
  button?.addEventListener("click",()=>{language=language==="en"?"es":"en";try{localStorage.setItem("portfolio-language",language)}catch(_){}apply()});
  apply();
})();