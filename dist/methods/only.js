'use strict';

module.exports = function only(properties) {
  var _this = this;

  if (Array.isArray(this.items)) {
    var _collection = this.items.filter(function (item) {
      return !properties.indexOf(item);
    });

    return new this.constructor(_collection);
  }

  var collection = {};

  Object.keys(this.items).forEach(function (prop) {
    if (properties.indexOf(prop) !== -1) {
      collection[prop] = _this.items[prop];
    }
  });

  return new this.constructor(collection);
};