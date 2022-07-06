export default function intersect(values) {
  let intersectValues = values;

  if (values instanceof this.constructor) {
    intersectValues = values.all();
  }

  const collection = this.items
    .filter(item => intersectValues.indexOf(item) !== -1);

  return new this.constructor(collection);
}
