"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = countBy;

function countBy() {
  var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (value) {
    return value;
  };
  return new this.constructor(this.items).groupBy(fn).map(function (value) {
    return value.count();
  });
}