'use strict';

const nestedValue = require('../helpers/nestedValue');
const { isFunction } = require('../helpers/is');

module.exports = function sortBy(valueOrFunction) {
  const collection = [].concat(this.items);
  const getValue = (item) => {
    if (isFunction(valueOrFunction)) {
      return valueOrFunction(item);
    }

    return nestedValue(item, valueOrFunction);
  };

  collection.sort((a, b) => {
    const valueA = getValue(a);
    const valueB = getValue(b);

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

  return new this.constructor(collection);
};
