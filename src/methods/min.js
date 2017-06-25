'use strict';

module.exports = function min(key) {
  if (key !== undefined) {
    return Math.min(...this.pluck(key).all());
  }

  return Math.min(...this.items);
};
