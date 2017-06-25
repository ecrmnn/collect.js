'use strict';

module.exports = function random(length) {
  var randomLength = length || 1;

  var randomCollection = this.slice().shuffle().take(randomLength);

  if (randomLength === 1) {
    return randomCollection.first();
  }

  return randomCollection;
};