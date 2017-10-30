'use strict';

var values = require('../helpers/values');

module.exports = function nth(n) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var items = values(this.items);

  var collection = items.slice(offset).filter(function (item, index) {
    return index % n === 0;
  });

  return new this.constructor(collection);
};