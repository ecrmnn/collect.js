'use strict';

module.exports = function compact(fn) {
  return new this.constructor(this.items.filter(item => item));
};
