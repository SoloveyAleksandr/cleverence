'use strict';
document.addEventListener('DOMContentLoaded', function() {
    
    /**
     * родительские элементы меню
     * @type {NodeListOf<Element>}
     */
    const parentItemMenu = document.querySelectorAll('.ns-header-menu-title');

    // определяем положение верхнего края фонового блока
    function positionTopBg() {
        let menu = $('.ns-wrapper');
        $('.ns-wrapper-bg').
            css({'top': menu.offset().top + menu.height() - self.pageYOffset});
    }

    // работа с desktop меню
    function workDesktopMenu() {
        /**
         * пункт родительского меню
         * @type {NodeListOf<Element>}
         */
        let parentMenu = document.querySelectorAll('.js-parent-menu');
        /**
         * фон затемнения
         * @type {Element}
         */
        let wrapperBg = document.querySelector('.ns-wrapper-bg');
        /**
         * таймер отслеживания бездействия пользователя
         */
        let userTimer;
        /**
         * время таймера отслеживания бездействия пользователя
         */
        let timer = 30000;

        /**
         * закрыть меню
         */
        function closetMenu() {
            parentMenu.forEach(itemMenu => {
                itemMenu.classList.remove('active');
            });
            wrapperBg.classList.remove('show');
        }

        /**
         * отслеживаем бездействия пользователя
         */
        function sleepUser() {
            function clearTimer() {
                clearTimeout(userTimer);
                userTimer = setTimeout(() => {
                    // closetMenu()
                }, timer);
            }

            document.addEventListener('mousemove', (e) => {
                clearTimer();
            });
            document.addEventListener('keydown', (e) => {
                clearTimer(userTimer);
            });
            document.addEventListener('scroll', (e) => {
                clearTimer(userTimer);
            });

        }

        /**
         * клик по родительскому пункту
         */
        if (parentMenu) {
            parentMenu.forEach(item => {
                item.addEventListener('click', function() {
                    if (document.documentElement.clientWidth < 500) return true;

                    parentMenu.forEach(itemMenu => {
                        itemMenu.classList.remove('active');
                    });
                    if (this.className.includes('active')) {
                        wrapperBg.classList.remove('show');
                    } else {
                        this.classList.add('active');
                        wrapperBg.classList.add('show');
                    }
                    positionTopBg();
                    sleepUser();
                });
            });
        }

        // определяем положение верхнего края фонового блока при scroll
        $(window).scroll(function() {
            if (document.documentElement.clientWidth < 500) return true;

            positionTopBg();
        });

        /**
         * закрыть меню при нажатии на ESC
         */
        document.addEventListener('keydown', function(e) {
            if (document.documentElement.clientWidth < 500) return true;

            if (e.code === 'Escape') {
                closetMenu();
            }
        });

        /**
         * закрыть меню при клике мимо меню
         */
        document.addEventListener('click', function(e) {
            if (document.documentElement.clientWidth < 500) return true;

            let elem = e.target;
            if (!(elem.classList.contains('ns-header-menu-title') ||
                elem.closest('.ns-header-menu'))) {
                closetMenu();
            }
        });

    }

    // работа с mobil меню
    function workMobilMenu() {
        parentItemMenu.forEach(item => {
            item.addEventListener('click', function() {
                if (document.documentElement.clientWidth >= 500) return true;

                parentItemMenu.forEach(itemMenu => {
                    if (item !== itemMenu) {
                        console.log('itemMenu', itemMenu);
                        itemMenu.classList.remove('active');
                        $(itemMenu).next().slideUp();
                    }
                });
                console.log('active', this);
                this.classList.toggle('active');
                $(this).next().slideToggle();
            });
        });
    }

    workDesktopMenu();
    workMobilMenu();

});