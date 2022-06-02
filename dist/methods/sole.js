'use strict';

var _require = require('../helpers/is'),
    isFunction = _require.isFunction;

module.exports = function sole(key, operator, value) {
  var collection;

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