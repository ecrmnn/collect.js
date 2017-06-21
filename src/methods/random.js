'use strict';

module.exports = function random(length) {
  length = length || 1;

  const randomCollection = this.slice().shuffle().take(length);

  if (length === 1) {
    return randomCollection.first();
  }

  return randomCollection;
};
