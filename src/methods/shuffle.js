'use strict';

module.exports = function shuffle() {
  let j;
  let x;
  let i;

  for (i = this.items.length; i; i -= 1) {
    j = Math.floor(Math.random() * i);
    x = this.items[i - 1];
    this.items[i - 1] = this.items[j];
    this.items[j] = x;
  }

  return this;
};
