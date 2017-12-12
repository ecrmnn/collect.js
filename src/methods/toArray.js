'use strict';

module.exports = function toArray() {
  const collectionInstance = this.constructor;

  function iterate(list, collection) {
    const childCollection = [];

    if (list instanceof collectionInstance) {
      list.items.forEach(i => iterate(i, childCollection));
      collection.push(childCollection);
    } else if (Array.isArray(list)) {
      list.forEach(i => iterate(i, childCollection));
      collection.push(childCollection);
    } else {
      collection.push(list);
    }
  }

  if (Array.isArray(this.items)) {
    const collection = [];

    this.items.forEach((items) => {
      iterate(items, collection);
    });

    return collection;
  }

  return this.values().all();
};
