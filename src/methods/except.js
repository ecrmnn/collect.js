'use strict';

const variadic = require('../helpers/variadic');

module.exports = function except(...args) {
  const properties = variadic(args);

  if (Array.isArray(this.items)) {
    const collection = this.items
      .filter(item => properties.indexOf(item) === -1);

    return new this.constructor(collection);
  }

  const collection = {};

  Object.keys(this.items).forEach((property) => {
    if (properties.indexOf(property) === -1) {
      collection[property] = this.items[property];
    }
  });

  return new this.constructor(collection);
};
