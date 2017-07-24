'use strict';

module.exports = function diffAssoc(values) {
  var _this = this;

  var diffValues = values;
  var diffKeys = Object.keys(values);

  if (values instanceof this.constructor) {
    diffValues = values.all();
    diffKeys = Object.keys(diffValues);
  }

  Object.keys(this.items).forEach(function (key) {
    console.log(key, _this.items[key]);
  });
};