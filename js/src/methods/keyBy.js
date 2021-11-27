'use strict';

const nestedValue = require('../helpers/nestedValue');
const { isFunction } = require('../helpers/is');

module.exports = function keyBy(key) {
  const collection = {};

  if (isFunction(key)) {
    this.items.forEach((item) => {
      collection[key(item)] = item;
    });
  } else {
    this.items.forEach((item) => {
      const keyValue = nestedValue(item, key);

      collection[keyValue || ''] = item;
    });
  }

  return new this.constructor(collection);
};
