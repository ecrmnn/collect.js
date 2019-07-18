'use strict';

module.exports = function sortKeysByDesc(valueOrFunction) {
  return this.sortKeys(valueOrFunction).reverse();
};