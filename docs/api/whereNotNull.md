# `whereNotNull()`

The `whereNotNull` method filters items where the given key is not null.

```js
const collection = collect([{
  name: 'Mohamed Salah',
}, {
  name: null,
}, {
  name: 'Sadio Mané',
}]);

const filtered = collection.whereNotNull();

filtered.all();

// [
//   { name: 'Mohamed Salah' },
//   { name: 'Sadio Mané' },
// ]
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/whereNotNull.js)