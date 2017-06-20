'use strict';

module.exports = function groupBy(key) {
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
};
