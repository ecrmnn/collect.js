'use strict';

module.exports = function flatMap(fn) {
  const items = [];

  this.items.forEach((childObject, index) => {
    const keys = Object.keys(childObject);
    const values = [];

    keys.forEach((prop) => {
      values.push(childObject[prop]);
    });

    const mapped = fn(values, index);

    const collection = {};

    keys.forEach((key, i) => {
      collection[key] = mapped[i];
    });

    items.push(collection);
  });

  return new this.constructor(Object.assign(...items));
};
