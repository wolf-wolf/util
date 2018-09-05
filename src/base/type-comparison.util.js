/**
 * 是否为指定类型
 *
 * @param {*} data - 待检测的数据
 * @param {String} type - 指定的类型
 * @returns {Boolean}
 */
export function isType(data, type) {
    type = LM_util_string.initialCapital(type);
    return Object.prototype.toString.call(data) === `[object ${type}]`;
}

/**
 * 是否为字符串
 *
 * @param {*} data - 待检测的数据
 * @returns {Boolean}
 */
export function isString(data) {
    return LM_util_codeAlgorithm.isType(data, 'string');
}

/**
 * 是否为函数
 *
 * @param {*} data - 待检测的数据
 * @returns {Boolean}
 */
export function isFunction(data) {
    return LM_util_codeAlgorithm.isType(data, 'function');
}

/**
 * 是否为对象
 *
 * @param {*} data - 待检测的数据
 * @returns {Boolean}
 */
export function isObject(data) {
    return LM_util_codeAlgorithm.isType(data, 'object');
}

/**
 * 是否为数字
 *
 * @param {*} data - 待检测的数据
 * @returns {*}
 */
export function isNumber(data) {
    return LM_util_codeAlgorithm.isType(data, 'number');
}

/**
 * 判断是否在给定的类型中
 *
 * @param {*} data - 待检测的数据
 * @param {Array} types - 类型数组
 * @returns {boolean}
 */
export function isInTypes(data, types) {
    let isInTypes = false;

    for (let i = 0; i < types.length; i++) {
        if (isInTypes = LM_util_typeComparison.isType(data, types[i])) {
            break;
        }
    }
    return isInTypes;

}

export default {
    isType, isString, isFunction, isObject, isNumber, isInTypes
}