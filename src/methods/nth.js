'use strict';

module.exports = function nth(n, offset) {
  const ntnOffset = offset || 0;

  const collection = this.items
    .slice(ntnOffset)
    .filter((item, index) => index % n === 0);

  return new this.constructor(collection);
};
