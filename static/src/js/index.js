let isTouch = false;
if ('ontouchstart' in document.documentElement) {
    isTouch = true;
}
document.body.className += isTouch ? ' touch' : ' no-touch';

window.addEventListener("optimizedResize", function() {
    headerHeight();
});

// Mob  menu
(function () {
    let trigger = document.querySelector('.js-menu-trigger');
    let menuOverlay = document.querySelector('.js-header-overlay');
    if (trigger) {
        trigger.onclick = () => {
            document.body.classList.toggle('menu-open');
            document.documentElement.classList.toggle('overflow');
        };
    }
    if (menuOverlay) {
        menuOverlay.onclick = () => {
            document.body.classList.remove('menu-open');
            document.documentElement.classList.remove('overflow');
        };
    }
})();