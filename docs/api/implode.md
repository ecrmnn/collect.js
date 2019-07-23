# `implode()`

The implode method joins the items in a collection. Its arguments depend on the type of items in the collection. If the collection contains arrays or objects, you should pass the key of the attributes you wish to join, and the "glue" string you wish to place between the values:

```js
const collection = collect([
  {
    product: 'Chair',
    manufacturer: 'IKEA',
  },
  {
    product: 'Desk',
    manufacturer: 'IKEA',
  },
  {
    product: 'Chair',
    manufacturer: 'Herman Miller',
  },
]);

collection.implode('product', ',');

// Chair, Desk, Chair
```

If the collection contains simple strings or numeric values, simply pass the "glue" as the only argument to the method:

```js
collect([1, 2, 3, 4, 5]).implode('-');

// 1-2-3-4-5
```




[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/implode.js)