import extractValues from '../helpers/values';
import nestedValue from '../helpers/nestedValue';

export default function whereIn(key, values) {
  const items = extractValues(values);

  const collection = this.items
    .filter(item => items.indexOf(nestedValue(item, key)) !== -1);

  return new this.constructor(collection);
}
