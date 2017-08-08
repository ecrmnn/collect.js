'use strict';

module.exports = function mapWithKeys(fn) {
  const collection = {};

  if (Array.isArray(this.items)) {
    this.items.forEach((item) => {
      const [keyed, value] = fn(item);
      collection[keyed] = value;
    });
  } else {
    Object.keys(this.items).forEach((key) => {
      const [keyed, value] = fn(this.items[key]);
      collection[keyed] = value;
    });
  }

  return new this.constructor(collection);
};
