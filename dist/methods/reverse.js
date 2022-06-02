'use strict';

module.exports = function reverse() {
  var collection = [].concat(this.items).reverse();
  return new this.constructor(collection);
};