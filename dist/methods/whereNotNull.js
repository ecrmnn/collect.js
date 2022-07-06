"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = whereNotNull;

function whereNotNull() {
  var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return this.where(key, '!==', null);
}