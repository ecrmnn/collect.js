'use strict';

module.exports = function nth(n, offset) {
  if (offset === undefined) {
    offset = 0;
  }

  const collection = this.items.slice(offset).filter(function(item, index) {
    return index % n === 0;
  });

  return new this.constructor(collection);
};
