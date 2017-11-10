'use strict';

module.exports = function flatMap(fn) {
  var items = [];

  this.items.forEach(function (childObject, index) {
    var keys = Object.keys(childObject);
    var values = [];

    keys.forEach(function (prop) {
      values.push(childObject[prop]);
    });

    var mapped = fn(values, index);

    var collection = {};

    keys.forEach(function (key, i) {
      collection[key] = mapped[i];
    });

    items.push(collection);
  });

  return new this.constructor(Object.assign.apply(Object, items));
};