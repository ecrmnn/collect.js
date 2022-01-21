'use strict';

const { isFunction } = require('../helpers/is');

module.exports = function sole(key, operator, value) {
  let collection;

  if (isFunction(key)) {
    collection = this.filter(key);
  } else {
    collection = this.where(key, operator, value);
  }

  if (collection.isEmpty()) {
    throw new Error('Item not found.');
  }

  if (collection.count() > 1) {
    throw new Error('Multiple items found.');
  }

  return collection.first();
};
