'use strict';

module.exports = function diffAssoc(values) {
  let diffValues = values;
  let diffKeys = Object.keys(values);

  if (values instanceof this.constructor) {
    diffValues = values.all();
    diffKeys = Object.keys(diffValues);
  }

  Object.keys(this.items).forEach((key) => {
    console.log(key, this.items[key]);
  });
};
