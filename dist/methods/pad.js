"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = pad;

var _clone = _interopRequireDefault(require("../helpers/clone"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function pad(size, value) {
  var abs = Math.abs(size);
  var count = this.count();

  if (abs <= count) {
    return this;
  }

  var diff = abs - count;
  var items = (0, _clone["default"])(this.items);
  var isArray = Array.isArray(this.items);
  var prepend = size < 0;

  for (var iterator = 0; iterator < diff;) {
    if (!isArray) {
      if (items[iterator] !== undefined) {
        diff += 1;
      } else {
        items[iterator] = value;
      }
    } else if (prepend) {
      items.unshift(value);
    } else {
      items.push(value);
    }

    iterator += 1;
  }

  return new this.constructor(items);
}