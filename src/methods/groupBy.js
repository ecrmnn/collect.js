'use strict';
const groupByObject = require('group-by-object');

module.exports = function groupBy(key, complexKeys = false) {
  if (!complexKeys) {
    let collection = {};

    this.items.forEach(function(item, index) {
      let resolvedKey;

      if (typeof key === 'function') {
        resolvedKey = key(item, index);
      } else {
        resolvedKey = item[key];
      }

      if (!collection.hasOwnProperty(resolvedKey)) {
        collection[resolvedKey] = [];
      }

      collection[resolvedKey].push(item);
    });

    return new this.constructor(collection);
  } else {
    let fn
    if (typeof key === 'function') {
      fn = key
    } else {
      fn = item => item[key]
    }
    const map = groupByObject(this.items, fn)
    return new this.constructor(Array.from(map))
  }
};
