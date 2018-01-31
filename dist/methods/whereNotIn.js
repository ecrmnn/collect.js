'use strict';

var extractValues = require('../helpers/values');

module.exports = function whereNotIn(key, values) {
  var items = extractValues(values);
  var collection = this.items;

  items.forEach(function (value) {
    collection = collection.filter(function (item) {
      return item[key] !== value;
    });
  });

  return new this.constructor(collection);
};