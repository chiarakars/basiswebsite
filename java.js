console.log("Hello world")
const texts = document.querySelectorAll('.carousel-p');
let currentIndex = 0; // Houd bij welke tekst momenteel zichtbaar is

function showNextText() {
  // Verberg de huidige tekst door de 'active' klasse te verwijderen en de 'exit' klasse toe te voegen
  texts[currentIndex].classList.remove('active');
  texts[currentIndex].classList.add('exit');

  // Bepaal de volgende index
  currentIndex = (currentIndex + 1) % texts.length;

  // Verwijder de 'exit' klasse van de nieuwe tekst, zodat deze niet meer verborgen is
  setTimeout(() => {
    texts.forEach(text => text.classList.remove('exit'));
    texts[currentIndex].classList.add('active');
  }, 600); // Wacht 0.6 seconden, zodat de huidige tekst de tijd heeft om naar links te schuiven
}

// Toon de eerste tekst bij het laden van de pagina
texts[currentIndex].classList.add('active');

// Wissel elke 3 seconden van tekst
setInterval(showNextText, 4000);

//met hulp van ChatGPT

// Luister naar het indrukken van toetsen op de hele pagina
document.addEventListener("keydown", function(event) {
    // Controleer of de Escape-toets is ingedrukt
    if (event.key === "Escape") {
      // Scroll naar de onderkant van de pagina
      document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
    }
  });

  // hulp van Lucas 

  document.getElementById("scrollButton").onclick = function () {
    // Scroll soepel naar de bovenkant van de pagina
    document.getElementById("top").scrollIntoView({ behavior: "smooth" });
  };
  
  
