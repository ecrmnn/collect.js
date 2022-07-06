"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = prepend;

function prepend(value, key) {
  if (key !== undefined) {
    return this.put(key, value);
  }

  this.items.unshift(value);
  return this;
}