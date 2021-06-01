'use strict';

const nestedValue = require('../helpers/nestedValue');
const { isFunction } = require('../helpers/is');

module.exports = function sortBy(valueOrFunction) {
  const isArray = Array.isArray(this.items);
  const collection = Object.entries(this.items);
  const getValue = (item) => {
    if (isFunction(valueOrFunction)) {
      return valueOrFunction(item);
    }

    return nestedValue(item, valueOrFunction);
  };

  collection.sort((a, b) => {
    const valueA = getValue(a[1]);
    const valueB = getValue(b[1]);

    if (valueA === null || valueA === undefined) {
      return 1;
    }
    if (valueB === null || valueB === undefined) {
      return -1;
    }

    if (valueA < valueB) {
      return -1;
    }
    if (valueA > valueB) {
      return 1;
    }

    return 0;
  });

  if (isArray) {
    return new this.constructor(collection.map(entry => entry[1]));
  }

  return new this.constructor(collection.map(entry => ({
    key: entry[0],
    value: entry[1],
  }))).pluck('value', 'key');
};
