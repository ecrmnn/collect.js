'use strict';

module.exports = function make(items = []) {
  if (!Array.isArray(items) && typeof items !== 'object') {
    return new this.constructor([items]);
  } else if (items instanceof this.constructor) {
    return new this.constructor(items.all());
  }

  return new this.constructor(items);
};
