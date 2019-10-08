# `diff()`

The diff method compares the collection against another collection or a plain array based on its values. This method will return the values in the original collection that are not present in the given collection:

```js
const collection = collect([1, 2, 3, 4, 5]);

const diff = collection.diff([1, 2, 3, 9]);

diff.all();

// [4, 5]
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/diff.js)