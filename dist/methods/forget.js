"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = forget;

function forget(key) {
  if (Array.isArray(this.items)) {
    this.items.splice(key, 1);
  } else {
    delete this.items[key];
  }

  return this;
}

;