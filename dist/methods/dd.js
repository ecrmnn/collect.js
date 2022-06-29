"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = dd;

function dd() {
  this.dump();

  if (typeof process !== 'undefined') {
    process.exit(1);
  }
}

;