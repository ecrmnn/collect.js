'use strict';

const it = require('mocha').it;
const chai = require('chai');
const expect = require('chai').expect;
const collect = require('../dist');
const dataset = require('./data');

describe('Collect.js Test Suite', function () {
















































































































































  it('should append arrays to collection', function () {
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
      'Laroe'
    ];

    const firstCollection = collect([4, 5, 6]);
    const firstArray = ['a', 'b', 'c'];
    const secondArray = [{
      who: 'Jonny'
    }, {
      preposition: 'from'
    }, {
      where: 'Laroe'
    }];
    const firstObj = {
      who: 'Jonny',
      preposition: 'from',
      where: 'Laroe'
    };

    firstCollection.concat(firstArray).concat(secondArray).concat(firstObj);

    expect(firstCollection.count()).to.eql(12);
    expect(firstCollection.all()).to.eql(expected);
  });

  it('should append collections to collection', function () {
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
      'Laroe'
    ];

    const firstCollection = collect([4, 5, 6]);
    const secondCollection = collect(['a', 'b', 'c']);
    const thirdCollection = collect([{
      who: 'Jonny'
    }, {
      preposition: 'from'
    }, {
      where: 'Laroe'
    }]);

    firstCollection
      .concat(secondCollection)
      .concat(thirdCollection)
      .concat(thirdCollection);

    expect(firstCollection.count()).to.eql(12);
    expect(firstCollection.all()).to.eql(expected);
  });

  it('should wrap the given value in a collection if applicable', function () {
    const collection1 = collect().wrap('foo');
    expect(collection1.all()).to.eql(['foo']);

    const collection2 = collect().wrap(['foo']);
    expect(collection2.all()).to.eql(['foo']);

    const collection3 = collect().wrap({});
    expect(collection3.all()).to.eql([{}]);

    const collection4 = collect().wrap(collect([1, 2, 3, 4]));
    expect(collection4.all()).to.eql([1, 2, 3, 4]);
  });

  it('should get the underlying items from the given collection if applicable', function () {
    const collection1 = collect(['foo']);
    expect(collect().unwrap(collection1)).to.eql(['foo']);

    expect(collect().unwrap(['foo'])).to.eql(['foo']);

    expect(collect().unwrap('foo')).to.eql('foo');
  });

  it('should cross join with the given lists, returning all possible permutations', function () {
    const crossJoin1 = collect([1, 2]).crossJoin(['a', 'b']);
    expect(crossJoin1.all()).to.eql([[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]);

    const crossJoin2 = collect([1, 2]).crossJoin(collect(['a', 'b']));
    expect(crossJoin2.all()).to.eql([[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]);

    const crossJoin3 = collect([1, 2]).crossJoin(collect(['a', 'b']), ['I', 'II']);
    expect(crossJoin3.all()).to.eql([
      [1, 'a', 'I'], [1, 'a', 'II'],
      [1, 'b', 'I'], [1, 'b', 'II'],
      [2, 'a', 'I'], [2, 'a', 'II'],
      [2, 'b', 'I'], [2, 'b', 'II'],
    ]);

    const crossJoin4 = collect([1, 2]).crossJoin(['a', 'b'], ['I', 'II']);
    expect(crossJoin4.all()).to.eql([
      [1, 'a', 'I'], [1, 'a', 'II'],
      [1, 'b', 'I'], [1, 'b', 'II'],
      [2, 'a', 'I'], [2, 'a', 'II'],
      [2, 'b', 'I'], [2, 'b', 'II'],
    ]);
  });

  it('should get the items in the collection whose keys and values are not present in the given items', function () {
    const collection1 = collect({ id: 1, first_word: 'Hello', not_affected: 'value' });
    const collection2 = collect({ id: 123, foo_bar: 'Hello', not_affected: 'value' });

    expect({ id: 1, first_word: 'Hello' }).to.eql(collection1.diffAssoc(collection2).all());

    const collection3 = collect({
      color: 'orange',
      type: 'fruit',
      remain: 6,
    });

    const collection4 = collection3.diffAssoc({
      color: 'yellow',
      type: 'fruit',
      remain: 3,
      used: 6,
    });

    expect(collection4.all()).to.eql({ color: 'orange', remain: 6 });
  });

  it('should map a collection to groups', function () {
    const data = collect([
      { id: 1, name: 'A' },
      { id: 2, name: 'B' },
      { id: 3, name: 'C' },
      { id: 4, name: 'B' },
    ]);

    const groups = data.mapToGroups(function (item, key) {
      return [item.name, item.id];
    });

    expect(groups.all()).to.eql({
      A: [1],
      B: [2, 4],
      C: [3],
    });
  });

  it('should map into a class', function () {
    const Person = function (name) {
      this.name = name;
    };

    const collection = collect(['Firmino', 'Mané']);

    const data = collection.mapInto(Person);

    expect(data.all()).to.be.array;
    expect(data.first()).to.eql(new Person('Firmino'));
    expect(data.last()).to.eql(new Person('Mané'));
  });

  it('should console log the collection', function () {
    const originalCosoleLog = console.log;

    const consoleLogCalls = [];

    console.log = function (values) {
      consoleLogCalls.push(values);
      return values;
    };

    const collection = collect([1, 2, 3]);
    collection.dump();

    const collection2 = collect({
      name: 'Sadio Mané',
      number: 19,
    });

    collection2.dump();

    console.log = originalCosoleLog;
    expect(consoleLogCalls[0]).to.eql(collection.all());

    expect(consoleLogCalls[1]).to.eql(collection2.all());
  });

  it('should be iterable', function () {
    let result = '';

    for (let item of collect([1, 2, 3, 4, 5])) {
      result += item;
    }

    expect(result).to.eql('12345');

    const result2 = [];
    const clubs = collect([{ name: 'Liverpool' }, { name: 'Arsenal' }, { name: 'Chelsea' }]);

    for (let club of clubs) {
      result2.push(club);
    }

    expect(result2).to.eql(clubs.all());
  });
});
