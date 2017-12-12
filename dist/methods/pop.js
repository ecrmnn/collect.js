'use strict';

module.exports = function pop() {
  if (Array.isArray(this.items)) {
    return this.items.pop();
  }

  var keys = Object.keys(this.items);
  var key = keys[keys.length - 1];
  var last = this.items[key];

  delete this.items[key];

  return last;
};