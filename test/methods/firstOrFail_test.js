'use strict';

module.exports = (it, expect, collect) => {
  it('should return the first item in collection', () => {
    const collection = collect([
      { name: 'foo' },
      { name: 'bar' },
    ]);

    expect(collection.where('name', 'foo').firstOrFail()).to.deep.equal({ name: 'foo' });
    expect(collection.firstOrFail('name', '=', 'foo')).to.deep.equal({ name: 'foo' });
    expect(collection.firstOrFail('name', 'foo')).to.deep.equal({ name: 'foo' });
  });

  it('should throw error if no items exists', () => {
    const collection = collect([
      { name: 'foo' },
      { name: 'bar' },
    ]);

    expect(() => {
      collection.where('name', 'INVALID').firstOrFail();
    }).to.throw('Item not found.');
  });

  it('should not throw error if more than one item exists', () => {
    const collection = collect([
      { name: 'foo' },
      { name: 'foo' },
      { name: 'bar' },
    ]);

    expect(collection.where('name', 'foo').firstOrFail()).to.deep.equal({ name: 'foo' });
  });

  it('should return first item in collection if only one exists with callback', () => {
    const collection = collect(['foo', 'bar', 'baz']);

    const result = collection.firstOrFail((value) => value === 'bar');

    expect(result).to.equal('bar');
  });

  it('should throw an exveption if no items exist with callback', () => {
    const collection = collect(['foo', 'bar', 'baz']);

    expect(() => {
      collection.firstOrFail((value) => value === 'invalid');
    }).to.throw('Item not found.');
  });

  it('should not throw error if more than one item exists with callback', () => {
    const collection = collect(['foo', 'bar', 'baz']);

    const result = collection.firstOrFail((value) => value === 'bar');

    expect(result).to.equal('bar');
  });

  it('should stop iterating at first match', () => {
    const collection = collect([
      () => false,
      () => true,
      () => {
        throw new Error();
      }
    ]);

    const result = collection.firstOrFail((callback) => callback());

    expect(result).to.not.equal(null);
  });
};
