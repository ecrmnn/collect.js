# <img src="https://raw.githubusercontent.com/ecrmnn/collect.js/master/collectjs.jpg" alt="collect.js">

> Convenient and dependency free wrapper for working with arrays and objects

[![Travis](https://img.shields.io/travis/ecrmnn/collect.js/master.svg?style=flat-square)](https://travis-ci.org/ecrmnn/collect.js/builds)
[![npm version](https://img.shields.io/npm/v/collect.js.svg?style=flat-square)](http://badge.fury.io/js/collect.js)
[![npm downloads](https://img.shields.io/npm/dm/collect.js.svg?style=flat-square)](http://badge.fury.io/js/collect.js)
[![npm license](https://img.shields.io/npm/l/collect.js.svg?style=flat-square)](http://badge.fury.io/js/collect.js)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![dependencies](https://img.shields.io/badge/dependencies-none-brightgreen.svg?style=flat-square)](https://github.com/ecrmnn/collect.js/blob/master/package.json)
[![eslint](https://img.shields.io/badge/code_style-airbnb-blue.svg?style=flat-square)](https://github.com/airbnb/javascript)

### Installation
```bash
npm install collect.js --save
```

### Tip
Using Laravel as your backend? Collect.js offers an (almost) identical api to [Laravel Collections](https://laravel.com/docs/5.5/collections) 5.5. [See differences](#strictness-and-comparisons).

### Usage
All available methods
- [all](#all)
- [average](#average)
- [chunk](#chunk)
- [collapse](#collapse)
- [combine](#combine)
- [concat](#concat)
- [contains](#contains)
- [count](#count)
- [crossJoin](#crossjoin)
- [dd](#dd)
- [diff](#diff)
- [diffKeys](#diffkeys)
- [dump](#dump)
- [each](#each)
- [every](#every)
- [except](#except)
- [filter](#filter)
- [first](#first)
- [flatMap](#flatmap)
- [flatten](#flatten)
- [flip](#flip)
- [forget](#forget)
- [forPage](#forpage)
- [get](#get)
- [groupBy](#groupby)
- [has](#has)
- [implode](#implode)
- [intersect](#intersect)
- [intersectByKeys](#intersectbykeys)
- [isEmpty](#isempty)
- [isNotEmpty](#isnotempty)
- [keyBy](#keyby)
- [keys](#keys)
- [last](#last)
- [macro](#macro)
- [map](#map)
- [mapInto](#mapinto)
- [mapToGroups](#maptogroups)
- [mapWithKeys](#mapwithkeys)
- [max](#max)
- [median](#median)
- [merge](#merge)
- [min](#min)
- [mode](#mode)
- [nth](#nth)
- [only](#only)
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
- [reverse](#reverse)
- [search](#search)
- [shift](#shift)
- [shuffle](#shuffle)
- [slice](#slice)
- [sort](#sort)
- [sortBy](#sortby)
- [sortByDesc](#sortbydesc)
- [splice](#splice)
- [split](#split)
- [sum](#sum)
- [take](#take)
- [tap](#tap)
- [times](#times)
- [toArray](#toarray)
- [toJson](#tojson)
- [transform](#transform)
- [union](#union)
- [unique](#unique)
- [unless](#unless)
- [unwrap](#unwrap)
- [values](#values)
- [when](#when)
- [where](#where)
- [whereIn](#wherein)
- [whereNotIn](#wherenotin)
- [wrap](#wrap)
- [zip](#zip)

### Strictness and comparisons
All comparisons in ``collect.js`` are done using strict equality. Using loose equality comparisons are generally frowned upon in JavaScript. Laravel only performs "loose" comparisons by default and offer several "strict" comparison methods. These methods have not been implemented in ``collect.js`` because all methods are strict by default. 

#####  Methods that have not been implemented:
- ~~``containsStrict``~~ use ``contains()``
- ~~``uniqueStrict``~~ use ``unique()``
- ~~``whereStrict``~~ use ``where()``
- ~~``whereInStrict``~~ use ``whereIn()``
- ~~``whereNotInStrict``~~ use ``whereNotIn()``

#### ``all()``
The all method returns the underlying array represented by the collection:
```js
collect([1, 2, 3]).all();

//=> [1, 2, 3]
```

#### ``average()``
Alias for the [``avg()``](#avg) method

#### ``avg()``
The avg method returns the average of all items in the collection:
```js
collect([1, 3, 3, 7]).avg();

//=> 3.5
```

If the collection contains nested arrays or objects, you should pass a key to use for determining which values to calculate the average:
```js
const collection = collect([{
  name: 'JavaScript: The Good Parts', pages: 176
}, {
  name: 'JavaScript: The Definitive Guide', pages: 1096
}]);

collection.avg('pages');

//=> 636
```

#### ``chunk()``
The chunk method breaks the collection into multiple, smaller collections of a given size:
```js
const collection = collect([1, 2, 3, 4, 5, 6, 7]);

const chunks = collection.chunk(4);

chunks.all();

//=> [[1, 2, 3, 4], [5, 6, 7]]
```
#### ``collapse()``
The collapse method collapses a collection of arrays into a single, flat collection:
```js
const collection = collect([[1], [{}, 5, {}], ['xoxo']]);

const collapsed = collection.collapse();

collapsed.all();

//=> [1, {}, 5, {}, 'xoxo']
```

```js
const collection = collect([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

const collapsed = collection.collapse();

collapsed.all();

//=> [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
#### ``combine()``
The combine method combines the keys of the collection with the values of another array or collection:
```js
const collection = collect(['name', 'number']);

const combine = collection.combine(['Steven Gerrard', 8]);

combine.all();

//=> {
//=>   name: 'Steven Gerrard',
//=>   number: 8
//=> }
```

#### ``concat()``
The concat method is used to merge two or more collections/arrays/objects:

*You can also ``concat()`` an array of objects, or a multidimensional array*

```js
const collection = collect([1, 2, 3]);

collection
  .concat(['a', 'b', 'c'])
  .concat({
    name: 'Steven Gerrard',
    number: 8
  });

collection.all();

//=> [1, 2, 3, 'a', 'b', 'c', 'Steven Gerrard', 8]
```

#### ``contains()``
The contains method determines whether the collection contains a given item:
```js
const collection = collect({
  name: 'Steven Gerrard',
  number: 8
});

collection.contains('name');
//=> true

collection.contains('age');
//=> false
```
You may also work with arrays
```js
const collection = collect([1, 2, 3]);

collection.contains(3);
//=> true
```
You may also pass a key / value pair to the contains method, which will determine if the given pair exists in the collection:
```js
const collection = collect({
  name: 'Steven Gerrard',
  number: 8
});

collection.contains('name', 'Steve Jobs');
//=> false
```

Finally, you may also pass a callback to the contains method to perform your own truth test:
```js
const collection = collect([1, 2, 3, 4, 5]);

collection.contains(function (value, key) {
  return value > 5;
});

//=> false
```

#### ``count()``
The count method returns the total number of items in the collection:
```js
const collection = collect([1, 2, 3, 4]);

collection.count();

//=> 4
```

#### ``crossJoin()``
The crossJoin method cross joins the collection with the given array or collection, returning all possible permutations:
```js
const collection = collect([1, 2]);

collection.crossJoin(['a', 'b']);

collection.all();

//=> [
//=>   [1, 'a'],
//=>   [1, 'b'],
//=>   [2, 'a'],
//=>   [2, 'b'],
//=> ]
```

#### ``dd()``
The dd method will console.log the collection and exit the current process:
```js
const collection = collect([1, 2, 3]).dd();

//=> [1, 2, 3]
//=> (Exits node.js process)
```

#### ``diff()``
The diff method compares the collection against another collection or a plain array based on its values. This method will return the values in the original collection that are not present in the given collection:
```js
const collection = collect([1, 2, 3, 4, 5]);

const diff = collection.diff([1, 2, 3, 9]);

diff.all();

//=> [4, 5]
```

#### ``diffKeys()``
The diffKeys method compares the collection against another collection or a plain object based on its keys. This method will return the key / value pairs in the original collection that are not present in the given collection:
```js
const collection = collect({
  a: 'a',
  b: 'b',
  c: 'c',
  d: 'd'
});

const diff = collection.diffKeys({
  b: 'b',
  d: 'd'
});

diff.all();

//=> {a: 'a', c: 'c'}
```

#### ``dump()``
The dump method outputs the results at that moment and then continues processing:
```js
collect([1, 2, 3, 4])
  .dump()
  .map(item => item * 2)
  .dump();

//=> [1, 2, 3, 4]
//=> [2, 4, 6, 8]
```

#### ``each()``
The each method iterates over the items in the collection and passes each item to a callback:
```js
let sum = 0;

const collection = collect([1, 3, 3, 7]);

collection.each(function (item) {
  sum += item;
});

//=> console.log(sum);
//=> 14
```

If you would like to stop iterating through the items, you may return false from your callback:
```js
let sum = 0;

const collection = collect([1, 3, 3, 7]);

collection.each(function (item) {
  if (item > 3) {
    return false;
  }

  sum += item;
});

//=> console.log(sum);
//=> 7
```

#### ``every()``
The every method may be used to verify that all elements of a collection pass a given truth test:
```js
collect([1, 2, 3, 4]).every(function (value, key) {
  return value > 2;
});

//=> false
```

#### ``except()``
The except method returns all items in the collection except for those with the specified keys:
```js
const collection = collect({
  product_id: 1,
  price: 100,
  discount: false,
});

const filtered = collection.except(['price', 'discount']);

filtered.all();

//=> {product_id: 1}
```

```js
collect([1, 2, 3, 4]).except([2, 12]).all();

//=> [1, 3, 4]
```

> For the inverse of ``except``, see the ``only`` method.

#### ``filter()``
The filter method filters the collection using the given callback, keeping only those items that pass a given truth test:
```js
const collection = collect([1, 2, 3, 4]);

const filtered = collection.filter(function (value, key) {
    return value > 2;
});

filtered.all();

//=> [3, 4]
```

If no callback is supplied, all entries of the collection that are equivalent to `false` will be removed:

```js
const collection = collect([0, 1, 2, null, 3, 4, undefined, 5, 6, 7, [], 8, 9, {}, 10]);

const filtered = collection.filter();

filtered.all();

//=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

> For the inverse of ``filter``, see the ``reject`` method.

#### ``first()``
The first method returns the first element in the collection that passes a given truth test:
```js
collect([1, 2, 3, 4]).first(function (item) {
  return item > 1;
});

//=> 2
```
You may also call the first method with no arguments to get the first element in the collection. If the collection is empty, null is returned:
```js
collect([1, 2, 3, 4]).first();

//=> 1
```

#### ``flatMap()``
The flatMap method iterates through the collection and passes each value to the given callback. The callback is free to modify the item and return it, thus forming a new collection of modified items. Then, the array is flattened by a level:
```js
const collection = collect([
  { name: 'Robbie Fowler' },
  { nickname: 'The God' },
  { position: 'Striker' },
]);

const flatMapped = collection.flatMap(function (values) {
  return values.map(function (value) {
    return value.toUpperCase();
  });
});

flatMapped.all();

//=> {
//=>   name: 'ROBBIE FOWLER',
//=>   nickname: 'THE GOD',
//=>   position: 'STRIKER'
//=> }
```

#### ``flatten()``
The flatten method flattens a multi-dimensional collection into a single dimension:
```js
const collection = collect({
  club: 'Liverpool',
  players: ['Sturridge', 'Firmino', 'Coutinho']
});

const flattened = collection.flatten();

flattened.all();

//=> ['Liverpool', 'Sturridge', 'Firmino', 'Coutinho'];
```
You may optionally pass the function a "depth" argument:
```js
const collection = collect({
  Apple: [{
    name: 'iPhone 6S',
    brand: 'Apple'
  }],
  Samsung: [{
    name: 'Galaxy S7',
    brand: 'Samsung'
  }]
});

const flattened = collection.flatten(1);

flattened.all();

//=> [
//=>   {name: 'iPhone 6S', brand: 'Apple'},
//=>   {name: 'Galaxy S7', brand: 'Samsung'}
//=> ]
```

In this example, calling flatten without providing the depth would have also flattened the nested arrays, resulting in ``['iPhone 6S', 'Apple', 'Galaxy S7', 'Samsung']``. Providing a depth allows you to restrict the levels of nested arrays that will be flattened.

#### ``flip()``
The flip method swaps the collection's keys with their corresponding values:
```js
const collection = collect({
  name: 'Steven Gerrard',
  number: 8
});

const flipped = collection.flip();

flipped.all();

//=> {
//=>   'Steven Gerrard': 'name',
//=>   '8': 'number'
//=> }
```

#### ``forget()``
The forget method removes an item from the collection by its key:
```js
const collection = collect({
  name: 'Steven Gerrard',
  number: 8
});

collection.forget('number');

collection.all();

//=> {
//=>   name: 'Steven Gerrard'
//=> }
```
> Unlike most other collection methods, forget does not return a new modified collection; it modifies the collection it is called on.

#### ``forPage()``
The forPage method returns a new collection containing the items that would be present on a given page number. The method accepts the page number as its first argument and the number of items to show per page as its second argument:
```js
const collection = collect([1, 2, 3, 4, 5, 6, 7, 8, 9]);

const forPage = collection.forPage(2, 3);

forPage.all();

//=> [4, 5, 6]
```

#### ``get()``
The get method returns the item at a given key. If the key does not exist, ``null`` is returned:
```js
const collection = collect({
  firstname: 'Chuck',
  lastname: 'Norris'
});

collection.get('lastname');

//=> Norris

collection.get('middlename');
//=> null
```

You may optionally pass a default value as the second argument:
```js
const collection = collect({
  firstname: 'Chuck',
  lastname: 'Norris'
});

collection.get('middlename', 'default-value');
//=> default-value
```
You may even pass a callback as the default value. The result of the callback will be returned if the specified key does not exist:

```js
const collection = collect({
  firstname: 'Chuck',
  lastname: 'Norris'
});

collection.get('middlename', function () {
  return 'default-value';
});

//=> default-value
```
#### ``groupBy()``
The groupBy method groups the collection's items by a given key:
```js
const collection = collect([
  {
    product: 'Chair',
    manufacturer: 'IKEA'
  },
  {
    product: 'Desk',
    manufacturer: 'IKEA'
  },
  {
    product: 'Chair',
    manufacturer: 'Herman Miller'
  }
]);

const grouped = collection.groupBy('manufacturer');

grouped.all();

//=> {
//=>   IKEA: [
//=>     {
//=>       id: 100,
//=>       product: 'Chair',
//=>       manufacturer: 'IKEA',
//=>       price: '1490 NOK'
//=>     },
//=>     {
//=>       id: 150,
//=>       product: 'Desk',
//=>       manufacturer: 'IKEA',
//=>       price: '900 NOK'
//=>     }
//=>   ],
//=>   'Herman Miller': [
//=>     {
//=>       id: 200,
//=>       product: 'Chair',
//=>       manufacturer: 'Herman Miller',
//=>       price: '9990 NOK'
//=>     }
//=>   ]
//=> }
```

In addition to passing a string key, you may also pass a callback. The callback should return the value you wish to key the group by:

```js
const collection = collect([
  {
    product: 'Chair',
    manufacturer: 'IKEA'
  },
  {
    product: 'Desk',
    manufacturer: 'IKEA'
  },
  {
    product: 'Chair',
    manufacturer: 'Herman Miller'
  }
]);

const grouped = collection.groupBy(function (item, key) {
  return item.manufacturer.substring(0, 3);
});

grouped.all();

//=> {
//=>   IKE: [
//=>     {
//=>       id: 100,
//=>       product: 'Chair',
//=>       manufacturer: 'IKEA',
//=>       price: '1490 NOK'
//=>     },
//=>     {
//=>       id: 150,
//=>       product: 'Desk',
//=>       manufacturer: 'IKEA',
//=>       price: '900 NOK'
//=>     }
//=>   ],
//=>   Her: [
//=>     {
//=>       id: 200,
//=>       product: 'Chair',
//=>       manufacturer: 'Herman Miller',
//=>       price: '9990 NOK'
//=>     }
//=>   ]
//=> }
```

#### ``has()``
The has method determines if a given key exists in the collection:
```js
const collection = collect({
  animal: 'unicorn',
  ability: 'magical'
});

collection.has('ability');

//=> true
```
An array of objects also works:
```js
const collection = collect([{
  animal: 'unicorn',
  ability: 'magical'
}, {
  anmial: 'pig',
  ability: 'filthy'
}]);

collection.has('ability');

//=> true
```

#### ``implode()``
The implode method joins the items in a collection. Its arguments depend on the type of items in the collection. If the collection contains arrays or objects, you should pass the key of the attributes you wish to join, and the "glue" string you wish to place between the values:
```js
const collection = collect([{
    product: 'Chair',
    manufacturer: 'IKEA',
  }, {
    product: 'Desk',
    manufacturer: 'IKEA',
  }, {
    product: 'Chair',
    manufacturer: 'Herman Miller',
  }]);

collection.implode('product', ',');

//=> Chair, Desk, Chair
```
If the collection contains simple strings or numeric values, simply pass the "glue" as the only argument to the method:
```js
collect([1, 2, 3, 4, 5]).implode('-');

//=> 1-2-3-4-5
```

#### ``intersect()``
The intersect method removes any values from the original collection that are not present in the given ``array`` or ``collection``. The resulting collection will preserve the original collection's keys:
```js
const collection = collect([1, 2, 3, 4, 5]);

intersect = collection.intersect([1, 2, 3, 9]);

intersect.all();

//=> [1, 2, 3]
```

#### ``intersectByKeys()``
The intersectByKeys method removes any keys from the original collection that are not present in the given ``array`` or collection:
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

// ['type' => 'screen', 'year' => 2009]
```

```js
const firstCollection = collect([1, 2, 3, 4, 5]);
const secondCollection = collect([1, 2, 3, 9]);

intersect = firstCollection.intersect(secondCollection);

intersect.all();

//=> [1, 2, 3]
```

#### ``isEmpty()``
The isEmpty method returns true if the collection is empty; otherwise, false is returned:
```js
collect([]).isEmpty();

//=>  true
```

#### ``isNotEmpty()``
The isNotEmpty method returns true if the collection is not empty; otherwise, false is returned:
```js
collect([1, 2, 3]).isNotEmpty();

//=>  true
```

#### ``keyBy()``
The keyBy method keys the collection by the given key. If multiple items have the same key, only the last one will appear in the new collection:
```js
const collection = collect([
  {
    product: 'Chair',
    manufacturer: 'IKEA'
  }, {
    product: 'Desk',
    manufacturer: 'IKEA'
  }, {
    product: 'Chair',
    manufacturer: 'Herman Miller'
  }
]);

const keyed = collection.keyBy('manufacturer');

keyed.all();

//=> {
//=>   IKEA: {
//=>     product: 'Desk',
//=>     manufacturer: 'IKEA'
//=>   },
//=>   'Herman Miller': {
//=>     product: 'Chair',
//=>     manufacturer: 'Herman Miller'
//=>   }
//=> }
```

You may also pass a callback to the method. The callback should return the value to key the collection by:
```js
const keyedUpperCase = collection.keyBy(function (item) {
  return item['manufacturer'].toUpperCase();
});

keyedUpperCase.all();

//=> {
//=>   IKEA: {
//=>     product: 'Desk',
//=>     manufacturer: 'IKEA'
//=>   },
//=>   'HERMAN MILLER': {
//=>     product: 'Chair',
//=>     manufacturer: 'Herman Miller'
//=>   }
//=> }
```

#### ``keys()``
The keys method returns all of the collection's keys:
```js
const collection = collect([{
  name: 'Steven Gerrard',
  number: 8
}, {
  club: 'Liverpool',
  nickname: 'The Reds'
}]);

keys = collection.keys();

//=> ['name', 'number', 'club', 'nickname']
```

#### ``last()``
The last method returns the last element in the collection that passes a given truth test:
```js
const collection = collect([1, 2, 3]);

const last = collection.last(function (item) {
  return item > 1;
});

//=> 3
```
You may also call the last method with no arguments to get the last element in the collection. If the collection is empty, null is returned:
```js
collect([1, 2, 3, 4]).last();

//=> 4
```

#### ``macro()``
The macro method lets you register custom methods
```js
collect().macro('uppercase', function () {
  return this.map(function (item) {
    return item.toUpperCase();
  });
});

const collection = collect(['a', 'b', 'c']);

collection.uppercase();

collection.all();

//=> ['A', 'B', 'C']
```
> Note that the `macro` method returns `undefined`, and therefore it is not possible to use it within a chain of methods.

#### ``map()``
The map method iterates through the collection and passes each value to the given callback. The callback is free to modify the item and return it, thus forming a new collection of modified items:
```js
const collection = collect([1, 2, 3, 4, 5]);

const multiplied = collection.map(function (item) {
  return item * 2;
});

multiplied.all();

//=> [2, 4, 6, 8, 10]
```

> Like most other collection methods, ``map`` returns a new collection instance; it does not modify the collection it is called on. If you want to transform the original collection, use the ``transform`` method.

#### ``mapInto()``
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

//=> [
//=>   Player { name: 'Roberto Firmino' },
//=>   Player { name: 'Sadio Mané' },
//=> ]
```

#### ``mapToGroups()``
The mapToGroups method iterates through the collection and passes each value to the given callback:
```js
const collection = collect([
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
  { id: 3, name: 'C' },
  { id: 4, name: 'B' },
]);

const groups = collection.mapToGroups(function (item, key) {
  return [item.name, item.id];
});

//=> {
//=>   A: [1],
//=>   B: [2, 4],
//=>   C: [3],
//=> }
```

#### ``mapWithKeys()``
The mapWithKeys method iterates through the collection and passes each value to the given callback. The callback should return an array where the first element represents the key and the second element represents the value pair:
```js
const collection = collect([{
    'name': 'John',
    'department': 'Sales',
    'email': 'john@example.com'
  }, {
    'name': 'Jane',
    'department': 'Marketing',
    'email': 'jane@example.com'
  }]);

const keyed = collection.mapWithKeys(function (item) {
  return [item.email, item.name];
});

keyed.all();

//=> {
//=>   'john@example.com': 'John',
//=>   'jane@example.com': 'Jane',
//=> }
```

#### ``max()``
The max method returns the maximum value of a given key:
```js
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

//=> 12
```
```js
collect([-1, -2345, 12, 11, 3]).max();

//=> 12
```

#### ``median()``
The median method returns the median value of a given key:
```js
collect([1, 3, 3, 6, 7, 8, 9]).median();

//=> 6
```

```js
collect([{
  foo: 1
}, {
  foo: 1
}, {
  foo: 2
}, {
  foo: 4
}]).median('foo');

//=> 1.5
```

#### ``merge()``
The merge method merges the given object into the original collection. If a key in the given object matches a key in the original collection, the given objects value will overwrite the value in the original collection:
```js
const collection = collect({
  id: 1,
  price: 29
});

const merged = collection.merge({
  price: 400,
  discount: false
});

merged.all();

//=> {id: 1, price: 400, discount: false}
```
If our collection is an array, the values will be appended to the end of the collection:
```js
const collection = collect(['Unicorn', 'Rainbow']);

const merged = collection.merge(['Sunshine', 'Rainbow']);

merged.all();

//=> ['Unicorn', 'Rainbow', 'Sunshine', 'Rainbow']
```

#### ``min()``
The min method returns the minimum value of a given key:
```js
const collection = collect[{
  worth: 100
}, {
  worth: 900
}, {
  worth: 79
}]);

collection.min('worth');

//=> 79
```
```js
collect([1, 2, 3, 4, 5]).min();

//=> 1
```

#### ``mode()``
The mode method returns the mode value of a given key:
```js
collect([1, 3, 3, 6, 7, 8, 9]).mode();

//=> [3]
```

```js
collect([{
  foo: 1
}, {
  foo: 1
}, {
  foo: 2
}, {
  foo: 4
}]).mode('foo');

//=> [1]
```

#### ``nth()``
The nth method creates a new collection consisting of every n-th element:
```js
const collection = collect(['a', 'b', 'c', 'd', 'e', 'f']);

const nth = collection.nth(4);

nth.all();

//=> ['a', 'e']
```

#### ``only()``
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

//=> {name: 'John Doe', email: 'john@doe.com'}
```

```js
collect([1, 2, 3, 4]).only([2, 12]).all();

//=> [2]
```
> For the inverse of ``only``, see the ``except`` method.

#### ``partition()``
The partition method may be combined with destructuring to separate elements that pass a given truth test from those that do not:
```js
const collection = collect([1, 2, 3, 4, 5, 6]);

const [underThree, underThree] = collection.partition(function (i) {
  return i < 3;
});
```

#### ``pipe()``
The pipe method passes the collection to the given callback and returns the result:
```js
const collection = collect([1, 2, 3]);

const piped = collection.pipe(function (collection) {
  return collection.sum();
});

//=> 6
```

#### ``pluck()``
The pluck method retrieves all of the values for a given key:
```js
const collection = collect([{
  id: 78,
  name: 'Aeron'
}, {
  id: 79,
  name: 'Embody'
}]);

const plucked = collection.pluck('name');

plucked.all();

//=> ['Aeron', 'Embody']
```

You may also specify how you wish the resulting collection to be keyed:
```js
const collection = collect([{
  id: 78,
  name: 'Aeron'
}, {
  id: 79,
  name: 'Embody'
}]);

const plucked = collection.pluck('name', 'id');

plucked.all();

//=> {
//=>   78: 'Aeron',
//=>   79: 'Embody'
//=> }
```

#### ``pop()``
The pop method removes and returns the last item from the collection:
```js
const collection = collect([1, 2, 3, 4, 5]);

collection.pop();

//=> 5

collection.all();

// => [1, 2, 3, 4]
```

#### ``prepend()``
The prepend method adds an item to the beginning of the collection:
```js
const collection = collect([1, 2, 3, 4, 5]);

collection.prepend(0);

collection.all();

//=> [0, 1, 2, 3, 4, 5]
```

You may also pass a second argument to set the key of the prepended item:

> Pro tip: Order of properties in objects is not guaranteed in JavaScript; When calling prepend with a key, the Collection uses the underlying ``put`` method behind the scenes. This is only supported so that collect.js have the same api as Laravel Collections.

```js
const collection = collect({
  product: 'iPhone 6s'
});

collection.prepend('Apple', 'brand');

collection.all():

//=> {
//=>   brand: 'Apple',
//=>   product: 'iPhone 6s'
//=> }
```

#### ``pull()``
The pull method removes and returns an item from the collection by its key:
```js
const collection = collect({
  firstname: 'Michael',
  lastname: 'Cera'
});

collection.pull('lastname');

//=> Cera

collection.all();

//=> {firstname: 'Michael'}
```

#### ``push()``
The push method appends an item to the end of the collection:
```js
const collection = collect([1, 2, 3, 4]);

collection.push(5);

collection.all();

//=> [1, 2, 3, 4, 5]
```

#### ``put()``
The put method sets the given key and value in the collection:
```js
const collection = collect(['JavaScript', 'Python']);

collection.put('Ruby');

collection.all();

//=> ['JavaScript', 'Python', 'Ruby']
```

#### ``random()``
The random method returns a random item from the collection:
```js
const collection = collect([1, 2, 3, 4, 5]);

collection.random();

//=> 4 (retrieved randomly)
```

You may optionally pass an integer to random to specify how many items you would like to randomly retrieve. If that integer is more than 1, a collection of items is returned:
```js
const random = collection.random(3);

//=> [5, 3, 4] (retrieved randomly)
```

#### ``reduce()``
The reduce method reduces the collection to a single value, passing the result of each iteration into the subsequent iteration:
```js
const collection = collect([1, 2, 3]);

const total = collection.reduce(function (carry, item) {
  return carry + item;
});

//=> 6
```

The value for ``carry`` on the first iteration is null; however, you may specify its initial value by passing a second argument to reduce:
```js
const total = collection.reduce(function (carry, item) {
  return carry + item;
}, 4);

//=> 10
```

#### ``reject()``
The reject method filters the collection using the given callback. The callback should return true if the item should be removed from the resulting collection:
```js
const collection = collect([1, 2, 3, 4]);

const filtered = collection.reject(function (value) {
  return value > 2;
});

//=> [1, 2]
```

> For the inverse of the ``reject`` method, see the ``filter`` method.

#### ``reverse()``
The reverse method reverses the order of the collection's items:
```js
const collection = collect([1, 2, 3, 4, 5]);

const reversed = collection.reverse();

reversed.all();

//=> [5, 4, 3, 2, 1]
```

#### ``search()``
The search method searches the collection for the given value and returns its key if found. If the item is not found, false is returned.
```js
const collection = collect([2, 4, 6, 8]);

collection.search(4);

//=> 1
```

The search is done using a "loose" comparison, meaning a string with an integer value will be considered equal to an integer of the same value. To use strict comparison, pass true as the second argument to the method:
```js
collection.search('4', true);

//=> false
```

Alternatively, you may pass in your own callback to search for the first item that passes your truth test:
```js
collection.search(function (item, key) {
  return item > 5;
});

//=> 2
```

#### ``shift()``
The shift method removes and returns the first item from the collection:
```js
const collection = collect([1, 2, 3, 4, 5]);

collection.shift();

//=> 1

collection.all();

//=> [2, 3, 4, 5]
```

#### ``shuffle()``
The shuffle method randomly shuffles the items in the collection:
```js
const collection = collect([1, 2, 3, 4, 5]);

const shuffled = collection.shuffle();

shuffled.all();

//=> [3, 5, 1, 2, 4] (generated randomly)
```

#### ``slice()``
The slice method returns a slice of the collection starting at the given index:
```js
const collection = collect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

const slice = collection.slice(4);

slice.all();

//=> [5, 6, 7, 8, 9, 10]
```

If you would like to limit the size of the returned slice, pass the desired size as the second argument to the method:

```js
const slice = collection.slice(4, 2);

slice.all();

//=> [5, 6]
```

#### ``sort()``
The sort method sorts the collection:
```js
const collection = collect([5, 3, 1, 2, 4]);

const sorted = collection.sort();

sorted.all();

//=> [1, 2, 3, 4, 5]
```

> If your sorting needs are more advanced, you may pass a callback to sort with your own algorithm.

```js
const collection = collect([5, 3, 1, 2, 4]);

const sorted = collection.sort(function (a, b) {
  return b - a;
});

sorted.all();

//=> [5, 4, 3, 2, 1]
```

> If you need to sort a collection of nested arrays or objects, see the ``sortBy`` and ``sortByDesc`` methods.

#### ``sortBy()``
The sortBy method sorts the collection by the given key. The sorted collection keeps the original array keys, so in this example we'll use the values method to reset the keys to consecutively numbered indexes:
```js
const collection = collect([
  {name: 'Desk', price: 200},
  {name: 'Chair', price: 100},
  {name: 'Bookcase', price: 150},
]);

const sorted = collection.sortBy('price');

sorted.all();

//=> [
//=>   {name: 'Chair', price: 100},
//=>   {name: 'Bookcase', price: 150},
//=>   {name: 'Desk', price: 200},
//=> ]
```

You can also pass your own callback to determine how to sort the collection values:
```js
const collection = collect([
  {name: 'Desk', colors: ['Black', 'Mahogany']},
  {name: 'Chair', colors: ['Black']},
  {name: 'Bookcase', colors: ['Red', 'Beige', 'Brown']},
]);

const sorted = collection.sortBy(function (product, key) {
  return product['colors'].length;
});

sorted.all();

//=> [
//=>   {name: 'Chair', colors: ['Black']},
//=>   {name: 'Desk', colors: ['Black', 'Mahogany']},
//=>   {name: 'Bookcase', colors: ['Red', 'Beige', 'Brown']},
//=> ]
```

#### ``sortByDesc()``
This method has the same signature as the ``sortBy`` method, but will sort the collection in the opposite order.

#### ``splice()``
The splice method removes and returns a slice of items starting at the specified index:
```js
const collection = collect([1, 2, 3, 4, 5]);

const chunk = collection.splice(2);

chunk.all();

//=> [3, 4, 5]

collection.all();

//=> [1, 2]
```
You may pass a second argument to limit the size of the resulting chunk:
```js
const collection = collect([1, 2, 3, 4, 5]);

const chunk = collection.splice(2, 1);

chunk.all();

//=> [3]

collection.all();

//=> [1, 2, 4, 5]
```

#### ``split()``
The split method breaks a collection into the given number of groups:
```js
const collection = collect([1, 2, 3, 4, 5]);

const groups = collection.split(3);

//=> [[1, 2], [3, 4], [5]]
```

In addition, you can pass a third argument containing the new items to replace the items removed from the collection:
```js
const collection = collect([1, 2, 3, 4, 5]);

const chunk = collection.splice(2, 1, [10, 11]);

chunk.all()

//=> [3]

collection.all();

//=> [1, 2, 10, 11, 4, 5]
```

#### ``sum()``
The sum method returns the sum of all items in the collection:
```js
collect([1, 2, 3]).sum();

//=> 6
```

If the collection contains nested arrays or objects, you should pass a key to use for determining which values to sum:
```js
const collection = collect([
  {name: 'JavaScript: The Good Parts', pages: 176},
  {name: 'JavaScript: The Definitive Guide', pages: 1096},
]);

collection.sum('pages');

//=> 1272
```

In addition, you may pass your own callback to determine which values of the collection to sum:
```js
const collection = collect([
  {name: 'Desk', colors: ['Black', 'Mahogany']},
  {name: 'Chair', colors: ['Black']},
  {name: 'Bookcase', colors: ['Red', 'Beige', 'Brown']},
]);

const total = collection.sum(function (product) {
  return product.colors.length;
});

//=> 6
```

#### ``take()``
The take method returns a new collection with the specified number of items:
You may also pass a negative integer to take the specified amount of items from the end of the collection:
```js
const collection = collect([0, 1, 2, 3, 4, 5]);

const chunk = collection.take(3);

chunk.all();

//=> [0, 1, 2]
```

#### ``tap()``
The tap method passes the collection to the given callback, allowing you to "tap" into the collection at a specific point and do something with the items while not affecting the collection itself:
```js
const collect([2, 4, 3, 1, 5])
  .sort()
  .tap(function (collection) {
    console.log(collection.all());

    //=> [1, 2, 3, 4, 5]
  })
  .shift();

//=> 1
```

#### ``times()``
The times method creates a new collection by invoking the callback a given amount of times:
```js
const collection = collect().times(10, function (number) {
  return number * 9;
});

collection.all();

//=> [9, 18, 27, 36, 45, 54, 63, 72, 81, 90]
```

#### ``toArray()``
The toArray method converts the collection into a plain array.
If the collection is an object, an array containing the values will be returned.
```js
const collection = collect([1, 2, 3, 'b', 'c']);

collection.toArray();

//=> [1, 2, 3, 'b', 'c']
```

```js
const collection = collect({
  name: 'Elon Musk',
  companies: [
    'Tesla',
    'Space X',
    'SolarCity'
  ]
});

collection.toArray();

//=> ['Elon Musk', ['Tesla', 'Space X', 'SolarCity']]
```

#### ``toJson()``
The toJson method converts the collection into JSON string:
```js
const collection = collect({
  id: 384,
  name: 'Rayquaza',
  gender: 'NA'
});

const json = collection.toJson();

//=> {"id": 384, "name": "Rayquaza", "gender": "NA"}
```

#### ``transform()``
The transform method iterates over the collection and calls the given callback with each item in the collection. The items in the collection will be replaced by the values returned by the callback:
```js
const collection = collect([1, 2, 3, 4, 5]);

collection.transform(function (item, key) {
  return item * 2;
});

collection.all();

//=> [2, 4, 6, 8, 10]
```

> Unlike most other collection methods, ``transform`` modifies the collection itself. If you wish to create a new collection instead, use the ``map`` method.

#### ``union()``
The union method adds the given array to the collection. If the given array contains keys that are already in the original collection, the original collection's values will be preferred:
```js
const collection = collect({
  a: 'A',
  b: 'B'
});

const union = collection.union({
  a: 'AAA',
  c: 'CCC',
  b: 'BBB'
});

union.all();

//=> {
//=>   a: 'A',
//=>   b: 'B',
//=>   c: 'CCC'
//=> }
```

#### ``unique()``
The unique method returns all of the unique items in the collection:
```js
const collection = collect([1, 1, 1, 2, 3, 3]);

const unique = collection.unique();

unique.all();

//=> [1, 2, 3]
```

When dealing with an array of objects, you may specify the key used to determine uniqueness:
```js
const collection = collect([
  {name: 'iPhone 6', brand: 'Apple', type: 'phone'},
  {name: 'iPhone 5', brand: 'Apple', type: 'phone'},
  {name: 'Apple Watch', brand: 'Apple', type: 'watch'},
  {name: 'Galaxy S6', brand: 'Samsung', type: 'phone'},
  {name: 'Galaxy Gear', brand: 'Samsung', type: 'watch'}
]);

const unique = collection.unique('brand');

unique.all();

//=> [
//=>   {name: 'iPhone 6', brand: 'Apple', type: 'phone'},
//=>   {name: 'Galaxy S6', brand: 'Samsung', type: 'phone'},
//=> ]
```

You may also pass your own callback to determine item uniqueness:
```js
const collection = collect([
  {name: 'iPhone 6', brand: 'Apple', type: 'phone'},
  {name: 'iPhone 5', brand: 'Apple', type: 'phone'},
  {name: 'Apple Watch', brand: 'Apple', type: 'watch'},
  {name: 'Galaxy S6', brand: 'Samsung', type: 'phone'},
  {name: 'Galaxy Gear', brand: 'Samsung', type: 'watch'}
]);

const unique = collection.unique(function (item) {
  return item.brand + item.type;
});

unique.all();

//=> [
//=>   {name: 'iPhone 6', brand: 'Apple', type: 'phone'},
//=>   {name: 'Apple Watch', brand: 'Apple', type: 'watch'},
//=>   {name: 'Galaxy S6', brand: 'Samsung', type: 'phone'},
//=>   {name: 'Galaxy Gear', brand: 'Samsung', type: 'watch'},
//=> ]
```

#### ``unless()``
The unless method will execute the given callback when the first argument given to the method evaluates to false:
```js
const collection = collect([1, 2, 3]);

collection.unless(false, function (collection) {
  return collection.push(4);
});

collection.all();

//=> [1, 2, 3, 4]
```

#### ``unwrap()``
The unwrap method will unwrap the given collection:
```js
const collection = collect([1, 2, 3]);

collect().unwrap(collection);

//=> [1, 2, 3]
```

#### ``values()``
The values method returns a new collection with the keys reset to consecutive integers:
```js
const collection = collect({a: 'xoxo', b: 'abab', 'c': '1337', 1337: 12});

const values = collection.values();

values.all();

//=> [12, 'xoxo', 'abab', '1337']
```

#### ``when()``
The when method will execute the given callback when the first argument given to the method evaluates to true:
```js
const collection = collect([1, 2, 3]);

collection.when(true, function (collection) {
  return collection.push(4);
});

collection.all();

//=> [1, 2, 3, 4]
```

#### ``where()``
The where method filters the collection by a given key / value pair:
```js
const collection = collect([
  {product: 'Desk', price: 200},
  {product: 'Chair', price: 100},
  {product: 'Bookcase', price: 150},
  {product: 'Door', price: 100},
]);

const filtered = collection.where('price', 100);

filtered.all();

//=> [
//=>   {product: 'Chair', price: 100},
//=>   {product: 'Door', price: 100}
//=> ]
```

The where method also allows for custom comparisons:
**Non-identity / strict inequality ``(!==)``**
```js
const filtered = collection.where('price', '!==', 100);

filtered.all();

//=> [
//=>   {product: 'Desk', price: 200},
//=>   {product: 'Bookcase', price: 150}
//=> ]
```
**Less than operator ``(<)``**
```js
const filtered = collection.where('price', '<', 100);

filtered.all();

//=> []
```
**Less than or equal operator ``(<=)``**
```js
const filtered = collection.where('price', '<=', 100);

filtered.all();

//=> [
//=>   {product: 'Chair', price: 100},
//=>   {product: 'Door', price: 100}
//=> ]
```

**Greater than operator ``(>)``**
```js
const filtered = collection.where('price', '>', 100);

filtered.all();

//=> [
//=>   {product: 'Desk', price: 200},
//=>   {product: 'Bookcase', price: 150}
//=> ]
```
**Greater than or equal operator ``(>=)``**
```js
const filtered = collection.where('price', '>=', 150);

filtered.all();

//=> [
//=>   {product: 'Desk', price: 200},
//=>   {product: 'Bookcase', price: 150}
//=> ]
```

#### ``whereIn()``
The whereIn method filters the collection by a given key / value contained within the given array.
```js
const collection = collect([
  {product: 'Desk', price: 200},
  {product: 'Chair', price: 100},
  {product: 'Bookcase', price: 150},
  {product: 'Door', price: 100},
]);

const filtered = collection.whereIn('price', [100, 150]);

filtered.all();

//=> [
//=>   {product: 'Chair', price: 100},
//=>   {product: 'Bookcase', price: 150},
//=>   {product: 'Door', price: 100},
//=> ]
```

#### ``whereNotIn()``
The whereNotIn method filters the collection by a given key / value not contained within the given array:
```js
const collection = collect([
  { product: 'Desk', price: 200 },
  { product: 'Chair', price: 100 },
  { product: 'Bookcase', price: 150 },
  { product: 'Door', price: 100 }
]);

const filtered = collection.whereNotIn('price', [150, 200]);

filtered.all();

//=> [
//=>   { product: 'Chair', price: 100 },
//=>   { product: 'Door', price: 100 }
//=> ]
```

#### ``wrap()``
The wrap method will wrap the given value in a collection:
```js
const collection = collect().wrap([1, 2, 3]);

collection.all();

//=> [1, 2, 3]
```

#### ``zip()``
The zip method merges together the values of the given array with the values of the original collection at the corresponding index:
```js
const collection = collect(['Chair', 'Desk']);

const zipped = collection.zip([100, 200]);

zipped.all();

//=> [['Chair', 100], ['Desk', 200]]
```

### Contribute
PRs are welcomed to this project, and help is needed in order to keep up with the changes of Laravel Collections. If you want to improve the collection library, add functionality or improve the docs please feel free to submit a PR.

### License
MIT © [Daniel Eckermann](http://danieleckermann.com)
