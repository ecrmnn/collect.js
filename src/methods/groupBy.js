'use strict';

module.exports = function groupBy(key) {
  const collection = {};

  this.items.forEach((item, index) => {
    let resolvedKey;

    if (typeof key === 'function') {
      resolvedKey = key(item, index);
    } else {
      resolvedKey = item[key] || '';
    }

    if (collection[resolvedKey] === undefined) {
      collection[resolvedKey] = new this.constructor([]);
    }

    collection[resolvedKey].push(item);
  });

  return new this.constructor(collection);
};
