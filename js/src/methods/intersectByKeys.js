'use strict';

module.exports = function intersectByKeys(values) {
  let intersectKeys = Object.keys(values);

  if (values instanceof this.constructor) {
    intersectKeys = Object.keys(values.all());
  }

  const collection = {};

  Object.keys(this.items).forEach((key) => {
    if (intersectKeys.indexOf(key) !== -1) {
      collection[key] = this.items[key];
    }
  });

  return new this.constructor(collection);
};
