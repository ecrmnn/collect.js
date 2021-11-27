'use strict';

const hoax = require('hoax.js');

module.exports = (it, expect, collect) => {
  it('should dump the collection and exit the current process', () => {
    const mockConsole = hoax(console, 'log');
    const mockProcess = hoax(process, 'exit');

    collect([1, 2, 3]).dd();

    mockConsole.reset();
    mockProcess.reset();

    expect(mockConsole.calls).to.eql([[collect([1, 2, 3])]]);
    expect(mockProcess.calls).to.eql([[1]]);
  });
};
