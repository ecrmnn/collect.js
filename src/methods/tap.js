

export default function tap(fn) {
  fn(this);

  return this;
}
