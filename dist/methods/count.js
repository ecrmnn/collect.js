'use strict';

module.exports = function count() {
  if (Array.isArray(this.items)) {
    return this.items.length;
  }

  return Object.keys(this.items).length;
};