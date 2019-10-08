# `toJson()`

The toJson method converts the collection into JSON string:

```js
const collection = collect({
  id: 384,
  name: 'Rayquaza',
  gender: 'NA',
});

const json = collection.toJson();

// {"id": 384, "name": "Rayquaza", "gender": "NA"}
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/toJson.js)