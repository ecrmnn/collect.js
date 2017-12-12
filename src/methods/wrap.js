'use strict';

module.exports = function wrap(value) {
  if (value instanceof this.constructor) {
    return value;
  }

  if (typeof value === 'object') {
    return new this.constructor(value);
  }

  return new this.constructor([value]);
};
