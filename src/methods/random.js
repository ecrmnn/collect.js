'use strict';

module.exports = function random(length) {
  const randomLength = length || 1;

  const randomCollection = this.slice().shuffle().take(randomLength);

  if (randomLength === 1) {
    return randomCollection.first();
  }

  return randomCollection;
};
