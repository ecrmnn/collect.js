'use strict';

module.exports = function whereInstanceOf(type) {
  return this.filter(item => item instanceof type);
};
