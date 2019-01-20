'use strict';

module.exports = function whereInstanceOf(type) {
  return this.filter(function (item) {
    return item instanceof type;
  });
};