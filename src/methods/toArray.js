'use strict';


module.exports = function toArray() {
  const collectionInstance = this.constructor;

  const iterate = function (list, collection) {
    list.forEach((element) => {
      if (element instanceof collectionInstance) {
        collection.push(element.items);
      } else if (Array.isArray(element)) {
        if (element.filter(el => el instanceof collectionInstance).length) {
          iterate(element, collection);
        } else {
          collection.push(element);
        }
      }


    });
  };

  if (Array.isArray(this.items)) {
    const collection = [];
    iterate(this.items, collection);

    console.log(collection);

    return collection;
  }

  return this.values().all();
};
