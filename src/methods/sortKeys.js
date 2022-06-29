

export default function sortKeys() {
  const ordered = {};

  Object.keys(this.items).sort().forEach((key) => {
    ordered[key] = this.items[key];
  });

  return new this.constructor(ordered);
}
