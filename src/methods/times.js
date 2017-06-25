'use strict';

module.exports = function times(n, fn) {
  for (let iterator = 1; iterator <= n; iterator += 1) {
    this.items.push(fn(iterator));
  }

  return this;
};
