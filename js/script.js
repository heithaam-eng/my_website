/* Matrix Background */
const canvas = document.getElementById("matrix");
const ctx = canvas?.getContext("2d");

if(canvas && ctx){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const letters = "01HACKSECURITY";
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = [];
  for (let i = 0; i < columns; i++) drops[i] = 1;

  function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ffff";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = letters.charAt(Math.floor(Math.random() * letters.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(drawMatrix, 50);
}

/* Scroll Animation */
const fades = document.querySelectorAll(".fade");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("show");
  });
});
fades.forEach(el => observer.observe(el));

/* Language Switch with RTL/LTR */
function updateDirection(lang){
  if(lang === 'ar') document.body.setAttribute('dir','rtl');
  else document.body.setAttribute('dir','ltr');
}

function setLang(lang){
  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-ar]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });

  updateDirection(lang);
}

/* Load saved language */
const savedLang = localStorage.getItem("lang") || "ar";
setLang(savedLang);
