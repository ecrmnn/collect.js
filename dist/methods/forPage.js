'use strict';

module.exports = function forPage(page, chunk) {
  var collection = this.items.slice(page * chunk - chunk, page * chunk);

  return new this.constructor(collection);
};