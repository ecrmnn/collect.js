# `mapInto()`

The mapInto method iterates through the collection and instantiates the given class with each element as a constructor:

```js
const Player = function (name) {
  this.name = name;
};

const collection = collect([
  'Roberto Firmino',
  'Darwin Núñez',
]);

const players = collection.mapInto(Player);

players.all();

// [
//   Player { name: 'Roberto Firmino' },
//   Player { name: 'Darwin Núñez' },
// ]
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/mapInto.js)
