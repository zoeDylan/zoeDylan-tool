# zoeDylan-tool
zoeDylan私人工具包

收集前端开发中的各种小技巧和小工具，例如随机字符串、数字什么的，各种验证什么的。

# Begin

> `npm zoedylan-tool`

> `cosnt tool = require('zoedylan-tool');` or `const { } = require('zoedylan-tool');`

# API

**`_randomColor();`** 随机16进制颜色值

> `@return String`

``` 
    _randomColor(); // #000000 
```

**`_randomNum(min[,max[,decimal]]);`** 随机数字

> *`min:Number` 最小值

> `max:Number` 最大值

> `decimal:Number` 小数位数 (`Max：10` and `default:0`)

> `@return Number`

```
    _randomNum(5); // 0 - 5
    _randomNum(1,5); // 1 - 5
    _randomNum(10,5); // 5 - 10
    _randomNum(0,5,1); // 0.0 - 5.0
    _randomNum(0,5,2); // 0.00 - 5.00
```

**`_randomString([length[, chars]])`** 随机字符串

> `length:Number` 字符串长度 (`default:32`)

> `chars:String` 自定义字符串 (`default:ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678`)

> `@return String`

```
    _randomString(); //32位字符串
    _randomString(5); //5位字符串
    _randomString(3,'abcdef'); //3位字随机`abcdef`字符串
```

**`_cookie`** cookie操作 *仅用于浏览器

> **`_cookie.set(name,val,day)`** 设置cookie

>> *`name:String` cookie名称

>> *`val:String` cookie值

>> *`day:Number` cookie保存天数 (`default:0`)

>> `@return undefined`

```
    _cookie.set('zoeDylan','_cookie.set');//保存0天cookie
    _cookie.set('zoeDylan','_cookie.set',2);//保存2天cookie
```

> **`_cookie.get(name)`** 获取cookie

>> `name:String` cookie名称

>> `@return String` 

```
    _cookie.set('zoeDylan'); // '_cookie.set'
```

> **`_cookie.getAll()`** 获取全部cookie

>> `@return Object` 

```
    _cookie.getAll(); //  {'name1':'val1','name2':'value2'}
```

> **`_cookie.clear(name)`** 清除cookie

>> `name:String` cookie名称

>> `@return undefined` 

```
    _cookie.clear('zoeDylan'); //清除 zoeDylan
```

> **`_cookie.clearAll()`** 清除全部cookie

>> `@return undefined` 

```
    _cookie.clearAll('); //清除全部cookie
```

**`_isEmail(val)`** 是否是邮箱格式

> `val:String` 邮箱

> `@return Boolean`

```
    _isEmail('627213037@qq.com'); //true
    _isEmail(`123`); //false
```

**`_isPhone(val)`** 是否是手机格式

> `val:String` 手机号

> `@return Boolean`

```
    _isPhone('13511221122'); //true
    _isPhone(`123`); //false
``` 


# 日志

> 2017-07-28

>> 1. 首次更新