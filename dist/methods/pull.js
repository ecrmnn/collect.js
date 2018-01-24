'use strict';

var value = require('../helpers/value');

module.exports = function pull(key, defaultValue) {
  var returnValue = this.items[key] || value(defaultValue || null);

  delete this.items[key];
  return returnValue;
};