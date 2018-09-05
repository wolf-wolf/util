const AlphaUMa = require('./base/index');

(function (root, factory) {
    if (typeof exports === 'object') {
        // Node, CommonJS之类的
        module.exports = factory();
    } else {
        // 浏览器全局变量(root 即 window)
        root.AlphaUMa = factory();
    }
}(global, () => AlphaUMa));