'use strict';

module.exports = function min(key) {
  if (key !== undefined) {
    return Math.min.apply(Math, this.pluck(key).all());
  }

  return Math.min.apply(Math, this.items);
};
