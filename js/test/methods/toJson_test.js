'use strict';

module.exports = (it, expect, collect) => {
  it('should return a JSON representation of the collection', () => {
    const firstChildCollection = collect(['foo']);
    const secondChildCollection = collect(['bar']);
    const collection = collect([firstChildCollection, secondChildCollection]);

    expect(collection.toJson()).to.eql('[["foo"],["bar"]]');
  });

  it('should recursively cast collections to JSON', () => {
    const collectionOfCollections = collect([
      collect([1, 2, 3]),
      collect([4, 5, 6, collect([7, 8, 9]), [10, 11, 12]]),
    ]);

    expect(collectionOfCollections.toJson()).to.eql('[[1,2,3],[4,5,6,[7,8,9],[10,11,12]]]');
  });

  it('should cast objects to JSON', () => {
    const collection = collect({
      string: 'abc',
    });

    expect(collection.toJson()).to.eql('{"string":"abc"}');
  });

  it('should be compatible with JSON.stringify()', () => {
    /*
    JSON.stringify() looks for a toJSON() method. Note the capitalization difference.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
    */
    const collection = collect({
      string: 'abc',
    });

    expect(JSON.stringify(collection)).to.equal(collection.toJson());
  });
};
