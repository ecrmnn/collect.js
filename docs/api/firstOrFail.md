# `firstOrFail()`

The firstOrFail method returns the first element in the collection, or throws an error if there are no elements:

```js
collect([1, 2, 3, 4]).firstOrFail(item => item > 1);

// 2
```

```js
collect([1, 2, 3, 4]).firstOrFail(item => item > 4);

// Error ('Item not found.') is thrown.
```

You may also call the firstOrFail method with no arguments to get the first element in the collection. If the collection is empty, an error is thrown:

```js
collect([1, 2, 3, 4]).firstOrFail();

// 1
```

```js
collect().firstOrFail();

// Error ('Item not found.') is thrown.
```

Like the where method, you may also pass an attribute, operator, and value:

```js
const collection = collect([
  { product: 'Desk', price: 200, discounted: true },
  { product: 'Chair', price: 100, discounted: true },
  { product: 'Bookcase', price: 150, discounted: true },
  { product: 'Door', price: 100 },
]);

collection.firstOrFail('product', '=', 'Desk');

// { product: 'Desk', price: 200, discounted: true }
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/firstOrFail.js)
