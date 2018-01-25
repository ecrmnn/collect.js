'use strict';

module.exports = function pull(key, defaultValue) {
  var returnValue = this.items[key] || null;

  if (!returnValue && defaultValue !== undefined) {
    if (typeof defaultValue === 'function') {
      returnValue = defaultValue();
    } else {
      returnValue = defaultValue;
    }
  }

  delete this.items[key];

  return returnValue;
};