'use strict';

module.exports = function except(properties) {
  var _this = this;

  if (Array.isArray(this.items)) {
    var _collection = this.items.filter(function (item) {
      return properties.indexOf(item);
    });

    return new this.constructor(_collection);
  }

  var collection = {};

  Object.keys(this.items).forEach(function (property) {
    if (properties.indexOf(property) === -1) {
      collection[property] = _this.items[property];
    }
  });

  return new this.constructor(collection);
};