export default function reverse() {
  const collection = [].concat(this.items).reverse();

  return new this.constructor(collection);
};
