'use strict';

const extractValues = require('../helpers/values');

module.exports = function whereNotIn(key, values) {
  const items = extractValues(values);
  let collection = this.items;

  items.forEach((value) => {
    collection = collection.filter(item => item[key] !== value);
  });

  return new this.constructor(collection);
};
