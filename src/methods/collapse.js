'use strict';

module.exports = function collapse() {
  return new this.constructor([].concat(...this.items.map((items) => {
    if (items.constructor.name === 'Collection') {
      return items.all();
    }

    return items;
  })));
};
