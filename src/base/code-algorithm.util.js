export function s4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

/**
 * 生成UUid
 * @returns {string}
 */
export function getUUid() {
    return (s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4());
}

/**
 * 生成UUid的第二种方式
 * @returns {string}
 */
export function getUUid2() {
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
export function characterEscape(source) {
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

export default {
    characterEscape,
    getUUid2,
    getUUid,
    s4
}