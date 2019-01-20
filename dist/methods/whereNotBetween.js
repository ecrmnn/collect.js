'use strict';

var nestedValue = require('../helpers/nestedValue');

module.exports = function whereNotBetween(key, values) {
  return this.filter(function (item) {
    return nestedValue(item, key) < values[0] || nestedValue(item, key) > values[values.length - 1];
  });
};