'use strict';

module.exports = (it, expect, collect) => {
  it('should return a collection containing the items that would be present on a given page number', () => {
    const collection = collect([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    const forPage1 = collection.forPage(1, 3);
    expect(forPage1.all()).to.eql([1, 2, 3]);

    const forPage2 = collection.forPage(2, 3);
    expect(forPage2.all()).to.eql([4, 5, 6]);

    const forPage3 = collection.forPage(3, 3);
    expect(forPage3.all()).to.eql([7, 8, 9]);

    expect(collection.all()).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('shold work on collections based on an object', () => {
    const collection = collect({
      a: 'AAA',
      b: 'BBB',
      c: 'CCC',
      d: 'DDD',
      e: 'EEE',
    });

    const forPage1 = collection.forPage(1, 3);
    expect(forPage1.all()).to.eql({
      a: 'AAA',
      b: 'BBB',
      c: 'CCC',
    });

    const forPage2 = collection.forPage(2, 3);
    expect(forPage2.all()).to.eql({
      d: 'DDD',
      e: 'EEE',
    });

    const forPage3 = collection.forPage(3, 1);
    expect(forPage3.all()).to.eql({
      c: 'CCC',
    });

    expect(collection.all()).to.eql({
      a: 'AAA',
      b: 'BBB',
      c: 'CCC',
      d: 'DDD',
      e: 'EEE',
    });
  });
};
