export default function collapse() {
  return new this.constructor([].concat(...this.items));
}
