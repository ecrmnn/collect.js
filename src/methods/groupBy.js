'use strict';

module.exports = function groupBy(key) {
  const collection = {};

  this.items.forEach((item, index) => {
    let resolvedKey;

    if (typeof key === 'function') {
      resolvedKey = key(item, index);
    } else if (item[key] || item[key] === 0) {
      resolvedKey = item[key];
    } else {
      resolvedKey = '';
    }

    if (collection[resolvedKey] === undefined) {
      collection[resolvedKey] = new this.constructor([]);
    }

    collection[resolvedKey].push(item);
  });

  return new this.constructor(collection);
};
