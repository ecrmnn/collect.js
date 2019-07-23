# `diffAssoc()`

The diffAssoc method compares the collection against another collection or a plain object based on its keys and values.
This method will return the key / value pairs in the original collection that are not present in the given collection:

```js
const collection = collect({
  color: 'orange',
  type: 'fruit',
  remain: 6,
});

const diff = collection.diffAssoc({
  color: 'yellow',
  type: 'fruit',
  remain: 3,
  used: 6,
});

diff.all();

// { color: 'orange', remain: 6 };
```




[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/diffAssoc.js)