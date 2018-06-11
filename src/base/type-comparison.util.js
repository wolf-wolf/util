class LM_util_typeComparison {
    static isType(data, type) {
        type = type[0].toUpperCase() + type.substr(1, type.length);
        return Object.prototype.toString.call(data) === `[object ${type}]`;
    }

    /**
     * 是否为字符串
     *
     * @param {*} data - 待检测的数据
     * @returns {*}
     */
    static isString(data) {
        return LM_util_codeAlgorithm.isType(data, 'string');
    }

    /**
     * 是否为函数
     *
     * @param {*} data - 待检测的数据
     * @returns {*}
     */
    static isFunction(data) {
        return LM_util_codeAlgorithm.isType(data, 'function');
    }

    /**
     * 是否为对象
     *
     * @param {*} data - 待检测的数据
     * @returns {*}
     */
    static isObject(data) {
        return LM_util_codeAlgorithm.isType(data, 'object');
    }

    /**
     * 是否为数字
     *
     * @param {*} data - 待检测的数据
     * @returns {*}
     */
    static isNumber(data) {
        return LM_util_codeAlgorithm.isType(data, 'number');
    }
}

module.exports = LM_util_codeAlgorithm;