'use strict';

module.exports = function SymbolIterator() {
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
};
