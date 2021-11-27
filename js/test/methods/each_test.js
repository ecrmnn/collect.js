'use strict';

/* eslint-disable consistent-return */

module.exports = (it, expect, collect) => {
  it('should iterate over the collection', () => {
    let sum = 0;

    const collection = collect([1, 3, 3, 7]);

    const each = collection.each((item) => {
      sum += item;
    }).all();

    expect(each).to.eql([1, 3, 3, 7]);
    expect(sum).to.eql(14);
    expect(collection.all()).to.eql([1, 3, 3, 7]);

    let sum2 = 0;

    const summed = collection.each((item) => {
      if (item > 3) {
        return;
      }

      sum2 += item;
    });

    expect(summed.all()).to.eql([1, 3, 3, 7]);
    expect(sum2).to.eql(7);
  });

  it('should stop iterating, when returning false', () => {
    const collection = collect([1, 2, { foo: 'bar' }, { bam: 'baz' }]);

    const result = [];

    collection.each((item, key) => {
      result[key] = item;

      if (typeof item === 'object') {
        return false;
      }
    });

    expect(result).to.eql([1, 2, { foo: 'bar' }]);
  });

  it('should stop iterating, when returning false with objects', () => {
    const collection = collect({
      player1: 'Sadio Mané',
      player2: 'Roberto Firmino',
      player3: 'Mohamed Salah',
    });

    const result = {};

    collection.each((item, key) => {
      result[key] = item;

      if (item === 'Roberto Firmino') {
        return false;
      }
    });

    expect(result).to.eql({
      player1: 'Sadio Mané',
      player2: 'Roberto Firmino',
    });
  });

  it('should iterate even when the collection is an object', () => {
    let sum3 = 0;

    const collection2 = collect({
      a: 1, b: 3, c: 3, d: 7,
    });

    const summed2 = collection2.each((item) => {
      sum3 += item;
    });

    expect(summed2.all()).to.eql({
      a: 1, b: 3, c: 3, d: 7,
    });
    expect(sum3).to.eql(14);
  });

  it('should not modify the collection', () => {
    const collection = collect([1, 2, 3, 4]);
    const mapped = collection.each(number => number * 2);

    expect(collection.all()).to.eql([1, 2, 3, 4]);
    expect(mapped.all()).to.eql(collection.all());
  });

  it('should returns the original collection', () => {
    const collection = collect([1, 2, 3, 4]);
    const mapped = collection.each(number => number * 2);

    expect(mapped).to.eql(collection);
  });
};
