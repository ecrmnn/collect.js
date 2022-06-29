"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = firstOrFail;

var _is = require("../helpers/is");

function firstOrFail(key, operator, value) {
  if ((0, _is.isFunction)(key)) {
    return this.first(key, function () {
      throw new Error('Item not found.');
    });
  }

  var collection = this.where(key, operator, value);

  if (collection.isEmpty()) {
    throw new Error('Item not found.');
  }

  return collection.first();
}