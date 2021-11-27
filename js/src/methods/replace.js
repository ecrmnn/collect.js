'use strict';

module.exports = function replace(items) {
  if (!items) {
    return this;
  }

  if (Array.isArray(items)) {
    const replaced = this.items.map((value, index) => items[index] || value);

    return new this.constructor(replaced);
  }

  if (items.constructor.name === 'Collection') {
    const replaced = Object.assign({}, this.items, items.all());

    return new this.constructor(replaced);
  }

  const replaced = Object.assign({}, this.items, items);

  return new this.constructor(replaced);
};
