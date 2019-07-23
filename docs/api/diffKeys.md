# `diffKeys()`

The diffKeys method compares the collection against another collection or a plain object based on its keys. This method will return the key / value pairs in the original collection that are not present in the given collection:

```js
const collection = collect({
  a: 'a',
  b: 'b',
  c: 'c',
  d: 'd',
});

const diff = collection.diffKeys({
  b: 'b',
  d: 'd',
});

diff.all();

// { a: 'a', c: 'c' }
```




[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/diffKeys.js)