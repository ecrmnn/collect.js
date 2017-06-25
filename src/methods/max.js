'use strict';

module.exports = function max(key) {
  if (typeof key === 'string') {
    return Math.max(...this.pluck(key).all());
  }

  return Math.max(...this.items);
};
