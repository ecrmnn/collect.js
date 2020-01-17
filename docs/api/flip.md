# `flip()`

The flip method swaps the collection's keys with their corresponding values:

```js
const collection = collect({
  name: 'Sadio Mané',
  number: 10,
});

const flipped = collection.flip();

flipped.all();

// {
//   'Sadio Mané': 'name',
//   '10': 'number',
// }
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/flip.js)