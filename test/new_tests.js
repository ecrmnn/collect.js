'use strict';

const fs = require('fs');
const it = require('mocha').it;
const describe = require('mocha').describe;
const path = require('path');
const expect = require('chai').expect;
const collect = require('../dist');

let test = process.argv[process.argv.length - 1];
const runSingleTest = test.indexOf('--') !== -1;
test = test.replace('--', '');
test += '_test.js';

fs.readdirSync(path.join(__dirname, 'methods')).forEach((file) => {
  describe(file.replace('_test.js', '()'), () => {
    if (!runSingleTest) {
      require(path.join(__dirname, 'methods', file))(it, expect, collect);
    } else if (runSingleTest && file === test) {
      require(path.join(__dirname, 'methods', file))(it, expect, collect);
    }
  });
});
