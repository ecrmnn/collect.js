export default function dd() {
  this.dump();

  if (typeof process !== 'undefined') {
    process.exit(1);
  }
};
