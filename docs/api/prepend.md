# `prepend()`

The prepend method adds an item to the beginning of the collection:

```js
const collection = collect([1, 2, 3, 4, 5]);

collection.prepend(0);

collection.all();

// [0, 1, 2, 3, 4, 5]
```

You may also pass a second argument to set the key of the prepended item:

> Pro tip: Order of properties in objects is not guaranteed in JavaScript; When calling prepend with a key, the Collection uses the underlying `put` method behind the scenes. This is only supported so that collect.js have the same api as Laravel Collections.

```js
const collection = collect({
  product: 'iPhone 6s',
});

collection.prepend('Apple', 'brand');

collection.all();

// {
//   brand: 'Apple',
//   product: 'iPhone 6s',
// }
```




[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/prepend.js)