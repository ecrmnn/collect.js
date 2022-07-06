export default function eachSpread(fn) {
  this.each((values, key) => {
    fn(...values, key);
  });

  return this;
};
