'use strict';

module.exports = function whereIn(key, values) {
  values = values instanceof this.constructor ? values.all() : values;
  
  const collection = this.items
    .filter(item => values.indexOf(item[key]) !== -1);

  return new this.constructor(collection);
};
