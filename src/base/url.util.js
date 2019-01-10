import {removeSpEle} from "./array.util";

/**
 * 获取Url中对应字段的值
 *
 * @param {string} name - 字段名称
 * @return {*}
 */
export function getQueryString(name) {
    if (!location) {
        return null;
    }

    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    let r = location.search.substr(1).match(reg);

    return r !== null && decodeURIComponent(r[2]) || null;
}

/**
 * 获取URL中的检索参数，以键值对的方式返回
 *
 * @return {Object}
 *
 * @example
 * 当前URL为http://localhost:8091/views/article/articleDetail.html?id=22046&isToComment=0
 * 返回值为 {id: "22046", isToComment: "0"}
 */
export function getQuerySet() {
    if (!location) {
        return null;
    }
    let queryStr = location.search.substr(1, location.search.length);
    let kVArr = queryStr.split('&');
    let res = {};

    kVArr = removeSpEle(kVArr, '');

    kVArr.forEach(item => {
        let kv = item.split('=');
        res[kv[0]] = kv[1];
    });

    return res;
}

/**
 * 设置URL的参数
 *
 * @param {Object} newQuerySet - 新检索参数，k-v
 * @param {Object} [config] - 其他配置参数
 * @param {boolean} [config.isWithOld] - 是否合并原有参数
 * @param {boolean} [config.isApply] - 是否直接作用到window.location.href，默认为true
 *
 * @return {string} 变更后的url
 * @example
 *
 * 当前URL为http://localhost:8091/views/article/articleDetail.html?id=22046&isToComment=0
 *
 * 情况一
 * newQuerySet = {a:1,b:2}
 * isWithOld = true
 * 结果为：http://localhost:8091/views/article/articleDetail.html?id=22046&isToComment=0&a=1&b=2
 *
 * 情况二
 * newQuerySet = {a:1,b:2}
 * isWithOld = false
 * 结果为：http://localhost:8091/views/article/articleDetail.html?a=1&b=2
 */
export function setUrlQuery(newQuerySet, config = {isApply: true}) {
    if (!location) {
        return '';
    }
    let resQuerySet = config.isWithOld ? Object.assign({}, getQuerySet(), newQuerySet) : newQuerySet;

    let resSearch = Object.keys(resQuerySet).map(key => {
        return `${key}=${resQuerySet[key]}`;
    }).join('&');

    if (config && config.isApply) {
        location.search = resSearch;
    }

    return location.origin + location.pathname + '?' + resSearch;
}

/**
 * 根据参数删除URL中的某个检索参数
 *
 * @param {string} key - 要删除的参数
 * @param {Object} [config] - 其他配置参数
 * @param {boolean} [config.isApply] - 是否直接作用到window.location.href，默认为true
 * @return {string} 变更后的url
 *
 * @example
 * 当前URL为http://localhost:8091/views/article/articleDetail.html?id=22046&isToComment=0
 * key为isToComment
 * 结果为：http://localhost:8091/views/article/articleDetail.html?id=22046
 */
export function delUrlQueryByKey(key, config = {isApply: true}) {
    let oldQuerySet = getQuerySet();

    delete oldQuerySet[key];

    return setUrlQuery(oldQuerySet, config);
}

/**
 * 更新URL但不刷新当前页面
 * @param {Object} config
 * @param {Object} config.state
 * @param {String} config.title - 标题
 * @param {String} config.url - 新URL
 */
export function changeUrlWithoutRefresh(config) {
    if (window.history) {
        window.history.pushState(config.state, config.title, config.url);
    }
}

export default {
    getQueryString,
    delUrlQueryByKey,
    setUrlQuery,
    changeUrlWithoutRefresh
};