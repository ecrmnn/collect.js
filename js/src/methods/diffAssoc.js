'use strict';

module.exports = function diffAssoc(values) {
  let diffValues = values;

  if (values instanceof this.constructor) {
    diffValues = values.all();
  }

  const collection = {};

  Object.keys(this.items).forEach((key) => {
    if (diffValues[key] === undefined || diffValues[key] !== this.items[key]) {
      collection[key] = this.items[key];
    }
  });

  return new this.constructor(collection);
};
