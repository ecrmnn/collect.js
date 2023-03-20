'use strict';

module.exports = function diffUsing(values, callback) {
  const collection = this.items.filter(item => (
    !(values && values.some(otherItem => callback(item, otherItem) === 0))
  ));

  return new this.constructor(collection);
};
