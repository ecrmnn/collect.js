'use strict';

module.exports = function diffUsing(values, callback) {
  var collection = this.items.filter(function (item) {
    return !(values && values.some(function (otherItem) {
      return callback(item, otherItem) === 0;
    }));
  });
  return new this.constructor(collection);
};