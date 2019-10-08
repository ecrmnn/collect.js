# `sortKeys()`

The sortKeys method sorts the collection by the keys of the underlying associative array:

```js
const collection = collect({
  id: 10,
  first: 'Sadio',
  last: 'Mané',
});

const sorted = collection.sortKeys();

sorted.all();

// {
//   first: 'Sadio',
//   id: 10,
//   last: 'Mané',
// }
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/sortKeys.js)