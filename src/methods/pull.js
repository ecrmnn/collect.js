'use strict';

const value = require('../helpers/value');

module.exports = function pull(key, defaultValue) {
  const returnValue = this.items[key] || value(defaultValue || null);

  delete this.items[key];

  return returnValue;
};
