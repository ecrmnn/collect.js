"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = times;

function times(n, fn) {
  for (var iterator = 1; iterator <= n; iterator += 1) {
    this.items.push(fn(iterator));
  }

  return this;
}

;