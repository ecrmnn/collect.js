'use strict';

module.exports = function dd() {
  console.log(this.all());
  process.exit(1);
};
