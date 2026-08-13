const menuButton = document.querySelector(".hamburger");
const closeButton = document.querySelector(".global-menu__close");
const menu = document.querySelector(".global-menu");

function openMenu() {
    menu.classList.add("is-open");
    menu.setAttribute("aria-hidden", "false");
    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "メニューを閉じる");
    document.body.classList.add("is-menu-open");
    closeButton.focus();
}

function closeMenu() {
    menu.classList.remove("is-open");
    menu.setAttribute("aria-hidden", "true");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "メニューを開く");
    document.body.classList.remove("is-menu-open");
    menuButton.focus();
}

menuButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menu.classList.contains("is-open")) closeMenu();
});

