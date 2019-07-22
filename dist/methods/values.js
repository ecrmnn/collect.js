'use strict';

var getValues = require('../helpers/values');

module.exports = function values() {
  return new this.constructor(getValues(this.items));
};