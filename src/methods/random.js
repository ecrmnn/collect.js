'use strict';

module.exports = function random(length) {
  this.shuffle();

  if (length !== undefined || length === 1) {
    this.items.splice(0, this.items.length - length);

    return this;
  }

  return this.items[0];
};
