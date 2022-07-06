"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = search;

var _is = require("../helpers/is");

/* eslint-disable eqeqeq */
function search(valueOrFunction, strict) {
  var _this = this;

  var result;

  var find = function find(item, key) {
    if ((0, _is.isFunction)(valueOrFunction)) {
      return valueOrFunction(_this.items[key], key);
    }

    if (strict) {
      return _this.items[key] === valueOrFunction;
    }

    return _this.items[key] == valueOrFunction;
  };

  if ((0, _is.isArray)(this.items)) {
    result = this.items.findIndex(find);
  } else if ((0, _is.isObject)(this.items)) {
    result = Object.keys(this.items).find(function (key) {
      return find(_this.items[key], key);
    });
  }

  if (result === undefined || result < 0) {
    return false;
  }

  return result;
}