'use strict';

const commonImport = require('../../dist');
const { collect: destructuredCollection } = require('../../dist');
const { Collection } = require('../../dist');

module.exports = (it, expect) => {
  it('should be a function', () => {
    expect(typeof commonImport).to.eql('function');
    expect(typeof destructuredCollection).to.eql('function');

    expect(commonImport).to.eql(destructuredCollection);
  });

  it('should return an object of collection', () => {
    const firstCollection = commonImport();
    expect(firstCollection.constructor.name).eql('Collection');

    const secondCollection = destructuredCollection();
    expect(secondCollection.constructor.name).eql('Collection');

    expect(firstCollection).to.eql(secondCollection);
  });

  it('should equal the same instance', () => {
    expect(commonImport()).to.instanceOf(Collection);
    expect(destructuredCollection()).to.instanceOf(Collection);
  });
};
