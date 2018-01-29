'use strict';

module.exports = function whereNotIn(key, values) {
  var items = values instanceof this.constructor ? values.all() : values;
  var collection = this.items;

  items.forEach(function (value) {
    collection = collection.filter(function (item) {
      return item[key] !== value;
    });
  });

  return new this.constructor(collection);
};