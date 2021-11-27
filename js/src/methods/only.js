'use strict';

const variadic = require('../helpers/variadic');

module.exports = function only(...args) {
  const properties = variadic(args);

  if (Array.isArray(this.items)) {
    const collection = this.items
      .filter(item => properties.indexOf(item) !== -1);

    return new this.constructor(collection);
  }

  const collection = {};

  Object.keys(this.items).forEach((prop) => {
    if (properties.indexOf(prop) !== -1) {
      collection[prop] = this.items[prop];
    }
  });

  return new this.constructor(collection);
};
