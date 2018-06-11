class LM_util_env {
    /**
     * 根据UA获取当前的设备环境
     *
     * @returns {*}
     */
    static getEquip() {
        let UA = navigator.userAgent;
        let isAndroid = /android|adr|linux/gi.test(UA);
        let isIOS = /iphone|ipod|ipad/gi.test(UA) && !isAndroid;
        let isBlackBerry = /BlackBerry/i.test(UA);
        let isInBaiDuBoxApp = /baiduboxapp/i.test(UA);
        let isWindowPhone = /IEMobile/i.test(UA);
        let isMobile = isAndroid || isIOS || isBlackBerry || isWindowPhone;
        return {
            isAndroid: isAndroid,
            isIOS: isIOS,
            isBlackBerry: isBlackBerry,
            isInBaiDuBoxApp: isInBaiDuBoxApp,
            isWindowPhone: isWindowPhone,
            isWeixin: /MicroMessenger/gi.test(UA),
            isQQ: /QQ/gi.test(UA),
            isMobile: isMobile
        };
    }

    /**
     * 进行rem适配
     *
     * @param f
     */
    static adapt(f) {
        if (!window.__fraction) {
            window.__fraction = f;
        }
        let isIphone = navigator.userAgent.indexOf('iPhone') >= 0;
        let isAndroid = navigator.userAgent.indexOf('Android') >= 0;
        document.documentElement.style.width = null;

        let dpi = window.devicePixelRatio || 1;
        if (isIphone || isAndroid) {
            dpi = Math.floor(dpi);
            let ratio = parseFloat((1 / dpi).toFixed(2));
        } else {
            let ratio = 1;
        }

        let clientWidth = document.documentElement.clientWidth;

        window.rem = clientWidth / window.__fraction;
        document.documentElement.style.fontSize = window.rem + 'px';
        if (document.body) {
            document.body.style.width = window.__fraction * window.rem + 'px';
        } else {
            document.addEventListener('DOMContentLoaded', function () {
                document.body.style.width = window.__fraction * window.rem + 'px';
            });
        }
    }
}

module.exports = LM_util_env;
