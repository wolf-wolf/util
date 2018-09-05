/**
 * Created by hunter on 2017-09-13.
 */
export const CHINESE = /[\u4e00-\u9fa5]/;   // 中文字符匹配
export const DOUBLE_BYTE = /[^\x00-\xff]/;   // 双字节字符匹配
export default {
    CHINESE, DOUBLE_BYTE
}