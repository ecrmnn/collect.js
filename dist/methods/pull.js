"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = pull;

var _is = require("../helpers/is");

function pull(key, defaultValue) {
  var returnValue = this.items[key] || null;

  if (!returnValue && defaultValue !== undefined) {
    if ((0, _is.isFunction)(defaultValue)) {
      returnValue = defaultValue();
    } else {
      returnValue = defaultValue;
    }
  }

  delete this.items[key];
  return returnValue;
}