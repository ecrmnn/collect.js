'use strict';

module.exports = (it, expect, collect) => {
  it('should append arrays to collection', () => {
    const expected = [
      4,
      5,
      6,
      'a',
      'b',
      'c',
      'Jonny',
      'from',
      'Laroe',
      'Jonny',
      'from',
      'Laroe',
    ];

    const firstCollection = collect([4, 5, 6]);
    const firstArray = ['a', 'b', 'c'];
    const secondArray = [{
      who: 'Jonny',
    }, {
      preposition: 'from',
    }, {
      where: 'Laroe',
    }];
    const firstObj = {
      who: 'Jonny',
      preposition: 'from',
      where: 'Laroe',
    };

    const collection = firstCollection.concat(firstArray).concat(secondArray).concat(firstObj);

    expect(collection.count()).to.eql(12);
    expect(collection.all()).to.eql(expected);
  });

  it('should append collections to collection', () => {
    const expected = [
      4,
      5,
      6,
      'a',
      'b',
      'c',
      'Jonny',
      'from',
      'Laroe',
      'Jonny',
      'from',
      'Laroe',
    ];

    let collection = collect([4, 5, 6]);
    collection = collection.concat(collect(['a', 'b', 'c']));
    collection = collection.concat(collect([{
      who: 'Jonny',
    }, {
      preposition: 'from',
    }, {
      where: 'Laroe',
    }]));

    collection = collection.concat([{
      who: 'Jonny',
    }, {
      preposition: 'from',
    }, {
      where: 'Laroe',
    }]);

    expect(collection.count()).to.eql(12);
    expect(collection.all()).to.eql(expected);
  });

  it('should not modify the collection', () => {
    const arr1 = collect([1, 2, 3]);
    const arr2 = arr1.concat([4, 5]);

    expect(arr1.all()).to.eql([1, 2, 3]);
    expect(arr2.all()).to.eql([1, 2, 3, 4, 5]);
  });
};
