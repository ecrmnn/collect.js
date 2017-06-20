'use strict';

module.exports = function diffKeys(object) {
  if (object instanceof this.constructor) {
    object = object.all();
  }

  const objectKeys = Object.keys(object);

  const diffKeys = Object.keys(this.items).filter(function(item) {
    return objectKeys.indexOf(item) === -1;
  });

  return new this.constructor(Object.create(this.items)).only(diffKeys);
};
