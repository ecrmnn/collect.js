'use strict';

module.exports = function toJson() {
  return JSON.stringify(this.toArray());
};