'use strict';

var nestedValue = require('../helpers/nestedValue');

var _require = require('../helpers/is'),
    isFunction = _require.isFunction;

module.exports = function keyBy(key) {
  var collection = {};

  if (isFunction(key)) {
    this.items.forEach(function (item) {
      collection[key(item)] = item;
    });
  } else {
    this.items.forEach(function (item) {
      var keyValue = nestedValue(item, key);
      collection[keyValue || ''] = item;
    });
  }

  return new this.constructor(collection);
};