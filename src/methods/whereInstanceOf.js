

export default function whereInstanceOf(type) {
  return this.filter(item => item instanceof type);
}
