console.log("Hello world");

window.addEventListener("DOMContentLoaded", () => {
    const texts = document.querySelectorAll(".carousel-p");
    let currentIndex = 0;
    
    if (texts.length === 0) {
        console.error("Geen elementen met de class '.carousel-p' gevonden.");
        return;
    }
    
    function showNextText() {
        texts[currentIndex].classList.remove("active");
        texts[currentIndex].classList.add("exit");
        
        currentIndex = (currentIndex + 1) % texts.length;
        
        setTimeout(() => {
            texts.forEach((text) => text.classList.remove("exit"));
            texts[currentIndex].classList.add("active");
        }, 600);
    }
    
    texts[currentIndex].classList.add("active");
    setInterval(showNextText, 4000);
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        const footer = document.getElementById("footer");
        if (footer) {
            footer.scrollIntoView({ behavior: "smooth" });
        } else {
            console.error("Footer element niet gevonden.");
        }
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "a" || event.key === "A") {
        window.location.href = "about.html";
    }
});

const scrollButton = document.getElementById("scrollButton");
if (scrollButton) {
    scrollButton.onclick = function () {
        const topElement = document.getElementById("top");
        if (topElement) {
            topElement.scrollIntoView({ behavior: "smooth" });
        } else {
            console.error("Element met ID 'top' niet gevonden.");
        }
    };
}

window.addEventListener("wheel", function(event) {
    if (event.deltaX !== 0) {
        event.preventDefault();
    }
}, { passive: false });
