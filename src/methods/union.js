'use strict';

module.exports = function union(object) {
  const collection = JSON.parse(JSON.stringify(this.items));

  Object.keys(object).forEach((prop) => {
    if (this.items[prop] === undefined) {
      collection[prop] = object[prop];
    }
  });

  return new this.constructor(collection);
};
