'use strict';

module.exports = function get(key, defaultValue) {
  if (this.items.hasOwnProperty(key)) {
    return this.items[key];
  }

  if (typeof defaultValue === 'function') {
    return defaultValue();
  }

  return defaultValue || null;
};
