const {
  _cookie,
  _randomColor,
  _randomNum,
  _randomString,
  _isEmail,
  _randomStringBySymbol,
  _isPhone
} = require("./index");

console.log(
//   _randomNum(5), // 0 - 5
//   _randomNum(1, 5), // 1 - 5
//   _randomNum(0, 5, 1), // 0.0 - 5.0,
//   _randomString(),
  _randomStringBySymbol(16)
);
