'use strict';

module.exports = function whereNotIn(key, values) {
  let collection = this.items;

  values.forEach(
    function(value) {
      collection = collection.filter(function(item) {
        return item[key] !== value;
      });
    }.bind(this)
  );

  return new this.constructor(collection);
};
