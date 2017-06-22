module.exports = function has(key) {
  if (Array.isArray(this.items)) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i][key] !== undefined) {
        return true;
      }
    }

    return false;
  }

  return this.items[key] !== undefined;
};
