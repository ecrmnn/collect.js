'use strict';

module.exports = (it, expect, collect) => {
  it('should return a random item from the collection', () => {
    const collection = collect([1, 2, 3, 4, 5]);
    const random = collection.random();

    expect(random).to.be.within(1, 5);
    expect(collection.all().length).to.eql(5);
  });

  it('should return n random items from the collection', () => {
    const arrayOfRandomValues = collect([1, 2, 3, 4, 5]).random(3);

    expect(arrayOfRandomValues.all().length).to.eql(3);
    expect(arrayOfRandomValues.all()[0]).to.be.within(1, 5);
    expect(arrayOfRandomValues.all()[1]).to.be.within(1, 5);
    expect(arrayOfRandomValues.all()[2]).to.be.within(1, 5);
    expect(arrayOfRandomValues.all()[3]).to.eql(undefined);
  });

  it('should not modify the collection', () => {
    const collection = collect([1, 2, 3, 4, 5, 8, 6]);
    collection.random();
    expect(collection.all()).to.eql([1, 2, 3, 4, 5, 8, 6]);
  });

  it('should work when collection is based on an object', () => {
    const collection = collect({
      first: 1,
      second: 2,
      third: 3,
      fourth: 4,
    });

    expect(collection.random()).to.be.within(1, 4);

    expect(collection.all()).to.eql({
      first: 1,
      second: 2,
      third: 3,
      fourth: 4,
    });
  });
};
