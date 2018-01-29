'use strict';

module.exports = function dd() {
  // eslint-disable-next-line
  console.log(this.all());

  if (typeof process !== 'undefined') {
    process.exit(1);
  }
};