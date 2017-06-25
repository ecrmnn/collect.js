'use strict';

module.exports = function keys() {
  if (Array.isArray(this.items)) {
    var collection = [];

    this.items.forEach(function (object) {
      Object.keys(object).forEach(function (key) {
        collection.push(key);
      });
    });

    return new this.constructor(collection).unique();
  }

  return new this.constructor(Object.keys(this.items));
};