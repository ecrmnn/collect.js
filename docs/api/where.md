# `where()`

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




[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/where.js)