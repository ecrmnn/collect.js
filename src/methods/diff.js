'use strict';

module.exports = function diff(values) {
  if (values instanceof this.constructor) {
    values = values.all();
  }

  const collection = this.items.filter(function(item) {
    return values.indexOf(item) === -1;
  });

  return new this.constructor(collection);
};
