'use strict';

const nestedValue = require('../helpers/nestedValue');

module.exports = function groupBy(key) {
  const collection = {};

  this.items.forEach((item, index) => {
    let resolvedKey;

    if (typeof key === 'function') {
      resolvedKey = key(item, index);
    } else if (nestedValue(item, key) || nestedValue(item, key) === 0) {
      resolvedKey = nestedValue(item, key);
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
