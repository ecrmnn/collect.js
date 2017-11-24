'use strict';

module.exports = function partition(fn) {
  const arrays = [new this.constructor([]), new this.constructor([])];

  items.forEach((item) => {
    if (fn(item) === true) {
      arrays[0].push(item);
    } else {
      arrays[1].push(item);
    }
  });

  return new this.constructor(arrays);
};
