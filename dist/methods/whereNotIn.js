'use strict';

module.exports = function whereNotIn(key, values) {
  values = values instanceof this.constructor ? values.all() : values;
  var collection = this.items;

  values.forEach(function (value) {
    collection = collection.filter(function (item) {
      return item[key] !== value;
    });
  });

  return new this.constructor(collection);
};