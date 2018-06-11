class LM_util_codeAlgorithm {
    static S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }

    /**
     * 生成UUid
     * @returns {string}
     */
    static getUUid() {
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    }

    /**
     * 生成UUid的第二种方式
     * @returns {string}
     */
    static getUUid2() {
        let s = [];
        let hexDigits = "0123456789abcdef";
        for (let i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
        s[8] = s[13] = s[18] = s[23] = "-";

        return s.join("");
    }

    /**
     * 特殊字符的转义
     *
     * @param source
     * @returns {string}
     */
    static characterEscape(source) {
        const replaceMap = {
            /* jshint ignore:start */
            '&amp;': '&',
            '&lt;': '<',
            '&gt;': '>',
            '&quot;': '"',
            /* eslint-disable quotes */
            '&#39;': "'"
        };
        source += '';

        return source.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;)/g, function (c) {
            return replaceMap[c];
        });
    }
}

module.exports = LM_util_codeAlgorithm;