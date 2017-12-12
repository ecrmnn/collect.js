'use strict';

var values = require('../helpers/values');

module.exports = function random() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  var items = values(this.items);

  var collection = new this.constructor(items).shuffle();

  if (length === 1) {
    return collection.first();
  }

  return collection.take(length);
};