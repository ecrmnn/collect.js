'use strict';

const getValues = require('../helpers/values');

module.exports = function values() {
  const valuesRecursive = (items) => {
    const extractedValues = getValues(items);

    if (items !== null && typeof items === 'object') {
      return extractedValues.map(item => valuesRecursive(item));
    }

    return items;
  };

  return new this.constructor(valuesRecursive(this.items));
};
