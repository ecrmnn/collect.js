"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = flatten;

var _is = require("../helpers/is");

function flatten(depth) {
  var flattenDepth = depth || Infinity;
  var fullyFlattened = false;
  var collection = [];

  var flat = function flat(items) {
    collection = [];

    if ((0, _is.isArray)(items)) {
      items.forEach(function (item) {
        if ((0, _is.isArray)(item)) {
          collection = collection.concat(item);
        } else if ((0, _is.isObject)(item)) {
          Object.keys(item).forEach(function (property) {
            collection = collection.concat(item[property]);
          });
        } else {
          collection.push(item);
        }
      });
    } else {
      Object.keys(items).forEach(function (property) {
        if ((0, _is.isArray)(items[property])) {
          collection = collection.concat(items[property]);
        } else if ((0, _is.isObject)(items[property])) {
          Object.keys(items[property]).forEach(function (prop) {
            collection = collection.concat(items[property][prop]);
          });
        } else {
          collection.push(items[property]);
        }
      });
    }

    fullyFlattened = collection.filter(function (item) {
      return (0, _is.isObject)(item);
    });
    fullyFlattened = fullyFlattened.length === 0;
    flattenDepth -= 1;
  };

  flat(this.items);

  while (!fullyFlattened && flattenDepth > 0) {
    flat(collection);
  }

  return new this.constructor(collection);
}