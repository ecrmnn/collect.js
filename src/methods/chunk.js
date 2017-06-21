'use strict';

module.exports = function chunk(size) {
  const chunks = [];
  let index = 0;

  do {
    chunks.push(this.items.slice(index, index + size));
    index += size;
  } while (index < this.items.length);

  return new this.constructor(chunks);
};
