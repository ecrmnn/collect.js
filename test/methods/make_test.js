'use strict';

module.exports = (it, expect, collect) => {
  it('should make a new collection', () => {
    const collection = collect().make('foo');
    expect(collection.all()).to.eql(['foo']);
  });

  it('should make a new collection from null', () => {
    const collection = collect().make(null);
    expect(collection.all()).to.eql([]);
  });

  it('should make a new collection from nothing', () => {
    const collection = collect().make();
    expect(collection.all()).to.eql([]);
  });

  it('should make a new collection from an array', () => {
    const collection = collect().make([1, 2, 3]);
    expect(collection.all()).to.eql([1, 2, 3]);
  });

  it('should make a new collection from an object', () => {
    const collection = collect().make({ foo: 'bar' });
    expect(collection.all()).to.eql({ foo: 'bar' });
  });

  it('should make a new collection from other collection', () => {
    const firstCollection = collect().make({ foo: 'bar' });
    const secondCollection = collect().make(firstCollection);

    expect(secondCollection.all()).to.eql({ foo: 'bar' });
  });
};
