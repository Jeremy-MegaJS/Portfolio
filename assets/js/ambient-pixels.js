(() => {
  if(document.querySelector(".gold-pixel-field"))return;
  const field=document.createElement("div");
  field.className="gold-pixel-field";
  field.setAttribute("aria-hidden","true");
  const points=[[7,18,29,0],[18,74,38,4],[29,34,33,9],[42,88,42,13],[56,12,35,6],[68,57,45,16],[78,25,31,2],[91,81,40,11],[13,48,44,20],[84,64,36,14],[48,43,47,7],[96,12,34,18]];
  points.forEach(([x,y,d,delay])=>{const dot=document.createElement("i");dot.style.setProperty("--x",x+"%");dot.style.setProperty("--y",y+"%");dot.style.setProperty("--duration",d+"s");dot.style.setProperty("--delay",delay+"s");field.appendChild(dot)});
  document.body.prepend(field);
})();