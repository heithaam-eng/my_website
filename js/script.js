const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
entries.forEach(entry => {
if (!entry.isIntersecting) return;
entry.target.classList.add('appear');
observer.unobserve(entry.target);
});
}, appearOptions);
faders.forEach(fader => { appearOnScroll.observe(fader); });

// particles.js
particlesJS("particles-js", {
"particles": {
"number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
"color": { "value": "#0d47a1" },
"shape": { "type": "circle" },
"opacity": { "value": 0.5, "random": true },
"size": { "value": 3, "random": true },
"line_linked": { "enable": true, "distance": 150, "color": "#0d47a1", "opacity": 0.4, "width": 1 },
"move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false }
},
"interactivity": {
"detect_on": "canvas",
"events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" } },
"modes": { "repulse": { "distance": 100, "duration": 0.4 }, "push": { "particles_nb": 4 } }
},
"retina_detect": true
});
