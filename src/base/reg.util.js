/**
 * Created by hunter on 2017-09-13.
 */
class LM_util_regPattern {
    constructor() {

    }
}

LM_util_regPattern.REG_PATTERN = {
    CHINESE: /[\u4e00-\u9fa5]/,   // 中文字符匹配
    DOUBLE_BYTE: /[^\x00-\xff]/   // 双字节字符匹配
};
module.exports = LM_util_regPattern;