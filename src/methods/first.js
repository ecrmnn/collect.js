'use strict';

module.exports = function first(fn) {
  if (typeof fn === 'function') {
    return this.items.filter(fn)[0];
  }

  return this.items[0];
};
