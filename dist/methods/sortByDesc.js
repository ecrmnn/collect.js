'use strict';

module.exports = function sortByDesc(valueOrFunction) {
  return this.sortBy(valueOrFunction).reverse();
};