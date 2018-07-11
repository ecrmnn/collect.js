'use strict';

module.exports = (it, expect, collect) => {
  it('should return the count of the collection', () => {
    expect(collect([1, 2, 3, 4]).count()).to.eql(4);
    expect(collect([1, 2, 3, 4, 5]).count()).to.eql(5);
    expect(collect([1, 2, 3, 4, 5, 6]).count()).to.eql(6);
    expect(collect([1, 2, 3, 4, 5, 6, 7]).count()).to.eql(7);
  });

  it('should return the number of items on an object', () => {
    expect(collect({ name: 'Sadio Mané' }).count()).to.eql(1);
    expect(collect({ name: 'Sadio Mané', number: 19 }).count()).to.eql(2);
    expect(collect({ name: 'Sadio Mané', number: 19, club: 'Liverpool FC' }).count()).to.eql(3);
  });

  it('should return the number of items on an array of objects', () => {
    const array = [];
    array.name = 'Abdullah AlGethami';

    expect(collect(array).count()).to.eql(1);
    array.age = '30';
    expect(collect(array).count()).to.eql(2);
    array.gender = 'male';
    expect(collect(array).count()).to.eql(3);
  });

  it('should return the number of items on mixed values', () => {
    const array = [1, 2, 3];
    array.name = 'Abdullah AlGethami';

    expect(collect(array).count()).to.eql(4);
    array.age = '30';
    expect(collect(array).count()).to.eql(5);
    array.gender = 'male';
    expect(collect(array).count()).to.eql(6);
  });
};
