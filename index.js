const
    _random = require('./lib/random'),
    _is = require('./lib/is'),
    _cookie = require('./lib/cookie'),
    _wx = require('./lib/wx'),
    _url = require('./lib/url');

module.exports = {
    _randomColor: _random._randomColor,
    _randomString: _random._randomString,
    _randomNum: _random._randomNum,
    _cookie: _cookie,
    _isPhone: _is._isPhone,
    _isEmail: _is._isEmail,
    _wx: _wx,
    _queryURL: _url.queryURL
};