document.addEventListener('DOMContentLoaded', async function() {

    /**
     * работа с cookie
     * @param name
     * @return {string|undefined}
     */
    let getCookie = (name) => {
        let matches = document.cookie.match(new RegExp(
            '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
            '=([^;]*)',
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    };

    /**
     * кнопка закрытия баннера
     * @type {Element}
     */
    const btnBannerHide = document.querySelector('.js-hide-banner');
    /**
     * баннер
     * @type {Element}
     */
    const banner = document.querySelector('.ns-block-social');
    if (banner) {
        btnBannerHide.addEventListener('click', function() {
            banner['style'].visibility = 'hidden';
            document.cookie = `hideBanner=1`;
        });
    }
});