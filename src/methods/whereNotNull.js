export default function whereNotNull(key = null) {
  return this.where(key, '!==', null);
}
