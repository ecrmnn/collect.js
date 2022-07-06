export default function reject(fn) {
  return new this.constructor(this.items).filter(item => !fn(item));
};
