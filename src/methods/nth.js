'use strict';

module.exports = function nth(n, offset) {
  const _offset = offset || 0;

  const collection = this.items.slice(_offset).filter(function(item, index) {
    return index % n === 0;
  });

  return new this.constructor(collection);
};
