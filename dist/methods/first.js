"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = first;

var _is = require("../helpers/is");

function first(fn, defaultValue) {
  if ((0, _is.isFunction)(fn)) {
    var keys = Object.keys(this.items);

    for (var i = 0; i < keys.length; i += 1) {
      var key = keys[i];
      var item = this.items[key];

      if (fn(item, key)) {
        return item;
      }
    }

    if ((0, _is.isFunction)(defaultValue)) {
      return defaultValue();
    }

    return defaultValue;
  }

  if (Array.isArray(this.items) && this.items.length || Object.keys(this.items).length) {
    if (Array.isArray(this.items)) {
      return this.items[0];
    }

    var firstKey = Object.keys(this.items)[0];
    return this.items[firstKey];
  }

  if ((0, _is.isFunction)(defaultValue)) {
    return defaultValue();
  }

  return defaultValue;
}