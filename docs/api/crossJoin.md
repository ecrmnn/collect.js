# `crossJoin()`

The crossJoin method cross joins the collection with the given array or collection, returning all possible permutations:

```js
const collection = collect([1, 2]);

const joined = collection.crossJoin(['a', 'b']);

joined.all();

// [
//   [1, 'a'],
//   [1, 'b'],
//   [2, 'a'],
//   [2, 'b'],
// ]
```




[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/crossJoin.js)