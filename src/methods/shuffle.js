'use strict';

module.exports = function shuffle() {
  let j, x, i;
  for (i = this.items.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = this.items[i - 1];
    this.items[i - 1] = this.items[j];
    this.items[j] = x;
  }

  return this;
};
