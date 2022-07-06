"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = sum;

var _values = _interopRequireDefault(require("../helpers/values"));

var _is = require("../helpers/is");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function sum(key) {
  var items = (0, _values["default"])(this.items);
  var total = 0;

  if (key === undefined) {
    for (var i = 0, length = items.length; i < length; i += 1) {
      total += parseFloat(items[i]);
    }
  } else if ((0, _is.isFunction)(key)) {
    for (var _i = 0, _length = items.length; _i < _length; _i += 1) {
      total += parseFloat(key(items[_i]));
    }
  } else {
    for (var _i2 = 0, _length2 = items.length; _i2 < _length2; _i2 += 1) {
      total += parseFloat(items[_i2][key]);
    }
  }

  return parseFloat(total.toPrecision(12));
}