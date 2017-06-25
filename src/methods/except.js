'use strict';

module.exports = function except(properties) {
  const collection = {};

  Object.keys(this.items).forEach((property) => {
    if (properties.indexOf(property) === -1) {
      collection[property] = this.items[property];
    }
  });

  return new this.constructor(collection);
};
