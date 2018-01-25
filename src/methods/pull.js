'use strict';

module.exports = function pull(key, defaultValue) {
  let returnValue = this.items[key] || null;

  if (! returnValue && defaultValue !== undefined) {
    returnValue = (typeof defaultValue === 'function' ? defaultValue() : defaultValue);
  }

  delete this.items[key];

  return returnValue;
};
