const letters = "01HACKSECURITY";
// اختيار لون ديناميكي
function randomColor() {
  const colors = ["#00ffff", "#ff00ff", "#00ff00", "#ffff00"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillStyle = randomColor();
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
