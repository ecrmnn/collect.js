'use strict';

module.exports = function combine(array) {
  const collection = {};

  this.items.map(
    function(key, iterator) {
      collection[key] = array[iterator];
    }.bind(this)
  );

  return new this.constructor(collection);
};
