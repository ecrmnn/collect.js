# `flatMap()`

The flatMap method iterates through the collection and passes each value to the given callback. The callback is free to modify the item and return it, thus forming a new collection of modified items. Then, the array is flattened by a level:

```js
const collection = collect([
  {
    name: 'Darwin Núñez',
    number: 27,
  },
  {
    name: 'Mohamed Salah',
    number: 11,
  },
]);

const flatMapped = collection.flatMap(value => value.name.toUpperCase());

flatMapped.all();

// ['DARWIN NÚÑEZ', 'MOHAMED SALAH']
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/flatMap.js)
