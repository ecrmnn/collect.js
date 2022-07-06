export default function unwrap(value) {
  if (value instanceof this.constructor) {
    return value.all();
  }

  return value;
};
