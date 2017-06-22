module.exports = function first(fn) {
  if (typeof fn === 'function') {
    for (let i = 0; i < this.items.length; i += 1) {
      const item = this.items[i];
      if (fn(item)) {
        return item;
      }
    }
  }

  return this.items[0];
};
