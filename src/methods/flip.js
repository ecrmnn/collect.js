'use strict';

module.exports = function flip() {
  const collection = {};

  Object.keys(this.items).map(
    function(key) {
      collection[this.items[key]] = key;
    }.bind(this)
  );

  return new this.constructor(collection);
};
