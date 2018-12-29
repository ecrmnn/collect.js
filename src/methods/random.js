'use strict';

const values = require('../helpers/values');

module.exports = function random(length = null) {
  const items = values(this.items);

  const collection = new this.constructor(items).shuffle();

  // If not a length was specified
  if (length !== parseInt(length, 10)) {
    return collection.first();
  }

  return collection.take(length);
};
