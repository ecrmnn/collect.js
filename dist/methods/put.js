"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = put;

function put(key, value) {
  this.items[key] = value;
  return this;
}