'use strict';

module.exports = function times(times, fn) {
  for (let iterator = 1; iterator <= times; iterator++) {
    this.items.push(fn(iterator));
  }

  return this;
};
