// import {replaceSpace} from "./string.util";

/**
 * 获取制定cookie字段
 * @param {String} name - 需要获取的cookie字段名称
 * @returns {RegExpExecArray | string | string}
 */
export function getCookieByName(name) {
    let cookie = document.cookie.replace(/\s/g, "");
    let pattern = new RegExp(name + '=([^;]*);?');
    let res = pattern.exec(cookie);

    return res && encodeURIComponent(res[1]) || '';
}

/**
 * 设置cookie字段
 * @param {String} name - cookie的name
 * @param {String} value
 * @param {Object} [config] - 其他设置
 * @param {Number | String} [config.exDays] - expires的设置
 * @param {String} [config.path] - path的设置参数
 * @param {String} [config.domain] - domain的设置参数
 */
export function setCookie(name, value, config) {
    let expires = '', path = '', domain = '';

    if (config) {
        if (config.exDays) {
            let d = new Date();
            d.setTime(d.getTime() + (config.exDays * 24 * 60 * 60 * 1000));
            expires = `expires=${d.toGMTString()};`;
        }

        config.path && (path = `path=${config.path}`);

        config.domain && (domain = `domain=${config.domain}`);
    }

    document.cookie = `${name}=${encodeURIComponent(value)}; ${expires} ${path} ${domain}`;
}

/**
 * 以对象的形式，获取所有的cookie字段
 * @returns {*}
 */
export function getCookies() {
    const ca = document.cookie && replaceSpace(document.cookie).split(';');
    let res = null;
    if (ca.length) {
        res = {};
        ca.forEach(item => {
            let kv = item.split('=');
            res[kv[0]] = kv[1];
        });
    }

    return res;
}

/**
 * 检测特定的cookie是否存在
 * @param name
 * @returns {boolean}
 */
export function checkCookie(name) {
    return !!getCookieByName(name);
}

