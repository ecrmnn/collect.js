'use strict';

module.exports = (it, expect, collect) => {
  it('should return whether the collection contains a given item', () => {
    const collection = collect({
      name: 'Steven Gerrard',
      number: 8,
    });

    const contains = collection.some('name');

    expect(contains).to.eql(true);

    expect(collection.all()).to.eql({
      name: 'Steven Gerrard',
      number: 8,
    });

    const collection2 = collect({
      name: 'Steven Gerrard',
      number: 8,
    });

    const contains2 = collection2.some('spouse');
    expect(contains2).to.eql(false);
    expect(collection2.all()).to.eql({
      name: 'Steven Gerrard',
      number: 8,
    });
  });

  it('should accept a key / value pair', () => {
    const collection = collect({
      name: 'Steven Gerrard',
      number: 8,
    });

    const contains = collection.some('name', 'Steven Gerrard');
    expect(contains).to.eql(true);

    const contains2 = collection.some('number', '8');
    expect(contains2).to.eql(false);

    const contains3 = collection.some('number', 28);
    expect(contains3).to.eql(false);

    const contains4 = collection.some('name', 'Steve Jobs');
    expect(contains4).to.eql(false);
  });

  it('should work with an collection with an array of objects', () => {
    const collection = collect([{
      name: 'Steven Gerrard',
      number: 8,
    }, {
      name: 'Steve Jobs',
      number: 2,
    }]);

    expect(collection.some('name')).to.eql(false);
    expect(collection.some('name', 'Steven Gerrard')).to.eql(true);
    expect(collection.some('name', 'Gerrard')).to.eql(false);
  });

  it('should accept a closure', () => {
    const collection = collect([1, 2, 3, 4, 5]);

    const contains = collection.some(value => value > 5);
    expect(contains).to.eql(false);

    const contains2 = collection.some(value => value < 5);
    expect(contains2).to.eql(true);

    const collection3 = collect([1, 2, 3, 4]);
    expect(collection3.some(4)).to.eql(true);
  });

  it('should return whether the collection contains a given key', () => {
    const collection = collect({
      name: 'Mohamed Salah',
      number: 11,
    });

    expect(collection.some('name')).to.eql(true);
    expect(collection.some('Mohamed Salah')).to.eql(true);
    expect(collection.some('number')).to.eql(true);
    expect(collection.some(11)).to.eql(true);
  });
};
