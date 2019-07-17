'use strict';

module.exports = function firstWhere(key, operator, value) {
  return this.where(key, operator, value).first() || null;
};