# `flip()`

The flip method swaps the collection's keys with their corresponding values:

```js
const collection = collect({
  name: 'Steven Gerrard',
  number: 8,
});

const flipped = collection.flip();

flipped.all();

// {
//   'Steven Gerrard': 'name',
//   '8': 'number',
// }
```




[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/flip.js)