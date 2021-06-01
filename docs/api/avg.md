# `avg()`

The avg method returns the average of all items in the collection:

```js
collect([1, 3, 3, 7]).avg();

// 3.5
```

If the collection contains nested arrays or objects, you should pass a key to use for determining which values to calculate the average:

```js
const collection = collect([
  {
    name: 'My story',
    pages: 176,
  },
  {
    name: 'Fantastic Beasts and Where to Find Them',
    pages: 1096,
  },
]);

collection.avg('pages');

// 636
```

You may also define a callback function

```js
const collection = collect([
  {
    name: 'My story',
    pages: 176,
  },
  {
    name: 'Fantastic Beasts and Where to Find Them',
    pages: 1096,
  },
]);

collection.avg(book => book.pages);

// 636
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/avg.js)