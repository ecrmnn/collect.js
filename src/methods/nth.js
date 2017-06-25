'use strict';

module.exports = function nth(n, offset = 0) {
  const collection = this.items
    .slice(offset)
    .filter((item, index) => index % n === 0);

  return new this.constructor(collection);
};
