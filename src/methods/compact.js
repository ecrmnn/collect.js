'use strict';

module.exports = function compact() {
  return new this.constructor(this.items.filter(item => item));
};
