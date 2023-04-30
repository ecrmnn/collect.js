# `sortKeysUsing()`

The sortKeysUsing method sorts the collection by the keys of the object literal using a callback function:

```js
const collection = collect({
  orange: 100,
  strawberry: 200,
  peach: 300,
});

const sorted = collection.sortKeysUsing((a, b) => b.length - a.length);

sorted.all();

// {
//   strawberry: 200,
//   orange: 100,
//   peach: 300,
// }
```

This method accepts a callback function which determines the sorting order. The callback should return a negative, zero, or positive value, depending on the sort order of the two keys being compared.

If the collection contains an array instead of an object literal, the sortKeysUsing method will return the collection unchanged.

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/sortKeysUsing.js)