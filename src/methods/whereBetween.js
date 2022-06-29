export default function whereBetween(key, values) {
  return this.where(key, '>=', values[0]).where(key, '<=', values[values.length - 1]);
};
