# `flatten()`

The flatten method flattens a multi-dimensional collection into a single dimension:

```js
const collection = collect({
  club: 'Liverpool',
  players: ['Salah', 'Firmino', 'Mané'],
});

const flattened = collection.flatten();

flattened.all();

// ['Liverpool', 'Salah', 'Firmino', 'Mané'];
```

You may optionally pass the function a "depth" argument:

```js
const collection = collect({
  Apple: [
    {
      name: 'iPhone 6S',
      brand: 'Apple',
    },
  ],
  Samsung: [
    {
      name: 'Galaxy S7',
      brand: 'Samsung',
    },
  ],
});

const flattened = collection.flatten(1);

flattened.all();

// [
//   { name: 'iPhone 6S', brand: 'Apple' },
//   { name: 'Galaxy S7', brand: 'Samsung' },
// ]
```

In this example, calling flatten without providing the depth would have also flattened the nested arrays, resulting in `['iPhone 6S', 'Apple', 'Galaxy S7', 'Samsung']`. Providing a depth allows you to restrict the levels of nested arrays that will be flattened.

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/flatten.js)