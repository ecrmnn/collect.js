"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = skipWhile;

var _is = require("../helpers/is");

function skipWhile(valueOrFunction) {
  var _this = this;

  var previous = null;
  var items;

  var callback = function callback(value) {
    return value === valueOrFunction;
  };

  if ((0, _is.isFunction)(valueOrFunction)) {
    callback = valueOrFunction;
  }

  if ((0, _is.isArray)(this.items)) {
    items = this.items.filter(function (item) {
      if (previous !== true) {
        previous = !callback(item);
      }

      return previous;
    });
  }

  if ((0, _is.isObject)(this.items)) {
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
}