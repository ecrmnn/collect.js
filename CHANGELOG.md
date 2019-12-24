# 4.19.0

## Bug fixes

## Methods
#### ``flatten()``
- Now properly flattens an object with multiple objects. [Issue](https://github.com/ecrmnn/collect.js/issues/240)

# 4.18.8

## Bug fixes

## Methods
#### ``shift()``
- Calling `shift()` on an empty collection returns null in all cases

#### ``sortKeysDesc()``
- Now works correctly when collections is an object

#### ``min()``
- Passing an array of object where not every element contains the given key no longer causes an error

#### ``max()``
- Passing an array of object where not every element contains the given key no longer causes an error

# 4.16.0

## Breaking changes

## Methods
#### ``sortBy()``
- Null values, ``null`` and ``undefined`` will be sorted last, like normal ``.sort()``

# 4.14.0

## Breaking changes

## Methods
#### ``values()``
- Reverted change in `4.13.0`. Values method are no longer recursive.

# 4.14.0

## Breaking changes

## Methods
#### ``where()``
- This method now supports one, two or three arguments. This may cause unexpected output if you're using this function with one or two arguments earlier.

# 4.13.0

## Breaking changes

## Methods
#### ``values()``
- Values now iterates the collection recursively and collects values. Results that previously would return an object may now return an array.

# 4.12.0

## Breaking changes

## Collection
#### ``collect()``
- A collection instance made from an empty string is no longer recognized as an empty collection ``collect('')`` 
```js
// Before 4.12.0
collect('').isEmpty();
//=> true

// After 4.12.0
collect('').isEmpty();
//=> false
```

# 4.4.0

## Breaking changes

## Methods
#### ``concat()``
- Concat now returns a new collection instead of modifying the existing one

# 4.3.0

## Breaking changes

## Methods
#### ``random()``
- Previously ``random()`` and ``random(1)`` would return an array, while passing an integer >1 would return a collection object.
- ``random(1)`` now returns a collection object
- Changed ``random()`` according to https://github.com/ecrmnn/collect.js/issues/202

# 4.2.0
- Added ``whenEmpty()`` method
- Added ``whenNotEmpty()`` method
- Added ``unlessEmpty()`` method
- Added ``unlessNotEmpty()`` method

# 4.1.0

## Breaking changes

## Methods
#### ``flatMap()``
- Changed ``flatMap()`` according to https://github.com/ecrmnn/collect.js/issues/195

# 4.0.1
- Added build files so it's no longer required to use npm for installation

# 4.0.0

## Breaking changes
- ``chunk()``
- ``count()``
- ``dump()``
- ``flatMap()``
- ``has()``
- ``keys()``
- ``groupBy()``
- ``partition()``
- ``pluck()``
- ``split()``
- ``toArray()``
- ``toJson()``
- ``wrap()``

## Node.js
Skipped Node 4 support

## Methods
#### ``chunk()``
- Returns a new collection of smaller collections of the given size.
This is done because ``collect.js`` should give the same result as Laravel Collections.
- Also works when the collection is based on an object, a string, a number or boolean.

#### ``combine()``
- Also works when the collection is based on a string
- Also works when combining with a string or an object
- Also works when combining with another collection

#### ``count()``
- Also works when the collection is based on an object
- Return the number of keys in the object

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

#### ``partition()``
- Returns a collection of collections with the results instead of an array

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

#### ``split()``
- Splits the collection into the given number of collections
```js
const collection = collect([1, 2, 3, 4, 5]);

collection.split(2).dump();

// Prior to 4.0.0
//=> [
//=>   [1, 2, 3],
//=>   [4, 5],
//=> ]

// After 4.0.0
//=> Collection {
//=>   items: {
//=>     Collection {
//=>       items: [1, 2, 3]
//=>     },
//=>     Collection {
//=>       items: [4, 5]
//=>     },
//=>   }
//=> }
```

#### ``take()``
- Also works when collection is based on an object

#### ``toArray()``
- Now works recursively like Laravel collections ``toArray()`` method
- More information: https://github.com/ecrmnn/collect.js/issues/138

#### ``toJson()``
- Now works recursively like Laravel collections ``toArray()`` method
- More information: https://github.com/ecrmnn/collect.js/issues/138

#### ``wrap()``
- Now wraps objects correctly. The key/values are places directly on the collection. Previously objects were wrapped in
 an array.

## Misc
- Added ``CHANGELOG.md``
