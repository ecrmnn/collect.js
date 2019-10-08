# `each()`

The each method iterates over the items in the collection and passes each item to a callback:

```js
let sum = 0;

const collection = collect([1, 3, 3, 7]);

collection.each((item) => {
  sum += item;
});

// console.log(sum);
// 14
```

If you would like to stop iterating through the items, you may return false from your callback:

```js
let sum = 0;

const collection = collect([1, 3, 3, 7]);

collection.each((item) => {
  sum += item;

  if (sum > 5) {
    return false;
  }
});

// console.log(sum);
// 7
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/each.js)