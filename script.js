document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.createElement("div");
    menuToggle.classList.add("menu-toggle");
    menuToggle.id = "menu-toggle";
    menuToggle.innerHTML = "<span></span><span></span><span></span>";
    document.body.appendChild(menuToggle);

    const mobileNav = document.createElement("nav");
    mobileNav.classList.add("mobile-nav");
    mobileNav.id = "mobile-nav";
    mobileNav.innerHTML = `
        <ul>
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    `;
    document.body.appendChild(mobileNav);

    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        mobileNav.classList.toggle("active");
        document.addEventListener("DOMContentLoaded", function () {
            const carousel = document.querySelector(".carousel");
            const prevBtn = document.querySelector(".carousel-prev");
            const nextBtn = document.querySelector(".carousel-next");
            
            let index = 0;
            const totalItems = document.querySelectorAll(".carousel-item").length;
            const itemWidth = document.querySelector(".carousel-item").offsetWidth + 20; // Ajoute l'écart
        
            function updateCarousel() {
                carousel.style.transform = `translateX(${-index * itemWidth}px)`;
            }
        
            nextBtn.addEventListener("click", () => {
                if (index < totalItems - 1) {
                    index++;
                    updateCarousel();
                }
            });
        
            prevBtn.addEventListener("click", () => {
                if (index > 0) {
                    index--;
                    updateCarousel();
                }
            });
        });
        
    });
});
