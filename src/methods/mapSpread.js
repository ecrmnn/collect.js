export default function mapSpread(fn) {
  return this.map((values, key) => fn(...values, key));
}
