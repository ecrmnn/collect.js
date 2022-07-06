"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = mapInto;

function mapInto(ClassName) {
  return this.map(function (value, key) {
    return new ClassName(value, key);
  });
}