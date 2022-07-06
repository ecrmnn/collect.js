"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = whenNotEmpty;

function whenNotEmpty(fn, defaultFn) {
  if (Array.isArray(this.items) && this.items.length) {
    return fn(this);
  }

  if (Object.keys(this.items).length) {
    return fn(this);
  }

  if (defaultFn !== undefined) {
    if (Array.isArray(this.items) && !this.items.length) {
      return defaultFn(this);
    }

    if (!Object.keys(this.items).length) {
      return defaultFn(this);
    }
  }

  return this;
}

;