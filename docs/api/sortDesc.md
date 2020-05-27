# `sortDesc()`

This method will sort the collection in the opposite order as the `sort` method.

```js
const collection = collect([1, 3, 5, 2, 4]);

const sorted = collection.sortDesc();

sorted.all();

// [5, 4, 3, 2, 1]
```

Unlike `sort`, you may not pass a callback to `sortDesc`. If you wish to use a callback, you should use `sort` and invert your comparison.

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/sortDesc.js)