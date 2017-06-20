'use strict';

module.exports = function except(properties) {
  const collection = {};

  for (const prop in this.items) {
    if (properties.indexOf(prop) === -1) {
      collection[prop] = this.items[prop];
    }
  }

  return new this.constructor(collection);
};
