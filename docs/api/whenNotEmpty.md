# `whenNotEmpty()`

The `whenNotEmpty` method will execute the given callback when the collection is not empty:

```js
const collection = collect(['Sadio Mané']);

collection.whenNotEmpty(c => c.push('Mohamed Salah'));

collection.all();

// [
//   'Sadio Mané',
//   'Mohamed Salah',
// ]
```

```js
const collection = collect(['Sadio Mané']);

collection.whenNotEmpty(
  c => c.push('Mohamed Salah'),
  c => c.push('Xherdan Shaqiri'),
);

collection.all();

// [
//   'Sadio Mané',
//   'Mohamed Salah',
// ];
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/whenNotEmpty.js)