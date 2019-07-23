# `tap()`

The tap method passes the collection to the given callback, allowing you to "tap" into the collection at a specific point and do something with the items while not affecting the collection itself:

```js
collect([2, 4, 3, 1, 5])
  .sort()
  .tap((collection) => {
    console.log(collection.all());

    // [1, 2, 3, 4, 5]
  })
  .shift();

// 1
```




[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/tap.js)