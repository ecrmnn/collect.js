'use strict';

module.exports = function diffKeys(object) {
  var objectToDiff;

  if (object instanceof this.constructor) {
    objectToDiff = object.all();
  } else {
    objectToDiff = object;
  }

  var objectKeys = Object.keys(objectToDiff);
  var remainingKeys = Object.keys(this.items).filter(function (item) {
    return objectKeys.indexOf(item) === -1;
  });
  return new this.constructor(this.items).only(remainingKeys);
};