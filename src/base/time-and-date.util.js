class LM_util_timeAndDate {
    /**
     * 将时间转换为对应格式
     * @param {number} timeStamp 传入的原始时间戳
     * @param {string} format 进行格式化的模板
     * @return {string} 返回的格式化后的日期
     */
    static formatDate(timeStamp, format) {
        const yearPtn = 'yyyy', monthPtn = 'MM', dayPtn = 'dd', hoursPtn = 'hh', minutesPtn = 'mm', secondsPtn = 'ss',
            millisecondsPtn = 'S',
            date = new Date(timeStamp),
            year = date.getFullYear(),
            month = date.getMonth(),
            day = date.getDate(),
            hours = date.getHours(),
            minutes = date.getMinutes(),
            seconds = date.getSeconds(),
            milliseconds = date.getMilliseconds();
        return format
            .replace(yearPtn, year)
            .replace(monthPtn, month)
            .replace(dayPtn, day)
            .replace(hoursPtn, hours)
            .replace(minutesPtn, minutes)
            .replace(secondsPtn, seconds)
            .replace(millisecondsPtn, milliseconds);
    }
}

module.exports = LM_util_timeAndDate;