import nestedValue from '../helpers/nestedValue';
import { isFunction } from '../helpers/is';

export default function groupBy(key) {
  const collection = {};

  this.items.forEach((item, index) => {
    let resolvedKey;

    if (isFunction(key)) {
      resolvedKey = key(item, index);
    } else if (nestedValue(item, key) || nestedValue(item, key) === 0) {
      resolvedKey = nestedValue(item, key);
    } else {
      resolvedKey = '';
    }

    if (collection[resolvedKey] === undefined) {
      collection[resolvedKey] = new this.constructor([]);
    }

    collection[resolvedKey].push(item);
  });

  return new this.constructor(collection);
}
