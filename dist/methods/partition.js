'use strict';

var values = require('../helpers/values');

module.exports = function partition(fn) {
  var items = values(this.items);

  var arrays = [new this.constructor([]), new this.constructor([])];

  items.forEach(function (item) {
    if (fn(item) === true) {
      arrays[0].push(item);
    } else {
      arrays[1].push(item);
    }
  });

  return new this.constructor(arrays);
};