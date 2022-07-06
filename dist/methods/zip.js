"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = zip;

function zip(array) {
  var _this = this;

  var values = array;

  if (values instanceof this.constructor) {
    values = values.all();
  }

  var collection = this.items.map(function (item, index) {
    return new _this.constructor([item, values[index]]);
  });
  return new this.constructor(collection);
}