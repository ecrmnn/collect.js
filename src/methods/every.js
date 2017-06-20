'use strict';

module.exports = function every(fn) {
  return this.items.filter(fn).length === this.items.length;
};
