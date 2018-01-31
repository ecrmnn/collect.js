'use strict';

const extractValues = require('../helpers/values');

module.exports = function whereIn(key, values) {
  const items = extractValues(values);

  const collection = this.items
    .filter(item => items.indexOf(item[key]) !== -1);

  return new this.constructor(collection);
};
