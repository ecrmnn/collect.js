"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = reject;

function reject(fn) {
  return new this.constructor(this.items).filter(function (item) {
    return !fn(item);
  });
}

;