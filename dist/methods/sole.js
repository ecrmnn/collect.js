"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = sole;

var _is = require("../helpers/is");

function sole(key, operator, value) {
  var collection;

  if ((0, _is.isFunction)(key)) {
    collection = this.filter(key);
  } else {
    collection = this.where(key, operator, value);
  }

  if (collection.isEmpty()) {
    throw new Error('Item not found.');
  }

  if (collection.count() > 1) {
    throw new Error('Multiple items found.');
  }

  return collection.first();
}