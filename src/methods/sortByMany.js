'use strict';

const { isFunction } = require('../helpers/is');
const nestedValue = require('../helpers/nestedValue');

const getValue = (item, valueOrFunction) => {
  if (isFunction(valueOrFunction)) {
    return valueOrFunction(item);
  }

  return nestedValue(item, valueOrFunction);
};

module.exports = function sortByMany(valuesOrFunctions = []) {
  const collection = [].concat(this.items);

  collection.sort((a, b) => {
    for (let index = 0; index < valuesOrFunctions.length; index += 1) {
      const criteria = valuesOrFunctions[index];

      const valueA = getValue(a, criteria);
      const valueB = getValue(b, criteria);

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
    }

    return 0;
  });

  return new this.constructor(collection);
};