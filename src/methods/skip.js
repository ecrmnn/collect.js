import { isObject } from '../helpers/is';

export default function skip(number) {
  if (isObject(this.items)) {
    return new this.constructor(
      Object.keys(this.items)
        .reduce((accumulator, key, index) => {
          if ((index + 1) > number) {
            accumulator[key] = this.items[key];
          }

          return accumulator;
        }, {}),
    );
  }

  return new this.constructor(this.items.slice(number));
}
