'use strict';

module.exports = function whereNull() {
  var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return this.where(key, '===', null);
};