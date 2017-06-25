'use strict';

module.exports = function shuffle() {
  var j = void 0;
  var x = void 0;
  var i = void 0;

  for (i = this.items.length; i; i -= 1) {
    j = Math.floor(Math.random() * i);
    x = this.items[i - 1];
    this.items[i - 1] = this.items[j];
    this.items[j] = x;
  }

  return this;
};