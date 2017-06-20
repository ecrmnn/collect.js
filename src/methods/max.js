'use strict';

module.exports = function max(key) {
  if (typeof key === 'string') {
    return Math.max.apply(Math, this.pluck(key).all());
  }

  return Math.max.apply(Math, this.items);
};
