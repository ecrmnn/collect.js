'use strict';

module.exports = function whereIn(key, values) {
  const collection = this.items
    .filter(item => values.indexOf(item[key]) !== -1);

  return new this.constructor(collection);
};
