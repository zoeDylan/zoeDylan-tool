/**
 * URL相关处理
 * @author zoeDylan
 * @update 2017-11-22
 * 
 * 方法：
 *  1. queryURL(URL)
 * 
 */

function queryURL(url) {
    url = url.split('?');
    if (url[1]) {
        url = url[1];
        const params = {};
        url.split('&').forEach((param) => {
            param = param.split('=');
            params[param[0]] = param[1];
        });
        return params;
    } else {
        return {}
    }
}

module.exports = {
    queryURL: queryURL
}