# `except()`

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

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/except.js)