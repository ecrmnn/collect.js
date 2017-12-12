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

    firstCollection.concat(firstArray).concat(secondArray).concat(firstObj);

    expect(firstCollection.count()).to.eql(12);
    expect(firstCollection.all()).to.eql(expected);
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

    const firstCollection = collect([4, 5, 6]);
    const secondCollection = collect(['a', 'b', 'c']);
    const thirdCollection = collect([{
      who: 'Jonny',
    }, {
      preposition: 'from',
    }, {
      where: 'Laroe',
    }]);

    firstCollection
      .concat(secondCollection)
      .concat(thirdCollection)
      .concat(thirdCollection);

    expect(firstCollection.count()).to.eql(12);
    expect(firstCollection.all()).to.eql(expected);
  });
};
