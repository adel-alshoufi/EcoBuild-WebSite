const menuButton = document.getElementById("menu");
const closeButton = document.getElementById("close-menu");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavLinks = document.querySelectorAll(".mobile-nav a");

menuButton.addEventListener("click", () => {
    mobileNav.classList.add("nav-open");
});

closeButton.addEventListener("click", () => {
    mobileNav.classList.remove("nav-open");
});

mobileNavLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileNav.classList.remove("nav-open");
    });
});
