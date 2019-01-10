/**
 * 将时间转换为对应格式
 * @param {number} timeStamp 传入的原始时间戳
 * @param {string} format 进行格式化的模板
 * @return {string} 返回的格式化后的日期
 */
export function formatDate(timeStamp, format) {
    if (!timeStamp) {
        return '';
    }
    const yearPtn = 'yyyy';
    const monthPtn = 'MM';
    const dayPtn = 'dd';
    const hoursPtn = 'hh';
    const minutesPtn = 'mm';
    const secondsPtn = 'ss';
    const millisecondsPtn = 'S';

    const date = new Date(timeStamp);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();

    function _fill_(n) {
        return n < 10 ? `0${n}` : n;
    }

    return format
        .replace(yearPtn, year)
        .replace(monthPtn, _fill_(month + 1))
        .replace(dayPtn, _fill_(day))
        .replace(hoursPtn, _fill_(hours))
        .replace(minutesPtn, _fill_(minutes))
        .replace(secondsPtn, _fill_(seconds))
        .replace(millisecondsPtn, milliseconds);
}


/**
 * 将时间戳按照给定的配置进行日，时，分，秒，毫秒，提取
 * @param {String | Number} timestamp - 待提取的时间戳
 * @param {Object} [config] - 配置项
 * @param {Array} [config.step] - 对应日时分秒毫秒的配置，默认为[24, 60, 60, 1000, 1]
 *
 * @example
 * let res = departTimestamp(360001);
 * res = [0,1,0,0,1]
 *
 * let res = departTimestamp(360001,[60,60,1000,1]);
 * res = [1,0,0,1]
 *
 * let res = departTimestamp(360001,[360000]);
 * res = [1]
 * @returns {Array}
 */
export function departTimestamp(timestamp, config) {
    timestamp = +timestamp;
    let step = config && config.step || [24, 60, 60, 1000, 1];
    let res = [];

    while (step.length) {
        let c = step.reduce((a, b) => a * b, 1);
        res.push(Math.floor(timestamp / c));
        timestamp = timestamp % c;
        step.shift();
    }

    return res;
}

export default {
    formatDate,
    departTimestamp
}