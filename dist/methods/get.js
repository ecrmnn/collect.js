"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = get;

var _is = require("../helpers/is");

function get(key) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (this.items[key] !== undefined) {
    return this.items[key];
  }

  if ((0, _is.isFunction)(defaultValue)) {
    return defaultValue();
  }

  if (defaultValue !== null) {
    return defaultValue;
  }

  return null;
}