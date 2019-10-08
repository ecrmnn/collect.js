# `sortBy()`

The sortBy method sorts the collection by the given key. The sorted collection keeps the original array keys, so in this example we'll use the values method to reset the keys to consecutively numbered indexes:

```js
const collection = collect([
  { name: 'Desk', price: 200 },
  { name: 'Chair', price: 100 },
  { name: 'Bookcase', price: 150 },
]);

const sorted = collection.sortBy('price');

sorted.all();

// [
//   { name: 'Chair', price: 100 },
//   { name: 'Bookcase', price: 150 },
//   { name: 'Desk', price: 200 },
// ]
```

You can use dot notation to sort by nested values
```js
const collection = collect([
  {
    name: 'Desk',
    price: 200,
    manufacturer: {
      name: 'IKEA',
    },
  },
  {
    name: 'Chair',
    price: 100,
    manufacturer: {
      name: 'Herman Miller',
    },
  },
  {
    name: 'Bookcase',
    price: 150,
    manufacturer: {
      name: 'IKEA',
    },
  },
]);

const sorted = collection.sortBy('manufacturer.name');

sorted.all();

// [
//   {
//     name: 'Chair',
//     price: 100,
//     manufacturer: {
//       name: 'Herman Miller',
//     },
//   },
//   {
//     name: 'Desk',
//     price: 200,
//     manufacturer: {
//       name: 'IKEA',
//     },
//   },
//   {
//     name: 'Bookcase',
//     price: 150,
//     manufacturer: {
//       name: 'IKEA',
//     },
//   },
// ]
```

You can also pass your own callback to determine how to sort the collection values:

```js
const collection = collect([
  { name: 'Desk', colors: ['Black', 'Mahogany'] },
  { name: 'Chair', colors: ['Black'] },
  { name: 'Bookcase', colors: ['Red', 'Beige', 'Brown'] },
]);

const sorted = collection.sortBy((product, key) => product.colors.length);

sorted.all();

// [
//   { name: 'Chair', colors: ['Black'] },
//   { name: 'Desk', colors: ['Black', 'Mahogany'] },
//   { name: 'Bookcase', colors: ['Red', 'Beige', 'Brown'] },
// ]
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/sortBy.js)