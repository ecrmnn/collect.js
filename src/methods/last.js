'use strict';

const values = require('../helpers/values');
const value = require('../helpers/value');
const empty = require('../helpers/empty');

module.exports = function last(fn, defaultValue) {
  let items = this.items;

  if (typeof fn === 'function') {
    items = this.filter(fn).all();
  }

  if (
    Array.isArray(items) && items.length === 0 ||
    Object.keys(items).length === 0) {
    return value(defaultValue);
  }

  if (Array.isArray(items)) {
    return items[items.length - 1];
  }
  const keys = Object.keys(items);

  return items[keys[keys.length - 1]];
};
