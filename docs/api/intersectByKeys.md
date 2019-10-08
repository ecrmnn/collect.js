# `intersectByKeys()`

The intersectByKeys method removes any keys from the original collection that are not present in the given `array` or collection:

```js
const collection = collect({
  serial: 'UX301',
  type: 'screen',
  year: 2009,
});

const intersect = collection.intersectByKeys({
  reference: 'UX404',
  type: 'tab',
  year: 2011,
});

intersect.all();

// { type: 'screen', year: 2009 }
```

```js
const firstCollection = collect([1, 2, 3, 4, 5]);
const secondCollection = collect([1, 2, 3, 9]);

intersect = firstCollection.intersect(secondCollection);

intersect.all();

// [1, 2, 3]
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/intersectByKeys.js)