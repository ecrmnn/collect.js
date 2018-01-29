'use strict';

module.exports = function whereIn(key, values) {
  let items = values instanceof this.constructor ? values.all() : values;

  const collection = this.items
    .filter(item => items.indexOf(item[key]) !== -1);

  return new this.constructor(collection);
};
