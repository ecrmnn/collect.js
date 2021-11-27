'use strict';

module.exports = function whereNull(key = null) {
  return this.where(key, '===', null);
};
