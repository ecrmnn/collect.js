# `replaceRecursive()`

This method works like replace, but it will recurse into arrays and apply the same replacement process to the inner values:

```js
const collection = collect([
  'Matip',
  'van Dijk',
  [
    'Mané',
    'Firmino',
    'Salah',
  ],
]);

const replaced = collection.replaceRecursive({
  0: 'Gomez',
  2: { 1: 'Origi' },
});

replaced.all();

// {
//   0: 'Gomez',
//   1: 'van Dijk',
//   2: { 0: 'Mané', 1: 'Origi', 2: 'Salah' },
// }
```




[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/replaceRecursive.js)