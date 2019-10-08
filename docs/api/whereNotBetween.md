# `whereNotBetween()`

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

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/whereNotBetween.js)