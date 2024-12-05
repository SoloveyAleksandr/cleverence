document.addEventListener('DOMContentLoaded', function() {

    /**
     * анимация числа
     * @param num число до которого нужно анимировать
     * @param elem элемент который нужно анимировать
     */
    function outNum(num, elem) {
        const time = 1000;
        const step = 1;
        let n = 0;
        let t = Math.round(time / (num / step));
        let interval = setInterval(() => {
            n = n + step;
            if (n >= num) {
                clearInterval(interval);
            }
            elem.innerHTML = n;
        }, t);
    }

    /**
     *  проверка на видимость блока
     * @param element дом элемент
     * @return {boolean}
     */
    function visible(element) {
        if (element.offsetWidth === 0 || element.offsetHeight ===
            0) return false;
        let height = document.documentElement.clientHeight,
            rects = element.getClientRects(),
            on_top = function(r) {
                let x = (r.left + r.right) / 2, y = (r.top + r.bottom) / 2;
                return document.elementFromPoint(x, y) === element;
            };
        for (let i = 0, l = rects.length; i < l; i++) {
            let r = rects[i],
                in_viewport = r.top > 0 ? r.top <= height : (r.bottom > 0 &&
                    r.bottom <= height);
            if (in_viewport && on_top(r)) return true;
        }
        return false;
    }

    /**
     * заголовки блоков
     * @type {NodeListOf<Element>}
     */
    let title = document.querySelectorAll('.inner-partners-box .tile-title');
    /**
     * оборачиваем числа в заголовках дополнительным
     */
    title.forEach(item => {
        item.innerHTML = item.innerHTML.replace(/([1-9][0-9]+)/g,
            '<span class=\'js-number-animations\'>$1</span>');
    });

    /**
     * список чисел для анимации
     * @type {NodeListOf<Element>}
     */
    let number = document.querySelectorAll('.js-number-animations');
    let elements = [];
    /**
     * создаем массив элементов для анимации
     */
    number.forEach((item, i) => {
        const num = item.innerHTML.match(/([1-9][0-9]+)/g);
        elements[i] = {item, num, isStart: false};
    });

    window.addEventListener('scroll', function() {
        /**
         *анимация чисел при скроле
         */
        number.forEach((item, i) => {
            if (visible(elements[i]['item']) && elements[i]['isStart'] ===
                false) {
                outNum(elements[i]['num'], elements[i]['item']);
                elements[i]['isStart'] = true;
            }
        });
    });
});