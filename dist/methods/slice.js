"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = slice;

function slice(remove, limit) {
  var collection = this.items.slice(remove);

  if (limit !== undefined) {
    collection = collection.slice(0, limit);
  }

  return new this.constructor(collection);
}

;