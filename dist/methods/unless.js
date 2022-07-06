"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = when;

function when(value, fn, defaultFn) {
  if (!value) {
    fn(this);
  } else {
    defaultFn(this);
  }
}

;