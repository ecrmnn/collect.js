# `whenEmpty()`

The `whenEmpty` method will execute the given callback when the collection is empty:

```js
const collection = collect([]);

collection.whenEmpty(c => c.push('Mohamed Salah'));

collection.all();

// ['Mohamed Salah']
```

```js
const collection = collect(['Sadio Mané']);

collection.whenEmpty(
  c => c.push('Mohamed Salah'),
  c => c.push('Xherdan Shaqiri'),
);

collection.all();

// [
//   'Sadio Mané',
//   'Xherdan Shaqiri',
// ];
```




[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/whenEmpty.js)