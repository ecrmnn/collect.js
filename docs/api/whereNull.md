# `whereNull()`

The `whereNull` method filters items where the given key is null.

```js
const collection = collect([{
  name: 'Mohamed Salah',
}, {
  name: null,
}, {
  name: 'Sadio Mané',
}]);

const filtered = collection.whereNull();

filtered.all();

// [
//   { name: null },
// ]
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/whereNull.js)