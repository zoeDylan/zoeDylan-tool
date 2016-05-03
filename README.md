# zoeDylan-tool
zoeDylan私人工具包


>>写点什么呢？项目进行中……

##使用

>####首先使用npm安装

>   npm zoedylan-tool

>####生成变量

>   var zoet = require('zoedylan-tool');

## 其它
### 前端js扩展：
##### 地址：https://raw.githubusercontent.com/zoeDylan/zoeDylan-tool/master/statics/js/extend.js
>## 随机数
>>#### min：最小值，max：最大值；如果只有min,那么min就是最大值,最小值默认为0
>>`_randomNum(min[,max]);`//return Num

>## 随机字符串 `_randomString`
>>#### length：字符串长度；chars：自定义字符串
>>`_randomString(length[,chars]);`//return String

>## 随机颜色值 `_randomColor`
>>`_randomColor();`//return '#333333'

>## String原型添加去首尾空格函数
>>`String.trim();`//' 字符串 '.trim();

>## 浏览器数据存储 `_cookie`
>>#### 判断是否是支持html5的localStorage存储
>>`_cookie.html5`//return true||false;
>>#### 设置cookie
>>#### name：名称；value：值；day=保存天数，默认10万天
>>`_cookie.setCookie(name,value[,day]);`//return undefined;
>>#### 获取cookie值
>>`_cookie.getCookie(name)`
>>#### 删除cookie值
>>`_cookie.clearCookie(name)` 或者 `cookie.deleteCookie(name)`
>>#### 删除全部cookie值
>>`_cookie.clearAllCookie()` 或者 `cookie.deleteAllCookie()`
>>### 以下方法经过判断html5的localStorage存储进行处理，如果不支持localStorage就使用cookie
>>#### 设置
>>#### name：名称；value：值；day=保存天数，默认10万天
>>`_cookie.set(name,value[,day]);`//return undefined;
>>#### 获取值
>>`_cookie.get(name)`
>>#### 删除值
>>`_cookie.clear(name)` 或者 `cookie.delete(name)`
>>#### 删除全部cookie值
>>`_cookie.clearAll()` 或者 `cookie.deleteAll()`

##更新说明：
1. 添加_cookie函数
1. 之前未添加下划线(`_`)的函数全部添加下划线(`_`)
1. 去除`zoe`和`zoeDylan`的全局函数添加