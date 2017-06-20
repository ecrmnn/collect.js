'use strict';

const it = require('mocha').it;
const chai = require('chai');
const expect = require('chai').expect;
const collect = require('../lib');
const dataset = require('./data');

describe('Collect.js Test Suite', function () {
  it('should return all items, simple array', function () {
    expect(collect([1, 2, 3, 4, 5]).all()).to.eql([1, 2, 3, 4, 5]);
  });

  it('should return all items, array of objects', function () {
    const data = [{
      foo: 'bar'
    }, {
      baz: 'qux'
    }];

    expect(collect(data).all()).to.eql(data);
  });

  it('should return an array of unique items', function () {
    expect(collect([1, 1, 1, 2, 3, 3]).unique().all()).to.eql([1, 2, 3]);
    expect(collect([1, 1, 1, 2, 3, 3, '3']).unique().all()).to.eql([1, 2, 3, '3']);

    const collection = collect([
      { name: 'iPhone 6', brand: 'Apple', type: 'phone', price: 999 },
      { name: 'iPhone 5', brand: 'Apple', type: 'phone', price: '999' },
      { name: 'Apple Watch', brand: 'Apple', type: 'watch', price: 1999 },
      { name: 'Galaxy S6', brand: 'Samsung', type: 'phone', price: 1999 },
      { name: 'Galaxy Gear', brand: 'Samsung', type: 'watch', price: 999 }
    ]);

    const unique = collection.unique('price');

    expect(unique.all()).to.eql([
      { name: 'iPhone 6', brand: 'Apple', type: 'phone', price: 999 },
      { name: 'iPhone 5', brand: 'Apple', type: 'phone', price: '999' },
      { name: 'Apple Watch', brand: 'Apple', type: 'watch', price: 1999 }
    ]);
  });

  it('should return the sum of collection values', function () {
    expect(collect([1, 3, 3, 7]).sum()).to.eql(14);
    expect(collect([1, 3, 3, 7]).unique().sum()).to.eql(11);

    const collection2 = collect([
      { name: 'JavaScript: The Good Parts', pages: 176 },
      { name: 'JavaScript: The Definitive Guide', pages: 1096 },
    ]);

    expect(collection2.sum('pages')).to.eql(1272);

    const collection3 = collect([
      { 'name': 'Desk', 'colors': ['Black', 'Mahogany'] },
      { 'name': 'Chair', 'colors': ['Black'] },
      { 'name': 'Bookcase', 'colors': ['Red', 'Beige', 'Brown'] },
    ]);
    const summed = collection3.sum(function (product) {
      return product.colors.length;
    });
    expect(summed).to.eql(6);
    expect(collection3.all()).to.eql([
      { 'name': 'Desk', 'colors': ['Black', 'Mahogany'] },
      { 'name': 'Chair', 'colors': ['Black'] },
      { 'name': 'Bookcase', 'colors': ['Red', 'Beige', 'Brown'] },
    ]);
  });

  it('should return the average value of collection values', function () {
    expect(collect([1, 3, 3, 7]).avg()).to.eql(3.5);
    expect(collect([1, 3, 3, 7]).average()).to.eql(3.5);

    const collection = collect(dataset.products);

    const avg = collection.avg('id');

    expect(avg).to.eql(150);

    expect(collection.all()).to.eql(dataset.products);

    expect(collect([1, 3, 3, 7]).unique().avg()).to.eql(3.6666666666666665);
  });

  it('should return the median value of collection values', function () {
    const collection = collect([10, 10, 20, 40]);

    expect(collection.median()).to.eql(15);
    expect(collection.all()).to.eql([10, 10, 20, 40]);

    expect(collect([1, 3, 3, 6, 7, 8, 9]).median()).to.eql(6);

    const collectionOfObjects = collect([{
      foo: 1
    }, {
      foo: 1
    }, {
      foo: 2
    }, {
      foo: 4
    }]);

    expect(collectionOfObjects.median('foo')).to.eql(1.5);

    const collectionOfObjects2 = collect([{
      foo: 1
    }, {
      foo: 3
    }, {
      foo: 3
    }, {
      foo: 6
    }, {
      foo: 7
    }, {
      foo: 8
    }, {
      foo: 9
    }]);

    expect(collectionOfObjects2.median('foo')).to.eql(6);
  });

  it('should return the mode value of collection values', function () {
    const collection = collect([10, 10, 20, 40]);

    expect(collection.mode()).to.eql([10]);
    expect(collection.all()).to.eql([10, 10, 20, 40]);

    expect(collect([1, 2, 3]).mode()).to.eql([1, 2, 3]);
    expect(collect([1, 1, 2, 4, 4]).mode()).to.eql([1, 4]);
    expect(collect([]).mode()).to.eql(null);

    expect(collect([1, 3, 3, 6, 7, 8, 9]).mode()).to.eql([3]);

    const collectionOfObjects = collect([{
      foo: 1
    }, {
      foo: 1
    }, {
      foo: 2
    }, {
      foo: 4
    }]);

    expect(collectionOfObjects.mode('foo')).to.eql([1]);

    const collectionOfObjects2 = collect([{
      foo: 1
    }, {
      foo: 3
    }, {
      foo: 3
    }, {
      foo: 6
    }, {
      foo: 7
    }, {
      foo: 8
    }, {
      foo: 9
    }]);

    expect(collectionOfObjects2.mode('foo')).to.eql([3]);

    const collectionOfObjects3 = collect([{
      foo: 1
    }, {
      foo: 3
    }, {
      foo: 3
    }, {
      foo: 6
    }, {
      foo: 6
    }]);

    expect(collectionOfObjects3.mode('foo')).to.eql([3, 6]);

    expect(collect([1, 1, 2, 4, 4]).mode()).to.eql([1, 4]);
  });

  it('should return the count of the collection', function () {
    expect(collect([1, 2, 3, 4, 5]).count()).to.eql(5);
  });

  it('should return true if collection is empty', function () {
    expect(collect([]).isEmpty()).to.eql(true);

    expect(collect([1, 2, 3]).isEmpty()).to.eql(false);
  });

  it('should iterate over the collection', function () {
    let sum = 0;

    const collection = collect([1, 3, 3, 7]);

    const each = collection.each(function (item) {
      sum += item;
    }).all();

    expect(each).to.eql([1, 3, 3, 7]);
    expect(sum).to.eql(14);
    expect(collection.all()).to.eql([1, 3, 3, 7]);

    let sum2 = 0;

    const summed = collection.each(function (item) {
      if (item > 3) {
        return false;
      }

      sum2 += item;
    });

    expect(summed.all()).to.eql([1, 3, 3, 7]);
    expect(sum2).to.eql(7);
  });

  it('should map over and modify the collection', function () {
    const collection = collect([1, 2, 3, 4, 5]);

    const multiplied = collection.map(function (item) {
      return item * 2;
    });

    expect(multiplied.all()).to.eql([2, 4, 6, 8, 10]);

    expect(collection.all()).to.eql([1, 2, 3, 4, 5]);
  });

  it('should iterate through the collection and passes each value to the given callback.' +
    'The callback should return an associative array containing a single key / value pair:', function () {
    const collection = collect([
      {
        'name': 'John',
        'department': 'Sales',
        'email': 'john@example.com'
      },
      {
        'name': 'Jane',
        'department': 'Marketing',
        'email': 'jane@example.com'
      }
    ]);

    const keyed = collection.mapWithKeys(function (item) {
      return [item.email, item.name];
    });

    expect(keyed.all()).to.eql({
      'john@example.com': 'John',
      'jane@example.com': 'Jane',
    });

    expect(collection.all()).to.eql([
      {
        'name': 'John',
        'department': 'Sales',
        'email': 'john@example.com'
      },
      {
        'name': 'Jane',
        'department': 'Marketing',
        'email': 'jane@example.com'
      }
    ]);
  });

  it('should pass the collection to the given callback and returns the result', function () {
    const collection = collect([1, 2, 3]);

    const piped = collection.pipe(function (collection) {
      return collection.sum();
    });

    expect(piped).to.eql(6);
  });

  it('should filter the collection by a given callback', function () {
    const collection = collect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    const filtered = collection.filter(function (item) {
      return item > 1;
    });

    expect(filtered.all()).to.eql([2, 3, 4, 5, 6, 7, 8, 9, 10]);

    expect(collection.all()).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should determine if a key exists in the collection', function () {
    const collection = collect({
      animal: 'unicorn',
      ability: 'magical'
    });

    const hasAbility = collection.has('ability');
    const hasName = collection.has('name');

    expect(hasAbility).to.eql(true);
    expect(hasName).to.eql(false);

    expect(collection.all()).to.eql({
      animal: 'unicorn',
      ability: 'magical'
    });

    const collection2 = collect([{
      animal: 'unicorn',
      ability: 'magical'
    }, {
      anmial: 'pig',
      ability: 'filthy'
    }]);

    const hasAbility2 = collection2.has('ability');
    const hasName2 = collection2.has('name');

    expect(hasAbility2).to.eql(true);
    expect(hasName2).to.eql(false);

    expect(collection2.all()).to.eql([{
      animal: 'unicorn',
      ability: 'magical'
    }, {
      anmial: 'pig',
      ability: 'filthy'
    }]);
  });

  it('should return the first item from the collection', function () {
    const collection = collect([1, 2, 3, 4]);

    const first = collection.first();

    expect(first).to.eql(1);

    expect(collection.all()).to.eql([1, 2, 3, 4]);

    const collection2 = collect([{ a: 'a' }, { b: 'b' }]);

    const first2 = collection2.first();

    expect(first2).to.eql({ a: 'a' });

    expect(collection2.all()).to.eql([{ a: 'a' }, { b: 'b' }]);

    const collection3 = collect([1, 2, 3]);

    const first3 = collection3.first(function (item) {
      return item > 1;
    });

    expect(first3).to.eql(2);

    expect(collection3.all()).to.eql([1, 2, 3]);
  });

  it('should return the last item from the collection', function () {
    const collection = collect([1, 2, 3, 4]);
    const last = collection.last();
    expect(last).to.eql(4);
    expect(collection.all()).to.eql([1, 2, 3, 4]);

    const collection2 = collect([{ a: 'a' }, { b: 'b' }]);
    const last2 = collection2.last();
    expect(last2).to.eql({ b: 'b' });
    expect(collection2.all()).to.eql([{ a: 'a' }, { b: 'b' }]);

    const collection3 = collect([1, 2, 3]);
    const last3 = collection3.last(function (item) {
      return item > 1;
    });
    expect(last3).to.eql(3);
    expect(collection3.all()).to.eql([1, 2, 3]);
  });

  it('should return the item at a given key', function () {
    const collection = collect({
      firstname: 'Daniel',
      lastname: 'Eckermann'
    });

    expect(collection.get('firstname')).to.eql('Daniel');
    expect(collection.get('name')).to.eql(null);
    expect(collection.get('name', 'Daniel')).to.eql('Daniel');
    expect(collection.get('name', function () {
      return 'Daniel'
    })).to.eql('Daniel');

    expect(collection.all()).to.eql({
      firstname: 'Daniel',
      lastname: 'Eckermann'
    });
  });

  it('should group the collections items by a given key', function () {
    const collection = collect(dataset.products);

    const grouped = collection.groupBy('manufacturer');

    expect(grouped.all()).to.eql({
      IKEA: [
        {
          id: 100,
          product: 'Chair',
          manufacturer: 'IKEA',
          price: '1490 NOK'
        },
        {
          id: 150,
          product: 'Desk',
          manufacturer: 'IKEA',
          price: '900 NOK'
        }],
      'Herman Miller': [
        {
          id: 200,
          product: 'Chair',
          manufacturer: 'Herman Miller',
          price: '9990 NOK'
        }]
    });

    expect(collection.all()).to.eql(dataset.products);

    const grouped2 = collection.groupBy(function (item, key) {
      return item.manufacturer.substring(0, 3);
    });

    expect(grouped2.all()).to.eql({
      IKE: [
        {
          id: 100,
          product: 'Chair',
          manufacturer: 'IKEA',
          price: '1490 NOK'
        },
        {
          id: 150,
          product: 'Desk',
          manufacturer: 'IKEA',
          price: '900 NOK'
        }],
      Her: [
        {
          id: 200,
          product: 'Chair',
          manufacturer: 'Herman Miller',
          price: '9990 NOK'
        }]
    });

    const collection2 = collect([{
      "id": 10,
      "title": "Quia dolorem consequatur voluptatibus totam doloribus impedit.",
      "description": "Consequuntur et ab cum sit omnis architecto maiores est voluptate cupiditate odio sed assumenda.",
      "value": "6",
      "order": null,
      "parent_id": null,
      "estimate_id": 10,
      "created_at": "2016-09-26 17:08:40",
      "updated_at": "2016-09-26 17:08:40"
    }, {
      "id": 21,
      "title": "Quia dolorem consequatur voluptatibus totam doloribus impedit.",
      "description": "Consequuntur et ab cum sit omnis architecto maiores est voluptate cupiditate odio sed assumenda.",
      "value": "6",
      "order": null,
      "parent_id": 10,
      "estimate_id": 10,
      "created_at": "2016-09-26 17:08:40",
      "updated_at": "2016-09-26 17:08:40"
    }, {
      "id": 22,
      "title": "Quia dolorem consequatur voluptatibus totam doloribus impedit.",
      "description": "Consequuntur et ab cum sit omnis architecto maiores est voluptate cupiditate odio sed assumenda.",
      "value": "6",
      "order": null,
      "parent_id": 10,
      "estimate_id": 10,
      "created_at": "2016-09-26 17:08:40",
      "updated_at": "2016-09-26 17:08:40"
    }]);

    const grouped3 = collection2.groupBy('parent_id');

    expect(grouped3.all()).to.eql({
      10: [{
        "id": 21,
        "title": "Quia dolorem consequatur voluptatibus totam doloribus impedit.",
        "description": "Consequuntur et ab cum sit omnis architecto maiores est voluptate cupiditate odio sed assumenda.",
        "value": "6",
        "order": null,
        "parent_id": 10,
        "estimate_id": 10,
        "created_at": "2016-09-26 17:08:40",
        "updated_at": "2016-09-26 17:08:40"
      }, {
        "id": 22,
        "title": "Quia dolorem consequatur voluptatibus totam doloribus impedit.",
        "description": "Consequuntur et ab cum sit omnis architecto maiores est voluptate cupiditate odio sed assumenda.",
        "value": "6",
        "order": null,
        "parent_id": 10,
        "estimate_id": 10,
        "created_at": "2016-09-26 17:08:40",
        "updated_at": "2016-09-26 17:08:40"
      }],
      null: [{
        "id": 10,
        "title": "Quia dolorem consequatur voluptatibus totam doloribus impedit.",
        "description": "Consequuntur et ab cum sit omnis architecto maiores est voluptate cupiditate odio sed assumenda.",
        "value": "6",
        "order": null,
        "parent_id": null,
        "estimate_id": 10,
        "created_at": "2016-09-26 17:08:40",
        "updated_at": "2016-09-26 17:08:40"
      }]
    });
  });

  it('should only return the specified properties', function () {
    const collection = collect(dataset.products[0]);

    const only = collection.only(['id', 'product']);

    expect(only.all()).to.eql({ id: 100, product: 'Chair' });

    expect(collection.all()).to.eql(dataset.products[0]);
  });

  it('should return everything except specified properties', function () {
    const collection = collect(dataset.products[0]);

    expect(collection.except(['id', 'product']).all()).to.eql({ manufacturer: 'IKEA', price: '1490 NOK' });
    expect(collection.all()).to.eql(dataset.products[0]);
  });

  it('should return everything that matches', function () {
    const collection = collect(dataset.products);

    const filtered = collection.where('manufacturer', 'IKEA');

    expect(filtered.all()).to.eql([
      {
        id: 100,
        product: 'Chair',
        manufacturer: 'IKEA',
        price: '1490 NOK'
      },
      {
        id: 150,
        product: 'Desk',
        manufacturer: 'IKEA',
        price: '900 NOK'
      }
    ]);

    expect(collection.all()).to.eql(dataset.products);

    const collection2 = collect([
      { 'product': 'Desk', 'price': 200 },
      { 'product': 'Chair', 'price': 100 },
      { 'product': 'Bookcase', 'price': 150 },
      { 'product': 'Door', 'price': '100' },
    ]);

    const filtered2 = collection2.where('price', '==', 100);

    expect(filtered2.all()).to.eql([{ 'product': 'Chair', 'price': 100 }, { 'product': 'Door', 'price': '100' }]);

    const filtered3 = collection2.where('price', '!==', 100);

    expect(filtered3.all()).to.eql([
      { 'product': 'Desk', 'price': 200 },
      { 'product': 'Bookcase', 'price': 150 },
      { 'product': 'Door', 'price': '100' },
    ]);

    const filtered4 = collection2.where('price', '!=', 100);

    expect(filtered4.all()).to.eql([
      { 'product': 'Desk', 'price': 200 },
      { 'product': 'Bookcase', 'price': 150 }
    ]);

    const filtered5 = collection2.where('price', '<', 100);

    expect(filtered5.all()).to.eql([]);

    const filtered6 = collection2.where('price', 100);

    expect(filtered6.all()).to.eql([
      { 'product': 'Chair', 'price': 100 }
    ]);
  });

  it('should strictly filter the collection by a given key / value pair', function () {
    const collection = collect([
      { 'product': 'Desk', 'price': 200 },
      { 'product': 'Chair', 'price': 100 },
      { 'product': 'Bookcase', 'price': 150 },
      { 'product': 'Door', 'price': '100' },
    ]);

    const filtered = collection.where('price', 100);

    expect(filtered.all()).to.eql([{ 'product': 'Chair', 'price': 100 }]);

    expect(collection.all()).to.eql([
      { 'product': 'Desk', 'price': 200 },
      { 'product': 'Chair', 'price': 100 },
      { 'product': 'Bookcase', 'price': 150 },
      { 'product': 'Door', 'price': '100' },
    ]);
  });

  it('should return everything that matches within', function () {
    const collection = collect(dataset.products);

    const filtered = collection.whereIn('id', [150, 200]);

    expect(filtered.all()).to.eql([
      {
        id: 150,
        product: 'Desk',
        manufacturer: 'IKEA',
        price: '900 NOK'
      },
      {
        id: 200,
        product: 'Chair',
        manufacturer: 'Herman Miller',
        price: '9990 NOK'
      }
    ])

    expect(collection.all()).to.eql(dataset.products);

    const collection2 = collect([
      { 'product': 'Desk', 'price': 200 },
      { 'product': 'Chair', 'price': 100 },
      { 'product': 'Bookcase', 'price': 150 },
      { 'product': 'Door', 'price': 100 },
    ]);

    const filtered2 = collection2.whereIn('price', [100, 150]);

    expect(filtered2.all()).to.eql([
      { 'product': 'Chair', 'price': 100 },
      { 'product': 'Bookcase', 'price': 150 },
      { 'product': 'Door', 'price': 100 },
    ]);
  });

  it('should return the missing values from collection', function () {
    const collection = collect([1, 2, 3, 4, 5]);
    const diff = collection.diff([1, 2, 3, 9]);
    expect(diff.all()).to.eql([4, 5]);
    expect(collection.all()).to.eql([1, 2, 3, 4, 5]);

    const diffCollection = collect([1, 2, 3, 9]);
    const diff2 = collection.diff(diffCollection);
    expect(diff2.all()).to.eql([4, 5]);
  });

  it('should return the matching values from collection', function () {
    const collection = collect([1, 2, 3, 4, 5]);
    const intersect = collection.intersect([1, 2, 3, 9]);
    expect(intersect.all()).to.eql([1, 2, 3]);
    expect(collection.all()).to.eql([1, 2, 3, 4, 5]);

    const intersect2 = collection.intersect(collect([1, 2, 3, 9]));
    expect(intersect2.all()).to.eql([1, 2, 3]);
  });

  it('should retrieve all of the collection values for a given key', function () {
    const collection = collect(dataset.products);
    const pluck = collection.pluck('product');
    expect(pluck.all()).to.eql(['Chair', 'Desk', 'Chair']);
    expect(collection.all()).to.eql(dataset.products);

    const pluck2 = collection.pluck('product', 'id');
    expect(pluck2.all()).to.eql({
      100: 'Chair',
      150: 'Desk',
      200: 'Chair'
    });
  });

  it('should glue together the collection', function () {
    expect(collect(dataset.products).implode('product', '-')).to.eql('Chair-Desk-Chair');

    expect(collect([1, 2, 3, 4]).implode(', ')).to.eql('1, 2, 3, 4');
  });

  it('should return the item at a given key and remove it from the collection', function () {
    const data = {
      firstname: 'Daniel',
      lastname: 'Eckermann'
    };

    const a = collect(data);
    const b = collect(data);

    expect(a.pull('firstname')).to.eql('Daniel');
    expect(a.all()).to.eql({ lastname: 'Eckermann' });

    expect(b.pull('name')).to.eql(null);
    expect(b.all()).to.eql(data);
  });

  it('should append an item to the end of the collection', function () {
    expect(collect([1, 2, 3]).push(4).all()).to.eql([1, 2, 3, 4]);
  });

  it('should set the given key and value in the collection', function () {
    expect(collect({
      foo: 'bar'
    }).put('baz', 'qux').all()).to.eql({
      foo: 'bar',
      baz: 'qux'
    });
  });

  it('should return the first item and remove it from the collection', function () {
    const collection = collect([1, 2, 3, 4, 5]);

    expect(collection.shift()).to.eql(1);
    expect(collection.all()).to.eql([2, 3, 4, 5]);
  });

  it('should return the collection in chunks', function () {
    expect(collect([1, 2, 3, 4, 5]).chunk(4).all()).to.eql([[1, 2, 3, 4], [5]]);

    const collection = collect(dataset.products);

    const chunk = collection.chunk(1);

    expect(chunk.all()).to.eql([
      [{
        id: 100,
        product: 'Chair',
        manufacturer: 'IKEA',
        price: '1490 NOK'
      }],
      [{
        id: 150,
        product: 'Desk',
        manufacturer: 'IKEA',
        price: '900 NOK'
      }],
      [{
        id: 200,
        product: 'Chair',
        manufacturer: 'Herman Miller',
        price: '9990 NOK'
      }]
    ]);

    expect(collection.all()).to.eql(dataset.products);
  });

  it('should collapse a collection of arrays into a flat collection', function () {
    const collection = collect([[1], [{}, 5, {}], ['xoxo']]);
    const collapse = collection.collapse();
    expect(collapse.all()).to.eql([1, {}, 5, {}, 'xoxo']);
    expect(collection.all()).to.eql([[1], [{}, 5, {}], ['xoxo']]);
  });

  it('should combine the keys of the collection with the values of another array', function () {
    const collection = collect(['name', 'number']);
    const combine = collection.combine(['Steven Gerrard', 8]);
    expect(combine.all()).to.eql({
      name: 'Steven Gerrard',
      number: 8
    });
    expect(collection.all()).to.eql(['name', 'number']);
  });

  it('should return a collection with keys and values flipped', function () {
    const collection = collect({
      name: 'Steven Gerrard',
      number: 8
    });
    const flip = collection.flip();
    expect(flip.all()).to.eql({
      "Steven Gerrard": 'name',
      "8": 'number'
    });
    expect(collection.all()).to.eql({
      name: 'Steven Gerrard',
      number: 8
    });
  });

  it('should forget the given key and value', function () {
    const collection = collect({
      name: 'Steven Gerrard',
      number: 8
    });
    const forget = collection.forget('number');
    expect(forget.all()).to.eql({
      name: 'Steven Gerrard'
    });
    expect(collection.all()).to.eql({
      name: 'Steven Gerrard'
    });
  });

  it('should return a collection containing the items that would be present on a given page number', function () {
    const collection = collect([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    const forPage1 = collection.forPage(1, 3);
    expect(forPage1.all()).to.eql([1, 2, 3]);

    const forPage2 = collection.forPage(2, 3);
    expect(forPage2.all()).to.eql([4, 5, 6]);

    const forPage3 = collection.forPage(3, 3);
    expect(forPage3.all()).to.eql([7, 8, 9]);

    expect(collection.all()).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should return the collection keys', function () {
    const collection = collect({
      name: 'Steven Gerrard',
      number: 8
    });
    const keys = collection.keys();
    expect(keys.all()).to.eql(['name', 'number']);
    expect(collection.all()).to.eql({
      name: 'Steven Gerrard',
      number: 8
    });

    const collection2 = collect([
      {
        name: 'Steven Gerrard',
        number: 8
      },
      {
        club: 'Liverpool',
        nickname: 'The Reds'
      }
    ]);
    const keys2 = collection2.keys();
    expect(keys2.all()).to.eql(['name', 'number', 'club', 'nickname']);
    expect(collection2.all()).to.eql([
      {
        name: 'Steven Gerrard',
        number: 8
      },
      {
        club: 'Liverpool',
        nickname: 'The Reds'
      }
    ]);
  });

  it('should return the merged collection', function () {
    const collection = collect({
      name: 'Steven Gerrard',
      number: 8
    });
    const merge = collection.merge({
      spouse: 'Alex Curran'
    });
    expect(merge.all()).to.eql({
      name: 'Steven Gerrard',
      number: 8,
      spouse: 'Alex Curran'
    });
    expect(collection.all()).to.eql({
      name: 'Steven Gerrard',
      number: 8
    });

    const collection2 = collect({
      id: 1,
      price: 29
    });

    const merged2 = collection2.merge({
      price: 400,
      discount: false
    });

    expect(merged2.all()).to.eql({ id: 1, price: 400, discount: false });

    const collection3 = collect(['Unicorn', 'Rainbow']);

    const merged3 = collection3.merge(['Sunshine', 'Rainbow']);

    expect(merged3.all()).to.eql(['Unicorn', 'Rainbow', 'Sunshine', 'Rainbow']);

    expect(collection3.all()).to.eql(['Unicorn', 'Rainbow']);
  });

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

    expect(shouldBeFalse).to.eql(false);

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

  it('should  remove and returns the last item from the collection', function () {
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
    const collection = collect([5, 3, 1, 2, 4]);

    const sorted = collection.sort();

    expect(sorted.all()).to.eql([1, 2, 3, 4, 5]);
    expect(collection.all()).to.eql([5, 3, 1, 2, 4]);

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