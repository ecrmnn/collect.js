export default function flatMap(fn) {
  return this.map(fn).collapse();
}
