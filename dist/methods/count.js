"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = count;

function count() {
  var arrayLength = 0;

  if (Array.isArray(this.items)) {
    arrayLength = this.items.length;
  }

  return Math.max(Object.keys(this.items).length, arrayLength);
}