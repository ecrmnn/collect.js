# `mapToDictionary()`

Run a dictionary map over the items.
The callback should return an associative array with a single key/value pair.

```js
const collection = collect([
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
  { id: 3, name: 'c' },
  { id: 4, name: 'b' },
]);

const groups = collection.mapToDictionary(item => [item.name, item.id]);

groups.all();

// {
//   a: [1],
//   b: [2, 4],
//   c: [3],
// }
```




[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/mapToDictionary.js)