import {isObject} from "./type-comparison.util";

/**
 * 通过path获取对象多层级下的属性值
 * @param {Object} obj - 对象数据
 * @param {String} path - 属性路径，eg. name/firstName
 */
export function getObjPropertyByPath(obj, path) {
    let res = obj;
    if (path.trim()) {
        let _properties = path.split('/').filter((val) => !!val.trim());

        for (let i = 0; i < _properties.length; i++) {
            if (res[_properties[i]]) {
                res = res[_properties[i]];
            } else {
                res = undefined;
                break;
            }
        }
    }

    return res;
}

/**
 * 判断传入的对象是否为空对象
 * @param {Object} obj - 带判断的对象
 * @returns {boolean}
 */
export function isEmpty(obj) {
    if (isObject(obj)) {
        return !Object.keys(obj).length;
    } else {
        throw new Error('params must be an object')
    }
}

export default {
    getObjPropertyByPath,
    isEmpty
}