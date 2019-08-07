'use strict';

var nestedValue = require('../helpers/nestedValue');

module.exports = function sortBy(valueOrFunction) {
  var collection = [].concat(this.items);
  var isFunction = typeof valueOrFunction === 'function';
  var getValue = function getValue(item) {
    if (isFunction) {
      return valueOrFunction(item);
    }

    return nestedValue(item, valueOrFunction);
  };

  collection.sort(function (a, b) {
    var valueA = getValue(a);
    var valueB = getValue(b);

    if (valueA === null || valueA === undefined) {
      return 1;
    }
    if (valueB === null || valueB === undefined) {
      return -1;
    }

    if (valueA < valueB) {
      return -1;
    }
    if (valueA > valueB) {
      return 1;
    }

    return 0;
  });

  return new this.constructor(collection);
};