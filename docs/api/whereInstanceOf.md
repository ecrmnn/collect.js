# `whereInstanceOf()`

The whereInstanceOf method filters the collection by a given class type:

```js
const collection = collect([
  new Player('Firmino'),
  new Player('Salah'),
  new Manager('Klopp'),
]);

const filtered = collection.whereInstanceOf(Player);

filtered.all();

// [
//   new Player('Firmino'),
//   new Player('Salah'),
// ]
```




[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/whereInstanceOf.js)