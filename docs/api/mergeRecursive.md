# `mergeRecursive()`

The mergeRecursive method merges the given array or collection recursively with the original collection. If a string key in the given items matches a string key in the original collection, then the values for these keys are merged together into an array, and this is done recursively:

```js
const collection = collect({
  product_id: 1,
  price: 100,
});

const merged = collection.mergeRecursive({
  product_id: 2,
  price: 200,
  discount: false,
});

merged.all();

// {
//   product_id: [1, 2],
//   price: [100, 200],
//   discount: false,
// }
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/mergeRecursive.js)