'use strict';

module.exports = function whereIn(key, values) {
  var items = values instanceof this.constructor ? values.all() : values;

  var collection = this.items.filter(function (item) {
    return items.indexOf(item[key]) !== -1;
  });

  return new this.constructor(collection);
};