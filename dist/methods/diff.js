'use strict';

module.exports = function diff(values) {
  var valuesToDiff;

  if (values instanceof this.constructor) {
    valuesToDiff = values.all();
  } else {
    valuesToDiff = values;
  }

  var collection = this.items.filter(function (item) {
    return valuesToDiff.indexOf(item) === -1;
  });
  return new this.constructor(collection);
};