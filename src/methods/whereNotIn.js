'use strict';

module.exports = function whereNotIn(key, values) {
  let collection = this.items;

  values.forEach((value) => {
    collection = collection.filter(item => item[key] !== value);
  });

  return new this.constructor(collection);
};
