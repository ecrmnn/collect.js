'use strict';

var extractValues = require('../helpers/values');

module.exports = function whereIn(key, values) {
  var items = extractValues(values);

  var collection = this.items.filter(function (item) {
    return items.indexOf(item[key]) !== -1;
  });

  return new this.constructor(collection);
};