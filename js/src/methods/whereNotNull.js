'use strict';

module.exports = function whereNotNull(key = null) {
  return this.where(key, '!==', null);
};
