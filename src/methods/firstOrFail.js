'use strict';

module.exports = function firstOrFail(fn) {
  return this.first(fn, () => {
    throw new Error('Item not found.');
  });
};
