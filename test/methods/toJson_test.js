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
};
