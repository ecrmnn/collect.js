"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = shift;

var _is = require("../helpers/is");

var _deleteKeys = _interopRequireDefault(require("../helpers/deleteKeys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function shift() {
  var _this = this;

  var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  if (this.isEmpty()) {
    return null;
  }

  if ((0, _is.isArray)(this.items)) {
    if (count === 1) {
      return this.items.shift();
    }

    return new this.constructor(this.items.splice(0, count));
  }

  if ((0, _is.isObject)(this.items)) {
    if (count === 1) {
      var key = Object.keys(this.items)[0];
      var value = this.items[key];
      delete this.items[key];
      return value;
    }

    var keys = Object.keys(this.items);
    var poppedKeys = keys.slice(0, count);
    var newObject = poppedKeys.reduce(function (acc, current) {
      acc[current] = _this.items[current];
      return acc;
    }, {});
    (0, _deleteKeys["default"])(this.items, poppedKeys);
    return new this.constructor(newObject);
  }

  return null;
}