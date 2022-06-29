export default function push(...items) {
  this.items.push(...items);

  return this;
}
