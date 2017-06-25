(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["collect"] = factory();
	else
		root["collect"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function average(key) {
  if (key === undefined) {
    return this.sum() / this.items.length;
  }

  return new this.constructor(this.items).pluck(key).sum() / this.items.length;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Collection(collection) {
  this.items = collection;
}

var SymbolIterator = __webpack_require__(2);

if (typeof Symbol !== 'undefined') {
  Collection.prototype[Symbol.iterator] = SymbolIterator;
}

Collection.prototype.all = __webpack_require__(3);
Collection.prototype.average = __webpack_require__(0);
Collection.prototype.avg = __webpack_require__(0);
Collection.prototype.chunk = __webpack_require__(4);
Collection.prototype.collapse = __webpack_require__(5);
Collection.prototype.combine = __webpack_require__(6);
Collection.prototype.contains = __webpack_require__(7);
Collection.prototype.count = __webpack_require__(8);
Collection.prototype.diff = __webpack_require__(9);
Collection.prototype.diffKeys = __webpack_require__(10);
Collection.prototype.each = __webpack_require__(11);
Collection.prototype.every = __webpack_require__(12);
Collection.prototype.except = __webpack_require__(13);
Collection.prototype.filter = __webpack_require__(14);
Collection.prototype.first = __webpack_require__(15);
Collection.prototype.flatMap = __webpack_require__(16);
Collection.prototype.flatten = __webpack_require__(17);
Collection.prototype.flip = __webpack_require__(18);
Collection.prototype.forPage = __webpack_require__(19);
Collection.prototype.forget = __webpack_require__(20);
Collection.prototype.get = __webpack_require__(21);
Collection.prototype.groupBy = __webpack_require__(22);
Collection.prototype.has = __webpack_require__(23);
Collection.prototype.implode = __webpack_require__(24);
Collection.prototype.intersect = __webpack_require__(25);
Collection.prototype.isEmpty = __webpack_require__(26);
Collection.prototype.isNotEmpty = __webpack_require__(27);
Collection.prototype.keyBy = __webpack_require__(28);
Collection.prototype.keys = __webpack_require__(29);
Collection.prototype.last = __webpack_require__(30);
Collection.prototype.macro = __webpack_require__(31);
Collection.prototype.map = __webpack_require__(32);
Collection.prototype.mapWithKeys = __webpack_require__(33);
Collection.prototype.max = __webpack_require__(34);
Collection.prototype.median = __webpack_require__(35);
Collection.prototype.merge = __webpack_require__(36);
Collection.prototype.min = __webpack_require__(37);
Collection.prototype.mode = __webpack_require__(38);
Collection.prototype.nth = __webpack_require__(39);
Collection.prototype.only = __webpack_require__(40);
Collection.prototype.partition = __webpack_require__(41);
Collection.prototype.pipe = __webpack_require__(42);
Collection.prototype.pluck = __webpack_require__(43);
Collection.prototype.pop = __webpack_require__(44);
Collection.prototype.prepend = __webpack_require__(45);
Collection.prototype.pull = __webpack_require__(46);
Collection.prototype.push = __webpack_require__(47);
Collection.prototype.put = __webpack_require__(48);
Collection.prototype.random = __webpack_require__(49);
Collection.prototype.reduce = __webpack_require__(50);
Collection.prototype.reject = __webpack_require__(51);
Collection.prototype.reverse = __webpack_require__(52);
Collection.prototype.search = __webpack_require__(53);
Collection.prototype.shift = __webpack_require__(54);
Collection.prototype.shuffle = __webpack_require__(55);
Collection.prototype.slice = __webpack_require__(56);
Collection.prototype.sort = __webpack_require__(57);
Collection.prototype.sortBy = __webpack_require__(58);
Collection.prototype.sortByDesc = __webpack_require__(59);
Collection.prototype.splice = __webpack_require__(60);
Collection.prototype.split = __webpack_require__(61);
Collection.prototype.sum = __webpack_require__(62);
Collection.prototype.take = __webpack_require__(63);
Collection.prototype.tap = __webpack_require__(64);
Collection.prototype.times = __webpack_require__(65);
Collection.prototype.toArray = __webpack_require__(66);
Collection.prototype.toJson = __webpack_require__(67);
Collection.prototype.transform = __webpack_require__(68);
Collection.prototype.union = __webpack_require__(69);
Collection.prototype.unique = __webpack_require__(70);
Collection.prototype.values = __webpack_require__(71);
Collection.prototype.when = __webpack_require__(72);
Collection.prototype.where = __webpack_require__(73);
Collection.prototype.whereIn = __webpack_require__(74);
Collection.prototype.whereNotIn = __webpack_require__(75);
Collection.prototype.zip = __webpack_require__(76);

module.exports = function () {
  var collection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return new Collection(collection);
};
module.exports.default = function () {
  var collection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return new Collection(collection);
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function SymbolIterator() {
  var _this = this;

  var index = -1;

  return {
    next: function next() {
      index += 1;

      return {
        value: _this.items[index],
        done: index >= _this.items.length
      };
    }
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function all() {
  return this.items;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function chunk(size) {
  var chunks = [];
  var index = 0;

  do {
    chunks.push(this.items.slice(index, index + size));
    index += size;
  } while (index < this.items.length);

  return new this.constructor(chunks);
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

module.exports = function collapse() {
  var _ref;

  return new this.constructor((_ref = []).concat.apply(_ref, _toConsumableArray(this.items)));
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function combine(array) {
  var collection = {};

  this.items.forEach(function (key, iterator) {
    collection[key] = array[iterator];
  });

  return new this.constructor(collection);
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function contains(key, value) {
  if (value !== undefined) {
    return this.items[key] !== undefined && this.items[key] === value;
  }

  if (typeof key === 'function') {
    return this.items.filter(function (item, index) {
      return key(item, index);
    }).length > 0;
  }

  if (Array.isArray(this.items)) {
    return this.items.indexOf(key) !== -1;
  }

  return this.items[key] !== undefined;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function count() {
  return this.items.length;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function diff(values) {
  var valuesToDiff = void 0;

  if (values instanceof this.constructor) {
    valuesToDiff = values.all();
  } else {
    valuesToDiff = values;
  }

  var collection = this.items.filter(function (item) {
    return valuesToDiff.indexOf(item) === -1;
  });

  return new this.constructor(collection);
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function diffKeys(object) {
  var objectToDiff = void 0;

  if (object instanceof this.constructor) {
    objectToDiff = object.all();
  } else {
    objectToDiff = object;
  }

  var objectKeys = Object.keys(objectToDiff);

  var remainingKeys = Object.keys(this.items).filter(function (item) {
    return objectKeys.indexOf(item) === -1;
  });

  return new this.constructor(this.items).only(remainingKeys);
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function each(fn) {
  this.items.forEach(fn);

  return this;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function every(fn) {
  return this.items.map(function (item, index) {
    return fn(item, index);
  }).indexOf(false) === -1;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function except(properties) {
  var _this = this;

  var collection = {};

  Object.keys(this.items).forEach(function (property) {
    if (properties.indexOf(property) === -1) {
      collection[property] = _this.items[property];
    }
  });

  return new this.constructor(collection);
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function filter() {
  var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  var filteredArray = [];
  for (var i = 0; i < this.items.length; i += 1) {
    var item = this.items[i];
    if (func) {
      if (func(item, i)) {
        filteredArray.push(item);
      }
    } else if (Array.isArray(item)) {
      if (item.length) {
        filteredArray.push(item);
      }
    } else if (item !== undefined && item !== null && (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
      if (Object.keys(item).length) {
        filteredArray.push(item);
      }
    } else if (item) {
      filteredArray.push(item);
    }
  }

  return new this.constructor(filteredArray);
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function first(fn) {
  if (typeof fn === 'function') {
    for (var i = 0; i < this.items.length; i += 1) {
      var item = this.items[i];
      if (fn(item)) {
        return item;
      }
    }
  }

  return this.items[0];
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function flatMap(fn) {
  var _this = this;

  var values = [];

  Object.keys(this.items).forEach(function (property) {
    values.push(_this.items[property]);
  });

  var newValues = fn(values);

  var collection = {};

  Object.keys(this.items).forEach(function (value, index) {
    collection[value] = newValues[index];
  });

  return new this.constructor(collection);
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function flatten(depth) {
  var flattenDepth = depth || Infinity;

  var fullyFlattened = false;
  var collection = [];

  var flat = function flat(items) {
    collection = [];

    if (Array.isArray(items)) {
      items.forEach(function (item) {
        if (typeof item === 'string') {
          collection.push(item);
        } else if (Array.isArray(item)) {
          collection = collection.concat(item);
        } else {
          Object.keys(item).forEach(function (property) {
            collection = collection.concat(item[property]);
          });
        }
      });
    } else {
      Object.keys(items).forEach(function (property) {
        if (typeof items[property] === 'string') {
          collection.push(items[property]);
        } else if (Array.isArray(items[property])) {
          collection = collection.concat(items[property]);
        } else {
          Object.keys(items).forEach(function (prop) {
            collection = collection.concat(items[prop]);
          });
        }
      });
    }

    fullyFlattened = collection.filter(function (item) {
      return (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object';
    });
    fullyFlattened = fullyFlattened.length === 0;

    flattenDepth -= 1;
  };

  flat(this.items);

  while (!fullyFlattened && flattenDepth > 0) {
    flat(collection);
  }

  return new this.constructor(collection);
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function flip() {
  var _this = this;

  var collection = {};

  Object.keys(this.items).forEach(function (key) {
    collection[_this.items[key]] = key;
  });

  return new this.constructor(collection);
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function forPage(page, chunk) {
  var collection = this.items.slice(page * chunk - chunk, page * chunk);

  return new this.constructor(collection);
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function forget(key) {
  delete this.items[key];
  return this;
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function get(key) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (this.items[key] !== undefined) {
    return this.items[key];
  }

  if (typeof defaultValue === 'function') {
    return defaultValue();
  }

  return defaultValue;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function groupBy(key) {
  var collection = {};

  this.items.forEach(function (item, index) {
    var resolvedKey = void 0;

    if (typeof key === 'function') {
      resolvedKey = key(item, index);
    } else {
      resolvedKey = item[key];
    }

    if (collection[resolvedKey] === undefined) {
      collection[resolvedKey] = [];
    }

    collection[resolvedKey].push(item);
  });

  return new this.constructor(collection);
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function has(key) {
  if (Array.isArray(this.items)) {
    for (var i = 0; i < this.items.length; i += 1) {
      if (this.items[i][key] !== undefined) {
        return true;
      }
    }

    return false;
  }

  return this.items[key] !== undefined;
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function implode(key, glue) {
  if (glue === undefined) {
    return this.items.join(key);
  }

  return new this.constructor(this.items).pluck(key).all().join(glue);
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function intersect(values) {
  var intersectValues = values;

  if (values instanceof this.constructor) {
    intersectValues = values.all();
  }

  var collection = this.items.filter(function (item) {
    return intersectValues.indexOf(item) !== -1;
  });

  return new this.constructor(collection);
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isEmpty() {
  return !this.items.length;
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isNotEmpty() {
  return !!this.items.length;
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function keyBy(key) {
  var collection = {};

  if (typeof key === 'function') {
    this.items.forEach(function (item) {
      collection[key(item)] = item;
    });
  } else {
    this.items.forEach(function (item) {
      collection[item[key]] = item;
    });
  }

  return new this.constructor(collection);
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function keys() {
  if (Array.isArray(this.items)) {
    var collection = [];

    this.items.forEach(function (object) {
      Object.keys(object).forEach(function (key) {
        collection.push(key);
      });
    });

    return new this.constructor(collection).unique();
  }

  return new this.constructor(Object.keys(this.items));
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function last(fn) {
  if (typeof fn === 'function') {
    var collection = this.items.filter(fn);

    return collection[collection.length - 1];
  }

  return this.items[this.items.length - 1];
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function macro(name, fn) {
  this.constructor.prototype[name] = fn;
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function map(fn) {
  return new this.constructor(this.items.map(fn));
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function mapWithKeys(fn) {
  var collection = {};

  this.items.forEach(function (item) {
    var array = fn(item);
    collection[array[0]] = array[1];
  });

  return new this.constructor(collection);
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

module.exports = function max(key) {
  if (typeof key === 'string') {
    return Math.max.apply(Math, _toConsumableArray(this.pluck(key).all()));
  }

  return Math.max.apply(Math, _toConsumableArray(this.items));
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function median(key) {
  var length = this.items.length;

  if (key === undefined) {
    if (length % 2 === 0) {
      return (this.items[length / 2 - 1] + this.items[length / 2]) / 2;
    }

    return this.items[Math.floor(length / 2)];
  }

  if (length % 2 === 0) {
    return (this.items[length / 2 - 1][key] + this.items[length / 2][key]) / 2;
  }

  return this.items[Math.floor(length / 2)][key];
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function merge(objectOrArray) {
  if (Array.isArray(objectOrArray)) {
    return new this.constructor(this.items.concat(objectOrArray));
  }

  var collection = Object.create(this.items);

  Object.keys(objectOrArray).forEach(function (key) {
    collection[key] = objectOrArray[key];
  });

  return new this.constructor(collection);
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

module.exports = function min(key) {
  if (key !== undefined) {
    return Math.min.apply(Math, _toConsumableArray(this.pluck(key).all()));
  }

  return Math.min.apply(Math, _toConsumableArray(this.items));
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function mode(key) {
  var values = [];
  var highestCount = 1;

  if (!this.items.length) {
    return null;
  }

  this.items.forEach(function (item) {
    var tempValues = values.filter(function (value) {
      if (key !== undefined) {
        return value.key === item[key];
      }

      return value.key === item;
    });

    if (!tempValues.length) {
      if (key !== undefined) {
        values.push({ key: item[key], count: 1 });
      } else {
        values.push({ key: item, count: 1 });
      }
    } else {
      tempValues[0].count += 1;
      var count = tempValues[0].count;

      if (count > highestCount) {
        highestCount = count;
      }
    }
  });

  return values.filter(function (value) {
    return value.count === highestCount;
  }).map(function (value) {
    return value.key;
  });
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function nth(n) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var collection = this.items.slice(offset).filter(function (item, index) {
    return index % n === 0;
  });

  return new this.constructor(collection);
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function only(properties) {
  var _this = this;

  var collection = {};

  Object.keys(this.items).forEach(function (prop) {
    if (properties.indexOf(prop) !== -1) {
      collection[prop] = _this.items[prop];
    }
  });

  return new this.constructor(collection);
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function partition(fn) {
  var arrays = [[], []];

  this.items.forEach(function (item) {
    if (fn(item) === true) {
      arrays[0].push(item);
    } else {
      arrays[1].push(item);
    }
  });

  return arrays;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function pipe(fn) {
  return fn(this);
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function pluck(value, key) {
  if (key !== undefined) {
    var _collection = {};

    this.items.forEach(function (item) {
      _collection[item[key]] = item[value];
    });

    return new this.constructor(_collection);
  }

  var collection = this.items.filter(function (item) {
    return item[value] !== undefined;
  }).map(function (item) {
    return item[value];
  });

  return new this.constructor(collection);
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function pop() {
  return this.items.pop();
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function prepend(value, key) {
  if (key !== undefined) {
    return this.put(key, value);
  }

  this.items.unshift(value);

  return this;
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function pull(key) {
  var value = this.items[key] || null;
  delete this.items[key];
  return value;
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function push(item) {
  this.items.push(item);

  return this;
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function put(key, value) {
  this.items[key] = value;

  return this;
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function random() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  var randomCollection = this.slice().shuffle().take(length);

  if (length === 1) {
    return randomCollection.first();
  }

  return randomCollection;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function reduce(fn, carry) {
  var result = null;
  var reduceCarry = null;

  if (carry !== undefined) {
    reduceCarry = carry;
  }

  this.items.forEach(function (item) {
    result = fn(reduceCarry, item);
    reduceCarry = result;
  });

  return result;
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function reject(fn) {
  return new this.constructor(this.items.filter(function (item) {
    return !fn(item);
  }));
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function reverse() {
  var collection = [].concat(this.items).reverse();

  return new this.constructor(collection);
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function search(valueOrFunction, strict) {
  var valueFn = valueOrFunction;

  if (typeof valueOrFunction === 'function') {
    valueFn = this.items.filter(function (value, key) {
      return valueOrFunction(value, key);
    })[0];
  }

  var itemKey = this.items.filter(function (item) {
    if (strict === true) {
      return item === valueFn;
    }

    return item === Number(valueFn) || item === valueFn.toString();
  })[0];

  var index = this.items.indexOf(itemKey);

  if (index === -1) {
    return false;
  }

  return index;
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function shift() {
  return this.items.shift();
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function shuffle() {
  var j = void 0;
  var x = void 0;
  var i = void 0;

  for (i = this.items.length; i; i -= 1) {
    j = Math.floor(Math.random() * i);
    x = this.items[i - 1];
    this.items[i - 1] = this.items[j];
    this.items[j] = x;
  }

  return this;
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function slice(remove, limit) {
  var collection = this.items.slice(remove);

  if (limit !== undefined) {
    collection = collection.slice(0, limit);
  }

  return new this.constructor(collection);
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function sort(fn) {
  var collection = [].concat(this.items);

  if (fn === undefined) {
    if (this.every(function (item) {
      return typeof item === 'number';
    })) {
      collection.sort(function (a, b) {
        return a - b;
      });
    } else {
      collection.sort();
    }
  } else {
    collection.sort(fn);
  }

  return new this.constructor(collection);
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function sortBy(valueOrFunction) {
  var collection = [].concat(this.items);

  if (typeof valueOrFunction === 'function') {
    collection.sort(function (a, b) {
      if (valueOrFunction(a) < valueOrFunction(b)) return -1;
      if (valueOrFunction(a) > valueOrFunction(b)) return 1;
      return 0;
    });
  } else {
    collection.sort(function (a, b) {
      if (a[valueOrFunction] < b[valueOrFunction]) return -1;
      if (a[valueOrFunction] > b[valueOrFunction]) return 1;
      return 0;
    });
  }

  return new this.constructor(collection);
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function sortByDesc(valueOrFunction) {
  return this.sortBy(valueOrFunction).reverse();
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function splice(index, limit, replace) {
  var slicedCollection = this.slice(index, limit);

  this.items = this.diff(slicedCollection.all()).all();

  if (Array.isArray(replace)) {
    for (var iterator = 0; iterator < replace.length; iterator += 1) {
      this.items.splice(index + iterator, 0, replace[iterator]);
    }
  }

  return slicedCollection;
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function split(numberOfGroups) {
  var itemsPerGroup = Math.round(this.items.length / numberOfGroups);

  var items = JSON.parse(JSON.stringify(this.items));
  var collection = [];

  for (var iterator = 0; iterator < numberOfGroups; iterator += 1) {
    collection.push(items.splice(0, itemsPerGroup));
  }

  return collection;
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function sum(key) {
  return this.items.reduce(function (accumulator, current) {
    if (key === undefined) {
      return accumulator + current;
    } else if (typeof key === 'function') {
      return accumulator + key(current);
    }

    return accumulator + current[key];
  }, 0);
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function take(length) {
  if (length < 0) {
    return new this.constructor(this.items.slice(length));
  }

  return new this.constructor(this.items.slice(0, length));
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function tap(fn) {
  fn(this);
  return this;
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function times(n, fn) {
  for (var iterator = 1; iterator <= n; iterator += 1) {
    this.items.push(fn(iterator));
  }

  return this;
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function toArray() {
  if (Array.isArray(this.items)) {
    return this.all();
  }

  return this.values().all();
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function toJson() {
  return JSON.stringify(this.items);
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function transform(fn) {
  this.items = this.items.map(function (item) {
    return fn(item);
  });

  return this;
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function union(object) {
  var _this = this;

  var collection = Object.create(this.items);

  Object.keys(object).forEach(function (prop) {
    if (_this.items[prop] === undefined) {
      collection[prop] = object[prop];
    }
  });

  return new this.constructor(collection);
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function unique(key) {
  var collection = void 0;

  if (key === undefined) {
    collection = this.items.filter(function (element, index, self) {
      return self.indexOf(element) === index;
    });
  } else {
    collection = [];

    var usedKeys = [];

    for (var iterator = 0; iterator < this.items.length; iterator += 1) {
      var uniqueKey = void 0;
      if (typeof key === 'function') {
        uniqueKey = key(this.items[iterator]);
      } else {
        uniqueKey = this.items[iterator][key];
      }

      if (usedKeys.indexOf(uniqueKey) === -1) {
        collection.push(this.items[iterator]);
        usedKeys.push(uniqueKey);
      }
    }
  }

  return new this.constructor(collection);
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function values() {
  var _this = this;

  var collection = [];

  Object.keys(this.items).forEach(function (property) {
    collection.push(_this.items[property]);
  });

  return new this.constructor(collection);
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function when(value, fn) {
  if (value) {
    fn(this);
  }
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function where(key, operator, value) {
  var comparisonOperator = operator;
  var comparisonValue = value;

  if (value === undefined) {
    comparisonValue = operator;
    comparisonOperator = '===';
  }

  var collection = this.items.filter(function (item) {
    switch (comparisonOperator) {
      case '==':
        return item[key] === Number(comparisonValue) || item[key] === comparisonValue.toString();

      default:
      case '===':
        return item[key] === comparisonValue;

      case '!=':
      case '<>':
        return item[key] !== Number(comparisonValue) && item[key] !== comparisonValue.toString();

      case '!==':
        return item[key] !== comparisonValue;

      case '<':
        return item[key] < comparisonValue;

      case '<=':
        return item[key] <= comparisonValue;

      case '>':
        return item[key] > comparisonValue;

      case '>=':
        return item[key] >= comparisonValue;

    }
  });

  return new this.constructor(collection);
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function whereIn(key, values) {
  var collection = this.items.filter(function (item) {
    return values.indexOf(item[key]) !== -1;
  });

  return new this.constructor(collection);
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function whereNotIn(key, values) {
  var collection = this.items;

  values.forEach(function (value) {
    collection = collection.filter(function (item) {
      return item[key] !== value;
    });
  });

  return new this.constructor(collection);
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function zip(array) {
  var collection = this.items.map(function (item, index) {
    return [item, array[index]];
  });

  return new this.constructor(collection);
};

/***/ })
/******/ ]);
});