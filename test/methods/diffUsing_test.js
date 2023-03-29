'use strict';

module.exports = (it, expect, collect) => {
  it('should compare the collection against a javascript array using a callback', () => {
    const collection = collect(['fr', 'en_gb', 'hr']);
    const diffArray = ['en_gb', 'hr'];

    const diff = collection.diffUsing(diffArray, (a, b) => a.localeCompare(b));

    expect(diff.all()).to.eql(['fr']);
    expect(collection.all()).to.eql(['fr', 'en_gb', 'hr']);
  });

  it('should compare with null', () => {
    const collection = collect(['fr', 'en_gb', 'hr']);

    const diff = collection.diffUsing(null, (a, b) => a.localeCompare(b));

    expect(diff.all()).to.eql(collection.all());
  });

  it('should compare the collection against another collection using on a callback', () => {
    const collection = collect([
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 35 },
    ]);

    const diffCollection = collect([
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 35 },
      { name: 'David', age: 40 },
    ]);

    const diff = collection.diffUsing(diffCollection, (a, b) => a.age - b.age);

    expect(diff.all()).to.be.eql([{ name: 'Alice', age: 25 }]);
  });

  it('does not return a difference when the comparison is null', () => {
    const collection = collect(['apple', 'banana', 'cherry']);
    const diff = collection.diffUsing(null, (a, b) => a.localeCompare(b));

    expect(diff.all()).to.eql(['apple', 'banana', 'cherry']);
  });
};
