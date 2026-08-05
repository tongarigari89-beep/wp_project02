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
    if (event.key === "Escape" && menu.classList.contains("is-open")) {
        closeMenu();
    }
});

// PC版：MVより下へ進んだら、ヘッダーを画面上部に固定します。
const header = document.querySelector(".header");
const mv = document.querySelector(".mv");
const pcScreen = window.matchMedia("(min-width: 768px)");

function updatePcHeader() {
    if (!pcScreen.matches) {
        header.classList.remove("is-fixed");
        return;
    }

    header.classList.toggle("is-fixed", window.scrollY >= mv.offsetHeight);
}

window.addEventListener("scroll", updatePcHeader, { passive: true });
pcScreen.addEventListener("change", updatePcHeader);
updatePcHeader();

// PC版：各セクションをスクロールに合わせて、ふわっと表示します。
if (pcScreen.matches && "IntersectionObserver" in window) {
    const pcSections = document.querySelectorAll("main > section, .recruitment-area > section, .entry");

    pcSections.forEach(function (section) {
        section.classList.add("pc-reveal");
    });

    const revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    pcSections.forEach(function (section) {
        revealObserver.observe(section);
    });
}
