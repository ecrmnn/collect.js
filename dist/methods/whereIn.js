'use strict';

module.exports = function whereIn(key, values) {
  values = values instanceof this.constructor ? values.all() : values;

  var collection = this.items.filter(function (item) {
    return values.indexOf(item[key]) !== -1;
  });

  return new this.constructor(collection);
};