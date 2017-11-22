/** 
 * cookie处理
 * @author zoeDylan
 * @time 2017-11-22
 * 
 * 方法：
 *  1. _cookie.set(name,val,day);
 *  2. _cookie.get(name);
 *  3. _cookie.getAll();
 *  4. _cookie.clear(name);
 *  5. _cookie.clearAll();
 */
module.expires = (() => {
    let cookie = {};

    cookie.setCookie = (cname, cvalue, exdays) => {
        let d = new Date();
        exdays = exdays || 0;
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }
    cookie.getCookie = (name) => {
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
    cookie.clearCookie = (name) => {
        setCookie(name, "", -1);
    }
    cookie.getAllCookie = () => {
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
    cookie.clearAllCookie = () => {
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