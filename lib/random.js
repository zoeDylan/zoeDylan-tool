/**
 * 各种随机值
 *
 * @author zoeDylan
 * @update 2017-11-22
 *
 * 方法：
 *  1. randomColor()
 *  2. randomNum(min[,max[,decimal]])
 *  3. randomString([length[,chars]])
 */

/**
 * 获取随机颜色值[无依赖]
 *
 * randomColor()
 *
 * randomColor();//#XXXXXX(16进制)
 */
function randomColor() {
  return (
    "#" +
    ("00000" + ((Math.random() * 16777215 + 0.5) >> 0).toString(16)).slice(-6)
  );
}

/**
 * 获取随机数[无依赖]
 *
 * randomNum(min[,max[,decimal]])
 *
 * min:最小值
 * max:最大值
 * dec:是否返回小数位数，最大返回10位小数
 *
 * randomNum(10,20);//获取10到20的随机整数
 * randomNum(10);//获取0-10的随机整数
 * randomNum(10,20,5);//获取10-20的随机5位小数
 *
 */
function randomNum(min, max, dec) {
  dec = dec && dec > 10 ? 10 : dec || 0;
  if (typeof max == "undefined") {
    max = min;
    min = 0;
  }
  return Number((Math.random() * (max - min) + min).toFixed(dec));
}

/**
 * 获取随机字符串[依赖：randomNum]
 *
 * randomString([length[,chars]])
 *
 * 默认32位字符
 * length:返回字符串长度
 * chars:指定字符串
 *
 * randomString();//获取32位长度的随机字符串
 * randomString(10);//获取10位长度的随机字符串
 * randomString(10,'zoeDylan');//用zoeDylan生成10位长度的随机字符串
 *
 */
function randomString(length, chars) {
  length = length || 32;

  chars =
    chars ||
    "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678"; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
  let pwd = "";
  for (i = 0; i < length; i++) {
    pwd += chars.charAt(randomNum(chars.length));
  }
  return pwd;
}

/**
 *
 * @param {*} length
 */
function randomStringBySymbol(length) {
  return randomString(
    length||32,
    'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678~!@#$%^&*()_+`-=|[]{},.<>;:"'
  );
}

module.exports = {
  randomColor: randomColor,
  randomNum: randomNum,
  randomString: randomString,
  randomStringBySymbol: randomStringBySymbol
};
