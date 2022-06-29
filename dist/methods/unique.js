"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = unique;

var _is = require("../helpers/is");

function unique(key) {
  var collection;

  if (key === undefined) {
    collection = this.items.filter(function (element, index, self) {
      return self.indexOf(element) === index;
    });
  } else {
    collection = [];
    var usedKeys = [];

    for (var iterator = 0, length = this.items.length; iterator < length; iterator += 1) {
      var uniqueKey = void 0;

      if ((0, _is.isFunction)(key)) {
        uniqueKey = key(this.items[iterator]);
      } else {
        uniqueKey = this.items[iterator][key];
      }

      if (usedKeys.indexOf(uniqueKey) === -1) {
        collection.push(this.items[iterator]);
        usedKeys.push(uniqueKey);
      }
    }
  }

  return new this.constructor(collection);
}