// Mobile navigation menu

const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");

if (navbar && navLinks) {
    const menuButton = document.createElement("button");

    menuButton.className = "menu-toggle";
    menuButton.type = "button";
    menuButton.setAttribute("aria-label", "Open navigation menu");
    menuButton.innerHTML = "☰";

    navbar.insertBefore(menuButton, navbar.querySelector("nav"));

    menuButton.addEventListener("click", () => {
        navLinks.classList.toggle("show-menu");

        if (navLinks.classList.contains("show-menu")) {
            menuButton.innerHTML = "✕";
            menuButton.setAttribute("aria-label", "Close navigation menu");
        } else {
            menuButton.innerHTML = "☰";
            menuButton.setAttribute("aria-label", "Open navigation menu");
        }
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show-menu");
            menuButton.innerHTML = "☰";
        });
    });
}