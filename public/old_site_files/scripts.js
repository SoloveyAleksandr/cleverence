$(document).ready(function() {

    //header fixed menu
    if (!!$('.js-fixed-box').offset()) {
        var stickyTop = $('.js-fixed-box').offset().top;
        $(window).scroll(function() {
            var windowTop = $(window).scrollTop();
            if (stickyTop < windowTop) {
                $('body').addClass('tabs-fixed');
            } else {
                $('body').removeClass('tabs-fixed');
            }
        });
    }

    //animate anchor scroll
    $('.js-anchor-button').on('click', function(e) {
        e.preventDefault();
        var anchor = $(this);
        let elem = $(anchor.attr('href'));
        if (!elem[0]) return;
        $('html, body').stop().animate({
            scrollTop: elem.offset().top - 100,
        }, 1000);
        return false;
    });

    //item-tile-video
    $('.js-btn-video').on('click', function() {
        let videoURL = $(this).parent('.item-tile-video').attr('data-video');
        $(this).parents('.item-tile-video').addClass('active');
        $(this).
            parents('.item-tile-video').
            append('<iframe width="100%" height="100%" src="' + videoURL +
                '" frameborder="0" allowfullscreen></iframe>');
        return false;
    });

    //tiles-slider-box
    if (!!$('.js-tiles-slider-box').offset()) {
        $('.js-tiles-slider-box .slider').slick({
            dots: true,
            slidesToShow: 3,
            variableWidth: false,
            infinite: false,
            adaptiveHeight: true,
            rows: 1,
            swipeToSlide: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                    },
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1.4,
                        arrows: false,
                    },
                },
            ],
        });
    }
    //tiles-slider-box
    if (!!$('.items-photo-slider').offset()) {
        $('.items-photo-slider').slick({
            dots: false,
            slidesToShow: 6,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                    },
                },
            ],
        });
    }

    /**
     * Кнопки меню для переключения табов
     * @type {jQuery|HTMLElement|*}
     */
    let dataJsBtn = $('[data-js-btn]');
    /**
     * Блоки табов для переключения
     * @type {jQuery|HTMLElement|*}
     */
    let dataTabBlocks = $('[data-tab-block]');
    dataJsBtn.on('click', function(e) {
        e.preventDefault();
        dataJsBtn.removeClass('active');
        let num = this.dataset.jsBtn;
        if (!$(this).find('.svg-text').hasClass('rotane-none')) {
        }
        $(`[data-js-btn="${num}"]`).addClass('active');
        let dataTabBlock = $(`[data-tab-block="${num}"]`);
        dataTabBlocks.hide();
        dataTabBlock.show();
    });

    /**
     * Анимация кликов по меню
     * @type {jQuery|HTMLElement|*}
     */
    let jsAnchorButton = $('.js-anchor-button');
    jsAnchorButton.on('click', function(e) {
        // if($(this).find('.svg-text').hasClass('rotane-none')) return false;
        jsAnchorButton.removeClass('active');
        $(this).addClass('active');
        return false;
    });

    var iti;
    const inputs = document.querySelectorAll('.js-mask-phone');
    inputs.forEach(function(input) {
        iti = window.intlTelInput(input, {
            localizedCountries: [{'ru': 'Россия'}],
            preferredCountries: ['ru'],
            autoPlaceholder: 'aggressive',
            utilsScript: '/local/templates/cleverence_new/js/intlTelInputUtils.js',
        });

    });

    if (!!$.prototype.mask) {
        $.mask.definitions['9'] = false;
        $.mask.definitions['*'] = '[0-9]';
        $('.js-mask-phone').mask('+7 (***) ***-**-**');
        $('.js-mask-phone').on('countrychange', e => {
            const countryData = iti.getSelectedCountryData();
            let $this = $(e.currentTarget),
                mask = '+' + countryData.dialCode + ' (***) ***-**-**';
            $this.val('').mask(mask).focus();
        });
    }
});
