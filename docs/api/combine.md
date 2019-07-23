# `combine()`

The combine method combines the keys of the collection with the values of another array or collection:

```js
const collection = collect(['name', 'number']);

const combine = collection.combine(['Steven Gerrard', 8]);

combine.all();

// {
//   name: 'Steven Gerrard',
//   number: 8
// }
```




[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/combine.js)