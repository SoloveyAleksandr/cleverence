document.addEventListener('DOMContentLoaded', () => {
    let documentWith = document.documentElement.clientWidth;
    $('.js-btn-footer-menu').on('click', function(e) {
        if (documentWith >= 500) return;
        e.preventDefault();
        $(this).next().slideToggle();
    });
});