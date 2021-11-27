'use strict';

const values = require('../helpers/values');

module.exports = function shuffle() {
  const items = values(this.items);

  let j;
  let x;
  let i;

  for (i = items.length; i; i -= 1) {
    j = Math.floor(Math.random() * i);
    x = items[i - 1];
    items[i - 1] = items[j];
    items[j] = x;
  }

  this.items = items;

  return this;
};
