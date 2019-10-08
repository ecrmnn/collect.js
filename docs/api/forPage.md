# `forPage()`

The forPage method returns a new collection containing the items that would be present on a given page number. The method accepts the page number as its first argument and the number of items to show per page as its second argument:

```js
const collection = collect([1, 2, 3, 4, 5, 6, 7, 8, 9]);

const forPage = collection.forPage(2, 3);

forPage.all();

// [4, 5, 6]
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/forPage.js)