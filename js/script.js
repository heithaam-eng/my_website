/* Matrix Background */
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01HACKSECURITY";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];
for (let i = 0; i < columns; i++) drops[i] = 1;

function randomColor() {
  const colors = ["#00ffff","#ff00ff","#00ff00","#ffff00"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function drawMatrix() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.font = fontSize+"px monospace";
  for(let i=0;i<drops.length;i++){
    const text = letters.charAt(Math.floor(Math.random()*letters.length));
    ctx.fillStyle=randomColor();
    ctx.fillText(text,i*fontSize,drops[i]*fontSize);
    if(drops[i]*fontSize>canvas.height && Math.random()>0.95) drops[i]=0;
    drops[i]++;
  }
}
setInterval(drawMatrix,50);

/* Scroll Fade */
const fades=document.querySelectorAll(".fade");
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("show");
  });
});
fades.forEach(el=>observer.observe(el));

/* Language Switch */
function setLang(lang){
  document.documentElement.lang=lang;
  document.querySelectorAll("[data-ar]").forEach(el=>{
    el.textContent=el.getAttribute(`data-${lang}`);
  });
}
