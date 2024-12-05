document.addEventListener('DOMContentLoaded', async function() {

    /**
     * работа с cookie
     * @param name
     * @return {string|undefined}
     */
    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
            '=([^;]*)',
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    /**
     * количество посещений на странице
     * @type {string|undefined}
     */
    let countVisited = getCookie('countVisited');
    /**
     * проверяем новая ли сессия
     * @type {string|undefined}
     */
    let liveVisited = getCookie('liveVisited');

    let num = countVisited ? ++countVisited : 1;

    if (!liveVisited) {
        document.cookie = 'liveVisited=1';
        let liveTimeCookie = 60 * 60 * 24 * 2;
        document.cookie = `countVisited=${num}; max-age=${liveTimeCookie}`;
    }

    /**
     * запрос на получение контента баннера
     */
    BX.ajax.get(
        location.href,
        function(response) {
            let bannerMain = document.querySelector('.banner-main');
            bannerMain.innerHTML = response;
        });

    $(document).on('click', '.js-show-text', () => {
        $('.js-block-text').toggleClass('active');
    });
});