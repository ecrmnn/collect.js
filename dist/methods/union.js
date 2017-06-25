'use strict';

module.exports = function union(object) {
  var _this = this;

  var collection = Object.create(this.items);

  Object.keys(object).forEach(function (prop) {
    if (_this.items[prop] === undefined) {
      collection[prop] = object[prop];
    }
  });

  return new this.constructor(collection);
};