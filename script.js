document.addEventListener("DOMContentLoaded", () => {


const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");

        const isOpen = navMenu.classList.contains("active");

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Cerrar menú" : "Abrir menú"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {
            navMenu.classList.remove("active");

            menuToggle.setAttribute(
                "aria-label",
                "Abrir menú"
            );

            menuToggle.textContent = "☰";
        });

    });
}

const animatedElements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .education-card"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);


animatedElements.forEach(element => {
    observer.observe(element);
});

const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll("#navMenu a");

const sectionObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                links.forEach(link => {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    `#navMenu a[href="#${entry.target.id}"]`
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }

        });

    },
    {
        rootMargin: "-35% 0px -55% 0px"
    }
);


sections.forEach(section => {
    sectionObserver.observe(section);
});

const footerText = document.querySelector("footer p");

if (footerText) {

    const currentYear = new Date().getFullYear();

    footerText.textContent =
        `© ${currentYear} Luis Angel Mesa. Portafolio personal.`;
}


const cards = document.querySelectorAll(
    ".project-card, .skill-card"
);

cards.forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.05}s`;

});
});
