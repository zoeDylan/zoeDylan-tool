# zoeDylan-tool
zoeDylan私人工具包

收集前端开发中的各种小技巧和小工具，例如随机字符串、数字什么的，各种验证什么的。

# Begin

1. `npm zoedylan-tool`

2. `cosnt tool = require('zoedylan-tool');` or `const { } = require('zoedylan-tool');`

# API

**`_randomColor();`** 随机16进制颜色值

> `@return String`

```javascript
    _randomColor(); // #000000 
```

**`_randomNum(min[,max[,decimal]]);`** 随机数字

> *`min:Number` 最小值

> `max:Number` 最大值

> `decimal:Number` 小数位数 (`Max：10` and `default:0`)

> `@return Number`

```javascript
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

```javascript
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

```javascript
    _cookie.set('zoeDylan','_cookie.set');//保存0天cookie
    _cookie.set('zoeDylan','_cookie.set',2);//保存2天cookie
```

> **`_cookie.get(name)`** 获取cookie

>> `name:String` cookie名称

>> `@return String` 

```javascript
    _cookie.set('zoeDylan'); // '_cookie.set'
```

> **`_cookie.getAll()`** 获取全部cookie

>> `@return Object` 

```javascript
    _cookie.getAll(); //  {'name1':'val1','name2':'value2'}
```

> **`_cookie.clear(name)`** 清除cookie

>> `name:String` cookie名称

>> `@return undefined` 

```javascript
    _cookie.clear('zoeDylan'); //清除 zoeDylan
```

> **`_cookie.clearAll()`** 清除全部cookie

>> `@return undefined` 

```javascript
    _cookie.clearAll('); //清除全部cookie
```

**`_isEmail(val)`** 是否是邮箱格式

> `val:String` 邮箱

> `@return Boolean`

```javascript
    _isEmail('627213037@qq.com'); //true
    _isEmail(`123`); //false
```

**`_isPhone(val)`** 是否是手机格式

> `val:String` 手机号

> `@return Boolean`

```javascript
    _isPhone('13511221122'); //true
    _isPhone(`123`); //false
``` 
**`_wx`** 微信开发

> **`_wx.init(config,shareConfig)`** 模块初始化，必须调用次方法才能其它操作
>> `config:Object` 微信权限配置
>> `shareConfig:Object` 微信分享配置
>> `@return undefined`

```javascript
    _wx.init({
        //debug模式 默认：false
        debug: Boolean ,
        appId: String,
        timestamp: String,
        nonceStr: String,
        signature: String,
        //微信api列表 默认：['onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo','onMenuShareQZone']
        jsApiList: Array
    },{
        title: String,//标题
        desc: String,//描述
        link: String,//地址
        imgUrl: String,//图片
        success: Function,//分享成功回调
        cancel: Function//分享取消回调
    });
```
> **`_wx.setShareConfig(shareConfig)`** 微信分享配置
>> `shareConfig:Object` 微信分享配置
>> `@return undefined`
```javascript
    _wx.setShareConfig({
        title: String,//标题
        desc: String,//描述
        link: String,//地址
        imgUrl: String,//图片
        success: Function,//分享成功回调
        cancel: Function//分享取消回调
    });
```
> **`_wx.setShareCancel(fn)`** 设置分享取消的事件
>> `fn:Function`
>> `@return undefined`
```javascript
    _wx.setShareCancel(function(){
        //you code
    });
```
> **`_wx.setShareSuccess(fn)`** 设置分享完成的事件
>> `fn:Function`
>> `@return undefined`
```javascript
    _wx.setShareSuccess(function(){
        //you code
    });
```

> **`_queryURL(url)`** 解析URL参数

>> `url:String`

>> `@return Object`

```javascript
    cosnt url = _queryURL('http://www.a.com?a1=123&num=100');
    console.log(url.a1);//123
    console.log(url['num']);//100
```

# 日志

2017-11-22 

1. 添加`url`参数解析方法：`queryURL(string)`

2017-08-17

1. 微信分享动态配置分享事件修复

2017-08-09

1. 添加微信相关
2. 提取代码进行分类

2017-07-28

1. 首次更新