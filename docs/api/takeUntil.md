# `takeUntil()`

The `takeUntil` method returns items in the collection until the given callback returns `true`:

```js
const collection = collect([1, 2, 3, 4]);

const subset = collection.takeUntil(item => item >= 3);

subset.all();

// [1, 2]
```

> If the given value is not found or the callback never returns `true`, the `takeUntil` method will return all items in the collection.

You may also pass a simple value to the `takeUntil` method to get the items until the given value is found:

```js
const collection = collect([1, 2, 3, 4]);

const subset = collection.takeUntil(3);

subset.all();

// [1, 2]
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/takeUntil.js)
