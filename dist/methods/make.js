'use strict';

module.exports = function make() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  return new this.constructor(items);
};