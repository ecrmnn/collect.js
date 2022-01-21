'use strict';

const { isFunction } = require('../helpers/is');

module.exports = function firstOrFail(key, operator, value) {
  if (isFunction(key)) {
    return this.first(key, () => {
      throw new Error('Item not found.');
    });
  }

  const collection = this.where(key, operator, value);

  if (collection.isEmpty()) {
    throw new Error('Item not found.');
  }

  return collection.first();
};
