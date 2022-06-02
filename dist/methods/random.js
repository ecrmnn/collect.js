'use strict';

var values = require('../helpers/values');

module.exports = function random() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var items = values(this.items);
  var collection = new this.constructor(items).shuffle(); // If not a length was specified

  if (length !== parseInt(length, 10)) {
    return collection.first();
  }

  return collection.take(length);
};