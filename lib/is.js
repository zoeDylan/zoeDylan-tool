/**
 * 各种判断
 *
 * @update 2017-08-08
 * @author zoeDylan
 */
/**
 * 是否是邮箱
 * @param {*String} val 邮箱
 */
function _isEmail(val = '') {
    return /^[0-9a-z][a-z0-9\._-]{1,}@[a-z0-9-]{1,}[a-z0-9]\.[a-z\.]{1,}[a-z]$/.test(val)
}

/**
 * 是否是手机号[无依赖]
 */
function _isPhone(val) {
    return /^1[3|4|5|7|8][0-9]\d{8}$/.test(val);
}


module.exports = {
    _isEmail: _isEmail,
    _isPhone: _isPhone
}