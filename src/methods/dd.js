'use strict';

module.exports = function dd() {
  console.log(this.all());

  if (typeof process !== 'undefined') {
    process.exit(1);
  }
};
