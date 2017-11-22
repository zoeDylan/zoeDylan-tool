/**
 * 各种判断
 *
 * @update 2017-11-22
 * @author zoeDylan
 * 
 * 方法：
 *  1. isEmail(val)
 *  2. isPhone(val)
 */



/**
 * 是否是邮箱
 * @param {*String} val 邮箱
 */
function isEmail(val = '') {
    return /^[0-9a-z][a-z0-9\._-]{1,}@[a-z0-9-]{1,}[a-z0-9]\.[a-z\.]{1,}[a-z]$/.test(val)
}

/**
 * 是否是手机号[无依赖]
 */
function isPhone(val = '') {
    return /^1[3|4|5|7|8][0-9]\d{8}$/.test(val);
}


module.exports = {
    _isEmail: isEmail,
    _isPhone: isPhone
}