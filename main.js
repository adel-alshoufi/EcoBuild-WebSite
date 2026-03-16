const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

const menuButton = $("#menu");
const closeButton = $("#close-menu");
const mobileNav = $(".mobile-nav");
const mobileNavLinks = $$(".mobile-nav li");

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
