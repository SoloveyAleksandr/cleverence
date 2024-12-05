document.addEventListener('DOMContentLoaded', function() {

    const body = document.querySelector('body');

    // работа с бургер меню
    let burgerMenu = document.querySelector('.js-burger-menu');
    let menu = document.querySelector('.menu');
    burgerMenu.addEventListener('click', function() {
        menu.classList.toggle('open');
        body.classList.toggle('no-scroll');
        $('.container-header-interface').slideToggle('400', function () {
            if ($(this).css('display') == 'none') {
                $(this).css('display', '');
            }
        });

    });

});