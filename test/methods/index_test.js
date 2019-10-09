'use strict';

const { collect } = require('../../dist');

module.exports = (it, expect) => {
  it('collect should be a function', () => {
    expect(typeof collect).equal('function');
  });

  it('collect should be an object of Collection', () => {
    const collection = collect();
    expect(collection.constructor.name).equal('Collection');
  });
};
