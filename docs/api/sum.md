# `sum()`

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




[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/sum.js)