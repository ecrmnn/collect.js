"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = intersect;

function intersect(values) {
  var intersectValues = values;

  if (values instanceof this.constructor) {
    intersectValues = values.all();
  }

  var collection = this.items.filter(function (item) {
    return intersectValues.indexOf(item) !== -1;
  });
  return new this.constructor(collection);
}