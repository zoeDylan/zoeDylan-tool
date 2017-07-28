/** 
 * 获取随机颜色值[无依赖]
 *
 * _randomColor()
 *
 * _randomColor();//#XXXXXX(16进制)
 */
function _randomColor() {
    return "#" + ("00000" + ((Math.random() * 16777215 + 0.5) >> 0).toString(16)).slice(-6);
}


/** 
 * 获取随机数[无依赖]
 * 
 * _randomNum(min[,max[,decimal]])
 * 
 * min:最小值
 * max:最大值
 * dec:是否返回小数位数，最大返回10位小数
 * 
 * _randomNum(10,20);//获取10到20的随机整数
 * _randomNum(10);//获取0-10的随机整数
 * _randomNum(10,20,5);//获取10-20的随机5位小数
 *
 */
function _randomNum(min, max, dec) {
    dec = dec && dec > 10 ? 10 : dec || 0;
    if (typeof(max) == 'undefined') {
        max = min;
        min = 0;
    }
    return Number((Math.random() * (max - min) + min).toFixed(dec));
}


/** 
 * 获取随机字符串[依赖：_randomNum]
 * 
 * _randomString([length[,chars]])
 * 
 * 默认32位字符
 * length:返回字符串长度
 * chars:指定字符串
 * 
 * _randomString();//获取32位长度的随机字符串
 * _randomString(10);//获取10位长度的随机字符串
 * _randomString(10,'zoeDylan');//用zoeDylan生成10位长度的随机字符串
 * 
 */
function _randomString(length, chars) {
    length = length || 32;

    chars = chars.toString() || 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    let pwd = '';
    for (i = 0; i < length; i++) {
        pwd += chars.charAt(_randomNum(chars.length));
    }
    return pwd;
}

/** 
 * cookie处理，默认get、set、clear、setAll、clearAll
 *
 * _cookie.set(name,val,day);
 *
 * _cookie.get(name);
 *
 * _cookie.getAll();
 *
 * _cookie.clear(name);
 *
 * _cookie.clearAll();
 */
const _cookie = (function() {
    let cookie = {};

    cookie.setCookie = function(name, cvalue, exdays) {
        let d = new Date();
        exdays = exdays || 0;
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }
    cookie.getCookie = function(name) {
        name = name + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) != -1) {
                return c.substring(name.length, c.length)
            }
        }
        return null;
    }
    cookie.clearCookie = function(name) {
        setCookie(name, "", -1);
    }
    cookie.getAllCookie = function() {
        let all = {};
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            c = c.split('=');
            all[c[0]] = c[1];
        }
        return all;
    }
    cookie.clearAllCookie = function() {
        let keys = document.cookie.match(/[^ =;]+(?=\=)/g);
        if (keys) {
            for (let i = keys.length; i--;)
                document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
        }
    }

    return {
        set: cookie.setCookie,
        get: cookie.getCookie,
        clear: cookie.clearCookie,
        getAll: cookie.getAllCookie,
        clearAll: cookie.clearAllCookie
    };
})();


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

const
    tool = {
        _randomColor: _randomColor,
        _randomNum: _randomNum,
        _randomString: _randomString,
        _isEmail: _isEmail,
        _isPhone: _isPhone,
        _cookie: _cookie
    };

module.exports = tool;