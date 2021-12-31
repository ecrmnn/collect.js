# <img src="https://raw.githubusercontent.com/ecrmnn/collect.js/master/collectjs.jpg" alt="collect.js">

> Convenient and dependency free wrapper for working with arrays and objects

[![Travis](https://img.shields.io/travis/com/ecrmnn/collect.js?style=flat-square)](https://app.travis-ci.com/github/ecrmnn/collect.js/builds)
[![npm version](https://img.shields.io/npm/v/collect.js.svg?style=flat-square)](http://badge.fury.io/js/collect.js)
[![npm downloads](https://img.shields.io/npm/dm/collect.js.svg?style=flat-square)](http://badge.fury.io/js/collect.js)
[![npm license](https://img.shields.io/npm/l/collect.js.svg?style=flat-square)](http://badge.fury.io/js/collect.js)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![dependencies](https://img.shields.io/badge/dependencies-none-brightgreen.svg?style=flat-square)](https://github.com/ecrmnn/collect.js/blob/master/package.json)
[![eslint](https://img.shields.io/badge/code_style-airbnb-blue.svg?style=flat-square)](https://github.com/airbnb/javascript)
[![cdnjs version](https://img.shields.io/cdnjs/v/collect.js.svg?style=flat-square)](https://cdnjs.com/libraries/collect.js)

### Installation

#### NPM

```bash
npm install collect.js --save
```

#### Yarn

```bash
yarn add collect.js
```

#### From CDN

1. Visit https://cdnjs.com/libraries/collect.js
2. Add CDN link to your site with `<script>`

#### Using build / minified version

1. Download [`collect.min.js`](https://github.com/ecrmnn/collect.js/blob/master/build/collect.min.js)
2. Add to your site with `<script>`

### Tip

Using Laravel as your backend? Collect.js offers an (almost) identical api to [Laravel Collections](https://laravel.com/docs/master/collections). [See differences](#strictness-and-comparisons).

### API

All available methods

- [all](#all)
- [average](#average)
- [avg](#avg)
- [chunk](#chunk)
- [collapse](#collapse)
- [combine](#combine)
- [concat](#concat)
- [contains](#contains)
- [count](#count)
- [countBy](#countby)
- [crossJoin](#crossjoin)
- [dd](#dd)
- [diff](#diff)
- [diffAssoc](#diffassoc)
- [diffKeys](#diffkeys)
- [doesntContain](#doesntcontain)
- [dump](#dump)
- [duplicates](#duplicates)
- [each](#each)
- [eachSpread](#eachspread)
- [every](#every)
- [except](#except)
- [filter](#filter)
- [first](#first)
- [firstWhere](#firstwhere)
- [flatMap](#flatmap)
- [flatten](#flatten)
- [flip](#flip)
- [forPage](#forpage)
- [forget](#forget)
- [get](#get)
- [groupBy](#groupby)
- [has](#has)
- [implode](#implode)
- [intersect](#intersect)
- [intersectByKeys](#intersectbykeys)
- [isEmpty](#isempty)
- [isNotEmpty](#isnotempty)
- [join](#join)
- [keyBy](#keyby)
- [keys](#keys)
- [last](#last)
- [macro](#macro)
- [make](#make)
- [map](#map)
- [mapInto](#mapinto)
- [mapSpread](#mapspread)
- [mapToDictionary](#maptodictionary)
- [mapToGroups](#maptogroups)
- [mapWithKeys](#mapwithkeys)
- [max](#max)
- [median](#median)
- [merge](#merge)
- [mergeRecursive](#mergerecursive)
- [min](#min)
- [mode](#mode)
- [nth](#nth)
- [only](#only)
- [pad](#pad)
- [partition](#partition)
- [pipe](#pipe)
- [pluck](#pluck)
- [pop](#pop)
- [prepend](#prepend)
- [pull](#pull)
- [push](#push)
- [put](#put)
- [random](#random)
- [reduce](#reduce)
- [reject](#reject)
- [replace](#replace)
- [replaceRecursive](#replacerecursive)
- [reverse](#reverse)
- [search](#search)
- [shift](#shift)
- [shuffle](#shuffle)
- [skip](#skip)
- [skipUntil](#skipuntil)
- [skipWhile](#skipwhile)
- [slice](#slice)
- [some](#some)
- [sort](#sort)
- [sortBy](#sortby)
- [sortByDesc](#sortbydesc)
- [sortDesc](#sortdesc)
- [sortKeys](#sortkeys)
- [sortKeysDesc](#sortkeysdesc)
- [splice](#splice)
- [split](#split)
- [sum](#sum)
- [take](#take)
- [takeUntil](#takeuntil)
- [takeWhile](#takewhile)
- [tap](#tap)
- [times](#times)
- [toArray](#toarray)
- [toJson](#tojson)
- [transform](#transform)
- [union](#union)
- [unique](#unique)
- [unless](#unless)
- [unlessEmpty](#unlessempty)
- [unlessNotEmpty](#unlessnotempty)
- [unwrap](#unwrap)
- [values](#values)
- [when](#when)
- [whenEmpty](#whenempty)
- [whenNotEmpty](#whennotempty)
- [where](#where)
- [whereBetween](#wherebetween)
- [whereIn](#wherein)
- [whereInstanceOf](#whereinstanceof)
- [whereNotBetween](#wherenotbetween)
- [whereNotIn](#wherenotin)
- [whereNotNull](#wherenotnull)
- [whereNull](#wherenull)
- [wrap](#wrap)
- [zip](#zip)

### Strictness and comparisons

All comparisons in `collect.js` are done using strict equality. Using loose equality comparisons are generally frowned upon in JavaScript. Laravel only performs "loose" comparisons by default and offer several "strict" comparison methods. These methods have not been implemented in `collect.js` because all methods are strict by default.

##### Methods that have not been implemented:

- ~~`containsStrict`~~ use `contains()`
- ~~`duplicatesStrict`~~ use `duplicates()`
- ~~`uniqueStrict`~~ use `unique()`
- ~~`whereStrict`~~ use `where()`
- ~~`whereInStrict`~~ use `whereIn()`
- ~~`whereNotInStrict`~~ use `whereNotIn()`

#### `all()`

The all method returns the underlying array or object represented by the collection:

```js
collect([1, 2, 3]).all();

// [1, 2, 3]
```

```js
collect({
  firstname: 'Sadio',
  lastname: 'Mané',
}).all();

// {
//   firstname: 'Sadio',
//   lastname: 'Mané',
// }
```


#### `average()`

Alias for the [`avg()`](#avg) method

#### `avg()`

The avg method returns the average of all items in the collection:

```js
collect([1, 3, 3, 7]).avg();

// 3.5
```

If the collection contains nested arrays or objects, you should pass a key to use for determining which values to calculate the average:

```js
const collection = collect([
  {
    name: 'My story',
    pages: 176,
  },
  {
    name: 'Fantastic Beasts and Where to Find Them',
    pages: 1096,
  },
]);

collection.avg('pages');

// 636
```

You may also define a callback function

```js
const collection = collect([
  {
    name: 'My story',
    pages: 176,
  },
  {
    name: 'Fantastic Beasts and Where to Find Them',
    pages: 1096,
  },
]);

collection.avg(book => book.pages);

// 636
```

#### `chunk()`

The chunk method breaks the collection into multiple, smaller collections of a given size:

```js
const collection = collect([1, 2, 3, 4, 5, 6, 7]);

const chunks = collection.chunk(4);

chunks.all();

// [[1, 2, 3, 4], [5, 6, 7]]
```

#### `collapse()`

The collapse method collapses a collection of arrays into a single, flat collection:

```js
const collection = collect([[1], [{}, 5, {}], ['xoxo']]);

const collapsed = collection.collapse();

collapsed.all();

// [1, {}, 5, {}, 'xoxo']
```

```js
const collection = collect([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

const collapsed = collection.collapse();

collapsed.all();

// [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

#### `combine()`

The combine method combines the keys of the collection with the values of another array or collection:

```js
const collection = collect(['name', 'number']);

const combine = collection.combine(['Mohamed Salah', 11]);

combine.all();

// {
//   name: 'Mohamed Salah',
//   number: 11
// }
```

#### `concat()`

The concat method is used to merge two or more collections/arrays/objects:

_You can also `concat()` an array of objects, or a multidimensional array_

```js
const collection = collect([1, 2, 3]);

let concatenated = collection.concat(['a', 'b', 'c']);

concatenated = concatenated.concat({
  name: 'Mohamed Salah',
  number: 11,
});

concatenated.all();

// [1, 2, 3, 'a', 'b', 'c', 'Mohamed Salah', 11]
```

#### `contains()`

The contains method determines whether the collection contains a given item:

```js
const collection = collect({
  name: 'Mohamed Salah',
  number: 11,
});

collection.contains('name');
// true

collection.contains('age');
// false

collection.contains('Mohamed Salah');
// true
```

You may also work with arrays

```js
const collection = collect([1, 2, 3]);

collection.contains(3);
// true
```

You may also pass a key / value pair to the contains method, which will determine if the given pair exists in the collection:

```js
const collection = collect({
  name: 'Mohamed Salah',
  number: 11,
});

collection.contains('name', 'Steve Jobs');
// false
```

Finally, you may also pass a callback to the contains method to perform your own truth test:

```js
const collection = collect([1, 2, 3, 4, 5]);

collection.contains((value, key) => value > 5);

// false
```

#### `count()`

The count method returns the total number of items in the collection:

```js
const collection = collect([1, 2, 3, 4]);

collection.count();

// 4
```

#### `countBy()`

The countBy method counts the occurences of values in the collection. By default, the method counts the occurrences of every element:

```js
const collection = collect([1, 2, 2, 2, 3]);

const counted = collection.countBy();

counted.all();

// {
//   1: 1,
//   2: 3,
//   3: 1,
// }
```

However, you pass a callback to the countBy method to count all items by a custom value:

```js
const collection = collect([
  'mohamed.salah@gmail.com',
  'sadio.mane@yahoo.com',
  'roberto.firmino@gmail.com',
]);

const counted = collection.countBy(email => email.split('@')[1]);

counted.all();

// {
//   'gmail.com': 2,
//   'yahoo.com': 1,
// }
```

#### `crossJoin()`

The crossJoin method cross joins the collection with the given array or collection, returning all possible permutations:

```js
const collection = collect([1, 2]);

const joined = collection.crossJoin(['a', 'b']);

joined.all();

// [
//   [1, 'a'],
//   [1, 'b'],
//   [2, 'a'],
//   [2, 'b'],
// ]
```

#### `dd()`

The dd method will `console.log` the collection and exit the current process:

```js
const collection = collect([1, 2, 3]).dd();

// Collection { items: [ 1, 2, 3 ] }
// (Exits node.js process)
```

#### `diff()`

The diff method compares the collection against another collection or a plain array based on its values. This method will return the values in the original collection that are not present in the given collection:

```js
const collection = collect([1, 2, 3, 4, 5]);

const diff = collection.diff([1, 2, 3, 9]);

diff.all();

// [4, 5]
```

#### `diffAssoc()`

The diffAssoc method compares the collection against another collection or a plain object based on its keys and values.
This method will return the key / value pairs in the original collection that are not present in the given collection:

```js
const collection = collect({
  color: 'orange',
  type: 'fruit',
  remain: 6,
});

const diff = collection.diffAssoc({
  color: 'yellow',
  type: 'fruit',
  remain: 3,
  used: 6,
});

diff.all();

// { color: 'orange', remain: 6 };
```

#### `diffKeys()`

The diffKeys method compares the collection against another collection or a plain object based on its keys. This method will return the key / value pairs in the original collection that are not present in the given collection:

```js
const collection = collect({
  a: 'a',
  b: 'b',
  c: 'c',
  d: 'd',
});

const diff = collection.diffKeys({
  b: 'b',
  d: 'd',
});

diff.all();

// { a: 'a', c: 'c' }
```

#### `doesntContain()`

The `doesntContain` method determines whether the collection does not contain a given item. You may pass a closure to the `doesntContain` method to determine if an element does not exist in the collection matching a given truth test:

```js
const collection = collect([1, 2, 3, 4, 5]);

collection.doesntContain(value => value < 5);

// false
```

```js
const collection = collect([1, 2, 3]);

collection.doesntContain(4);
// true
```

You may also use `doesntContain` on object based collections:

```js
const collection = collect({
  name: 'Mohamed Salah',
  number: 11,
});

collection.doesntContain('Mohamed Salah');
// false

collection.doesntContain('Sadio Mané');
// true
```

You may also pass a key / value pair to the contains method, which will determine if the given pair exists in the collection:

```js
const collection = collect({
  name: 'Mohamed Salah',
  number: 11,
});

collection.doesntContain('name', 'Sadio Mané');
// true
```

#### `dump()`

The dump method outputs the results at that moment and then continues processing:

```js
collect([1, 2, 3, 4])
  .dump()
  .map(item => item * 2)
  .dump();

// Collection { items: [ 1, 2, 3, 4 ] }
// Collection { items: [ 2, 4, 6, 8 ] }
```

#### `duplicates()`

The duplicates method retrieves and returns duplicate values from the collection:

```js
const collection = collect(['a', 'b', 'a', 'c', 'b']);

const duplicates = collection.duplicates();

duplicates.all();

// { 2: 'a', 4: 'b' }
```

#### `each()`

The each method iterates over the items in the collection and passes each item to a callback:

```js
let sum = 0;

const collection = collect([1, 3, 3, 7]);

collection.each((item) => {
  sum += item;
});

// console.log(sum);
// 14
```

If you would like to stop iterating through the items, you may return false from your callback:

```js
let sum = 0;

const collection = collect([1, 3, 3, 7]);

collection.each((item) => {
  sum += item;

  if (sum > 5) {
    return false;
  }
});

// console.log(sum);
// 7
```

#### `eachSpread()`

The eachSpread method iterates over the collection's items, passing each nested item value into the given callback:

```js
const collection = collect([['John Doe', 35], ['Jane Doe', 33]]);

collection.eachSpread((name, age) => {
  //
});
```

You may stop iterating through the items by returning false from the callback:

```js
collection.eachSpread((name, age) => false);
```

#### `every()`

The every method may be used to verify that all elements of a collection pass a given truth test:

```js
collect([1, 2, 3, 4]).every((value, key) => value > 2);

// false
```

#### `except()`

The except method returns all items in the collection except for those with the specified keys:

```js
const collection = collect({
  product_id: 1,
  price: 100,
  discount: false,
});

const filtered = collection.except(['price', 'discount']);

filtered.all();

// { product_id: 1 }
```

```js
collect([1, 2, 3, 4])
  .except([2, 12])
  .all();

// [1, 3, 4]
```

> For the inverse of `except`, see the `only` method.

#### `filter()`

The filter method filters the collection using the given callback, keeping only those items that pass a given truth test:

```js
const collection = collect([1, 2, 3, 4]);

const filtered = collection.filter((value, key) => value > 2);

filtered.all();

// [3, 4]
```

If no callback is supplied, all entries of the collection that are equivalent to `false` will be removed:

```js
const collection = collect([
  0,
  1,
  2,
  null,
  3,
  4,
  undefined,
  5,
  6,
  7,
  [],
  8,
  9,
  {},
  10,
]);

const filtered = collection.filter();

filtered.all();

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

> For the inverse of `filter`, see the `reject` method.

#### `first()`

The first method returns the first element in the collection that passes a given truth test:

```js
collect([1, 2, 3, 4]).first(item => item > 1);

// 2
```

You may also call the first method with no arguments to get the first element in the collection. If the collection is empty, null is returned:

```js
collect([1, 2, 3, 4]).first();

// 1
```

#### `firstWhere()`

The firstWhere method returns the first element in the collection with the given key / value pair:

```js
const collection = collect([
  { name: 'Regena', age: 12 },
  { name: 'Linda', age: 14 },
  { name: 'Diego', age: 23 },
  { name: 'Linda', age: 84 },
]);

collection.firstWhere('name', 'Linda');

// { name: 'Linda', age: 14 }
```

#### `flatMap()`

The flatMap method iterates through the collection and passes each value to the given callback. The callback is free to modify the item and return it, thus forming a new collection of modified items. Then, the array is flattened by a level:

```js
const collection = collect([
  {
    name: 'Sadio Mané',
    number: 10,
  },
  {
    name: 'Mohamed Salah',
    number: 11,
  },
]);

const flatMapped = collection.flatMap(value => value.name.toUpperCase());

flatMapped.all();

// ['SADIO MANÉ', 'MOHAMED SALAH']
```

#### `flatten()`

The flatten method flattens a multi-dimensional collection into a single dimension:

```js
const collection = collect({
  club: 'Liverpool',
  players: ['Salah', 'Firmino', 'Mané'],
});

const flattened = collection.flatten();

flattened.all();

// ['Liverpool', 'Salah', 'Firmino', 'Mané'];
```

You may optionally pass the function a "depth" argument:

```js
const collection = collect({
  Apple: [
    {
      name: 'iPhone 6S',
      brand: 'Apple',
    },
  ],
  Samsung: [
    {
      name: 'Galaxy S7',
      brand: 'Samsung',
    },
  ],
});

const flattened = collection.flatten(1);

flattened.all();

// [
//   { name: 'iPhone 6S', brand: 'Apple' },
//   { name: 'Galaxy S7', brand: 'Samsung' },
// ]
```

In this example, calling flatten without providing the depth would have also flattened the nested arrays, resulting in `['iPhone 6S', 'Apple', 'Galaxy S7', 'Samsung']`. Providing a depth allows you to restrict the levels of nested arrays that will be flattened.

#### `flip()`

The flip method swaps the collection's keys with their corresponding values:

```js
const collection = collect({
  name: 'Sadio Mané',
  number: 10,
});

const flipped = collection.flip();

flipped.all();

// {
//   'Sadio Mané': 'name',
//   '10': 'number',
// }
```

#### `forPage()`

The forPage method returns a new collection containing the items that would be present on a given page number. The method accepts the page number as its first argument and the number of items to show per page as its second argument:

```js
const collection = collect([1, 2, 3, 4, 5, 6, 7, 8, 9]);

const forPage = collection.forPage(2, 3);

forPage.all();

// [4, 5, 6]
```

#### `forget()`

The forget method removes an item from the collection by its key:

```js
const collection = collect({
  name: 'Sadio Mané',
  number: 10,
});

collection.forget('number');

collection.all();

// {
//   name: 'Sadio Mané',
// }
```

> Unlike most other collection methods, forget does not return a new modified collection; it modifies the collection it is called on.

#### `get()`

The get method returns the item at a given key or index. If the key or index does not exist, `null` is returned:

```js
const collection = collect({
  firstname: 'Mohamed',
  lastname: 'Salah',
});

collection.get('lastname');

// Salah

collection.get('middlename');

// null
```

```js
const collection = collect(['a', 'b', 'c']);

collection.get(1);

// b
```

You may optionally pass a default value as the second argument:

```js
const collection = collect({
  firstname: 'Mohamed',
  lastname: 'Salah',
});

collection.get('middlename', 'default-value');
// default-value
```

You may even pass a callback as the default value. The result of the callback will be returned if the specified key does not exist:

```js
const collection = collect({
  firstname: 'Mohamed',
  lastname: 'Salah',
});

collection.get('middlename', () => 'default-value');

// default-value
```

#### `groupBy()`

The groupBy method groups the collection's items into multiple collections by a given key:

> If you want to group the collection by keys as a plain object, see [mapToGroups](mapToGroups)

```js
const collection = collect([
  {
    product: 'Chair',
    manufacturer: 'IKEA',
  },
  {
    product: 'Desk',
    manufacturer: 'IKEA',
  },
  {
    product: 'Chair',
    manufacturer: 'Herman Miller',
  },
]);

const grouped = collection.groupBy('manufacturer');

grouped.all();

// {
//   IKEA: Collection {
//     items: [
//        {
//          id: 100,
//          product: 'Chair',
//          manufacturer: 'IKEA',
//          price: '1490 NOK',
//        },
//        {
//          id: 150,
//          product: 'Desk',
//          manufacturer: 'IKEA',
//          price: '900 NOK',
//        },
//      ],
//   },
//   'Herman Miller': Collection {
//     items: [
//       {
//         id: 200,
//         product: 'Chair',
//         manufacturer: 'Herman Miller',
//         price: '9990 NOK',
//       },
//     ],
//   },
// }
```

In addition to passing a string key, you may also pass a callback. The callback should return the value you wish to key the group by:

```js
const collection = collect([
  {
    product: 'Chair',
    manufacturer: 'IKEA',
  },
  {
    product: 'Desk',
    manufacturer: 'IKEA',
  },
  {
    product: 'Chair',
    manufacturer: 'Herman Miller',
  },
]);

const grouped = collection.groupBy((item, key) => item.manufacturer.substring(0, 3));

grouped.all();

// {
//   IKE: Collection {
//     items: [
//       {
//         id: 100,
//         product: 'Chair',
//         manufacturer: 'IKEA',
//         price: '1490 NOK',
//       },
//       {
//         id: 150,
//         product: 'Desk',
//         manufacturer: 'IKEA',
//         price: '900 NOK',
//       },
//     ],
//   },
//   Her: Collection {
//     items: [
//       {
//         id: 200,
//         product: 'Chair',
//         manufacturer: 'Herman Miller',
//         price: '9990 NOK',
//       },
//     ],
//   },
// }
```

#### `has()`

The has method determines if one or more keys exists in the collection:

```js
const collection = collect({
  animal: 'unicorn',
  ability: 'magical',
});

collection.has('ability');

// true

collection.has(['animal', 'ability']);

// true

collection.has(['animal', 'ability', 'name']);

// false
```

#### `implode()`

The implode method joins the items in a collection. Its arguments depend on the type of items in the collection. If the collection contains arrays or objects, you should pass the key of the attributes you wish to join, and the "glue" string you wish to place between the values:

```js
const collection = collect([
  {
    product: 'Chair',
    manufacturer: 'IKEA',
  },
  {
    product: 'Desk',
    manufacturer: 'IKEA',
  },
  {
    product: 'Chair',
    manufacturer: 'Herman Miller',
  },
]);

collection.implode('product', ',');

// Chair, Desk, Chair
```

If the collection contains simple strings or numeric values, simply pass the "glue" as the only argument to the method:

```js
collect([1, 2, 3, 4, 5]).implode('-');

// 1-2-3-4-5
```

#### `intersect()`

The intersect method removes any values from the original collection that are not present in the given `array` or `collection`. The resulting collection will preserve the original collection's keys:

```js
const collection = collect([1, 2, 3, 4, 5]);

intersect = collection.intersect([1, 2, 3, 9]);

intersect.all();

// [1, 2, 3]
```

#### `intersectByKeys()`

The intersectByKeys method removes any keys from the original collection that are not present in the given `array` or collection:

```js
const collection = collect({
  serial: 'UX301',
  type: 'screen',
  year: 2009,
});

const intersect = collection.intersectByKeys({
  reference: 'UX404',
  type: 'tab',
  year: 2011,
});

intersect.all();

// { type: 'screen', year: 2009 }
```

```js
const firstCollection = collect([1, 2, 3, 4, 5]);
const secondCollection = collect([1, 2, 3, 9]);

intersect = firstCollection.intersect(secondCollection);

intersect.all();

// [1, 2, 3]
```

#### `isEmpty()`

The isEmpty method returns true if the collection is empty; otherwise, false is returned:

```js
collect().isEmpty();
// true

collect([]).isEmpty();
// true

collect({}).isEmpty();
// true
```

#### `isNotEmpty()`

The isNotEmpty method returns true if the collection is not empty; otherwise, false is returned:

```js
collect([1, 2, 3]).isNotEmpty();
//  true

collect().isNotEmpty();
// false

collect([]).isNotEmpty();
// false

collect({}).isNotEmpty();
// false
```

#### `join()`

The join method joins the collection's values with a string:

```js
collect(['a', 'b', 'c']).join(', ');
// 'a, b, c'

collect(['a', 'b', 'c']).join(', ', ', and ');
// 'a, b, and c'

collect(['a', 'b']).join(', ', ' and ');
// 'a and b'

collect(['a']).join(', ', ' and ');
// 'a'

collect([]).join(', ', ' and ');
// ''
```

#### `keyBy()`

The keyBy method keys the collection by the given key. If multiple items have the same key, only the last one will appear in the new collection:

```js
const collection = collect([
  {
    product: 'Chair',
    manufacturer: 'IKEA',
  },
  {
    product: 'Desk',
    manufacturer: 'IKEA',
  },
  {
    product: 'Chair',
    manufacturer: 'Herman Miller',
  },
]);

const keyed = collection.keyBy('manufacturer');

keyed.all();

// {
//   IKEA: {
//     product: 'Desk',
//     manufacturer: 'IKEA',
//   },
//   'Herman Miller': {
//     product: 'Chair',
//     manufacturer: 'Herman Miller',
//   },
// }
```

You may also pass a callback to the method. The callback should return the value to key the collection by:

```js
const upperCased = collection.keyBy(item => item.manufacturer.toUpperCase());

upperCased.all();

// {
//   IKEA: {
//     product: 'Desk',
//     manufacturer: 'IKEA',
//   },
//   'HERMAN MILLER': {
//     product: 'Chair',
//     manufacturer: 'Herman Miller',
//   },
// }
```

#### `keys()`

The keys method returns all of the collection's keys:

```js
const collection = collect([
  {
    club: 'Liverpool',
    nickname: 'The Reds',
  },
]);

keys = collection.keys();

// ['club', 'nickname']
```

#### `last()`

The last method returns the last element in the collection that passes a given truth test:

```js
const collection = collect([1, 2, 3]);

const last = collection.last(item => item > 1);

// 3
```

You may also call the last method with no arguments to get the last element in the collection. If the collection is empty, `null` is returned:

```js
collect([1, 2, 3, 4]).last();

// 4
```

#### `macro()`

The macro method lets you register custom methods

```js
collect().macro('uppercase', function () {
  return this.map(item => item.toUpperCase());
});

const collection = collect(['a', 'b', 'c']);

collection.uppercase();

collection.all();

// ['A', 'B', 'C']
```

> Note that the `macro` method returns `undefined`, and therefore it is not possible to use it within a chain of methods.

#### `make()`

The make method creates a new collection instance.

> This is only added to adhere to the Laravel collection API, when using Collect.js it's recommended to use `collect()` directly when creating a new collection.

#### `map()`

The map method iterates through the collection and passes each value to the given callback. The callback is free to modify the item and return it, thus forming a new collection of modified items:

```js
const collection = collect([1, 2, 3, 4, 5]);

const multiplied = collection.map(item => item * 2);

multiplied.all();

// [2, 4, 6, 8, 10]
```

> Like most other collection methods, `map` returns a new collection instance; it does not modify the collection it is called on. If you want to transform the original collection, use the `transform` method.

#### `mapInto()`

The mapInto method iterates through the collection and instantiates the given class with each element as a constructor:

```js
const Player = function (name) {
  this.name = name;
};

const collection = collect([
  'Roberto Firmino',
  'Sadio Mané',
]);

const players = collection.mapInto(Player);

players.all();

// [
//   Player { name: 'Roberto Firmino' },
//   Player { name: 'Sadio Mané' },
// ]
```

#### `mapSpread()`

The mapSpread method iterates over the collection's items, passing each nested item value into the given callback.
The callback is free to modify the item and return it, thus forming a new collection of modified items:

```js
const collection = collect([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

const chunks = collection.chunk(2);

const sequence = chunks.mapSpread((even, odd) => even + odd);

sequence.all();

// [1, 5, 9, 13, 17]
```

#### `mapToDictionary()`

Run a dictionary map over the items.
The callback should return an associative array with a single key/value pair.

```js
const collection = collect([
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
  { id: 3, name: 'c' },
  { id: 4, name: 'b' },
]);

const groups = collection.mapToDictionary(item => [item.name, item.id]);

groups.all();

// {
//   a: [1],
//   b: [2, 4],
//   c: [3],
// }
```

#### `mapToGroups()`

The mapToGroups method iterates through the collection and passes each value to the given callback:

```js
const collection = collect([
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
  { id: 3, name: 'C' },
  { id: 4, name: 'B' },
]);

const groups = collection.mapToGroups((item, key) => [item.name, item.id]);

// {
//   A: [1],
//   B: [2, 4],
//   C: [3],
// }
```

#### `mapWithKeys()`

The mapWithKeys method iterates through the collection and passes each value to the given callback. The callback should return an array where the first element represents the key and the second element represents the value pair:

```js
const collection = collect([
  {
    name: 'John',
    department: 'Sales',
    email: 'john@example.com',
  },
  {
    name: 'Jane',
    department: 'Marketing',
    email: 'jane@example.com',
  },
]);

const keyed = collection.mapWithKeys(item => [item.email, item.name]);

keyed.all();

// {
//   'john@example.com': 'John',
//   'jane@example.com': 'Jane',
// }
```

#### `max()`

The max method returns the maximum value of a given key:

```js
const collection = collect([
  {
    value: 10,
  },
  {
    value: -13,
  },
  {
    value: 12,
  },
  {
    unicorn: false,
  },
]);

const max = collection.max('value');

// 12
```

```js
collect([-1, -2345, 12, 11, 3]).max();

// 12
```

#### `median()`

The median method returns the median value of a given key:

```js
collect([1, 3, 3, 6, 7, 8, 9]).median();

// 6
```

```js
collect([
  {
    foo: 1,
  },
  {
    foo: 1,
  },
  {
    foo: 2,
  },
  {
    foo: 4,
  },
]).median('foo');

// 1.5
```

#### `merge()`

The merge method merges the given object into the original collection. If a key in the given object matches a key in the original collection, the given objects value will overwrite the value in the original collection:

```js
const collection = collect({
  id: 1,
  price: 29,
});

const merged = collection.merge({
  price: 400,
  discount: false,
});

merged.all();

// { id: 1, price: 400, discount: false }
```

If our collection is an array, the values will be appended to the end of the collection:

```js
const collection = collect(['Unicorn', 'Rainbow']);

const merged = collection.merge(['Sunshine', 'Rainbow']);

merged.all();

// ['Unicorn', 'Rainbow', 'Sunshine', 'Rainbow']
```

#### `mergeRecursive()`

The mergeRecursive method merges the given array or collection recursively with the original collection. If a string key in the given items matches a string key in the original collection, then the values for these keys are merged together into an array, and this is done recursively:

```js
const collection = collect({
  product_id: 1,
  price: 100,
});

const merged = collection.mergeRecursive({
  product_id: 2,
  price: 200,
  discount: false,
});

merged.all();

// {
//   product_id: [1, 2],
//   price: [100, 200],
//   discount: false,
// }
```

#### `min()`

The min method returns the minimum value of a given key:

```js
const collection = collect([
  {
    worth: 100,
  },
  {
    worth: 900,
  },
  {
    worth: 79,
  },
]);

collection.min('worth');

// 79
```

```js
collect([1, 2, 3, 4, 5]).min();

// 1
```

#### `mode()`

The mode method returns the mode value of a given key:

```js
collect([1, 3, 3, 6, 7, 8, 9]).mode();

// [3]
```

```js
collect([
  {
    foo: 1,
  },
  {
    foo: 1,
  },
  {
    foo: 2,
  },
  {
    foo: 4,
  },
]).mode('foo');

// [1]
```

#### `nth()`

The nth method creates a new collection consisting of every n-th element:

```js
const collection = collect(['a', 'b', 'c', 'd', 'e', 'f']);

const nth = collection.nth(4);

nth.all();

// ['a', 'e']
```

#### `only()`

The only method returns the items in the collection with the specified keys:

```js
const collection = collect({
  id: 12,
  name: 'John Doe',
  email: 'john@doe.com',
  active: true,
});

const filtered = collection.only(['name', 'email']);

filtered.all();

// { name: 'John Doe', email: 'john@doe.com' }
```

```js
collect([1, 2, 3, 4])
  .only([2, 12])
  .all();

// [2]
```

> For the inverse of `only`, see the `except` method.

#### `pad()`

The pad method will fill the array with the given value until the array reaches the specified size. This method
behaves like the [array_pad](https://secure.php.net/manual/en/function.array-pad.php) PHP function.

To pad to the left, you should specify a negative size. No padding will take place if the absolute value of the given size is less than or equal to the length of the array:

```js
const collection = collect(['A', 'B', 'C']);

let filtered = collection.pad(5, 0);

filtered.all();

// ['A', 'B', 'C', 0, 0]

filtered = collection.pad(-5, 0);

filtered.all();

// [0, 0, 'A', 'B', 'C']
```

#### `partition()`

The partition method may be combined with destructuring to separate elements that pass a given truth test from those that do not:

```js
const collection = collect([1, 2, 3, 4, 5, 6]);

const [underThree, overThree] = collection.partition(i => i < 3);
```

#### `pipe()`

The pipe method passes the collection to the given callback and returns the result:

```js
const collection = collect([1, 2, 3]);

const piped = collection.pipe(items => items.sum());

// 6
```

#### `pluck()`

The pluck method retrieves all of the values for a given key:

```js
const collection = collect([
  {
    id: 78,
    name: 'Aeron',
  },
  {
    id: 79,
    name: 'Embody',
  },
]);

const plucked = collection.pluck('name');

plucked.all();

// ['Aeron', 'Embody']
```

You may also specify how you wish the resulting collection to be keyed:

```js
const collection = collect([
  {
    id: 78,
    name: 'Aeron',
  },
  {
    id: 79,
    name: 'Embody',
  },
]);

const plucked = collection.pluck('name', 'id');

plucked.all();

// {
//   78: 'Aeron',
//   79: 'Embody',
// }
```

You can use "dot notation" to access nested values

```js
const collection = collect([
  {
    name: 'John',
    roles: [
      {
        name: 'Editor',
      },
      {
        name: 'Admin',
      },
    ],
  },
]);

const plucked = collection.pluck('roles.0.name');

plucked.all();

// ['Editor']
```

"Dot notation" supports "wildcard"

```js
const collection = collect([
  {
    name: 'John',
    roles: [
      {
        name: 'Editor',
      },
      {
        name: 'Admin',
      },
    ],
  },
]);

const plucked = collection.pluck('roles.*.name');

plucked.all();

// [
//   [
//     'Editor',
//     'Admin',
//   ],
// ]
```

#### `pop()`

The pop method removes and returns the last item from the collection:

```js
const collection = collect([1, 2, 3, 4, 5]);

collection.pop();

// 5

collection.all();

// => [1, 2, 3, 4]
```

You may provide number of items to pop. This will return the popped items in a new collection:
```js
const collection = collect([1, 2, 3, 4, 5]);

collection.pop(2).all();

// [4, 5]

collection.all();

// => [1, 2, 3]
```

#### `prepend()`

The prepend method adds an item to the beginning of the collection:

```js
const collection = collect([1, 2, 3, 4, 5]);

collection.prepend(0);

collection.all();

// [0, 1, 2, 3, 4, 5]
```

You may also pass a second argument to set the key of the prepended item:

> Pro tip: Order of properties in objects is not guaranteed in JavaScript; When calling prepend with a key, the Collection uses the underlying `put` method behind the scenes. This is only supported so that collect.js have the same api as Laravel Collections.

```js
const collection = collect({
  product: 'iPhone 6s',
});

collection.prepend('Apple', 'brand');

collection.all();

// {
//   brand: 'Apple',
//   product: 'iPhone 6s',
// }
```

#### `pull()`

The pull method removes and returns an item from the collection by its key:

```js
const collection = collect({
  firstname: 'Michael',
  lastname: 'Cera',
});

collection.pull('lastname');

// Cera

collection.all();

// { firstname: 'Michael' }
```

#### `push()`

The push method appends an item to the end of the collection:

```js
const collection = collect([1, 2, 3, 4]);

collection.push(5);

collection.all();

// [1, 2, 3, 4, 5]
```

#### `put()`

The put method sets the given key and value in the collection:

```js
const collection = collect(['JavaScript', 'Python']);

collection.put('Ruby');

collection.all();

// ['JavaScript', 'Python', 'Ruby']
```

#### `random()`

The random method returns a random item from the collection:

```js
const collection = collect([1, 2, 3, 4, 5]);

collection.random();

// 4 (retrieved randomly)
```

You may optionally pass an integer to random to specify how many items you would like to randomly retrieve. A collection of items is always returned when explicitly passing the number of items you wish to receive:

```js
const threeRandom = collection.random(3);

// Collection { items: [ 5, 3, 4 ] } (retrieved randomly)

const oneRandom = collection.random(1);

// Collection { items: [ 3 ] } (retrieved randomly)

oneRandom.all();

// [3]
```

#### `reduce()`

The reduce method reduces the collection to a single value, passing the result of each iteration into the subsequent iteration:

```js
const collection = collect([1, 2, 3]);

const total = collection.reduce((carry, item) => carry + item);

// 6
```

The value for `carry` on the first iteration is null; however, you may specify its initial value by passing a second argument to reduce:

```js
const total = collection.reduce((carry, item) => carry + item, 4);

// 10
```

#### `reject()`

The reject method filters the collection using the given callback. The callback should return true if the item should be removed from the resulting collection:

```js
const collection = collect([1, 2, 3, 4]);

const filtered = collection.reject(value => value > 2);

// [1, 2]
```

> For the inverse of the `reject` method, see the `filter` method.

#### `replace()`

The replace method behaves similarly to merge; however, in addition to overwriting matching items with string keys, the replace method will also overwrite items in the collection that have matching numeric keys:

```js
const collection = collect({
  name: 'Bob',
});

const replaced = collection.replace({
  name: 'John',
  number: 45,
});

replaced.all();

// {
//   name: 'John',
//   number: 45,
// }
```

#### `replaceRecursive()`

This method works like replace, but it will recurse into arrays and apply the same replacement process to the inner values:

```js
const collection = collect([
  'Matip',
  'van Dijk',
  [
    'Mané',
    'Firmino',
    'Salah',
  ],
]);

const replaced = collection.replaceRecursive({
  0: 'Gomez',
  2: { 1: 'Origi' },
});

replaced.all();

// {
//   0: 'Gomez',
//   1: 'van Dijk',
//   2: { 0: 'Mané', 1: 'Origi', 2: 'Salah' },
// }
```

#### `reverse()`

The reverse method reverses the order of the collection's items:

```js
const collection = collect([1, 2, 3, 4, 5]);

const reversed = collection.reverse();

reversed.all();

// [5, 4, 3, 2, 1]
```

#### `search()`

The search method searches the collection for the given value and returns its key if found. If the item is not found, false is returned.

```js
const collection = collect([2, 4, 6, 8]);

collection.search(4);

// 1
```

The search is done using a "loose" comparison, meaning a string with an integer value will be considered equal to an integer of the same value. To use strict comparison, pass true as the second argument to the method:

```js
collection.search('4', true);

// false
```

Alternatively, you may pass in your own callback to search for the first item that passes your truth test:

```js
collection.search((item, key) => item > 5);

// 2
```

#### `shift()`

The shift method removes and returns the first item from the collection:

```js
const collection = collect([1, 2, 3, 4, 5]);

collection.shift();

// 1

collection.all();

// [2, 3, 4, 5]
```

You may provide number of items to shift. This will return the shifted items in a new collection:
```js
const collection = collect([1, 2, 3, 4, 5]);

collection.shift(2).all();

// [1, 2]

collection.all();

// => [3, 4, 5]
```

#### `shuffle()`

The shuffle method randomly shuffles the items in the collection:

```js
const collection = collect([1, 2, 3, 4, 5]);

const shuffled = collection.shuffle();

shuffled.all();

// [3, 5, 1, 2, 4] (generated randomly)
```

#### `skip()`

The skip method returns a new collection, without the first given amount of items:

```js
const collection = collect([1, 2, 3, 4, 5, 6]);

collection.skip(4).all();

// [5, 6]
```

```js
const collection = collect({
  first: 'first',
  second: 'second',
  third: 'third',
  fourth: 'fourth',
  fifth: 'fifth',
});

collection.skip(4).all();

// { fifth: 'fifth' }
```


#### `skipUntil()`

The `skipUntil` method skips items until the given callback returns `true` and then returns the remaining items in the collection:

```js
const collection = collect([1, 2, 3, 4]);

const subset = collection.skipUntil(item => item >= 3);

subset.all();

// [3, 4]
```

You may also pass a simple value to the `skipUntil` method to skip all items until the given value is found:

```js
const collection = collect([1, 2, 3, 4]);

const subset = collection.skipUntil(3);

subset.all();

// [3, 4]
```


#### `skipWhile()`

The `skipWhile` method skips items while the given callback returns `true` and then returns the remaining items in the collection:

```js
const collection = collect([1, 2, 3, 4]);

const subset = collection.skipWhile(item => item <= 3);

subset.all();

// [4]
```

> If the callback never returns true, the skipWhile method will return an empty collection.

You may also pass a simple value to the `skipWhile`:

```js
const collection = collect([1, 1, 2, 2, 3, 3, 4, 4]);

const subset = collection.skipWhile(1);

subset.all();

// [2, 2, 3, 3, 4, 4]
```


#### `slice()`

The slice method returns a slice of the collection starting at the given index:

```js
const collection = collect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

const slice = collection.slice(4);

slice.all();

// [5, 6, 7, 8, 9, 10]
```

If you would like to limit the size of the returned slice, pass the desired size as the second argument to the method:

```js
const slice = collection.slice(4, 2);

slice.all();

// [5, 6]
```

#### `some()`

Alias for the [contains](#contains) method.

#### `sort()`

The sort method sorts the collection:

```js
const collection = collect([5, 3, 1, 2, 4]);

const sorted = collection.sort();

sorted.all();

// [1, 2, 3, 4, 5]
```

> If your sorting needs are more advanced, you may pass a callback to sort with your own algorithm.

```js
const collection = collect([5, 3, 1, 2, 4]);

const sorted = collection.sort((a, b) => b - a);

sorted.all();

// [5, 4, 3, 2, 1]
```

> If you need to sort a collection of nested arrays or objects, see the `sortBy` and `sortByDesc` methods.

#### `sortBy()`

The sortBy method sorts the collection by the given key. The sorted collection keeps the original array keys, so in this example we'll use the values method to reset the keys to consecutively numbered indexes:

```js
const collection = collect([
  { name: 'Desk', price: 200 },
  { name: 'Chair', price: 100 },
  { name: 'Bookcase', price: 150 },
]);

const sorted = collection.sortBy('price');

sorted.all();

// [
//   { name: 'Chair', price: 100 },
//   { name: 'Bookcase', price: 150 },
//   { name: 'Desk', price: 200 },
// ]
```

You can use dot notation to sort by nested values
```js
const collection = collect([
  {
    name: 'Desk',
    price: 200,
    manufacturer: {
      name: 'IKEA',
    },
  },
  {
    name: 'Chair',
    price: 100,
    manufacturer: {
      name: 'Herman Miller',
    },
  },
  {
    name: 'Bookcase',
    price: 150,
    manufacturer: {
      name: 'IKEA',
    },
  },
]);

const sorted = collection.sortBy('manufacturer.name');

sorted.all();

// [
//   {
//     name: 'Chair',
//     price: 100,
//     manufacturer: {
//       name: 'Herman Miller',
//     },
//   },
//   {
//     name: 'Desk',
//     price: 200,
//     manufacturer: {
//       name: 'IKEA',
//     },
//   },
//   {
//     name: 'Bookcase',
//     price: 150,
//     manufacturer: {
//       name: 'IKEA',
//     },
//   },
// ]
```

You can also pass your own callback to determine how to sort the collection values:

```js
const collection = collect([
  { name: 'Desk', colors: ['Black', 'Mahogany'] },
  { name: 'Chair', colors: ['Black'] },
  { name: 'Bookcase', colors: ['Red', 'Beige', 'Brown'] },
]);

const sorted = collection.sortBy((product, key) => product.colors.length);

sorted.all();

// [
//   { name: 'Chair', colors: ['Black'] },
//   { name: 'Desk', colors: ['Black', 'Mahogany'] },
//   { name: 'Bookcase', colors: ['Red', 'Beige', 'Brown'] },
// ]
```

#### `sortByDesc()`

This method has the same signature as the `sortBy` method, but will sort the collection in the opposite order.

#### `sortDesc()`

This method will sort the collection in the opposite order as the `sort` method.

```js
const collection = collect([1, 3, 5, 2, 4]);

const sorted = collection.sortDesc();

sorted.all();

// [5, 4, 3, 2, 1]
```

Unlike `sort`, you may not pass a callback to `sortDesc`. If you wish to use a callback, you should use `sort` and invert your comparison.

#### `sortKeys()`

The sortKeys method sorts the collection by the keys of the underlying associative array:

```js
const collection = collect({
  id: 10,
  first: 'Sadio',
  last: 'Mané',
});

const sorted = collection.sortKeys();

sorted.all();

// {
//   first: 'Sadio',
//   id: 10,
//   last: 'Mané',
// }
```

#### `sortKeysDesc()`
This method has the same signature as the [sortKeys](#sortkeys) method, but will sort the collection in the opposite order.

#### `splice()`

The splice method removes and returns a slice of items starting at the specified index:

```js
const collection = collect([1, 2, 3, 4, 5]);

const chunk = collection.splice(2);

chunk.all();

// [3, 4, 5]

collection.all();

// [1, 2]
```

You may pass a second argument to limit the size of the resulting chunk:

```js
const collection = collect([1, 2, 3, 4, 5]);

const chunk = collection.splice(2, 1);

chunk.all();

// [3]

collection.all();

// [1, 2, 4, 5]
```

In addition, you can pass a third argument containing the new items to replace the items removed from the collection:

```js
const collection = collect([1, 2, 3, 4, 5]);

const chunk = collection.splice(2, 1, [10, 11]);

chunk.all();

// [3]

collection.all();

// [1, 2, 10, 11, 4, 5]
```

#### `split()`

The split method breaks a collection into the given number of groups:

```js
const collection = collect([1, 2, 3, 4, 5]);

const groups = collection.split(3);

// [[1, 2], [3, 4], [5]]
```

#### `sum()`

The sum method returns the sum of all items in the collection:

```js
collect([1, 2, 3]).sum();

// 6
```

If the collection contains nested arrays or objects, you should pass a key to use for determining which values to sum:

```js
const collection = collect([
  { name: 'My story', pages: 176 },
  { name: 'Fantastic Beasts and Where to Find Them', pages: 1096 },
]);

collection.sum('pages');

// 1272
```

In addition, you may pass your own callback to determine which values of the collection to sum:

```js
const collection = collect([
  { name: 'Desk', colors: ['Black', 'Mahogany'] },
  { name: 'Chair', colors: ['Black'] },
  { name: 'Bookcase', colors: ['Red', 'Beige', 'Brown'] },
]);

const total = collection.sum(product => product.colors.length);

// 6
```

#### `take()`

The take method returns a new collection with the specified number of items:
You may also pass a negative integer to take the specified amount of items from the end of the collection:

```js
const collection = collect([0, 1, 2, 3, 4, 5]);

const chunk = collection.take(3);

chunk.all();

// [0, 1, 2]
```

#### `takeUntil()`

The `takeUntil` method returns items in the collection until the given callback returns `true`:

```js
const collection = collect([1, 2, 3, 4]);

const subset = collection.takeUntil(item => item >= 3);

subset.all();

// [1, 2]
```

> If the given value is not found or the callback never returns `true`, the `takeUntil` method will return all items in the collection.

You may also pass a simple value to the `takeUntil` method to get the items until the given value is found:

```js
const collection = collect([1, 2, 3, 4]);

const subset = collection.takeUntil(3);

subset.all();

// [1, 2]
```


#### `takeWhile()`

The `takeWhile` method returns items in the collection until the given callback returns `false`:

```js
const collection = collect([1, 2, 3, 4]);

const subset = collection.takeWhile(item => item < 3);

subset.all();

// [1, 2]
```

> If the callback never returns `false`, the `takeWhile` method will return all items in the collection.


#### `tap()`

The tap method passes the collection to the given callback, allowing you to "tap" into the collection at a specific point and do something with the items while not affecting the collection itself:

```js
collect([2, 4, 3, 1, 5])
  .sort()
  .tap((collection) => {
    console.log(collection.all());

    // [1, 2, 3, 4, 5]
  })
  .shift();

// 1
```

#### `times()`

The times method creates a new collection by invoking the callback a given amount of times:

```js
const collection = collect().times(10, number => number * 9);

collection.all();

// [9, 18, 27, 36, 45, 54, 63, 72, 81, 90]
```

#### `toArray()`

The toArray method converts the collection into a plain array.
If the collection is an object, an array containing the values will be returned.

```js
const collection = collect([1, 2, 3, 'b', 'c']);

collection.toArray();

// [1, 2, 3, 'b', 'c']
```

```js
const collection = collect({
  name: 'Elon Musk',
  companies: ['Tesla', 'Space X', 'SolarCity'],
});

collection.toArray();

// ['Elon Musk', ['Tesla', 'Space X', 'SolarCity']]
```

#### `toJson()`

The toJson method converts the collection into JSON string:

```js
const collection = collect({
  id: 384,
  name: 'Rayquaza',
  gender: 'NA',
});

const json = collection.toJson();

// {"id": 384, "name": "Rayquaza", "gender": "NA"}
```

#### `transform()`

The transform method iterates over the collection and calls the given callback with each item in the collection. The items in the collection will be replaced by the values returned by the callback:

```js
const collection = collect([1, 2, 3, 4, 5]);

collection.transform((item, key) => item * 2);

collection.all();

// [2, 4, 6, 8, 10]
```

> Unlike most other collection methods, `transform` modifies the collection itself. If you wish to create a new collection instead, use the `map` method.

#### `union()`

The union method adds the given array to the collection. If the given array contains keys that are already in the original collection, the original collection's values will be preferred:

```js
const collection = collect({
  a: 'A',
  b: 'B',
});

const union = collection.union({
  a: 'AAA',
  c: 'CCC',
  b: 'BBB',
});

union.all();

// {
//   a: 'A',
//   b: 'B',
//   c: 'CCC',
// }
```

#### `unique()`

The unique method returns all of the unique items in the collection:

```js
const collection = collect([1, 1, 1, 2, 3, 3]);

const unique = collection.unique();

unique.all();

// [1, 2, 3]
```

When dealing with an array of objects, you may specify the key used to determine uniqueness:

```js
const collection = collect([
  { name: 'iPhone 6', brand: 'Apple', type: 'phone' },
  { name: 'iPhone 5', brand: 'Apple', type: 'phone' },
  { name: 'Apple Watch', brand: 'Apple', type: 'watch' },
  { name: 'Galaxy S6', brand: 'Samsung', type: 'phone' },
  { name: 'Galaxy Gear', brand: 'Samsung', type: 'watch' },
]);

const unique = collection.unique('brand');

unique.all();

// [
//   { name: 'iPhone 6', brand: 'Apple', type: 'phone' },
//   { name: 'Galaxy S6', brand: 'Samsung', type: 'phone' },
// ]
```

You may also pass your own callback to determine item uniqueness:

```js
const collection = collect([
  { name: 'iPhone 6', brand: 'Apple', type: 'phone' },
  { name: 'iPhone 5', brand: 'Apple', type: 'phone' },
  { name: 'Apple Watch', brand: 'Apple', type: 'watch' },
  { name: 'Galaxy S6', brand: 'Samsung', type: 'phone' },
  { name: 'Galaxy Gear', brand: 'Samsung', type: 'watch' },
]);

const unique = collection.unique(item => item.brand + item.type);

unique.all();

// [
//   { name: 'iPhone 6', brand: 'Apple', type: 'phone' },
//   { name: 'Apple Watch', brand: 'Apple', type: 'watch' },
//   { name: 'Galaxy S6', brand: 'Samsung', type: 'phone' },
//   { name: 'Galaxy Gear', brand: 'Samsung', type: 'watch' },
// ]
```

#### `unless()`

The unless method will execute the given callback when the first argument given to the method evaluates to false:

```js
const collection = collect([1, 2, 3]);

collection.unless(false, items => items.push(4));

collection.all();

// [1, 2, 3, 4]
```

#### `unlessEmpty()`

Alias for the [`whenNotEmpty()`](#whenNotEmpty) method

#### `unlessNotEmpty()`

Alias for the [`whenEmpty()`](#whenEmpty) method

#### `unwrap()`

The unwrap method will unwrap the given collection:

```js
const collection = collect([1, 2, 3]);

collect().unwrap(collection);

// [1, 2, 3]
```

#### `values()`

The values method returns a new collection with the keys reset to consecutive integers:

```js
const collection = collect({
  a: 'xoxo',
  b: 'abab',
  c: '1337',
  1337: 12,
});

const values = collection.values();

values.all();

// [12, 'xoxo', 'abab', '1337']
```

#### `when()`

The when method will execute the given callback when the first argument given to the method evaluates to true:

```js
const collection = collect([1, 2, 3]);

collection.when(true, items => items.push(4));

collection.all();

// [1, 2, 3, 4]
```

#### `whenEmpty()`

The `whenEmpty` method will execute the given callback when the collection is empty:

```js
const collection = collect([]);

collection.whenEmpty(c => c.push('Mohamed Salah'));

collection.all();

// ['Mohamed Salah']
```

```js
const collection = collect(['Sadio Mané']);

collection.whenEmpty(
  c => c.push('Mohamed Salah'),
  c => c.push('Xherdan Shaqiri'),
);

collection.all();

// [
//   'Sadio Mané',
//   'Xherdan Shaqiri',
// ];
```

#### `whenNotEmpty()`

The `whenNotEmpty` method will execute the given callback when the collection is not empty:

```js
const collection = collect(['Sadio Mané']);

collection.whenNotEmpty(c => c.push('Mohamed Salah'));

collection.all();

// [
//   'Sadio Mané',
//   'Mohamed Salah',
// ]
```

```js
const collection = collect(['Sadio Mané']);

collection.whenNotEmpty(
  c => c.push('Mohamed Salah'),
  c => c.push('Xherdan Shaqiri'),
);

collection.all();

// [
//   'Sadio Mané',
//   'Mohamed Salah',
// ];
```

#### `where()`

The where method filters the collection by a given key / value pair:

```js
const collection = collect([
  { product: 'Desk', price: 200, discounted: true },
  { product: 'Chair', price: 100, discounted: true },
  { product: 'Bookcase', price: 150, discounted: true },
  { product: 'Door', price: 100 },
]);

const filtered = collection.where('price', 100);

filtered.all();

// [
//   { product: 'Chair', price: 100 },
//   { product: 'Door', price: 100 },
// ]

const discounted = collection.where('discounted');

discounted.all();

// [
//  { product: 'Desk', price: 200, discounted: true },
//  { product: 'Chair', price: 100, discounted: true },
//  { product: 'Bookcase', price: 150, discounted: true },
// ]

const notDiscounted = collection.where('discounted', false);

discounted.all();

// [
//  { product: 'Door', price: 100 },
// ]
```

> When working with nested objects `where()` method allows dot notated keys. E.g. `where('product.category', 'office-supplies')`
> The where method also allows for custom comparisons:

**Non-identity / strict inequality `(!==)`**

```js
const filtered = collection.where('price', '!==', 100);

filtered.all();

// [
//   { product: 'Desk', price: 200 },
//   { product: 'Bookcase', price: 150 },
// ]
```

**Less than operator `(<)`**

```js
const filtered = collection.where('price', '<', 100);

filtered.all();

// []
```

**Less than or equal operator `(<=)`**

```js
const filtered = collection.where('price', '<=', 100);

filtered.all();

// [
//   { product: 'Chair', price: 100 },
//   { product: 'Door', price: 100 },
// ]
```

**Greater than operator `(>)`**

```js
const filtered = collection.where('price', '>', 100);

filtered.all();

// [
//   { product: 'Desk', price: 200} ,
//   { product: 'Bookcase', price: 150 },
// ]
```

**Greater than or equal operator `(>=)`**

```js
const filtered = collection.where('price', '>=', 150);

filtered.all();

// [
//   { product: 'Desk', price: 200} ,
//   { product: 'Bookcase', price: 150 },
// ]
```

#### `whereBetween()`

The whereBetween method filters the collection within a given range:

```js
const collection = collect([
  { product: 'Desk', price: 200 },
  { product: 'Chair', price: 80 },
  { product: 'Bookcase', price: 150 },
  { product: 'Pencil', price: 30 },
  { product: 'Door', price: 100 },
]);

const filtered = collection.whereBetween('price', [100, 200]);

filtered.all();

// [
//   { product: 'Desk', price: 200 },
//   { product: 'Bookcase', price: 150 },
//   { product: 'Door', price: 100 },
// ]
```

#### `whereIn()`

The whereIn method filters the collection by a given key / value contained within the given array.

```js
const collection = collect([
  { product: 'Desk', price: 200 },
  { product: 'Chair', price: 100 },
  { product: 'Bookcase', price: 150 },
  { product: 'Door', price: 100 },
]);

const filtered = collection.whereIn('price', [100, 150]);

filtered.all();

// [
//   { product: 'Chair', price: 100 },
//   { product: 'Bookcase', price: 150 },
//   { product: 'Door', price: 100 },
// ]
```

> When working with nested objects `whereIn()` method allows dot notated keys. E.g. `whereIn('product.categories', ['office-supplies', 'furniture'])`

#### `whereInstanceOf()`

The whereInstanceOf method filters the collection by a given class type:

```js
const collection = collect([
  new Player('Firmino'),
  new Player('Salah'),
  new Manager('Klopp'),
]);

const filtered = collection.whereInstanceOf(Player);

filtered.all();

// [
//   new Player('Firmino'),
//   new Player('Salah'),
// ]
```

#### `whereNotBetween()`

The whereNotBetween method filters the collection within a given range:

```js
const collection = collect([
  { product: 'Desk', price: 200 },
  { product: 'Chair', price: 80 },
  { product: 'Bookcase', price: 150 },
  { product: 'Pencil', price: 30 },
  { product: 'Door', price: 100 },
]);

const filtered = collection.whereNotBetween('price', [100, 200]);

filtered.all();

// [
//   { product: 'Chair', price: 80 },
//   { product: 'Pencil', price: 30 },
// ]
```

#### `whereNotIn()`

The whereNotIn method filters the collection by a given key / value not contained within the given array:

```js
const collection = collect([
  { product: 'Desk', price: 200 },
  { product: 'Chair', price: 100 },
  { product: 'Bookcase', price: 150 },
  { product: 'Door', price: 100 },
]);

const filtered = collection.whereNotIn('price', [150, 200]);

filtered.all();

// [
//   { product: 'Chair', price: 100 },
//   { product: 'Door', price: 100 },
// ]
```

> When working with nested objects `whereNotIn()` method allows dot notated keys. E.g. `whereNotIn('product .categories', ['office-supplies', 'furniture'])`

#### `whereNotNull()`

The `whereNotNull` method filters items where the given key is not null.

```js
const collection = collect([{
  name: 'Mohamed Salah',
}, {
  name: null,
}, {
  name: 'Sadio Mané',
}]);

const filtered = collection.whereNotNull();

filtered.all();

// [
//   { name: 'Mohamed Salah' },
//   { name: 'Sadio Mané' },
// ]
```

#### `whereNull()`

The `whereNull` method filters items where the given key is null.

```js
const collection = collect([{
  name: 'Mohamed Salah',
}, {
  name: null,
}, {
  name: 'Sadio Mané',
}]);

const filtered = collection.whereNull();

filtered.all();

// [
//   { name: null },
// ]
```

#### `wrap()`

The wrap method will wrap the given value in a collection:

```js
const collection = collect().wrap([1, 2, 3]);

collection.all();

// [1, 2, 3]
```

#### `zip()`

The zip method merges together the values of the given array with the values of the original collection at the corresponding index:

```js
const collection = collect(['Chair', 'Desk']);

const zipped = collection.zip([100, 200]);

zipped.all();

// [['Chair', 100], ['Desk', 200]]
```

### Contribute

PRs are welcomed to this project, and help is needed in order to keep up with the changes of Laravel Collections. If you want to improve the collection library, add functionality or improve the docs please feel free to submit a PR.

### License

MIT © [Daniel Eckermann](https://danieleckermann.com)