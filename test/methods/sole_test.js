'use strict';

module.exports = (it, expect, collect) => {
  it('should return first item in collection if only one exists', () => {
    const collection = collect([
      { name: 'foo' },
      { name: 'bar' },
    ]);

    expect(collection.where('name', 'foo').sole()).to.deep.equal({ name: 'foo' });
    expect(collection.sole('name', '=', 'foo')).to.deep.equal({ name: 'foo' });
    expect(collection.sole('name', 'foo')).to.deep.equal({ name: 'foo' });
  });

  it('should throw error if no items exist', () => {
    const collection = collect([
      { name: 'foo' },
      { name: 'bar' },
    ]);

    expect(() => {
      collection.where('name', 'INVALID').sole();
    }).to.throw('Item not found.');
  });

  it('should throw error if more than one item exists', () => {
    const collection = collect([
      { name: 'foo' },
      { name: 'foo' },
      { name: 'bar' },
    ]);

    expect(() => {
      collection.where('name', 'foo').sole();
    }).to.throw('Multiple items found.');
  });

  it('should return first item in collection if only one exists with callback', () => {
    const collection = collect(['foo', 'bar', 'baz']);

    const result = collection.sole((value) => value === 'bar');

    expect(result).to.equal('bar');
  });

  it('should throw error if no items exist with callback', () => {
    const collection = collect(['foo', 'bar', 'baz']);

    expect(() => {
      collection.sole((value) => value === 'invalid');
    }).to.throw('Item not found.');
  });

  it('should throw error if more than one items exist with callback', () => {
    const collection = collect(['foo', 'bar', 'bar']);

    expect(() => {
      collection.sole((value) => value === 'bar');
    }).to.throw('Multiple items found.');
  });
};
