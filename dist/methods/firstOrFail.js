'use strict';

var _require = require('../helpers/is'),
    isFunction = _require.isFunction;

module.exports = function firstOrFail(key, operator, value) {
  if (isFunction(key)) {
    return this.first(key, function () {
      throw new Error('Item not found.');
    });
  }

  var collection = this.where(key, operator, value);

  if (collection.isEmpty()) {
    throw new Error('Item not found.');
  }

  return collection.first();
};