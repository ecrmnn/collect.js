# `toArray()`

The toArray method converts the collection into a plain array.
If the collection is an object, an array containing the values will be returned.

```js
const collection = collect([1, 2, 3, 'b', 'c']);

collection.toArray();

// [1, 2, 3, 'b', 'c']
```

```js
const collection = collect({
  name: 'Elon Musk',
  companies: ['Tesla', 'Space X', 'SolarCity'],
});

collection.toArray();

// ['Elon Musk', ['Tesla', 'Space X', 'SolarCity']]
```




[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/toArray.js)