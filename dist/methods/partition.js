'use strict';

module.exports = function partition(fn) {
  var arrays = [[], []];

  this.items.forEach(function (item) {
    if (fn(item) === true) {
      arrays[0].push(item);
    } else {
      arrays[1].push(item);
    }
  });

  return arrays;
};