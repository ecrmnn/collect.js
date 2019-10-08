# `mapToGroups()`

The mapToGroups method iterates through the collection and passes each value to the given callback:

```js
const collection = collect([
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
  { id: 3, name: 'C' },
  { id: 4, name: 'B' },
]);

const groups = collection.mapToGroups((item, key) => [item.name, item.id]);

// {
//   A: [1],
//   B: [2, 4],
//   C: [3],
// }
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/mapToGroups.js)