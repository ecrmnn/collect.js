import values from '../helpers/values';

export default function nth(n, offset = 0) {
  const items = values(this.items);

  const collection = items
    .slice(offset)
    .filter((item, index) => index % n === 0);

  return new this.constructor(collection);
}
