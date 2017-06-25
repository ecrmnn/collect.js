'use strict';

module.exports = function zip(array) {
  const collection = this.items.map((item, index) => [item, array[index]]);

  return new this.constructor(collection);
};
