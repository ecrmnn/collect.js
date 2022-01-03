'use strict';

module.exports = (it, expect, collect) => {
  it('should return first element in collection if only one exists', () => {
    const collection = collect([
      { name: 'foo' },
      { name: 'bar' },
    ]);

    expect(collection.where('name', 'foo').sole()).to.deep.equal({ name: 'foo' });
    expect(collection.sole('name', '=', 'foo')).to.deep.equal({ name: 'foo' });
    expect(collection.sole('name', 'foo')).to.deep.equal({ name: 'foo' });
  });

  it('should throw exception if no elements exist', () => {
    const collection = collect([
      { name: 'foo' },
      { name: 'bar' },
    ]);

    expect(() => {
      collection.where('name', 'INVALID').sole();
    }).to.throw('Item not found.');
  });

  it('should throw exception if more than one element exists', () => {
    const collection = collect([
      { name: 'foo' },
      { name: 'foo' },
      { name: 'bar' },
    ]);

    expect(() => {
      collection.where('name', 'foo').sole();
    }).to.throw('Multiple items found.');
  });

  it('should return first element in collection if only one exists with callback', () => {
    const collection = collect(['foo', 'bar', 'baz']);

    const result = collection.sole((value) => value === 'bar');

    expect(result).to.equal('bar');
  });

  it('should throw exception if no elements exist with callback', () => {
    const collection = collect(['foo', 'bar', 'baz']);

    expect(() => {
      collection.sole((value) => value === 'invalid');
    }).to.throw('Item not found.');
  });

  it('should throw exception if more than one elements exist with callback', () => {
    const collection = collect(['foo', 'bar', 'bar']);

    expect(() => {
      collection.sole((value) => value === 'bar');
    }).to.throw('Multiple items found.');
  });
};
