# `whenNotEmpty()`

The `whenNotEmpty` method will execute the given callback when the collection is not empty:

```js
const collection = collect(['Darwin Núñez']);

collection.whenNotEmpty(c => c.push('Mohamed Salah'));

collection.all();

// [
//   'Darwin Núñez',
//   'Mohamed Salah',
// ]
```

```js
const collection = collect(['Darwin Núñez']);

collection.whenNotEmpty(
  c => c.push('Mohamed Salah'),
  c => c.push('Xherdan Shaqiri'),
);

collection.all();

// [
//   'Darwin Núñez',
//   'Mohamed Salah',
// ];
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/whenNotEmpty.js)
