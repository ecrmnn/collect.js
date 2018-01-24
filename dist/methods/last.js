'use strict';

var values = require('../helpers/values');
var value = require('../helpers/value');
var empty = require('../helpers/empty');

module.exports = function last(fn, defaultValue) {
  var items = this.items;

  if (typeof fn === 'function') {
    items = this.filter(fn).all();
  }

  if (empty(items)) {
    return value(defaultValue);
  }

  return values(items).reverse()[0];
};