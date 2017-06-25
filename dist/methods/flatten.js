'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function flatten(depth) {
  var flattenDepth = depth || Infinity;

  var fullyFlattened = false;
  var collection = [];

  var flat = function flat(items) {
    collection = [];

    if (Array.isArray(items)) {
      items.forEach(function (item) {
        if (typeof item === 'string') {
          collection.push(item);
        } else if (Array.isArray(item)) {
          collection = collection.concat(item);
        } else {
          Object.keys(item).forEach(function (property) {
            collection = collection.concat(item[property]);
          });
        }
      });
    } else {
      Object.keys(items).forEach(function (property) {
        if (typeof items[property] === 'string') {
          collection.push(items[property]);
        } else if (Array.isArray(items[property])) {
          collection = collection.concat(items[property]);
        } else {
          Object.keys(items).forEach(function (prop) {
            collection = collection.concat(items[prop]);
          });
        }
      });
    }

    fullyFlattened = collection.filter(function (item) {
      return (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object';
    });
    fullyFlattened = fullyFlattened.length === 0;

    flattenDepth -= 1;
  };

  flat(this.items);

  while (!fullyFlattened && flattenDepth > 0) {
    flat(collection);
  }

  return new this.constructor(collection);
};