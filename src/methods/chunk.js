'use strict';

module.exports = function chunk(size) {
  const chunks = [];

  while (this.items.length) {
    chunks.push(this.items.splice(0, size));
  }

  return new this.constructor(chunks);
};
