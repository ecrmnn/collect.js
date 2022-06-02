'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

module.exports = function wrap(value) {
  if (value instanceof this.constructor) {
    return value;
  }

  if (_typeof(value) === 'object') {
    return new this.constructor(value);
  }

  return new this.constructor([value]);
};