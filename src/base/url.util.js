class LM_util_url {
    /**
     * 获取Url中对应字段的值
     *
     * @param {string} name - 字段名称
     * @return {*}
     */
    static getQueryString(name) {
        let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        let regRewrite = new RegExp('(^|/)' + name + '/([^/]*)(/|$)', 'i');
        let r = window.location.search.substr(1).match(reg);
        let q = window.location.pathname.substr(1).match(regRewrite);
        if (r !== null) {
            return decodeURIComponent(r[2]);
        } else if (q !== null) {
            return decodeURIComponent(q[2]);
        } else {
            return null;
        }
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
    static getQuerySet() {
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
    static setUrlQuery(newQuerySet, config = {isApply: true}) {
        let resQuerySet = config.isWithOld ? Object.assign({}, LM_util_url.getQuerySet(), newQuerySet) : newQuerySet;

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
    static delUrlQueryByKey(key, config = {isApply: true}) {
        let oldQuerySet = LM_util_url.getQuerySet();

        delete oldQuerySet[key];

        return LM_util_url.setUrlQuery(oldQuerySet, config);
    }

}

module.exports = LM_util_url;