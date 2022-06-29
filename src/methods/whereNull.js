export default function whereNull(key = null) {
  return this.where(key, '===', null);
}
