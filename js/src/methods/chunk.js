'use strict';

module.exports = function chunk(size) {
  const chunks = [];
  let index = 0;

  if (Array.isArray(this.items)) {
    do {
      const items = this.items.slice(index, index + size);
      const collection = new this.constructor(items);

      chunks.push(collection);
      index += size;
    } while (index < this.items.length);
  } else if (typeof this.items === 'object') {
    const keys = Object.keys(this.items);

    do {
      const keysOfChunk = keys.slice(index, index + size);
      const collection = new this.constructor({});

      keysOfChunk.forEach(key => collection.put(key, this.items[key]));

      chunks.push(collection);
      index += size;
    } while (index < keys.length);
  } else {
    chunks.push(new this.constructor([this.items]));
  }

  return new this.constructor(chunks);
};
