"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = flatMap;

function flatMap(fn) {
  return this.map(fn).collapse();
}