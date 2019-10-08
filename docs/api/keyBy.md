# `keyBy()`

The keyBy method keys the collection by the given key. If multiple items have the same key, only the last one will appear in the new collection:

```js
const collection = collect([
  {
    product: 'Chair',
    manufacturer: 'IKEA',
  },
  {
    product: 'Desk',
    manufacturer: 'IKEA',
  },
  {
    product: 'Chair',
    manufacturer: 'Herman Miller',
  },
]);

const keyed = collection.keyBy('manufacturer');

keyed.all();

// {
//   IKEA: {
//     product: 'Desk',
//     manufacturer: 'IKEA',
//   },
//   'Herman Miller': {
//     product: 'Chair',
//     manufacturer: 'Herman Miller',
//   },
// }
```

You may also pass a callback to the method. The callback should return the value to key the collection by:

```js
const upperCased = collection.keyBy(item => item.manufacturer.toUpperCase());

upperCased.all();

// {
//   IKEA: {
//     product: 'Desk',
//     manufacturer: 'IKEA',
//   },
//   'HERMAN MILLER': {
//     product: 'Chair',
//     manufacturer: 'Herman Miller',
//   },
// }
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/keyBy.js)