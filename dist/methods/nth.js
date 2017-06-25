'use strict';

module.exports = function nth(n, offset) {
  var ntnOffset = offset || 0;

  var collection = this.items.slice(ntnOffset).filter(function (item, index) {
    return index % n === 0;
  });

  return new this.constructor(collection);
};