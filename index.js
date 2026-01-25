const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

const menuButton = $("#menu");
const mobileNav = $(".mobile-nav");
const mobileNavLinks = $$(".mobile-nav li");

let open = false;
menuButton.addEventListener("click", () => {
    if(!open) {
        mobileNav.style.display = "flex";
        open = true
    } else {
        mobileNav.style.display = "none";
        open = false
    }
})

mobileNavLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileNav.style.display = "none";
        open = false
    })
})

console.log(mobileNavLinks)