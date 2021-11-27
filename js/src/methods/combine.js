'use strict';

module.exports = function combine(array) {
  let values = array;

  if (values instanceof this.constructor) {
    values = array.all();
  }

  const collection = {};

  if (Array.isArray(this.items) && Array.isArray(values)) {
    this.items.forEach((key, iterator) => {
      collection[key] = values[iterator];
    });
  } else if (typeof this.items === 'object' && typeof values === 'object') {
    Object.keys(this.items).forEach((key, index) => {
      collection[this.items[key]] = values[Object.keys(values)[index]];
    });
  } else if (Array.isArray(this.items)) {
    collection[this.items[0]] = values;
  } else if (typeof this.items === 'string' && Array.isArray(values)) {
    [collection[this.items]] = values;
  } else if (typeof this.items === 'string') {
    collection[this.items] = values;
  }

  return new this.constructor(collection);
};
