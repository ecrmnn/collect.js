# `merge()`

The merge method merges the given object into the original collection. If a key in the given object matches a key in the original collection, the given objects value will overwrite the value in the original collection:

```js
const collection = collect({
  id: 1,
  price: 29,
});

const merged = collection.merge({
  price: 400,
  discount: false,
});

merged.all();

// { id: 1, price: 400, discount: false }
```

If our collection is an array, the values will be appended to the end of the collection:

```js
const collection = collect(['Unicorn', 'Rainbow']);

const merged = collection.merge(['Sunshine', 'Rainbow']);

merged.all();

// ['Unicorn', 'Rainbow', 'Sunshine', 'Rainbow']
```




[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/merge.js)