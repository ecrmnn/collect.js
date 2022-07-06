"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = tap;

function tap(fn) {
  fn(this);
  return this;
}