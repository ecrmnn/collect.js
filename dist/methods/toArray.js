'use strict';

module.exports = function toArray() {
  var collectionInstance = this.constructor;

  var iterate = function iterate(list, collection) {
    list.forEach(function (element) {
      if (element instanceof collectionInstance) {
        collection.push(element.items);
      } else if (Array.isArray(element)) {
        if (element.filter(function (el) {
          return el instanceof collectionInstance;
        }).length) {
          iterate(element, collection);
        } else {
          collection.push(element);
        }
      }
    });
  };

  if (Array.isArray(this.items)) {
    var collection = [];
    iterate(this.items, collection);

    console.log(collection);

    return collection;
  }

  return this.values().all();
};