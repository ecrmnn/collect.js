'use strict';

module.exports = function SymbolIterator() {
  if (Array.isArray(this.items)) {
    let index = -1;
    return {
      next: () => {
        index += 1;
        return {
          value: this.items[index],
          done: index >= this.items.length,
        };
      },
    };
  } else if (typeof this.items === 'object') {
    const keys = Object.keys(this.items);
    let index = -1;
    return {
      next: () => {
        index += 1;
        return {
          value: this.items[keys[index]],
          done: index >= keys.length,
        };
      },
    };
  } else {
    throw new TypeError("Unknown item data type");
  }
};
