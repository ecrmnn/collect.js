# `union()`

The union method adds the given array to the collection. If the given array contains keys that are already in the original collection, the original collection's values will be preferred:

```js
const collection = collect({
  a: 'A',
  b: 'B',
});

const union = collection.union({
  a: 'AAA',
  c: 'CCC',
  b: 'BBB',
});

union.all();

// {
//   a: 'A',
//   b: 'B',
//   c: 'CCC',
// }
```




[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/union.js)