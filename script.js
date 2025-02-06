document.addEventListener("DOMContentLoaded", function () {

    // MENU TOGGLE
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".mobile-nav")
    const navLinks = document.querySelectorAll(".mobile-nav a")

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            menuToggle.classList.remove("active");
            nav.classList.remove("active");
        })
    })

    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        nav.classList.toggle("active");        
    });
    

    // WAVE EFFECT
    const waveEl = document.querySelector('#wave')
    const svg = document.querySelector("#svg")

    var wave = wavify( waveEl, {
        height: 10,
        bones: 3,
        amplitude: 300,
        color: 'rgba(255, 255, 255, 1)',
        speed: .25
    })
    

    const sections = document.querySelectorAll("main section");
    let isScrolling = false;

    function scrollToSection(index) {
        if (index < 0 || index >= sections.length) return;
        isScrolling = true;
        sections[index].scrollIntoView({ behavior: "smooth", block: "start" });
        
        // Attendre la fin de l'animation avant d'autoriser un nouveau scroll
        setTimeout(() => {
            isScrolling = false;
        }, 800);
    }

    let currentIndex = 0;

    function detectScroll(event) {
        if (isScrolling) return;

        const deltaY = event.deltaY || event.touches?.[0]?.clientY - event.touches?.[1]?.clientY || 0;

        if (deltaY > 30) {
            // Scroll vers le bas
            currentIndex = Math.min(currentIndex + 1, sections.length - 1);
        } else if (deltaY < -30) {
            // Scroll vers le haut
            currentIndex = Math.max(currentIndex - 1, 0);
        }

        scrollToSection(currentIndex);
    }

    document.addEventListener("wheel", detectScroll, { passive: false });
    document.addEventListener("touchmove", detectScroll, { passive: false });
    
    
});
