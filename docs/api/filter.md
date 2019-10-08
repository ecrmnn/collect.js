# `filter()`

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

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/filter.js)