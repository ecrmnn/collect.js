/**
 * Values helper
 *
 * Retrieve values from [this.items] when it is an array, object or Collection
 *
 * @param items
 * @returns {*}
 */
export default function values(items) {
  const valuesArray = [];

  if (Array.isArray(items)) {
    valuesArray.push(...items);
  } else if (items.constructor.name === 'Collection') {
    valuesArray.push(...items.all());
  } else {
    Object.keys(items).forEach(prop => valuesArray.push(items[prop]));
  }

  return valuesArray;
}
