'use strict';

const it = require('mocha').it;
const chai = require('chai');
const expect = require('chai').expect;
const collect = require('../dist');
const dataset = require('./data');

describe('Collect.js Test Suite', function () {







































































  it('should return the maximum value of a given key', function () {
    const collection = collect([{
      value: 10
    }, {
      value: -13
    }, {
      value: 12
    }, {
      unicorn: false
    }]);
    const max = collection.max('value');
    expect(max).to.eql(12);
    expect(collection.all()).to.eql([{
      value: 10
    }, {
      value: -13
    }, {
      value: 12
    }, {
      unicorn: false
    }]);

    const collection2 = collect([-1, -2345, 12, 11, 3]);
    const max2 = collection2.max();
    expect(max2).to.eql(12);
    expect(collection2.all()).to.eql([-1, -2345, 12, 11, 3]);
  });

  it('should return whether the collection contains a given item', function () {
    const collection = collect({
      name: 'Steven Gerrard',
      number: 8
    });
    const contains = collection.contains('name');
    expect(contains).to.eql(true);
    expect(collection.all()).to.eql({
      name: 'Steven Gerrard',
      number: 8
    });

    const collection2 = collect({
      name: 'Steven Gerrard',
      number: 8
    });

    const contains2 = collection2.contains('spouse');
    expect(contains2).to.eql(false);
    expect(collection2.all()).to.eql({
      name: 'Steven Gerrard',
      number: 8
    });

    const contains3 = collection.contains('name', 'Steven Gerrard');
    expect(contains3).to.eql(true);

    const contains9 = collection.contains('number', '8');
    expect(contains9).to.eql(false);

    const contains8 = collection.contains('number', 28);
    expect(contains8).to.eql(false);

    const contains4 = collection.contains('name', 'Steve Jobs');
    expect(contains4).to.eql(false);

    const collection3 = collect([1, 2, 3, 4, 5]);

    const contains5 = collection3.contains(function (value, key) {
      return value > 5;
    });
    expect(contains5).to.eql(false);

    const contains6 = collection3.contains(function (value, key) {
      return value < 5;
    });
    expect(contains6).to.eql(true);

    const collection7 = collect([1, 2, 3, 4]);
    expect(collection7.contains(4)).to.eql(true);
  });

  it('should compare the collection against another collection or a plain JavaScript object based on its keys',
    function () {
      const data = {
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd'
      };

      const diff = {
        b: 'b',
        d: 'd'
      };

      const collection = collect(data);

      const _diff = collection.diffKeys(diff);

      expect(_diff.all()).to.eql({ a: 'a', c: 'c' });
      expect(collection.all()).to.eql(data);

      const diffCollection = collect(diff);
      const _diff2 = collection.diffKeys(diffCollection);
      expect(_diff2.all()).to.eql({ a: 'a', c: 'c' });
    });

  it('should verify that all elements of a collection pass a given truth test', function () {
    const collection = collect([1, 2, 3, 4]);

    const shouldBeFalse = collection.every(function (value, key) {
      return value > 2;
    });

    const shouldBeFalse2 = collection.every(function (value, key) {
      return value < 2;
    });

    expect(shouldBeFalse).to.eql(false);
    expect(shouldBeFalse2).to.eql(false);

    const shouldBeTrue = collection.every(function (value, key) {
      return value <= 4;
    });

    expect(shouldBeTrue).to.eql(true);
  });

  it('should create a new collection consisting of every n-th element', function () {
    const collection = collect(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']);

    const nth_4 = collection.nth(4);

    const nth_4_offset_1 = collection.nth(4, 1);

    const nth_4_offset_3 = collection.nth(4, 3);

    expect(nth_4.all()).to.eql(['a', 'e', 'i']);
    expect(nth_4_offset_1.all()).to.eql(['b', 'f']);
    expect(nth_4_offset_3.all()).to.eql(['d', 'h']);
  });

  it('should iterate through the collection and passes each value to the given callback', function () {
    const collection = collect({
      name: 'Robbie Fowler',
      nickname: 'The God',
      position: 'Striker'
    });

    const flatMapped = collection.flatMap(function (values) {
      return values.map(function (value) {
        return value.toUpperCase();
      });
    });

    expect(flatMapped.all()).to.eql({
      name: 'ROBBIE FOWLER',
      nickname: 'THE GOD',
      position: 'STRIKER'
    });

    expect(collection.all()).to.eql({
      name: 'Robbie Fowler',
      nickname: 'The God',
      position: 'Striker'
    });
  });

  it('should flatten a multi-dimensional object', function () {
    const data = {
      name: 'Daniel',
      languages: ['JavaScript', 'PHP', 'Go']
    };

    const collection = collect(data);

    const flatten = collection.flatten();

    expect(flatten.all()).to.eql(['Daniel', 'JavaScript', 'PHP', 'Go']);

    const data2 = {
      Apple: [
        { name: 'iPhone 6S', brand: 'Apple' },
      ],
      Samsung: [
        { name: 'Galaxy S7', brand: 'Samsung' }
      ]
    };

    const collection2 = collect(data2);

    const flattened2 = collection2.flatten(1);

    expect(flattened2.all())
      .to.eql([
      { name: 'iPhone 6S', brand: 'Apple' },
      { name: 'Galaxy S7', brand: 'Samsung' }
    ]);

    const collection3 = collect(data2);

    const flattened3 = collection3.flatten();

    expect(flattened3.all()).to.eql(['iPhone 6S', 'Apple', 'Galaxy S7', 'Samsung']);

  });

  it('should key the collection by the given key', function () {
    const collection = collect([
      {
        id: 100,
        product: 'Chair',
        manufacturer: 'IKEA',
        price: '1490 NOK'
      }, {
        id: 150,
        product: 'Desk',
        manufacturer: 'IKEA',
        price: '900 NOK'
      }, {
        id: 200,
        product: 'Chair',
        manufacturer: 'Herman Miller',
        price: '9990 NOK'
      }
    ]);

    const keyed = collection.keyBy('manufacturer');

    expect(keyed.all()).to.eql({
      IKEA: {
        id: 150,
        product: 'Desk',
        manufacturer: 'IKEA',
        price: '900 NOK'
      },
      'Herman Miller': {
        id: 200,
        product: 'Chair',
        manufacturer: 'Herman Miller',
        price: '9990 NOK'
      }
    });

    expect(collection.all()).to.eql([
      {
        id: 100,
        product: 'Chair',
        manufacturer: 'IKEA',
        price: '1490 NOK'
      }, {
        id: 150,
        product: 'Desk',
        manufacturer: 'IKEA',
        price: '900 NOK'
      }, {
        id: 200,
        product: 'Chair',
        manufacturer: 'Herman Miller',
        price: '9990 NOK'
      }
    ]);

    const keyedUpperCase = collection.keyBy(function (item) {
      return item['manufacturer'].toUpperCase();
    });

    expect(keyedUpperCase.all()).to.eql({
      IKEA: {
        id: 150,
        product: 'Desk',
        manufacturer: 'IKEA',
        price: '900 NOK'
      },
      'HERMAN MILLER': {
        id: 200,
        product: 'Chair',
        manufacturer: 'Herman Miller',
        price: '9990 NOK'
      }
    });

    expect(collection.all()).to.eql([
      {
        id: 100,
        product: 'Chair',
        manufacturer: 'IKEA',
        price: '1490 NOK'
      }, {
        id: 150,
        product: 'Desk',
        manufacturer: 'IKEA',
        price: '900 NOK'
      }, {
        id: 200,
        product: 'Chair',
        manufacturer: 'Herman Miller',
        price: '9990 NOK'
      }
    ]);
  });

  it('should return the minimum value of a given key', function () {
    const data = [{
      worth: 100
    }, {
      worth: 900
    }, {
      worth: 79
    }];

    const collection = collect(data);
    const minKey = collection.min('worth');
    expect(minKey).to.eql(79);
    expect(collection.all()).to.eql(data);

    const collectionPlainArray = collect([34, 345345, 34, 11234, 64, 77, 84, 5, 7]);
    const min = collectionPlainArray.min();
    expect(min).to.eql(5);
    expect(collectionPlainArray.all()).to.eql([34, 345345, 34, 11234, 64, 77, 84, 5, 7]);
  });

  it('should remove and returns the last item from the collection', function () {
    const collection = collect([1, 2, 3, 4, 5]);

    expect(collection.pop()).to.eql(5);

    expect(collection.all()).to.eql([1, 2, 3, 4]);
  });

  it('should prepend an item to the beginning of the collection', function () {
    const collection = collect([1, 2, 3, 4, 5]);

    expect(collection.prepend(0).all()).to.eql([0, 1, 2, 3, 4, 5]);
    expect(collection.all()).to.eql([0, 1, 2, 3, 4, 5]);

    const collection2 = collect({
      firstname: 'Daniel'
    });

    expect(collection2.prepend('Eckermann', 'lastname').all()).to.eql({
      firstname: 'Daniel',
      lastname: 'Eckermann'
    });

    expect(collection2.all()).to.eql({
      lastname: 'Eckermann',
      firstname: 'Daniel'
    });
  });

  it('should return a random item from the collection', function () {
    const collection = collect([1, 2, 3, 4, 5]);

    const random = collection.random();

    expect(random).to.be.within(1, 5);
    expect(collection.all().length).to.eql(5);

    const arrayOfRandomValues = collect([1, 2, 3, 4, 5]).random(3);
    expect(arrayOfRandomValues).to.be.an.object;
    expect(arrayOfRandomValues.all().length).to.eql(3);
    expect(arrayOfRandomValues.all()[0]).to.be.within(1, 5);
    expect(arrayOfRandomValues.all()[1]).to.be.within(1, 5);
    expect(arrayOfRandomValues.all()[2]).to.be.within(1, 5);
    expect(arrayOfRandomValues.all()[3]).to.eql(undefined);

    const collection2 = collect([1, 2, 3, 4, 5, 8, 6]);
    collection2.random();
    expect(collection2.items).to.eql([1, 2, 3, 4, 5, 8, 6]);
  });

  it('should reduce the collection to a single value, ' +
    'passing the result of each iteration into the subsequent iteration', function () {
    const collection = collect([1, 2, 3, 4, 5, 6, 7]);

    const total = collection.reduce(function (carry, item) {
      return carry + item;
    });

    expect(total).to.eql(28);

    const total2 = collection.reduce(function (carry, item) {
      return carry + item;
    }, 4);

    expect(total2).to.eql(32);
    expect(collection.all()).to.eql([1, 2, 3, 4, 5, 6, 7]);
  });

  it('should filter the collection using the given callback. removing items that returns true in the callback',
    function () {
      const collection = collect([1, 2, 3, 4]);

      const filtered = collection.reject(function (value) {
        return value > 2;
      });

      expect(filtered.all()).to.eql([1, 2]);
      expect(collection.all()).to.eql([1, 2, 3, 4]);
    });

  it('should reverse the order of the collection items', function () {
    const collection = collect([1, 2, 3, 4, 5]);

    const reversed = collection.reverse();

    expect(reversed.all()).to.eql([5, 4, 3, 2, 1]);
    expect(collection.all()).to.eql([1, 2, 3, 4, 5]);
  });

  it('should search the collection for the given value and returns its key if found. ' +
    'If the item is not found, false is returned', function () {
    const collection = collect([2, 4, 6, 8]);
    expect(collection.search(4)).to.eql(1);

    const collection2 = collect([.2, .4, .6, .8]);
    expect(collection2.search(.4)).to.eql(1);

    // The search is done using a "loose" comparison.
    // To use strict comparison, pass true as the second argument to the method:
    expect(collection.search('4')).to.eql(1);

    expect(collection.search('4', true)).to.eql(false);

    // Alternatively, you may pass in your own callback to search for the first item that passes your truth test:
    expect(
      collection.search(function (item, key) {
        return item > 5;
      })
    ).to.eql(2);

    expect(collection.all()).to.eql([2, 4, 6, 8]);
  });

  it('should shuffle the items in the collection', function () {
    const collection = collect([1, 2, 3, 4, 5]);

    const shuffled = collection.shuffle();

    expect(shuffled.all().length).to.eql(5);
    expect(shuffled.all()[0]).to.be.within(1, 5);
    expect(shuffled.all()[1]).to.be.within(1, 5);
    expect(shuffled.all()[2]).to.be.within(1, 5);
    expect(shuffled.all()[3]).to.be.within(1, 5);
    expect(shuffled.all()[4]).to.be.within(1, 5);

    expect(collection.all().length).to.eql(5);
    expect(collection.count()).to.eql(5);
  });

  it('should return a slice of the collection starting at the given index', function () {
    const collection = collect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    const slice = collection.slice(4);

    expect(slice.all()).to.eql([5, 6, 7, 8, 9, 10]);

    // Original collection should not be modified by slice
    expect(collection.all()).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    const collection2 = collect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    const slice2 = collection2.slice(4, 2);

    expect(slice2.all()).to.eql([5, 6]);

    expect(collection2.all()).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should sort the collection', function () {
    const collection = collect([5, 3, 1, 2, 10, 4]);

    const sorted = collection.sort();

    expect(sorted.all()).to.eql([1, 2, 3, 4, 5, 10]);
    expect(collection.all()).to.eql([5, 3, 1, 2, 10, 4]);

    const collection2 = collect([5, 3, 1, 2, 4]);

    const sorted2 = collection2.sort(function (a, b) {
      return b - a;
    });

    expect(sorted2.all()).to.eql([5, 4, 3, 2, 1]);

    expect(collection2.all()).to.eql([5, 3, 1, 2, 4]);
  });

  it('should sort the collection by the given key', function () {
    const collection = collect([
      { 'name': 'Desk', 'price': 200 },
      { 'name': 'Chair', 'price': 100 },
      { 'name': 'Bookcase', 'price': 150 },
    ]);

    const sorted = collection.sortBy('price');

    expect(sorted.all()).to.eql([
      { 'name': 'Chair', 'price': 100 },
      { 'name': 'Bookcase', 'price': 150 },
      { 'name': 'Desk', 'price': 200 },
    ]);

    const collection2 = collect([
      { 'name': 'Desk', 'colors': ['Black', 'Mahogany'] },
      { 'name': 'Chair', 'colors': ['Black'] },
      { 'name': 'Bookcase', 'colors': ['Red', 'Beige', 'Brown'] },
    ]);

    const sorted2 = collection2.sortBy(function (product, key) {
      return product['colors'].length;
    });

    expect(sorted2.all()).to.eql([
      { 'name': 'Chair', 'colors': ['Black'] },
      { 'name': 'Desk', 'colors': ['Black', 'Mahogany'] },
      { 'name': 'Bookcase', 'colors': ['Red', 'Beige', 'Brown'] },
    ]);

    expect(collection2.all()).to.eql([
      { 'name': 'Desk', 'colors': ['Black', 'Mahogany'] },
      { 'name': 'Chair', 'colors': ['Black'] },
      { 'name': 'Bookcase', 'colors': ['Red', 'Beige', 'Brown'] },
    ]);
  });

  it('should reverse sort the collection by the given key', function () {
    const collection = collect([
      { 'name': 'Desk', 'price': 200 },
      { 'name': 'Chair', 'price': 100 },
      { 'name': 'Bookcase', 'price': 150 },
    ]);

    const sorted = collection.sortByDesc('price');

    expect(sorted.all()).to.eql([
      { 'name': 'Desk', 'price': 200 },
      { 'name': 'Bookcase', 'price': 150 },
      { 'name': 'Chair', 'price': 100 },
    ]);

    const collection2 = collect([
      { 'name': 'Bookcase', 'colors': ['Red', 'Beige', 'Brown'] },
      { 'name': 'Chair', 'colors': ['Black'] },
      { 'name': 'Desk', 'colors': ['Black', 'Mahogany'] },
    ]);

    const sorted2 = collection2.sortByDesc(function (product, key) {
      return product['colors'].length;
    });

    expect(sorted2.all()).to.eql([
      { 'name': 'Bookcase', 'colors': ['Red', 'Beige', 'Brown'] },
      { 'name': 'Desk', 'colors': ['Black', 'Mahogany'] },
      { 'name': 'Chair', 'colors': ['Black'] },
    ]);

    expect(collection2.all()).to.eql([
      { 'name': 'Bookcase', 'colors': ['Red', 'Beige', 'Brown'] },
      { 'name': 'Chair', 'colors': ['Black'] },
      { 'name': 'Desk', 'colors': ['Black', 'Mahogany'] },
    ]);
  });

  it('should remove and returns a slice of items starting at the specified index', function () {
    const collection = collect([1, 2, 3, 4, 5]);
    const chunk = collection.splice(2);
    expect(chunk.all()).to.eql([3, 4, 5]);
    expect(collection.all()).to.eql([1, 2]);

    const collection2 = collect([1, 2, 3, 4, 5]);
    const chunk2 = collection2.splice(2, 1);
    expect(chunk2.all()).to.eql([3]);
    expect(collection2.all()).to.eql([1, 2, 4, 5]);

    const collection3 = collect([1, 2, 3, 4, 5]);
    const chunk3 = collection3.splice(2, 1, [10, 11]);
    expect(chunk3.all()).to.eql([3]);
    expect(collection3.all()).to.eql([1, 2, 10, 11, 4, 5]);
  });

  it('should return a new collection with the specified number of items', function () {
    const collection = collect([0, 1, 2, 3, 4, 5]);
    const chunk = collection.take(3);
    expect(chunk.all()).to.eql([0, 1, 2]);
    expect(collection.all()).to.eql([0, 1, 2, 3, 4, 5]);

    // You may also pass a negative integer to
    // take the specified amount of items from the end of the collection:
    const collection2 = collect([0, 1, 2, 3, 4, 5]);
    const chunk2 = collection2.take(-2);
    expect(chunk2.all()).to.eql([4, 5]);
    expect(collection2.all()).to.eql([0, 1, 2, 3, 4, 5]);
  });

  it('should return a JSON representation of the collection', function () {
    const collection = collect({
      id: 384,
      name: 'Rayquaza',
      gender: 'NA'
    });

    const json = collection.toJson();

    expect(json).to.eql('{"id":384,"name":"Rayquaza","gender":"NA"}');

    expect(collection.all()).to.eql({
      id: 384,
      name: 'Rayquaza',
      gender: 'NA'
    });
  });

  it('should iterate over the collection and calls the given callback with each item in the collection. ' +
    'The items in the collection will be replaced by the values returned by the callback', function () {
    const collection = collect([1, 2, 3, 4, 5]);

    collection.transform(function (item, key) {
      return item * 2;
    });

    expect(collection.all()).to.eql([2, 4, 6, 8, 10]);
  });

  it('should iterate over the collection and transform it', function() {
    const collection = collect({
      foo: 1,
      bar: 2,
      baz: 3,
    });

    collection.transform(function (item) {
      return item * 2;
    });

    expect(collection.all()).to.eql({
      foo: 2,
      bar: 4,
      baz: 6,
    });
  });

  it('should add the given object to the collection. ' +
    'If the given object contains keys that are already in the collection, ' +
    'the collections values will be preferred', function () {
    const collection = collect({
      a: 'A',
      b: 'B'
    });

    const union = collection.union({
      a: 'AAA',
      c: 'CCC',
      b: 'BBB'
    });

    expect(union.all()).to.eql({
      a: 'A',
      b: 'B',
      c: 'CCC'
    });

    expect(collection.all()).to.eql({
      a: 'A',
      b: 'B'
    });

    expect(union.all().b).to.eql('B');

    union.forget('b');

    expect(union.all().b).to.eql(undefined);
  });

  it('should merge together the values of the given array with the values of the collection at the corresponding index',
    function () {
      const collection = collect(['Chair', 'Desk']);

      const zipped = collection.zip([100, 200]);

      expect(zipped.all()).to.eql([['Chair', 100], ['Desk', 200]]);

      expect(collection.all()).to.eql(['Chair', 'Desk']);
    });

  it('should return the object values from the collection', function () {
    const collection = collect({ a: 'xoxo', b: 'abab', 'c': '1337', 1337: 12 });

    const values = collection.values();

    expect(values.all()).to.eql([12, 'xoxo', 'abab', '1337']);

    expect(collection.all()).to.eql({ a: 'xoxo', b: 'abab', 'c': '1337', 1337: 12 });
  });

  it('should return true if the collection is not empty; otherwise, false is returned', function () {
    expect(collect().isNotEmpty()).to.eql(false);
    expect(collect([]).isNotEmpty()).to.eql(false);
    expect(collect([1]).isNotEmpty()).to.eql(true);
  });

  it('should filter the collection by a given key / value not contained within the given array', function () {
    const data = [
      { product: 'Desk', price: 200 },
      { product: 'Chair', price: 100 },
      { product: 'Bookcase', price: 150 },
      { product: 'Door', price: 100 }
    ];

    const collection = collect(data);

    const filtered = collection.whereNotIn('price', ['150', 200]);

    expect(filtered.all()).to.eql([
      { product: 'Chair', price: 100 },
      { product: 'Bookcase', price: 150 },
      { product: 'Door', price: 100 }
    ]);

    expect(collection.all()).to.eql(data);
  });

  it('should separate elements that pass a given truth test from those that do not', function () {
    const collection = collect([1, 2, 3, 4, 5, 6]);

    const arr = collection.partition(function (i) {
      return i < 3;
    });

    expect(arr[0]).to.eql([1, 2]);
    expect(arr[1]).to.eql([3, 4, 5, 6]);
    expect(collection.all()).to.eql([1, 2, 3, 4, 5, 6]);
  });

  it('should split a collection into the given number of groups', function () {
    const collection = collect([1, 2, 3, 4, 5]);

    expect(collection.split(1)).to.eql([[1, 2, 3, 4, 5]]);
    expect(collection.split(2)).to.eql([[1, 2, 3], [4, 5]]);
    expect(collection.split(3)).to.eql([[1, 2], [3, 4], [5]]);
    expect(collection.split(6)).to.eql([[1], [2], [3], [4], [5], []]);

    expect(collection.all()).to.eql([1, 2, 3, 4, 5]);
  });

  it('should execute the given callback when the first argument given to the method evaluates to true', function () {
    const collection = collect([1, 2, 3]);

    collection.when(true, function (c) {
      c.push(4);
    });

    expect(collection.all()).to.eql([1, 2, 3, 4]);

    collection.when(false, function (c) {
      c.push(5);
    }, function (c) {
      c.push(6);
    });

    expect(collection.all()).to.eql([1, 2, 3, 4, 6]);
  });

  it('should execute the given callback when the first argument given to the method evaluates to false', function () {
    const collection = collect([1, 2, 3]);

    collection.unless(false, function (c) {
      c.push(4);
    });

    expect(collection.all()).to.eql([1, 2, 3, 4]);

    collection.unless(true, function (c) {
      c.push(5);
    }, function (c) {
      c.push(6);
    });

    expect(collection.all()).to.eql([1, 2, 3, 4, 6]);
  });

  it('should create a new collection by invoking the callback a given amount of times', function () {
    const collection = collect().times(10, function (number) {
      return number * 9;
    });

    expect(collection.all()).to.eql([9, 18, 27, 36, 45, 54, 63, 72, 81, 90]);
  });

  it('should passes the collection to the given callback', function () {
    let tapped = null;

    const number = collect([2, 4, 3, 1, 5])
      .sort()
      .tap(function (collection) {
        tapped = collection.all();
      })
      .shift();

    expect(tapped).to.eql([2, 3, 4, 5]);
    expect(number).to.eql(1);
  });

  it('should be able to register a custom macro/method', function () {
    collect().macro('uppercase', function () {
      return this.map(function (item) {
        return item.toUpperCase();
      });
    });

    const collection = collect(['a', 'b', 'c']);
    expect(collection.uppercase().all()).to.eql(['A', 'B', 'C']);
    expect(collection.all()).to.eql(['a', 'b', 'c']);

    collect().macro('prefix', function (prefix) {
      return this.map(function (item) {
        return prefix + item;
      });
    });

    expect(collect(['a', 'b', 'c']).prefix('xoxo').all()).to.eql(['xoxoa', 'xoxob', 'xoxoc']);
  });

  it('should convert the collection into a plain array', function () {
    const collectionArray = collect([1, 2, 3, 'b', 'c', 'ø']);

    expect(collectionArray.toArray()).to.eql([1, 2, 3, 'b', 'c', 'ø']);
    expect(collectionArray.toArray()).to.eql(collectionArray.all());

    const collectionObject = collect({
      name: 'Elon Musk',
      companies: [
        'Tesla',
        'Space X',
        'SolarCity'
      ]
    });

    expect(collectionObject.toArray()).to.eql(['Elon Musk', ['Tesla', 'Space X', 'SolarCity']]);
    expect(collectionObject.toArray()).to.eql(collectionObject.values().all());
  });

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
