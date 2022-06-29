"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isEmpty;

function isEmpty() {
  if (Array.isArray(this.items)) {
    return !this.items.length;
  }

  return !Object.keys(this.items).length;
}

;