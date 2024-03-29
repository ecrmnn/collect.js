'use strict';

const hoax = require('hoax.js');

module.exports = (it, expect, collect) => {
  it('should console log the collection', () => {
    const mockConsole = hoax(console, 'log');

    collect([1, 2, 3]).dump();
    collect({ name: 'Darwin Núñez', number: 27 }).dump();

    mockConsole.reset();

    expect(mockConsole.calls).to.eql([
      [collect([1, 2, 3])],
      [collect({ name: 'Darwin Núñez', number: 27 })],
    ]);
  });
};
