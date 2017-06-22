'use strict';

module.exports = function groupBy(key) {
  var collection = {};

  this.items.forEach(function (item, index) {
    var resolvedKey = void 0;

    if (typeof key === 'function') {
      resolvedKey = key(item, index);
    } else {
      resolvedKey = item[key];
    }

    if (collection[resolvedKey] === undefined) {
      collection[resolvedKey] = [];
    }

    collection[resolvedKey].push(item);
  });

  return new this.constructor(collection);
};