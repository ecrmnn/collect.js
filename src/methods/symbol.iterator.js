'use strict';

module.exports = function SymbolIterator() {
  let index = 0;

  return {
    next: function() {
      return {
        value: this.items[index++],
        done: index > this.items.length,
      };
    }.bind(this),
  };
};
