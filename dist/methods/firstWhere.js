'use strict';

module.exports = function firstWhere(key, value) {
  return this.where(key, value).first() || null;
};