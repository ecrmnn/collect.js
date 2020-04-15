'use strict';

var values = require('../helpers/values');

module.exports = function every(fn) {
  var items = values(this.items);

  return items.every(fn);
};