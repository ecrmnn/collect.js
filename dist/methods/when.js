"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = when;

function when(value, fn, defaultFn) {
  if (value) {
    return fn(this, value);
  }

  if (defaultFn) {
    return defaultFn(this, value);
  }

  return this;
}