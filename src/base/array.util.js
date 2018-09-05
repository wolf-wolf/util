/**
 * Created by hunter on 2017-08-24.
 */
/**
 * 在数组的指定位置加入新数组
 * @param {Number} idx - 待插入位置
 * @param {Array} insertArr - 待插入数组
 * @param {Array} targetArr - 插入的目标数组
 *
 * @example
 * let arr1 = [1,2,3];
 * let arr2 = ['a','b','c'];
 *
 * LM_util_array.insertArrToArr(1,arr1,arr2);
 * //result ["a", "b", 1, 2, 3, "c"]
 */
export function insertArrToArr(idx, insertArr, targetArr) {
    if (insertArr) {
        for (let i = 0; i < insertArr.length; i++) {
            targetArr.splice(idx + 1 + i, 0, insertArr[i]);
        }
    }

    return targetArr;
}

/**
 * 生成指定长度有统一初始值的数组
 *
 * @param {Number} len - 长度
 * @param {*} val - 初始值
 * @returns {Array[]}
 *
 * @example
 * let res = createSpArray(4,{});
 * result：
 * res = [{}, {}, {}, {}]
 *
 * @attention 若val是对象的话，则为引用，所有值将同步改变
 * 如上结果中
 * res[0].hi = 'hi';
 * 则
 * res = [{hi:'hi'},{hi:'hi'},{hi:'hi'},{hi:'hi'}]
 */
export function createSpArray(len, val) {
    return Array(len).fill(val);
}

/**
 * 剔除数组中制定的元素
 *
 * @param {Array} arr - 待操作的数组
 * @param {*} ele - 需要剔除的元素
 * @returns {*}
 */
export function removeSpEle(arr, ele) {
    return arr.filter(t => t !== ele);
}

/**
 * 将树形结构转换为Map结构，其中tree中的子列表的属性名为children
 * @param {Array} tree - 树形结构数据
 * @param {Object | Map} treeMap - 得到的Map
 * @param {Object} propMap - 需要在Map中留存的tree中对象的属性对应列表，eg.{text:fullname,id:id}
 */
export function tree2Map(tree, treeMap, propMap) {
    for (let i = 0; i < tree.length; i++) {
        let _tempObj = {};

        if (propMap) {
            Object.keys(propMap).forEach(key => _tempObj[propMap[key]] = tree[i][key]);
        } else {
            Object.keys(tree[i]).forEach(key => {
                if (key !== 'children') {
                    _tempObj[key] = tree[i][key];
                }
            });
        }

        // treeMap.set(tree[i].id, _tempObj);
        treeMap[tree[i].id] = _tempObj;

        // treeMap.get(tree[i].id).childrenIds = [];
        treeMap[tree[i].id].childrenIds = [];

        if (tree[i].children && tree[i].children.length > 0) {
            for (let j = 0; j < tree[i].children.length; j++) {
                // treeMap.get(tree[i].id).childrenIds.push(tree[i].children[j].id);
                treeMap[tree[i].id].childrenIds.push(tree[i].children[j].id);
            }

            LM_util_array.tree2Map(tree[i].children, treeMap, propMap);
        }
    }
}

export default {
    insertArrToArr,
    createSpArray,
    removeSpEle,
    tree2Map
}