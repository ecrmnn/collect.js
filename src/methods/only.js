'use strict';

module.exports = function only(properties) {
  if (Array.isArray(this.items)) {
    const collection = this.items.filter(item => !properties.indexOf(item));

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
