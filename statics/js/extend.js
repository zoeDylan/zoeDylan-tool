/*
 * JS函数扩展
 * 作者：zoeDylan
 * 描述：收集网络上各种高性能、实用性高、兼容解决等JS功能，方便平时开发
 */
; (function () {
    var versions = '0.0.1';
    var zoe = window['zoeDylan'] || {};
    zoe.extend = {
        versions: versions,
        v: versions
    }
    window['zoeDylan'] = zoe;
    window['zoe'] = zoe;
})();

/*
 * 随机值
 * min:最小值
 * max:最大值
 * randomNum(10,20);获取10到20的值
 * randomNum(10);获取0-10的值
 * randomNum(1.0,10);获取0-10的值(小数)
 */
function randomNum(min, max) {
    if (typeof (max) == 'undefined') {
        max = min;
        min = 0;
    }
    return Math.random() * (max - min) + min;
}

/*
 * 随机字符串
 * 默认32位字符
 * len:返回字符串长度
 * char:指定字符串
 */
function randomString(length, chars) {
    length = length || 32;

    chars = chars || 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    var pwd = '';
    for (i = 0; i < length; i++) {
        pwd += chars.charAt(randomNum(chars.length));
    }
    return pwd;
}

/*
 * 随机颜色值
 */
function randomColor() {
    return "#" + ("00000" + ((Math.random() * 16777215 + 0.5) >> 0).toString(16)).slice(-6);
}

/*
 * 去字符串首尾空格
 * 使用理由：性能优化惊人
 * 代码来源：http://www.cnblogs.com/rubylouvre/archive/2009/09/18/1568794.html
 * 描述：它先是把可能的空白符全部列出来，在第一次遍历中砍掉前面的空白，第二次砍掉后面的空白。全过程只用了indexOf与substring这个专门为处理字符串而生的原生方法，没有使用到正则。速度快得惊人，估计直逼上内部的二进制实现，并且在IE与火狐（其他浏览器当然也毫无疑问）都有良好的表现。速度都是零毫秒级别的。
 */
String.prototype.trim = function () {
    var str = this,
    whitespace = ' \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000';
    for (var i = 0, len = str.length; i < len; i++) {
        if (whitespace.indexOf(str.charAt(i)) === -1) {
            str = str.substring(i);
            break;
        }
    }
    for (i = str.length - 1; i >= 0; i--) {
        if (whitespace.indexOf(str.charAt(i)) === -1) {
            str = str.substring(0, i + 1);
            break;
        }
    }
    return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
}