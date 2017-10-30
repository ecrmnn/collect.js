'use strict';

const values = require('../helpers/values');

module.exports = function random(length = 1) {
  const items = values(this.items);

  const collection = new this.constructor(items).shuffle();

  if (length === 1) {
    return collection.first();
  }

  return collection.take(length);
};
