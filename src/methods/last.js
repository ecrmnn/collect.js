'use strict';

const values = require('../helpers/values');
const value = require('../helpers/value');
const empty = require('../helpers/empty');

module.exports = function last(fn, defaultValue) {
  let items = this.items;

  if (typeof fn === 'function') {
    items = this.filter(fn).all();
  }

  if (empty(items)) {
    return value(defaultValue);
  }

  return values(items).reverse()[0];
};
