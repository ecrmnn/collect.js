"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = pipe;

function pipe(fn) {
  return fn(this);
}