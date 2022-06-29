"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = union;

function union(object) {
  var _this = this;

  var collection = JSON.parse(JSON.stringify(this.items));
  Object.keys(object).forEach(function (prop) {
    if (_this.items[prop] === undefined) {
      collection[prop] = object[prop];
    }
  });
  return new this.constructor(collection);
}