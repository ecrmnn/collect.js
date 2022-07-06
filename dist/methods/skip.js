"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = skip;

var _is = require("../helpers/is");

function skip(number) {
  var _this = this;

  if ((0, _is.isObject)(this.items)) {
    return new this.constructor(Object.keys(this.items).reduce(function (accumulator, key, index) {
      if (index + 1 > number) {
        accumulator[key] = _this.items[key];
      }

      return accumulator;
    }, {}));
  }

  return new this.constructor(this.items.slice(number));
}