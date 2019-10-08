



### Installation

#### NPM

```bash
npm install collect.js --save
```

#### Yarn

```bash
yarn add collect.js
```

#### From CDN

1. Visit https://cdnjs.com/libraries/collect.js
2. Add CDN link to your site with `<script>`

#### Using build / minified version

1. Download [`collect.min.js`](https://github.com/ecrmnn/collect.js/blob/master/build/collect.min.js)
2. Add to your site with `<script>`

### Tip

Using Laravel as your backend? Collect.js offers an (almost) identical api to [Laravel Collections](https://laravel.com/docs/master/collections). [See differences](#strictness-and-comparisons).

### Usage

All available methods

{{ toc }}

### Strictness and comparisons

All comparisons in `collect.js` are done using strict equality. Using loose equality comparisons are generally frowned upon in JavaScript. Laravel only performs "loose" comparisons by default and offer several "strict" comparison methods. These methods have not been implemented in `collect.js` because all methods are strict by default.

##### Methods that have not been implemented:

- ~~`containsStrict`~~ use `contains()`
- ~~`duplicatesStrict`~~ use `duplicates()`
- ~~`uniqueStrict`~~ use `unique()`
- ~~`whereStrict`~~ use `where()`
- ~~`whereInStrict`~~ use `whereIn()`
- ~~`whereNotInStrict`~~ use `whereNotIn()`

{{ methods }}

### Contribute

PRs are welcomed to this project, and help is needed in order to keep up with the changes of Laravel Collections. If you want to improve the collection library, add functionality or improve the docs please feel free to submit a PR.

### License

MIT © [Daniel Eckermann](http://danieleckermann.com)
