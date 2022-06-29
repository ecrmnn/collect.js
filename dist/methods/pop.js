"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = pop;

var _is = require("../helpers/is");

var _deleteKeys = _interopRequireDefault(require("../helpers/deleteKeys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function pop() {
  var _this = this;

  var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  if (this.isEmpty()) {
    return null;
  }

  if ((0, _is.isArray)(this.items)) {
    if (count === 1) {
      return this.items.pop();
    }

    return new this.constructor(this.items.splice(-count));
  }

  if ((0, _is.isObject)(this.items)) {
    var keys = Object.keys(this.items);

    if (count === 1) {
      var key = keys[keys.length - 1];
      var last = this.items[key];
      (0, _deleteKeys["default"])(this.items, key);
      return last;
    }

    var poppedKeys = keys.slice(-count);
    var newObject = poppedKeys.reduce(function (acc, current) {
      acc[current] = _this.items[current];
      return acc;
    }, {});
    (0, _deleteKeys["default"])(this.items, poppedKeys);
    return new this.constructor(newObject);
  }

  return null;
}