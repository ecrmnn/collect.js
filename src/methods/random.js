'use strict';

module.exports = function random(length) {
  length = length || 1;
  const randomCollection = this.slice().shuffle().take(length);

  return length === 1 ? randomCollection.first() : randomCollection;
};
