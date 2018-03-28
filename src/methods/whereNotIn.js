'use strict';

const extractValues = require('../helpers/values');
const nestedValue = require('../helpers/nestedValue');

module.exports = function whereNotIn(key, values) {
  const items = extractValues(values);

  const collection = this.items
    .filter(item => items.indexOf(nestedValue(item, key)) === -1);

  return new this.constructor(collection);
};
