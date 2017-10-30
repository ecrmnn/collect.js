# 4.0.0

## Breaking changes
- ``chunk()``
- ``dump()``
- ``flatMap()``
- ``has()``
- ``keys()``
- ``groupBy()``
- ``pluck()``

## Methods
#### ``chunk()``
- Returns a new collection of smaller collections of the given size.
This is done because ``collect.js`` should give the same result as Laravel Collections.
- Also works when the collection is based on an object, a string, a number or boolean.

#### ``combine()``
- Also works when the collection is based on a string
- Also works when combining with a string or an object
- Also works when combining with another collection

#### ``dump()``
- Console logs the entire collection object (``this``) instead of only the items (``this.items``).
```js
const collection = collect([
  { product: 'Desk', manufacturer: 'IKEA' },
  { product: 'Chair', manufacturer: 'Herman Miller' },
  { product: 'Bookcase', manufacturer: 'IKEA' },
  { product: 'Door' },
]);

collection.pluck('product', 'manufacturer').dump();

// Prior to 4.0.0
//=> {
//=>   IKEA: 'Bookcase',
//=>   'Herman Miller': 'Chair',
//=>   '': 'Door'
//=> }

// After 4.0.0
//=> Collection {
//=>   items: {
//=>     IKEA: 'Bookcase',
//=>     'Herman Miller': 'Chair',
//=>     '': 'Door'
//=>   }
//=> }
```

#### ``except()``
- Accepts an array or infinite number of arguments.

#### ``first()``
- Also works when the collection is based on an object.
```js
const collection = collect({
  name: 'Sadio Mané',
  club: 'Liverpool FC',
});

collection.first();

//=> Sadio Mané
```

#### ``flatMap()``
- Version prior to 4.0.0 did not work as expected
- Rewritten with new functionality
- See readme for further details

#### ``flip()``
- Also works when the collection is based on an object

#### ``forget()``
- Also works when the collection is based on an object

#### ``forPage()``
- Also works when the collection is based on an object

#### ``groupBy()``
- Objects that don't have the key that we're grouping by will be grouped into a group under the
name of an empty string. This is changed from being grouped under ``undefined``.
- Now returns a collection of collections instead of an array of objects.
This is done because ``collect.js`` should give the same result as Laravel Collections.
```js

```
#### ``has()``
- Accepts an array of keys to check
- Is now a variadic function and therefore accepts infinite number of arguments (keys) to check
- No longer checks if any object in the given array has the specified key.
This is done because ``collect.js`` should give the same result as Laravel Collections.
```js
// Previously this would return true. It now returns false. 

const collection = collect([{
  animal: 'unicorn',
  ability: 'magical'
}, {
  animal: 'pig',
  ability: 'filthy'
}]);

collection.has('ability');

//=> true (Prior to 4.0.0)
//=> false (After 4.0.0)
```

#### ``keyBy()``
- Uses an empty string as the key instead of ``undefined`` when passed an invalid key

#### ``keys()``
- Returns indexes as keys when based on an array. Indexes are mapped to ``Number``.
```js
const collection = collect([{
 name: 'Sadio Mané',
}, {
 name: 'Roberto Firmino',
}]);
const keys = collection.keys();

// Prior to 4.0.0
//=> ['name', 'name']

// After 4.0.0
//=> [0, 1]
``` 

#### ``last()``
- Also works when the collection is based on an object.
```js
const collection = collect({
  name: 'Sadio Mané',
  club: 'Liverpool FC',
});

collection.last();

//=> Liverpool FC
```

#### ``merge()``
- Can merge arrays and objects.
- Also works when merging with a string.

#### ``only()``
- Accepts an array or infinite number of arguments.

#### ``pluck()``
- Returns ``null`` as the value instead of ``undefined``
- Returns ``null`` when an item does not contain the specified key.
```js
const collection = collect([
  { product: 'Desk', manufacturer: 'IKEA' },
  { product: 'Chair', manufacturer: 'Herman Miller' },
  { product: 'Bookcase', manufacturer: 'IKEA' },
  { product: 'Door' },
]);

const pluck = collection.pluck('non-existing-key');

pluck.all();

//=> [null, null, null, null]

const manufacturers = collection.pluck('manufacturer');

manufacturers.all();

//=> ['IKEA', 'Herman Miller', 'IKEA', null]
```
- Objects that don't have the key that we're plucking by will get an empty string as its key. 
This is changed from being ``undefined``.
```js
const collection = collect([
  { product: 'Desk', manufacturer: 'IKEA' },
  { product: 'Chair', manufacturer: 'Herman Miller' },
  { product: 'Bookcase', manufacturer: 'IKEA' },
  { product: 'Door' },
]);

const pluck = collection.pluck('product', 'manufacturer');

pluck.all();

//=> {
//=>   IKEA: 'Bookcase',
//=>   'Herman Miller': 'Chair',
//=>   '': 'Door',
//=> }
```

#### ``pop()``
- Also works when collection is based on an object

#### ``push()``
- Accepts spread/rest operator ``collection.push(...values)``

#### ``random()``
- Also works when collection is based on an object

#### ``shift()``
- Also works when collection is based on an object

#### ``shuffle()``
- Also works when collection is based on an object

#### ``take()``
- Also works when collection is based on an object

## Misc
- Added ``CHANGELOG.md``