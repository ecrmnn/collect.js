"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = keys;

function keys() {
  var collection = Object.keys(this.items);

  if (Array.isArray(this.items)) {
    collection = collection.map(Number);
  }

  return new this.constructor(collection);
}

;