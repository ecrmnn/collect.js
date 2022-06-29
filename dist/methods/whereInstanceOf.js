"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = whereInstanceOf;

function whereInstanceOf(type) {
  return this.filter(function (item) {
    return item instanceof type;
  });
}