# `first()`

The first method returns the first element in the collection that passes a given truth test:

```js
collect([1, 2, 3, 4]).first(item => item > 1);

// 2
```

You may also call the first method with no arguments to get the first element in the collection. If the collection is empty, null is returned:

```js
collect([1, 2, 3, 4]).first();

// 1
```




[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/first.js)