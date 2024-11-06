console.log("Hello world");

window.addEventListener("DOMContentLoaded", () => {
    const texts = document.querySelectorAll(".carousel-p");
    let currentIndex = 0; // Houd bij welke tekst momenteel zichtbaar is
    
    // Controleer of er elementen zijn gevonden
    if (texts.length === 0) {
      console.error("Geen elementen met de class '.carousel-p' gevonden.");
      return; // Stop de uitvoering als er geen teksten zijn
    }
  
    // Functie voor het weergeven van de volgende tekst
    function showNextText() {
      texts[currentIndex].classList.remove("active");
      texts[currentIndex].classList.add("exit");
  
      // Bepaal de volgende index
      currentIndex = (currentIndex + 1) % texts.length;
  
      // Verwijder de 'exit' klasse van de nieuwe tekst en voeg 'active' toe
      setTimeout(() => {
        texts.forEach((text) => text.classList.remove("exit"));
        texts[currentIndex].classList.add("active");
      }, 600); // Wacht 0.6 seconden
    }
  
    // Toon de eerste tekst bij het laden van de pagina
    texts[currentIndex].classList.add("active");
    // Wissel elke 4 seconden van tekst
    setInterval(showNextText, 4000);
  });

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
const scrollButton = document.getElementById("scrollButton");
if (scrollButton) {
  scrollButton.onclick = function () {
    const topElement = document.getElementById("top");
    if (topElement) {
      topElement.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Element with ID 'top' not found.");
    }
  };
}

// Afmeting juist
window.addEventListener('wheel', function(event) {
    if (event.deltaX !== 0) {
      event.preventDefault();
    }
  }, { passive: false });