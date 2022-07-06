# `whereNotNull()`

The `whereNotNull` method filters items where the given key is not null.

```js
const collection = collect([{
  name: 'Mohamed Salah',
}, {
  name: null,
}, {
  name: 'Darwin Núñez',
}]);

const filtered = collection.whereNotNull();

filtered.all();

// [
//   { name: 'Mohamed Salah' },
//   { name: 'Darwin Núñez' },
// ]
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/whereNotNull.js)
