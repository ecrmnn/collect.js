"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = sortByDesc;

function sortByDesc(valueOrFunction) {
  return this.sortBy(valueOrFunction).reverse();
}

;