/**
 * 将可能是数组或字符串的数据转换为数组
 * @param {string | array} data
 */
export function strToArr(data) {
    switch (typeof data) {
        case 'string':
            return str.trim() && (_arr = str.split(','));
        case 'array':
            return data;
    }
}

/**
 * 首字母大写
 *
 * @param {String} str - 初始的字符串
 * @returns {string}
 */
export function initialCapital(str) {
    if (!str) {
        throw new Error(`string can't be empty`);
    }
    return str[0].toUpperCase() + str.substr(1, str.length);
}

/**
 * 对字符串进行补位操作
 *
 * @param {String} raw - 源字符串
 * @param {Number} count - 结果的位数
 * @param {String|Number} filler - 填充物
 * @param {Number} direct - 方向1位左侧补位，非1为右侧补位，默认为1
 * @returns {string}
 */
export function pad(raw, count, filler, direct = 1) {
    let res = raw + '';

    if (!LM_util_typeComparison.isInTypes(filler, ['number', 'string'])) {
        throw new Error('filler must be type [Number or String]');
    } else {
        filler = filler + '';
        if (filler.length === 0) {
            throw new Error(`filler can't be empty string`);
        }
    }

    try {
        if (res.length >= count) {
            res = direct === 1 ? res.substr(0, count) : res.substr(count - 1, res.length);
        } else {
            let fillerStr = Array(count - res.length).fill(filler).join('');
            res = direct === 1 ? (fillerStr + res) : (res + fillerStr);
        }

    } catch (e) {
        throw new Error(e);
    }

    return res;
}


export default {
    strToArr, initialCapital, pad
}