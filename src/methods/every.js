import values from '../helpers/values';

export default function every(fn) {
  const items = values(this.items);

  return items.every(fn);
}
