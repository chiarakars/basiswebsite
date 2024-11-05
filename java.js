console.log("Hello world");

const texts = document.querySelectorAll(".carousel-p");
let currentIndex = 0; // Houd bij welke tekst momenteel zichtbaar is
// Carrousel animatie (via tutorial van David en hulp van ChatGPT)
function showNextText() {
  // Verberg de huidige tekst door de 'active' klasse te verwijderen en de 'exit' klasse toe te voegen
  texts[currentIndex].classList.remove("active");
  texts[currentIndex].classList.add("exit");
  // Bepaal de volgende index
  currentIndex = (currentIndex + 1) % texts.length;
  // Verwijder de 'exit' klasse van de nieuwe tekst, zodat deze niet meer verborgen is
  setTimeout(() => {
    texts.forEach((text) => text.classList.remove("exit"));
    texts[currentIndex].classList.add("active");
  }, 600); // Wacht 0.6 seconden, zodat de huidige tekst de tijd heeft om naar links te schuiven
}
// Toon de eerste tekst bij het laden van de pagina
texts[currentIndex].classList.add("active");
// Wissel elke 4 seconden van tekst
setInterval(showNextText, 4000);

// Button klikbaar
document.getElementById("myButton").onclick = function () {
  window.location.href = "about.html";
};

// Shortcuts (hulp van Lucas)
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
  }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'a' || event.key === 'A') {
        window.location.href = 'about.html';
    }
});

// Scroll animatie met button
document.getElementById("scrollButton").onclick = function () {
  document.getElementById("top").scrollIntoView({ behavior: "smooth" });
};

window.addEventListener('wheel', function(event) {
    if (event.deltaX !== 0) {
      event.preventDefault();
    }
  }, { passive: false });