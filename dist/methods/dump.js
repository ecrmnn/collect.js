'use strict';

module.exports = function dump() {
  if (Array.isArray(this.items)) {
    this.items.forEach(function (item) {
      return console.log(item);
    });
  } else {
    console.log(this.all());
  }

  return this;
};