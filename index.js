const
    _random = require('./lib/random'),
    _is = require('./lib/is'),
    _cookie = require('./lib/cookie'),
    _wx = require('./lib/wx'),
    _url = require('./lib/url');

module.exports = {
    _randomColor: _random.randomColor,
    _randomString: _random.randomString,
    _randomNum: _random.randomNum,
    _cookie: _cookie,
    _isPhone: _is.isPhone,
    _isEmail: _is.isEmail,
    _wx: _wx,
    _queryURL: _url.queryURL
};