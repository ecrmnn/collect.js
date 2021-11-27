'use strict';

const { isFunction } = require('../helpers/is');

module.exports = function get(key, defaultValue = null) {
  if (this.items[key] !== undefined) {
    return this.items[key];
  }

  if (isFunction(defaultValue)) {
    return defaultValue();
  }

  if (defaultValue !== null) {
    return defaultValue;
  }

  return null;
};
