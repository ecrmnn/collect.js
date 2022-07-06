import { isFunction } from '../helpers/is';

export default function unique(key) {
  let collection;

  if (key === undefined) {
    collection = this.items
      .filter((element, index, self) => self.indexOf(element) === index);
  } else {
    collection = [];

    const usedKeys = [];

    for (let iterator = 0, { length } = this.items;
      iterator < length; iterator += 1) {
      let uniqueKey;
      if (isFunction(key)) {
        uniqueKey = key(this.items[iterator]);
      } else {
        uniqueKey = this.items[iterator][key];
      }

      if (usedKeys.indexOf(uniqueKey) === -1) {
        collection.push(this.items[iterator]);
        usedKeys.push(uniqueKey);
      }
    }
  }

  return new this.constructor(collection);
}
