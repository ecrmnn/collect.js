"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = diffKeys;

function diffKeys(object) {
  var objectToDiff;

  if (object instanceof this.constructor) {
    objectToDiff = object.all();
  } else {
    objectToDiff = object;
  }

  var objectKeys = Object.keys(objectToDiff);
  var remainingKeys = Object.keys(this.items).filter(function (item) {
    return objectKeys.indexOf(item) === -1;
  });
  return new this.constructor(this.items).only(remainingKeys);
}

;