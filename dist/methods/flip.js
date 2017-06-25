'use strict';

module.exports = function flip() {
  var _this = this;

  var collection = {};

  Object.keys(this.items).forEach(function (key) {
    collection[_this.items[key]] = key;
  });

  return new this.constructor(collection);
};