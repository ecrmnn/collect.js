'use strict';

var extractValues = require('../helpers/values');

var nestedValue = require('../helpers/nestedValue');

module.exports = function whereNotIn(key, values) {
  var items = extractValues(values);
  var collection = this.items.filter(function (item) {
    return items.indexOf(nestedValue(item, key)) === -1;
  });
  return new this.constructor(collection);
};