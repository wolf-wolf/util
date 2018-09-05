/**
 * Created by hunter on 2017-08-28.
 */
/**
 * 通过promise实现同步数据流
 */
export class DataStream {
    constructor(data = null) {
        this.data = data;
        this.promiseList = [];
    }

    /**
     * 管道函数
     * @param {Function} func - 待执行函数，如果是异步则需返回一个promise
     */
    pipe(func) {
        let _self = this;
        let canExecute = $q.all(_self.promiseList);
        let defer = $q.defer();

        _self.promiseList.push(defer.promise);

        canExecute.then(function () {
            let _res_ = func(_self.data);
            if (_res_ && angular.isFunction(_res_.finally)) {
                _res_.finally(function () {
                    defer.resolve();
                });
            } else {
                defer.resolve();
            }
        });

        return _self;
    };
}

/**
 * @description 安全$apply方法，保证不进行重复的脏检查
 * @param {Object} scope - 作用域
 * @param {Function} fn - 要执行的函数
 */
export function safeApply(scope, fn) {
    let phase = scope.$root.$$phase;
    if (phase === '$apply' || phase === '$digest') {
        if (fn && (typeof (fn) === 'function')) {
            fn();
        }
    } else {
        scope.$apply(fn);
    }
}

let exportFunc = null;
try {
    if (angular) {
        exportFunc = {
            DataStream: DataStream,
            safeApply: safeApply
        }
    }
} catch (e) {
    exportFunc = null;
}

export default exportFunc;
