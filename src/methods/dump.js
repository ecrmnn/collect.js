'use strict';

module.exports = function dump() {
  if (Array.isArray(this.items)) {
    this.items.forEach(item => console.log(item));
  } else {
    console.log(this.all());
  }

  return this;
};
