# `sole()`

The sole method returns the first element in the collection that passes a given truth test, but only if the truth test matches exactly one element:

```js
collect([1, 2, 3, 4]).sole(item => item === 1);

// 1
```

If there are no elements in the collection that should be returned by the sole method, then an error will be thrown:

```js
collect([1, 2, 3, 4]).sole(item => item > 4);

// Error ('Item not found.') is thrown.
```

If there are multiple elements in the collection that should be returned by the sole method, then an error will be thrown:

```js
collect([1, 2, 3, 4]).sole();

// Error ('Multiple items found.') is thrown.
```

Like the firstOrFail method, you may also pass an attribute, operator, and value:

```js
const collection = collect([
  { product: 'Desk', price: 200, discounted: true },
  { product: 'Chair', price: 100, discounted: true },
  { product: 'Bookcase', price: 150, discounted: true },
  { product: 'Door', price: 100 },
]);

collection.sole('product', '=', 'Desk');

// { product: 'Desk', price: 200, discounted: true }
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/sole.js)
