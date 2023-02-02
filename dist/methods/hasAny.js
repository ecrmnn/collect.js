'use strict';

var variadic = require('../helpers/variadic');

module.exports = function hasAny() {
  var _this = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  
  var properties = variadic(args);
  return properties.some(function (key) {
    return Object.hasOwnProperty.call(_this.items, key);
  });
};