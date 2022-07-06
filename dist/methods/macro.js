"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = macro;

function macro(name, fn) {
  this.constructor.prototype[name] = fn;
}