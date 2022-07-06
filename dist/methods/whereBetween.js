"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = whereBetween;

function whereBetween(key, values) {
  return this.where(key, '>=', values[0]).where(key, '<=', values[values.length - 1]);
}

;