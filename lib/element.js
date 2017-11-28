/**
 * 元素操作
 * @update 2017-11-28
 * @author zoeDylan
 * 
 * 方法：
 *  1. hasClass(elements,cName)
 *  2. addClas(elements,cName)
 *  3. removeClass(elements,cName)
 */


/**
 * 查询元素是否存在class名称
 */
function hasClass(elements, cName) {
    return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)")); // ( \\s|^ ) 判断前面是否有空格 （\\s | $ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断
};

/**
 * 给元素添加class名称
 */
function addClass(elements, cName) {
    if (!hasClass(elements, cName)) {
        elements.className += " " + cName;
    };
};

/**
 * 移除元素某个class名称
 */

function removeClass(elements, cName) {
    if (hasClass(elements, cName)) {
        elements.className = elements.className.replace(new RegExp("(\\s|^)" + cName + "(\\s|$)"), " "); // replace方法是替换
    };
};


module.exports = {
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass
}