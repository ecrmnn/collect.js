"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = implode;

function implode(key, glue) {
  if (glue === undefined) {
    return this.items.join(key);
  }

  return new this.constructor(this.items).pluck(key).all().join(glue);
}