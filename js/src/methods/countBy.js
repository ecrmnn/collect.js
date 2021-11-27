'use strict';

module.exports = function countBy(fn = value => value) {
  return new this.constructor(this.items)
    .groupBy(fn)
    .map(value => value.count());
};
