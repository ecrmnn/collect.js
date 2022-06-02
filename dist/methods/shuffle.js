'use strict';

var values = require('../helpers/values');

module.exports = function shuffle() {
  var items = values(this.items);
  var j;
  var x;
  var i;

  for (i = items.length; i; i -= 1) {
    j = Math.floor(Math.random() * i);
    x = items[i - 1];
    items[i - 1] = items[j];
    items[j] = x;
  }

  this.items = items;
  return this;
};