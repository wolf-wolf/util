const array_util = require('./array.util');
const code_algorithm_util = require('./code-algorithm.util');
const other_util = require('./other.util');
const env_util = require('./env.util');
const image_util = require('./image.util');
const obj_util = require('./obj.util');
const reg_util = require('./reg.util');
const string_util = require('./string.util');
const time_and_date_util = require('./time-and-date.util');
const type_comparison_util = require('./type-comparison.util');
const url_util = require('./url.util');

module.exports.LM_base_util = {
    array: array_util,
    image: image_util,
    obj: obj_util,
    reg: reg_util,
    other: other_util,
    string: string_util,
    code: code_algorithm_util,
    env: env_util,
    time: time_and_date_util,
    type: type_comparison_util,
    url: url_util,
};