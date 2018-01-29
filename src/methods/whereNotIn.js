'use strict';

module.exports = function whereNotIn(key, values) {
  const items = values instanceof this.constructor ? values.all() : values;
  let collection = this.items;

  items.forEach((value) => {
    collection = collection.filter(item => item[key] !== value);
  });

  return new this.constructor(collection);
};
