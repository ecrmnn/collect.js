# `takeWhile()`

The `takeWhile` method returns items in the collection until the given callback returns `false`:

```js
const collection = collect([1, 2, 3, 4]);

const subset = collection.takeWhile(item => item < 3);

subset.all();

// [1, 2]
```

> If the callback never returns `false`, the `takeWhile` method will return all items in the collection.

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/takeWhile.js)
