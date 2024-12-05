document.addEventListener('DOMContentLoaded', function() {

    let documentWith = document.documentElement.clientWidth;
    /**
     * поле поиска
     * @type {Element}
     */
    let jsFieldSearch = document.querySelector('.js-field-search');
    /**
     * увеличительное стекло
     * @type {Element}
     */
    let btnSubmit = document.querySelector('.js-btn-submit');
    /**
     * форма поиска
     * @type {Element}
     */
    let searchForm = document.querySelector('.js-search-form');
    /**
     * задний затемненный форм при показе формы
     * @type {Element}
     */
    let searchBg = document.querySelector('.js-search-bg');
    /**
     * форма поиска
     * @type {Element}
     */
    let jsSearchForm = document.querySelector('.js-search-form');

    // передаем событие из дефолтной формы поиска в яндекс поиск
    jsSearchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (jsFieldSearch.value && jsFieldSearch.value.length > 0) {
            let yaSiteSubmit = document.querySelector('.ya-site-form__submit');
            let event = new Event('click');
            yaSiteSubmit.dispatchEvent(event);
        }
    });

    // передаем данные из дефолтной формы поиска в яндекс поиск
    jsFieldSearch.addEventListener('input', function() {
        let yaSiteFieldSearch = document.querySelector(
            '.ya-site-form__input-text');
        yaSiteFieldSearch.value = this.value;
    });

    // работа с полем поиска desktop
    function workSearchDesktop() {
        if (documentWith < 500) return;

        // определяем верхнею точку фона затемнения
        function positionTopBg() {
            let menu = $('.ns-wrapper');
            $('.js-search-bg').
                css({
                    'top': menu.offset().top + menu.height() - self.pageYOffset,
                });
        }

        // скрыть форму поиска
        function hideSearch() {
            searchForm.classList.remove('ns-show-form');
            searchBg.classList.remove('show');
            $('body').removeClass('no-scroll');
        }

        // скрываем меню при нажатии ESC
        document.addEventListener('keydown', function(e) {
            if (e.keyCode === 27) {
                hideSearch();
            }
        });

        // скрываем меню при клике по фону затемнения
        searchBg.addEventListener('click', function() {
            hideSearch();
        });

        // показать форму поиска
        let linkSearch = document.querySelector('.js-link-search');
        linkSearch.addEventListener('click', function() {
            searchForm.classList.add('ns-show-form');
            searchBg.classList.add('show');
            $('body').addClass('no-scroll');
            console.log(jsFieldSearch);
            setTimeout(function() {
                jsFieldSearch.focus();
            }, 500);
            positionTopBg();
        });
    }

    // работа с полем поиска mobile
    function workSearchMobile() {
        if (documentWith >= 500) return;
        jsFieldSearch.placeholder = 'Поиск';
        jsFieldSearch.addEventListener('focus', function() {
            this.placeholder = 'Поисковый запрос';
        });
        jsFieldSearch.addEventListener('blur', function(e) {
            this.placeholder = 'Поиск';
        });
        btnSubmit.addEventListener('click', function() {
            let ownEventSubmit = new Event('submit');
            searchForm.dispatchEvent(ownEventSubmit);
        });
    }

    workSearchDesktop();
    workSearchMobile();

    window.addEventListener('resize', function(event) {
        documentWith = document.documentElement.clientWidth;
        workSearchDesktop();
        workSearchMobile();
    }, true);

});