'use strict';

module.exports = function diff(values) {
  let valuesToDiff;

  if (values instanceof this.constructor) {
    valuesToDiff = values.all();
  } else {
    valuesToDiff = values;
  }

  const collection = this.items.filter(item => valuesToDiff.indexOf(item) === -1);

  return new this.constructor(collection);
};
