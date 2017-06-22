module.exports = function keys() {
  if (Array.isArray(this.items)) {
    const keys = [];

    this.items.forEach((object) => {
      Object.keys(object).forEach((key) => {
        keys.push(key);
      });
    });

    return new this.constructor(keys).unique();
  }

  return new this.constructor(Object.keys(this.items));
};
