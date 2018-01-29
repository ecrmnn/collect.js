'use strict';

module.exports = function whereNotIn(key, values) {
  values = values instanceof this.constructor ? values.all() : values;
  let collection = this.items;

  values.forEach((value) => {
    collection = collection.filter(item => item[key] !== value);
  });

  return new this.constructor(collection);
};
