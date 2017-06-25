'use strict';

module.exports = function only(properties) {
  const collection = {};

  Object.keys(this.items).forEach((prop) => {
    if (properties.indexOf(prop) !== -1) {
      collection[prop] = this.items[prop];
    }
  });

  return new this.constructor(collection);
};
