'use strict';

const { collect } = require('../../dist');

module.exports = (it, expect) => {
  it('should be a function', () => {
    expect(typeof collect).equal('function');
  });

  it('should return an object of Collection', () => {
    const collection = collect();
    expect(collection.constructor.name).equal('Collection');
  });
};
