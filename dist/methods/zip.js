'use strict';

module.exports = function zip(array) {
  var collection = this.items.map(function (item, index) {
    return [item, array[index]];
  });

  return new this.constructor(collection);
};