'use strict';

module.exports = function get(key, defaultValue = null) {
  if (this.items[key] !== undefined) {
    return this.items[key];
  }

  if (typeof defaultValue === 'function') {
    return defaultValue();
  }

  return defaultValue;
};
