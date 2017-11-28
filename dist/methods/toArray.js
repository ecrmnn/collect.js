'use strict';

module.exports = function toArray() {
  var collectionInstance = this.constructor;

  function iterate(list, collection) {
    var childCollection = [];

    if (list instanceof collectionInstance) {
      list.items.forEach(function (i) {
        return iterate(i, childCollection);
      });
      collection.push(childCollection);
    } else if (Array.isArray(list)) {
      list.forEach(function (i) {
        return iterate(i, childCollection);
      });
      collection.push(childCollection);
    } else {
      collection.push(list);
    }
  }

  if (Array.isArray(this.items)) {
    var collection = [];

    this.items.forEach(function (items) {
      iterate(items, collection);
    });

    return collection;
  }

  return this.values().all();
};