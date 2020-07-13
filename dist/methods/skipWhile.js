'use strict';

var _require = require('../helpers/is'),
    isArray = _require.isArray,
    isObject = _require.isObject,
    isFunction = _require.isFunction;

module.exports = function skipWhile(valueOrFunction) {
  var _this = this;

  var previous = null;
  var items = void 0;

  var callback = function callback(value) {
    return value === valueOrFunction;
  };
  if (isFunction(valueOrFunction)) {
    callback = valueOrFunction;
  }

  if (isArray(this.items)) {
    items = this.items.filter(function (item) {
      if (previous !== true) {
        previous = !callback(item);
      }

      return previous;
    });
  }

  if (isObject(this.items)) {
    items = Object.keys(this.items).reduce(function (acc, key) {
      if (previous !== true) {
        previous = !callback(_this.items[key]);
      }

      if (previous !== false) {
        acc[key] = _this.items[key];
      }

      return acc;
    }, {});
  }

  return new this.constructor(items);
};