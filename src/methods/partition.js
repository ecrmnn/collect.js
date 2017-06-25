'use strict';

module.exports = function partition(fn) {
  const arrays = [[], []];

  this.items.forEach((item) => {
    if (fn(item) === true) {
      arrays[0].push(item);
    } else {
      arrays[1].push(item);
    }
  });

  return arrays;
};
