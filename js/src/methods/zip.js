'use strict';

module.exports = function zip(array) {
  let values = array;

  if (values instanceof this.constructor) {
    values = values.all();
  }

  const collection = this.items.map((item, index) => new this.constructor([item, values[index]]));

  return new this.constructor(collection);
};
