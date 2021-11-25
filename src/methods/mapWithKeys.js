'use strict';

module.exports = function mapWithKeys(fn) {
  const collection = {};

  if (Array.isArray(this.items)) {
    this.items.forEach((item, index) => {
      const [keyed, value] = fn(item, index);
      collection[keyed] = value;
    });
  } else {
    Object.keys(this.items).forEach((key) => {
      const [keyed, value] = fn(this.items[key], key);
      collection[keyed] = value;
    });
  }

  return new this.constructor(collection);
};
