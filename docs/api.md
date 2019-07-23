# API

### Strictness and comparisons
All comparisons in `collect.js` are done using strict equality. Using loose equality comparisons are generally frowned upon in JavaScript. Laravel only performs "loose" comparisons by default and offer several "strict" comparison methods. These methods have not been implemented in `collect.js` because all methods are strict by default.

### Tip
Using Laravel as your backend? Collect.js offers an (almost) identical api to [Laravel Collections](https://laravel.com/docs/master/collections). [See differences](#strictness-and-comparisons).

### Methods that have not been implemented:
- ~~`containsStrict`~~ use [`contains()`](/api/contains.html)
- ~~`duplicatesStrict`~~ use [`duplicates()`](/api/duplicates.html)
- ~~`uniqueStrict`~~ use [`unique()`](/api/unique.html)
- ~~`whereStrict`~~ use [`where()`](/api/where.html)
- ~~`whereInStrict`~~ use [`whereIn()`](/api/whereIn.html)
- ~~`whereNotInStrict`~~ use [`whereNotIn()`](/api/whereNotIn.html)