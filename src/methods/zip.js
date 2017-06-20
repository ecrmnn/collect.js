'use strict';

module.exports = function zip(array) {
  const collection = this.items.map(function(item, index) {
    return [item, array[index]];
  });

  return new this.constructor(collection);
};
