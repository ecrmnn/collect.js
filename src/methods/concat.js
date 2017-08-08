'use strict';

module.exports = function concat(collectionOrArrayOrObject) {
  let list = collectionOrArrayOrObject;

  if (collectionOrArrayOrObject instanceof this.constructor) {
    list = collectionOrArrayOrObject.all();
  } else if (typeof collectionOrArrayOrObject === 'object') {
    list = [];
    Object.keys(collectionOrArrayOrObject).forEach((property) => {
      list.push(collectionOrArrayOrObject[property]);
    });
  }

  list.forEach((item) => {
    if (typeof item === 'object') {
      Object.keys(item).forEach(key => this.items.push(item[key]));
    } else {
      this.items.push(item);
    }
  });

  return this;
};
