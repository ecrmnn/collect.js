"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = unwrap;

function unwrap(value) {
  if (value instanceof this.constructor) {
    return value.all();
  }

  return value;
}

;