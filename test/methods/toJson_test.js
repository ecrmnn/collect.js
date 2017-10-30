'use strict';

module.exports = (it, expect, collect) => {
  it('should return a JSON representation of the collection', () => {
    const collection = collect({
      id: 384,
      name: 'Rayquaza',
      gender: 'NA',
    });

    const json = collection.toJson();

    expect(json).to.eql('{"id":384,"name":"Rayquaza","gender":"NA"}');

    expect(collection.all()).to.eql({
      id: 384,
      name: 'Rayquaza',
      gender: 'NA',
    });
  });

  it('should work when collection is based on an array', () => {
    expect(collect([1, 2, 3]).toJson()).to.eql('[1,2,3]');
  });
};
