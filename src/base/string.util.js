class LM_util_string {
    constructor() {

    }

    /**
     * 将可能是数组或字符串的数据转换为数组
     * @param {string | array} data 
     */
    static strToArr(data) {
        switch (typeof data) {
            case 'string':
                return str.trim() && (_arr = str.split(','));
            case 'array':
                return data;
        }
    }
}

module.exports = LM_util_string;