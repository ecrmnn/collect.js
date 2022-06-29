"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = sortKeys;

function sortKeys() {
  var _this = this;

  var ordered = {};
  Object.keys(this.items).sort().forEach(function (key) {
    ordered[key] = _this.items[key];
  });
  return new this.constructor(ordered);
}