'use strict';

module.exports = function values() {
  var _this = this;

  var collection = [];

  Object.keys(this.items).forEach(function (property) {
    collection.push(_this.items[property]);
  });

  return new this.constructor(collection);
};