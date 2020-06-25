var collect =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/helpers/clone.js":
/*!*******************************!*\
  !*** ./dist/helpers/clone.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Clone helper\n *\n * Clone an array or object\n *\n * @param items\n * @returns {*}\n */\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nmodule.exports = function clone(items) {\n  var cloned = void 0;\n\n  if (Array.isArray(items)) {\n    var _cloned;\n\n    cloned = [];\n\n    (_cloned = cloned).push.apply(_cloned, _toConsumableArray(items));\n  } else {\n    cloned = {};\n\n    Object.keys(items).forEach(function (prop) {\n      cloned[prop] = items[prop];\n    });\n  }\n\n  return cloned;\n};\n\n//# sourceURL=webpack://collect/./dist/helpers/clone.js?");

/***/ }),

/***/ "./dist/helpers/is.js":
/*!****************************!*\
  !*** ./dist/helpers/is.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nmodule.exports = {\n  /**\n   * @returns {boolean}\n   */\n  isArray: function isArray(item) {\n    return Array.isArray(item);\n  },\n\n  /**\n   * @returns {boolean}\n   */\n  isObject: function isObject(item) {\n    return (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && Array.isArray(item) === false && item !== null;\n  },\n\n  /**\n   * @returns {boolean}\n   */\n  isFunction: function isFunction(item) {\n    return typeof item === 'function';\n  }\n};\n\n//# sourceURL=webpack://collect/./dist/helpers/is.js?");

/***/ }),

/***/ "./dist/helpers/nestedValue.js":
/*!*************************************!*\
  !*** ./dist/helpers/nestedValue.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Get value of a nested property\n *\n * @param mainObject\n * @param key\n * @returns {*}\n */\n\nmodule.exports = function nestedValue(mainObject, key) {\n  try {\n    return key.split('.').reduce(function (obj, property) {\n      return obj[property];\n    }, mainObject);\n  } catch (err) {\n    // If we end up here, we're not working with an object, and @var mainObject is the value itself\n    return mainObject;\n  }\n};\n\n//# sourceURL=webpack://collect/./dist/helpers/nestedValue.js?");

/***/ }),

/***/ "./dist/helpers/values.js":
/*!********************************!*\
  !*** ./dist/helpers/values.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n\n/**\n * Values helper\n *\n * Retrieve values from [this.items] when it is an array, object or Collection\n *\n * @returns {*}\n * @param items\n */\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nmodule.exports = function values(items) {\n  var valuesArray = [];\n\n  if (Array.isArray(items)) {\n    valuesArray.push.apply(valuesArray, _toConsumableArray(items));\n  } else if (items.constructor.name === 'Collection') {\n    valuesArray.push.apply(valuesArray, _toConsumableArray(items.all()));\n  } else {\n    Object.keys(items).forEach(function (prop) {\n      return valuesArray.push(items[prop]);\n    });\n  }\n\n  return valuesArray;\n};\n\n//# sourceURL=webpack://collect/./dist/helpers/values.js?");

/***/ }),

/***/ "./dist/helpers/variadic.js":
/*!**********************************!*\
  !*** ./dist/helpers/variadic.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Variadic helper function\n *\n * @param args\n * @returns {*}\n */\n\nmodule.exports = function variadic(args) {\n  if (Array.isArray(args[0])) {\n    return args[0];\n  }\n\n  return args;\n};\n\n//# sourceURL=webpack://collect/./dist/helpers/variadic.js?");

/***/ }),

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nfunction Collection(collection) {\n  if (collection !== undefined && !Array.isArray(collection) && (typeof collection === 'undefined' ? 'undefined' : _typeof(collection)) !== 'object') {\n    this.items = [collection];\n  } else if (collection instanceof this.constructor) {\n    this.items = collection.all();\n  } else {\n    this.items = collection || [];\n  }\n}\n\n/**\n * Symbol.iterator\n * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator\n */\nvar SymbolIterator = __webpack_require__(/*! ./methods/symbol.iterator */ \"./dist/methods/symbol.iterator.js\");\n\nif (typeof Symbol !== 'undefined') {\n  Collection.prototype[Symbol.iterator] = SymbolIterator;\n}\n\n/**\n * Support JSON.stringify\n * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify\n */\nCollection.prototype.toJSON = function toJSON() {\n  return this.items;\n};\n\nCollection.prototype.all = __webpack_require__(/*! ./methods/all */ \"./dist/methods/all.js\");\nCollection.prototype.average = __webpack_require__(/*! ./methods/average */ \"./dist/methods/average.js\");\nCollection.prototype.avg = __webpack_require__(/*! ./methods/avg */ \"./dist/methods/avg.js\");\nCollection.prototype.chunk = __webpack_require__(/*! ./methods/chunk */ \"./dist/methods/chunk.js\");\nCollection.prototype.collapse = __webpack_require__(/*! ./methods/collapse */ \"./dist/methods/collapse.js\");\nCollection.prototype.combine = __webpack_require__(/*! ./methods/combine */ \"./dist/methods/combine.js\");\nCollection.prototype.concat = __webpack_require__(/*! ./methods/concat */ \"./dist/methods/concat.js\");\nCollection.prototype.contains = __webpack_require__(/*! ./methods/contains */ \"./dist/methods/contains.js\");\nCollection.prototype.count = __webpack_require__(/*! ./methods/count */ \"./dist/methods/count.js\");\nCollection.prototype.countBy = __webpack_require__(/*! ./methods/countBy */ \"./dist/methods/countBy.js\");\nCollection.prototype.crossJoin = __webpack_require__(/*! ./methods/crossJoin */ \"./dist/methods/crossJoin.js\");\nCollection.prototype.dd = __webpack_require__(/*! ./methods/dd */ \"./dist/methods/dd.js\");\nCollection.prototype.diff = __webpack_require__(/*! ./methods/diff */ \"./dist/methods/diff.js\");\nCollection.prototype.diffAssoc = __webpack_require__(/*! ./methods/diffAssoc */ \"./dist/methods/diffAssoc.js\");\nCollection.prototype.diffKeys = __webpack_require__(/*! ./methods/diffKeys */ \"./dist/methods/diffKeys.js\");\nCollection.prototype.dump = __webpack_require__(/*! ./methods/dump */ \"./dist/methods/dump.js\");\nCollection.prototype.duplicates = __webpack_require__(/*! ./methods/duplicates */ \"./dist/methods/duplicates.js\");\nCollection.prototype.each = __webpack_require__(/*! ./methods/each */ \"./dist/methods/each.js\");\nCollection.prototype.eachSpread = __webpack_require__(/*! ./methods/eachSpread */ \"./dist/methods/eachSpread.js\");\nCollection.prototype.every = __webpack_require__(/*! ./methods/every */ \"./dist/methods/every.js\");\nCollection.prototype.except = __webpack_require__(/*! ./methods/except */ \"./dist/methods/except.js\");\nCollection.prototype.filter = __webpack_require__(/*! ./methods/filter */ \"./dist/methods/filter.js\");\nCollection.prototype.first = __webpack_require__(/*! ./methods/first */ \"./dist/methods/first.js\");\nCollection.prototype.firstWhere = __webpack_require__(/*! ./methods/firstWhere */ \"./dist/methods/firstWhere.js\");\nCollection.prototype.flatMap = __webpack_require__(/*! ./methods/flatMap */ \"./dist/methods/flatMap.js\");\nCollection.prototype.flatten = __webpack_require__(/*! ./methods/flatten */ \"./dist/methods/flatten.js\");\nCollection.prototype.flip = __webpack_require__(/*! ./methods/flip */ \"./dist/methods/flip.js\");\nCollection.prototype.forPage = __webpack_require__(/*! ./methods/forPage */ \"./dist/methods/forPage.js\");\nCollection.prototype.forget = __webpack_require__(/*! ./methods/forget */ \"./dist/methods/forget.js\");\nCollection.prototype.get = __webpack_require__(/*! ./methods/get */ \"./dist/methods/get.js\");\nCollection.prototype.groupBy = __webpack_require__(/*! ./methods/groupBy */ \"./dist/methods/groupBy.js\");\nCollection.prototype.has = __webpack_require__(/*! ./methods/has */ \"./dist/methods/has.js\");\nCollection.prototype.implode = __webpack_require__(/*! ./methods/implode */ \"./dist/methods/implode.js\");\nCollection.prototype.intersect = __webpack_require__(/*! ./methods/intersect */ \"./dist/methods/intersect.js\");\nCollection.prototype.intersectByKeys = __webpack_require__(/*! ./methods/intersectByKeys */ \"./dist/methods/intersectByKeys.js\");\nCollection.prototype.isEmpty = __webpack_require__(/*! ./methods/isEmpty */ \"./dist/methods/isEmpty.js\");\nCollection.prototype.isNotEmpty = __webpack_require__(/*! ./methods/isNotEmpty */ \"./dist/methods/isNotEmpty.js\");\nCollection.prototype.join = __webpack_require__(/*! ./methods/join */ \"./dist/methods/join.js\");\nCollection.prototype.keyBy = __webpack_require__(/*! ./methods/keyBy */ \"./dist/methods/keyBy.js\");\nCollection.prototype.keys = __webpack_require__(/*! ./methods/keys */ \"./dist/methods/keys.js\");\nCollection.prototype.last = __webpack_require__(/*! ./methods/last */ \"./dist/methods/last.js\");\nCollection.prototype.macro = __webpack_require__(/*! ./methods/macro */ \"./dist/methods/macro.js\");\nCollection.prototype.make = __webpack_require__(/*! ./methods/make */ \"./dist/methods/make.js\");\nCollection.prototype.map = __webpack_require__(/*! ./methods/map */ \"./dist/methods/map.js\");\nCollection.prototype.mapSpread = __webpack_require__(/*! ./methods/mapSpread */ \"./dist/methods/mapSpread.js\");\nCollection.prototype.mapToDictionary = __webpack_require__(/*! ./methods/mapToDictionary */ \"./dist/methods/mapToDictionary.js\");\nCollection.prototype.mapInto = __webpack_require__(/*! ./methods/mapInto */ \"./dist/methods/mapInto.js\");\nCollection.prototype.mapToGroups = __webpack_require__(/*! ./methods/mapToGroups */ \"./dist/methods/mapToGroups.js\");\nCollection.prototype.mapWithKeys = __webpack_require__(/*! ./methods/mapWithKeys */ \"./dist/methods/mapWithKeys.js\");\nCollection.prototype.max = __webpack_require__(/*! ./methods/max */ \"./dist/methods/max.js\");\nCollection.prototype.median = __webpack_require__(/*! ./methods/median */ \"./dist/methods/median.js\");\nCollection.prototype.merge = __webpack_require__(/*! ./methods/merge */ \"./dist/methods/merge.js\");\nCollection.prototype.mergeRecursive = __webpack_require__(/*! ./methods/mergeRecursive */ \"./dist/methods/mergeRecursive.js\");\nCollection.prototype.min = __webpack_require__(/*! ./methods/min */ \"./dist/methods/min.js\");\nCollection.prototype.mode = __webpack_require__(/*! ./methods/mode */ \"./dist/methods/mode.js\");\nCollection.prototype.nth = __webpack_require__(/*! ./methods/nth */ \"./dist/methods/nth.js\");\nCollection.prototype.only = __webpack_require__(/*! ./methods/only */ \"./dist/methods/only.js\");\nCollection.prototype.pad = __webpack_require__(/*! ./methods/pad */ \"./dist/methods/pad.js\");\nCollection.prototype.partition = __webpack_require__(/*! ./methods/partition */ \"./dist/methods/partition.js\");\nCollection.prototype.pipe = __webpack_require__(/*! ./methods/pipe */ \"./dist/methods/pipe.js\");\nCollection.prototype.pluck = __webpack_require__(/*! ./methods/pluck */ \"./dist/methods/pluck.js\");\nCollection.prototype.pop = __webpack_require__(/*! ./methods/pop */ \"./dist/methods/pop.js\");\nCollection.prototype.prepend = __webpack_require__(/*! ./methods/prepend */ \"./dist/methods/prepend.js\");\nCollection.prototype.pull = __webpack_require__(/*! ./methods/pull */ \"./dist/methods/pull.js\");\nCollection.prototype.push = __webpack_require__(/*! ./methods/push */ \"./dist/methods/push.js\");\nCollection.prototype.put = __webpack_require__(/*! ./methods/put */ \"./dist/methods/put.js\");\nCollection.prototype.random = __webpack_require__(/*! ./methods/random */ \"./dist/methods/random.js\");\nCollection.prototype.reduce = __webpack_require__(/*! ./methods/reduce */ \"./dist/methods/reduce.js\");\nCollection.prototype.reject = __webpack_require__(/*! ./methods/reject */ \"./dist/methods/reject.js\");\nCollection.prototype.replace = __webpack_require__(/*! ./methods/replace */ \"./dist/methods/replace.js\");\nCollection.prototype.replaceRecursive = __webpack_require__(/*! ./methods/replaceRecursive */ \"./dist/methods/replaceRecursive.js\");\nCollection.prototype.reverse = __webpack_require__(/*! ./methods/reverse */ \"./dist/methods/reverse.js\");\nCollection.prototype.search = __webpack_require__(/*! ./methods/search */ \"./dist/methods/search.js\");\nCollection.prototype.shift = __webpack_require__(/*! ./methods/shift */ \"./dist/methods/shift.js\");\nCollection.prototype.shuffle = __webpack_require__(/*! ./methods/shuffle */ \"./dist/methods/shuffle.js\");\nCollection.prototype.skip = __webpack_require__(/*! ./methods/skip */ \"./dist/methods/skip.js\");\nCollection.prototype.slice = __webpack_require__(/*! ./methods/slice */ \"./dist/methods/slice.js\");\nCollection.prototype.some = __webpack_require__(/*! ./methods/some */ \"./dist/methods/some.js\");\nCollection.prototype.sort = __webpack_require__(/*! ./methods/sort */ \"./dist/methods/sort.js\");\nCollection.prototype.sortDesc = __webpack_require__(/*! ./methods/sortDesc */ \"./dist/methods/sortDesc.js\");\nCollection.prototype.sortBy = __webpack_require__(/*! ./methods/sortBy */ \"./dist/methods/sortBy.js\");\nCollection.prototype.sortByDesc = __webpack_require__(/*! ./methods/sortByDesc */ \"./dist/methods/sortByDesc.js\");\nCollection.prototype.sortKeys = __webpack_require__(/*! ./methods/sortKeys */ \"./dist/methods/sortKeys.js\");\nCollection.prototype.sortKeysDesc = __webpack_require__(/*! ./methods/sortKeysDesc */ \"./dist/methods/sortKeysDesc.js\");\nCollection.prototype.splice = __webpack_require__(/*! ./methods/splice */ \"./dist/methods/splice.js\");\nCollection.prototype.split = __webpack_require__(/*! ./methods/split */ \"./dist/methods/split.js\");\nCollection.prototype.sum = __webpack_require__(/*! ./methods/sum */ \"./dist/methods/sum.js\");\nCollection.prototype.take = __webpack_require__(/*! ./methods/take */ \"./dist/methods/take.js\");\nCollection.prototype.tap = __webpack_require__(/*! ./methods/tap */ \"./dist/methods/tap.js\");\nCollection.prototype.times = __webpack_require__(/*! ./methods/times */ \"./dist/methods/times.js\");\nCollection.prototype.toArray = __webpack_require__(/*! ./methods/toArray */ \"./dist/methods/toArray.js\");\nCollection.prototype.toJson = __webpack_require__(/*! ./methods/toJson */ \"./dist/methods/toJson.js\");\nCollection.prototype.transform = __webpack_require__(/*! ./methods/transform */ \"./dist/methods/transform.js\");\nCollection.prototype.unless = __webpack_require__(/*! ./methods/unless */ \"./dist/methods/unless.js\");\nCollection.prototype.unlessEmpty = __webpack_require__(/*! ./methods/whenNotEmpty */ \"./dist/methods/whenNotEmpty.js\");\nCollection.prototype.unlessNotEmpty = __webpack_require__(/*! ./methods/whenEmpty */ \"./dist/methods/whenEmpty.js\");\nCollection.prototype.union = __webpack_require__(/*! ./methods/union */ \"./dist/methods/union.js\");\nCollection.prototype.unique = __webpack_require__(/*! ./methods/unique */ \"./dist/methods/unique.js\");\nCollection.prototype.unwrap = __webpack_require__(/*! ./methods/unwrap */ \"./dist/methods/unwrap.js\");\nCollection.prototype.values = __webpack_require__(/*! ./methods/values */ \"./dist/methods/values.js\");\nCollection.prototype.when = __webpack_require__(/*! ./methods/when */ \"./dist/methods/when.js\");\nCollection.prototype.whenEmpty = __webpack_require__(/*! ./methods/whenEmpty */ \"./dist/methods/whenEmpty.js\");\nCollection.prototype.whenNotEmpty = __webpack_require__(/*! ./methods/whenNotEmpty */ \"./dist/methods/whenNotEmpty.js\");\nCollection.prototype.where = __webpack_require__(/*! ./methods/where */ \"./dist/methods/where.js\");\nCollection.prototype.whereBetween = __webpack_require__(/*! ./methods/whereBetween */ \"./dist/methods/whereBetween.js\");\nCollection.prototype.whereIn = __webpack_require__(/*! ./methods/whereIn */ \"./dist/methods/whereIn.js\");\nCollection.prototype.whereInstanceOf = __webpack_require__(/*! ./methods/whereInstanceOf */ \"./dist/methods/whereInstanceOf.js\");\nCollection.prototype.whereNotBetween = __webpack_require__(/*! ./methods/whereNotBetween */ \"./dist/methods/whereNotBetween.js\");\nCollection.prototype.whereNotIn = __webpack_require__(/*! ./methods/whereNotIn */ \"./dist/methods/whereNotIn.js\");\nCollection.prototype.whereNull = __webpack_require__(/*! ./methods/whereNull */ \"./dist/methods/whereNull.js\");\nCollection.prototype.whereNotNull = __webpack_require__(/*! ./methods/whereNotNull */ \"./dist/methods/whereNotNull.js\");\nCollection.prototype.wrap = __webpack_require__(/*! ./methods/wrap */ \"./dist/methods/wrap.js\");\nCollection.prototype.zip = __webpack_require__(/*! ./methods/zip */ \"./dist/methods/zip.js\");\n\nvar collect = function collect(collection) {\n  return new Collection(collection);\n};\n\nmodule.exports = collect;\nmodule.exports.collect = collect;\nmodule.exports.default = collect;\nmodule.exports.Collection = Collection;\n\n//# sourceURL=webpack://collect/./dist/index.js?");

/***/ }),

/***/ "./dist/methods/all.js":
/*!*****************************!*\
  !*** ./dist/methods/all.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function all() {\n  return this.items;\n};\n\n//# sourceURL=webpack://collect/./dist/methods/all.js?");

/***/ }),

/***/ "./dist/methods/average.js":
/*!*********************************!*\
  !*** ./dist/methods/average.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function average(key) {\n  if (key === undefined) {\n    return this.sum() / this.items.length;\n  }\n\n  return new this.constructor(this.items).pluck(key).sum() / this.items.length;\n};\n\n//# sourceURL=webpack://collect/./dist/methods/average.js?");

/***/ }),

/***/ "./dist/methods/avg.js":
/*!*****************************!*\
  !*** ./dist/methods/avg.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar average = __webpack_require__(/*! ./average */ \"./dist/methods/average.js\");\n\nmodule.exports = average;\n\n//# sourceURL=webpack://collect/./dist/methods/avg.js?");

/***/ }),

/***/ "./dist/methods/chunk.js":
/*!*******************************!*\
  !*** ./dist/methods/chunk.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nmodule.exports = function chunk(size) {\n  var _this = this;\n\n  var chunks = [];\n  var index = 0;\n\n  if (Array.isArray(this.items)) {\n    do {\n      var items = this.items.slice(index, index + size);\n      var collection = new this.constructor(items);\n\n      chunks.push(collection);\n      index += size;\n    } while (index < this.items.length);\n  } else if (_typeof(this.items) === 'object') {\n    var keys = Object.keys(this.items);\n\n    var _loop = function _loop() {\n      var keysOfChunk = keys.slice(index, index + size);\n      var collection = new _this.constructor({});\n\n      keysOfChunk.forEach(function (key) {\n        return collection.put(key, _this.items[key]);\n      });\n\n      chunks.push(collection);\n      index += size;\n    };\n\n    do {\n      _loop();\n    } while (index < keys.length);\n  } else {\n    chunks.push(new this.constructor([this.items]));\n  }\n\n  return new this.constructor(chunks);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/chunk.js?");

/***/ }),

/***/ "./dist/methods/collapse.js":
/*!**********************************!*\
  !*** ./dist/methods/collapse.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nmodule.exports = function collapse() {\n  var _ref;\n\n  return new this.constructor((_ref = []).concat.apply(_ref, _toConsumableArray(this.items)));\n};\n\n//# sourceURL=webpack://collect/./dist/methods/collapse.js?");

/***/ }),

/***/ "./dist/methods/combine.js":
/*!*********************************!*\
  !*** ./dist/methods/combine.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nmodule.exports = function combine(array) {\n  var _this = this;\n\n  var values = array;\n\n  if (values instanceof this.constructor) {\n    values = array.all();\n  }\n\n  var collection = {};\n\n  if (Array.isArray(this.items) && Array.isArray(values)) {\n    this.items.forEach(function (key, iterator) {\n      collection[key] = values[iterator];\n    });\n  } else if (_typeof(this.items) === 'object' && (typeof values === 'undefined' ? 'undefined' : _typeof(values)) === 'object') {\n    Object.keys(this.items).forEach(function (key, index) {\n      collection[_this.items[key]] = values[Object.keys(values)[index]];\n    });\n  } else if (Array.isArray(this.items)) {\n    collection[this.items[0]] = values;\n  } else if (typeof this.items === 'string' && Array.isArray(values)) {\n    var _values = values;\n\n    var _values2 = _slicedToArray(_values, 1);\n\n    collection[this.items] = _values2[0];\n  } else if (typeof this.items === 'string') {\n    collection[this.items] = values;\n  }\n\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/combine.js?");

/***/ }),

/***/ "./dist/methods/concat.js":
/*!********************************!*\
  !*** ./dist/methods/concat.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar clone = __webpack_require__(/*! ../helpers/clone */ \"./dist/helpers/clone.js\");\n\nmodule.exports = function concat(collectionOrArrayOrObject) {\n  var list = collectionOrArrayOrObject;\n\n  if (collectionOrArrayOrObject instanceof this.constructor) {\n    list = collectionOrArrayOrObject.all();\n  } else if ((typeof collectionOrArrayOrObject === 'undefined' ? 'undefined' : _typeof(collectionOrArrayOrObject)) === 'object') {\n    list = [];\n    Object.keys(collectionOrArrayOrObject).forEach(function (property) {\n      list.push(collectionOrArrayOrObject[property]);\n    });\n  }\n\n  var collection = clone(this.items);\n\n  list.forEach(function (item) {\n    if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {\n      Object.keys(item).forEach(function (key) {\n        return collection.push(item[key]);\n      });\n    } else {\n      collection.push(item);\n    }\n  });\n\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/concat.js?");

/***/ }),

/***/ "./dist/methods/contains.js":
/*!**********************************!*\
  !*** ./dist/methods/contains.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar values = __webpack_require__(/*! ../helpers/values */ \"./dist/helpers/values.js\");\n\nvar _require = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\"),\n    isFunction = _require.isFunction;\n\nmodule.exports = function contains(key, value) {\n  if (value !== undefined) {\n    if (Array.isArray(this.items)) {\n      return this.items.filter(function (items) {\n        return items[key] !== undefined && items[key] === value;\n      }).length > 0;\n    }\n\n    return this.items[key] !== undefined && this.items[key] === value;\n  }\n\n  if (isFunction(key)) {\n    return this.items.filter(function (item, index) {\n      return key(item, index);\n    }).length > 0;\n  }\n\n  if (Array.isArray(this.items)) {\n    return this.items.indexOf(key) !== -1;\n  }\n\n  var keysAndValues = values(this.items);\n  keysAndValues.push.apply(keysAndValues, _toConsumableArray(Object.keys(this.items)));\n\n  return keysAndValues.indexOf(key) !== -1;\n};\n\n//# sourceURL=webpack://collect/./dist/methods/contains.js?");

/***/ }),

/***/ "./dist/methods/count.js":
/*!*******************************!*\
  !*** ./dist/methods/count.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function count() {\n  var arrayLength = 0;\n\n  if (Array.isArray(this.items)) {\n    arrayLength = this.items.length;\n  }\n\n  return Math.max(Object.keys(this.items).length, arrayLength);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/count.js?");

/***/ }),

/***/ "./dist/methods/countBy.js":
/*!*********************************!*\
  !*** ./dist/methods/countBy.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function countBy() {\n  var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (value) {\n    return value;\n  };\n\n  return new this.constructor(this.items).groupBy(fn).map(function (value) {\n    return value.count();\n  });\n};\n\n//# sourceURL=webpack://collect/./dist/methods/countBy.js?");

/***/ }),

/***/ "./dist/methods/crossJoin.js":
/*!***********************************!*\
  !*** ./dist/methods/crossJoin.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function crossJoin() {\n  function join(collection, constructor, args) {\n    var current = args[0];\n\n    if (current instanceof constructor) {\n      current = current.all();\n    }\n\n    var rest = args.slice(1);\n    var last = !rest.length;\n    var result = [];\n\n    for (var i = 0; i < current.length; i += 1) {\n      var collectionCopy = collection.slice();\n      collectionCopy.push(current[i]);\n\n      if (last) {\n        result.push(collectionCopy);\n      } else {\n        result = result.concat(join(collectionCopy, constructor, rest));\n      }\n    }\n\n    return result;\n  }\n\n  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {\n    values[_key] = arguments[_key];\n  }\n\n  return new this.constructor(join([], this.constructor, [].concat([this.items], values)));\n};\n\n//# sourceURL=webpack://collect/./dist/methods/crossJoin.js?");

/***/ }),

/***/ "./dist/methods/dd.js":
/*!****************************!*\
  !*** ./dist/methods/dd.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {\n\nmodule.exports = function dd() {\n  this.dump();\n\n  if (typeof process !== 'undefined') {\n    process.exit(1);\n  }\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack://collect/./dist/methods/dd.js?");

/***/ }),

/***/ "./dist/methods/diff.js":
/*!******************************!*\
  !*** ./dist/methods/diff.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function diff(values) {\n  var valuesToDiff = void 0;\n\n  if (values instanceof this.constructor) {\n    valuesToDiff = values.all();\n  } else {\n    valuesToDiff = values;\n  }\n\n  var collection = this.items.filter(function (item) {\n    return valuesToDiff.indexOf(item) === -1;\n  });\n\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/diff.js?");

/***/ }),

/***/ "./dist/methods/diffAssoc.js":
/*!***********************************!*\
  !*** ./dist/methods/diffAssoc.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function diffAssoc(values) {\n  var _this = this;\n\n  var diffValues = values;\n\n  if (values instanceof this.constructor) {\n    diffValues = values.all();\n  }\n\n  var collection = {};\n\n  Object.keys(this.items).forEach(function (key) {\n    if (diffValues[key] === undefined || diffValues[key] !== _this.items[key]) {\n      collection[key] = _this.items[key];\n    }\n  });\n\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/diffAssoc.js?");

/***/ }),

/***/ "./dist/methods/diffKeys.js":
/*!**********************************!*\
  !*** ./dist/methods/diffKeys.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function diffKeys(object) {\n  var objectToDiff = void 0;\n\n  if (object instanceof this.constructor) {\n    objectToDiff = object.all();\n  } else {\n    objectToDiff = object;\n  }\n\n  var objectKeys = Object.keys(objectToDiff);\n\n  var remainingKeys = Object.keys(this.items).filter(function (item) {\n    return objectKeys.indexOf(item) === -1;\n  });\n\n  return new this.constructor(this.items).only(remainingKeys);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/diffKeys.js?");

/***/ }),

/***/ "./dist/methods/dump.js":
/*!******************************!*\
  !*** ./dist/methods/dump.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function dump() {\n  // eslint-disable-next-line\n  console.log(this);\n\n  return this;\n};\n\n//# sourceURL=webpack://collect/./dist/methods/dump.js?");

/***/ }),

/***/ "./dist/methods/duplicates.js":
/*!************************************!*\
  !*** ./dist/methods/duplicates.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nmodule.exports = function duplicates() {\n  var _this = this;\n\n  var occuredValues = [];\n  var duplicateValues = {};\n\n  var stringifiedValue = function stringifiedValue(value) {\n    if (Array.isArray(value) || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {\n      return JSON.stringify(value);\n    }\n\n    return value;\n  };\n\n  if (Array.isArray(this.items)) {\n    this.items.forEach(function (value, index) {\n      var valueAsString = stringifiedValue(value);\n\n      if (occuredValues.indexOf(valueAsString) === -1) {\n        occuredValues.push(valueAsString);\n      } else {\n        duplicateValues[index] = value;\n      }\n    });\n  } else if (_typeof(this.items) === 'object') {\n    Object.keys(this.items).forEach(function (key) {\n      var valueAsString = stringifiedValue(_this.items[key]);\n\n      if (occuredValues.indexOf(valueAsString) === -1) {\n        occuredValues.push(valueAsString);\n      } else {\n        duplicateValues[key] = _this.items[key];\n      }\n    });\n  }\n\n  return new this.constructor(duplicateValues);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/duplicates.js?");

/***/ }),

/***/ "./dist/methods/each.js":
/*!******************************!*\
  !*** ./dist/methods/each.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function each(fn) {\n  var stop = false;\n\n  if (Array.isArray(this.items)) {\n    var length = this.items.length;\n\n\n    for (var index = 0; index < length && !stop; index += 1) {\n      stop = fn(this.items[index], index, this.items) === false;\n    }\n  } else {\n    var keys = Object.keys(this.items);\n    var _length = keys.length;\n\n\n    for (var _index = 0; _index < _length && !stop; _index += 1) {\n      var key = keys[_index];\n\n      stop = fn(this.items[key], key, this.items) === false;\n    }\n  }\n\n  return this;\n};\n\n//# sourceURL=webpack://collect/./dist/methods/each.js?");

/***/ }),

/***/ "./dist/methods/eachSpread.js":
/*!************************************!*\
  !*** ./dist/methods/eachSpread.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nmodule.exports = function eachSpread(fn) {\n  this.each(function (values, key) {\n    fn.apply(undefined, _toConsumableArray(values).concat([key]));\n  });\n\n  return this;\n};\n\n//# sourceURL=webpack://collect/./dist/methods/eachSpread.js?");

/***/ }),

/***/ "./dist/methods/every.js":
/*!*******************************!*\
  !*** ./dist/methods/every.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar values = __webpack_require__(/*! ../helpers/values */ \"./dist/helpers/values.js\");\n\nmodule.exports = function every(fn) {\n  var items = values(this.items);\n\n  return items.every(fn);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/every.js?");

/***/ }),

/***/ "./dist/methods/except.js":
/*!********************************!*\
  !*** ./dist/methods/except.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar variadic = __webpack_require__(/*! ../helpers/variadic */ \"./dist/helpers/variadic.js\");\n\nmodule.exports = function except() {\n  var _this = this;\n\n  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  var properties = variadic(args);\n\n  if (Array.isArray(this.items)) {\n    var _collection = this.items.filter(function (item) {\n      return properties.indexOf(item) === -1;\n    });\n\n    return new this.constructor(_collection);\n  }\n\n  var collection = {};\n\n  Object.keys(this.items).forEach(function (property) {\n    if (properties.indexOf(property) === -1) {\n      collection[property] = _this.items[property];\n    }\n  });\n\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/except.js?");

/***/ }),

/***/ "./dist/methods/filter.js":
/*!********************************!*\
  !*** ./dist/methods/filter.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nfunction falsyValue(item) {\n  if (Array.isArray(item)) {\n    if (item.length) {\n      return false;\n    }\n  } else if (item !== undefined && item !== null && (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {\n    if (Object.keys(item).length) {\n      return false;\n    }\n  } else if (item) {\n    return false;\n  }\n\n  return true;\n}\n\nfunction filterObject(func, items) {\n  var result = {};\n  Object.keys(items).forEach(function (key) {\n    if (func) {\n      if (func(items[key], key)) {\n        result[key] = items[key];\n      }\n    } else if (!falsyValue(items[key])) {\n      result[key] = items[key];\n    }\n  });\n\n  return result;\n}\n\nfunction filterArray(func, items) {\n  if (func) {\n    return items.filter(func);\n  }\n  var result = [];\n  for (var i = 0; i < items.length; i += 1) {\n    var item = items[i];\n    if (!falsyValue(item)) {\n      result.push(item);\n    }\n  }\n\n  return result;\n}\n\nmodule.exports = function filter(fn) {\n  var func = fn || false;\n  var filteredItems = null;\n  if (Array.isArray(this.items)) {\n    filteredItems = filterArray(func, this.items);\n  } else {\n    filteredItems = filterObject(func, this.items);\n  }\n\n  return new this.constructor(filteredItems);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/filter.js?");

/***/ }),

/***/ "./dist/methods/first.js":
/*!*******************************!*\
  !*** ./dist/methods/first.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _require = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\"),\n    isFunction = _require.isFunction;\n\nmodule.exports = function first(fn, defaultValue) {\n  if (isFunction(fn)) {\n    for (var i = 0, length = this.items.length; i < length; i += 1) {\n      var item = this.items[i];\n      if (fn(item)) {\n        return item;\n      }\n    }\n\n    if (isFunction(defaultValue)) {\n      return defaultValue();\n    }\n\n    return defaultValue;\n  }\n\n  if (Array.isArray(this.items) && this.items.length || Object.keys(this.items).length) {\n    if (Array.isArray(this.items)) {\n      return this.items[0];\n    }\n\n    var firstKey = Object.keys(this.items)[0];\n\n    return this.items[firstKey];\n  }\n\n  if (isFunction(defaultValue)) {\n    return defaultValue();\n  }\n\n  return defaultValue;\n};\n\n//# sourceURL=webpack://collect/./dist/methods/first.js?");

/***/ }),

/***/ "./dist/methods/firstWhere.js":
/*!************************************!*\
  !*** ./dist/methods/firstWhere.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function firstWhere(key, operator, value) {\n  return this.where(key, operator, value).first() || null;\n};\n\n//# sourceURL=webpack://collect/./dist/methods/firstWhere.js?");

/***/ }),

/***/ "./dist/methods/flatMap.js":
/*!*********************************!*\
  !*** ./dist/methods/flatMap.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function flatMap(fn) {\n  return this.map(fn).collapse();\n};\n\n//# sourceURL=webpack://collect/./dist/methods/flatMap.js?");

/***/ }),

/***/ "./dist/methods/flatten.js":
/*!*********************************!*\
  !*** ./dist/methods/flatten.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _require = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\"),\n    isArray = _require.isArray,\n    isObject = _require.isObject;\n\nmodule.exports = function flatten(depth) {\n  var flattenDepth = depth || Infinity;\n\n  var fullyFlattened = false;\n  var collection = [];\n\n  var flat = function flat(items) {\n    collection = [];\n\n    if (isArray(items)) {\n      items.forEach(function (item) {\n        if (isArray(item)) {\n          collection = collection.concat(item);\n        } else if (isObject(item)) {\n          Object.keys(item).forEach(function (property) {\n            collection = collection.concat(item[property]);\n          });\n        } else {\n          collection.push(item);\n        }\n      });\n    } else {\n      Object.keys(items).forEach(function (property) {\n        if (isArray(items[property])) {\n          collection = collection.concat(items[property]);\n        } else if (isObject(items[property])) {\n          Object.keys(items[property]).forEach(function (prop) {\n            collection = collection.concat(items[property][prop]);\n          });\n        } else {\n          collection.push(items[property]);\n        }\n      });\n    }\n\n    fullyFlattened = collection.filter(function (item) {\n      return isObject(item);\n    });\n    fullyFlattened = fullyFlattened.length === 0;\n\n    flattenDepth -= 1;\n  };\n\n  flat(this.items);\n\n  while (!fullyFlattened && flattenDepth > 0) {\n    flat(collection);\n  }\n\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/flatten.js?");

/***/ }),

/***/ "./dist/methods/flip.js":
/*!******************************!*\
  !*** ./dist/methods/flip.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function flip() {\n  var _this = this;\n\n  var collection = {};\n\n  if (Array.isArray(this.items)) {\n    Object.keys(this.items).forEach(function (key) {\n      collection[_this.items[key]] = Number(key);\n    });\n  } else {\n    Object.keys(this.items).forEach(function (key) {\n      collection[_this.items[key]] = key;\n    });\n  }\n\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/flip.js?");

/***/ }),

/***/ "./dist/methods/forPage.js":
/*!*********************************!*\
  !*** ./dist/methods/forPage.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function forPage(page, chunk) {\n  var _this = this;\n\n  var collection = {};\n\n  if (Array.isArray(this.items)) {\n    collection = this.items.slice(page * chunk - chunk, page * chunk);\n  } else {\n    Object.keys(this.items).slice(page * chunk - chunk, page * chunk).forEach(function (key) {\n      collection[key] = _this.items[key];\n    });\n  }\n\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/forPage.js?");

/***/ }),

/***/ "./dist/methods/forget.js":
/*!********************************!*\
  !*** ./dist/methods/forget.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function forget(key) {\n  if (Array.isArray(this.items)) {\n    this.items.splice(key, 1);\n  } else {\n    delete this.items[key];\n  }\n\n  return this;\n};\n\n//# sourceURL=webpack://collect/./dist/methods/forget.js?");

/***/ }),

/***/ "./dist/methods/get.js":
/*!*****************************!*\
  !*** ./dist/methods/get.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _require = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\"),\n    isFunction = _require.isFunction;\n\nmodule.exports = function get(key) {\n  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n  if (this.items[key] !== undefined) {\n    return this.items[key];\n  }\n\n  if (isFunction(defaultValue)) {\n    return defaultValue();\n  }\n\n  if (defaultValue !== null) {\n    return defaultValue;\n  }\n\n  return null;\n};\n\n//# sourceURL=webpack://collect/./dist/methods/get.js?");

/***/ }),

/***/ "./dist/methods/groupBy.js":
/*!*********************************!*\
  !*** ./dist/methods/groupBy.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar nestedValue = __webpack_require__(/*! ../helpers/nestedValue */ \"./dist/helpers/nestedValue.js\");\n\nvar _require = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\"),\n    isFunction = _require.isFunction;\n\nmodule.exports = function groupBy(key) {\n  var _this = this;\n\n  var collection = {};\n\n  this.items.forEach(function (item, index) {\n    var resolvedKey = void 0;\n\n    if (isFunction(key)) {\n      resolvedKey = key(item, index);\n    } else if (nestedValue(item, key) || nestedValue(item, key) === 0) {\n      resolvedKey = nestedValue(item, key);\n    } else {\n      resolvedKey = '';\n    }\n\n    if (collection[resolvedKey] === undefined) {\n      collection[resolvedKey] = new _this.constructor([]);\n    }\n\n    collection[resolvedKey].push(item);\n  });\n\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/groupBy.js?");

/***/ }),

/***/ "./dist/methods/has.js":
/*!*****************************!*\
  !*** ./dist/methods/has.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar variadic = __webpack_require__(/*! ../helpers/variadic */ \"./dist/helpers/variadic.js\");\n\nmodule.exports = function has() {\n  var _this = this;\n\n  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  var properties = variadic(args);\n\n  return properties.filter(function (key) {\n    return _this.items[key];\n  }).length === properties.length;\n};\n\n//# sourceURL=webpack://collect/./dist/methods/has.js?");

/***/ }),

/***/ "./dist/methods/implode.js":
/*!*********************************!*\
  !*** ./dist/methods/implode.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function implode(key, glue) {\n  if (glue === undefined) {\n    return this.items.join(key);\n  }\n\n  return new this.constructor(this.items).pluck(key).all().join(glue);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/implode.js?");

/***/ }),

/***/ "./dist/methods/intersect.js":
/*!***********************************!*\
  !*** ./dist/methods/intersect.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function intersect(values) {\n  var intersectValues = values;\n\n  if (values instanceof this.constructor) {\n    intersectValues = values.all();\n  }\n\n  var collection = this.items.filter(function (item) {\n    return intersectValues.indexOf(item) !== -1;\n  });\n\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/intersect.js?");

/***/ }),

/***/ "./dist/methods/intersectByKeys.js":
/*!*****************************************!*\
  !*** ./dist/methods/intersectByKeys.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function intersectByKeys(values) {\n  var _this = this;\n\n  var intersectKeys = Object.keys(values);\n\n  if (values instanceof this.constructor) {\n    intersectKeys = Object.keys(values.all());\n  }\n\n  var collection = {};\n\n  Object.keys(this.items).forEach(function (key) {\n    if (intersectKeys.indexOf(key) !== -1) {\n      collection[key] = _this.items[key];\n    }\n  });\n\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/intersectByKeys.js?");

/***/ }),

/***/ "./dist/methods/isEmpty.js":
/*!*********************************!*\
  !*** ./dist/methods/isEmpty.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function isEmpty() {\n  if (Array.isArray(this.items)) {\n    return !this.items.length;\n  }\n\n  return !Object.keys(this.items).length;\n};\n\n//# sourceURL=webpack://collect/./dist/methods/isEmpty.js?");

/***/ }),

/***/ "./dist/methods/isNotEmpty.js":
/*!************************************!*\
  !*** ./dist/methods/isNotEmpty.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function isNotEmpty() {\n  return !this.isEmpty();\n};\n\n//# sourceURL=webpack://collect/./dist/methods/isNotEmpty.js?");

/***/ }),

/***/ "./dist/methods/join.js":
/*!******************************!*\
  !*** ./dist/methods/join.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function join(glue, finalGlue) {\n  var collection = this.values();\n\n  if (finalGlue === undefined) {\n    return collection.implode(glue);\n  }\n\n  var count = collection.count();\n\n  if (count === 0) {\n    return '';\n  }\n\n  if (count === 1) {\n    return collection.last();\n  }\n\n  var finalItem = collection.pop();\n\n  return collection.implode(glue) + finalGlue + finalItem;\n};\n\n//# sourceURL=webpack://collect/./dist/methods/join.js?");

/***/ }),

/***/ "./dist/methods/keyBy.js":
/*!*******************************!*\
  !*** ./dist/methods/keyBy.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar nestedValue = __webpack_require__(/*! ../helpers/nestedValue */ \"./dist/helpers/nestedValue.js\");\n\nvar _require = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\"),\n    isFunction = _require.isFunction;\n\nmodule.exports = function keyBy(key) {\n  var collection = {};\n\n  if (isFunction(key)) {\n    this.items.forEach(function (item) {\n      collection[key(item)] = item;\n    });\n  } else {\n    this.items.forEach(function (item) {\n      var keyValue = nestedValue(item, key);\n\n      collection[keyValue || ''] = item;\n    });\n  }\n\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/keyBy.js?");

/***/ }),

/***/ "./dist/methods/keys.js":
/*!******************************!*\
  !*** ./dist/methods/keys.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function keys() {\n  var collection = Object.keys(this.items);\n\n  if (Array.isArray(this.items)) {\n    collection = collection.map(Number);\n  }\n\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/keys.js?");

/***/ }),

/***/ "./dist/methods/last.js":
/*!******************************!*\
  !*** ./dist/methods/last.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _require = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\"),\n    isFunction = _require.isFunction;\n\nmodule.exports = function last(fn, defaultValue) {\n  var items = this.items;\n\n\n  if (isFunction(fn)) {\n    items = this.filter(fn).all();\n  }\n\n  if (Array.isArray(items) && !items.length || !Object.keys(items).length) {\n    if (isFunction(defaultValue)) {\n      return defaultValue();\n    }\n\n    return defaultValue;\n  }\n\n  if (Array.isArray(items)) {\n    return items[items.length - 1];\n  }\n  var keys = Object.keys(items);\n\n  return items[keys[keys.length - 1]];\n};\n\n//# sourceURL=webpack://collect/./dist/methods/last.js?");

/***/ }),

/***/ "./dist/methods/macro.js":
/*!*******************************!*\
  !*** ./dist/methods/macro.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function macro(name, fn) {\n  this.constructor.prototype[name] = fn;\n};\n\n//# sourceURL=webpack://collect/./dist/methods/macro.js?");

/***/ }),

/***/ "./dist/methods/make.js":
/*!******************************!*\
  !*** ./dist/methods/make.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function make() {\n  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n\n  return new this.constructor(items);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/make.js?");

/***/ }),

/***/ "./dist/methods/map.js":
/*!*****************************!*\
  !*** ./dist/methods/map.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function map(fn) {\n  var _this = this;\n\n  if (Array.isArray(this.items)) {\n    return new this.constructor(this.items.map(fn));\n  }\n\n  var collection = {};\n\n  Object.keys(this.items).forEach(function (key) {\n    collection[key] = fn(_this.items[key], key);\n  });\n\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/map.js?");

/***/ }),

/***/ "./dist/methods/mapInto.js":
/*!*********************************!*\
  !*** ./dist/methods/mapInto.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function mapInto(ClassName) {\n  return this.map(function (value, key) {\n    return new ClassName(value, key);\n  });\n};\n\n//# sourceURL=webpack://collect/./dist/methods/mapInto.js?");

/***/ }),

/***/ "./dist/methods/mapSpread.js":
/*!***********************************!*\
  !*** ./dist/methods/mapSpread.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nmodule.exports = function mapSpread(fn) {\n  return this.map(function (values, key) {\n    return fn.apply(undefined, _toConsumableArray(values).concat([key]));\n  });\n};\n\n//# sourceURL=webpack://collect/./dist/methods/mapSpread.js?");

/***/ }),

/***/ "./dist/methods/mapToDictionary.js":
/*!*****************************************!*\
  !*** ./dist/methods/mapToDictionary.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nmodule.exports = function mapToDictionary(fn) {\n  var collection = {};\n\n  this.items.forEach(function (item, k) {\n    var _fn = fn(item, k),\n        _fn2 = _slicedToArray(_fn, 2),\n        key = _fn2[0],\n        value = _fn2[1];\n\n    if (collection[key] === undefined) {\n      collection[key] = [value];\n    } else {\n      collection[key].push(value);\n    }\n  });\n\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/mapToDictionary.js?");

/***/ }),

/***/ "./dist/methods/mapToGroups.js":
/*!*************************************!*\
  !*** ./dist/methods/mapToGroups.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nmodule.exports = function mapToGroups(fn) {\n  var collection = {};\n\n  this.items.forEach(function (item, key) {\n    var _fn = fn(item, key),\n        _fn2 = _slicedToArray(_fn, 2),\n        keyed = _fn2[0],\n        value = _fn2[1];\n\n    if (collection[keyed] === undefined) {\n      collection[keyed] = [value];\n    } else {\n      collection[keyed].push(value);\n    }\n  });\n\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/mapToGroups.js?");

/***/ }),

/***/ "./dist/methods/mapWithKeys.js":
/*!*************************************!*\
  !*** ./dist/methods/mapWithKeys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nmodule.exports = function mapWithKeys(fn) {\n  var _this = this;\n\n  var collection = {};\n\n  if (Array.isArray(this.items)) {\n    this.items.forEach(function (item) {\n      var _fn = fn(item),\n          _fn2 = _slicedToArray(_fn, 2),\n          keyed = _fn2[0],\n          value = _fn2[1];\n\n      collection[keyed] = value;\n    });\n  } else {\n    Object.keys(this.items).forEach(function (key) {\n      var _fn3 = fn(_this.items[key]),\n          _fn4 = _slicedToArray(_fn3, 2),\n          keyed = _fn4[0],\n          value = _fn4[1];\n\n      collection[keyed] = value;\n    });\n  }\n\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/mapWithKeys.js?");

/***/ }),

/***/ "./dist/methods/max.js":
/*!*****************************!*\
  !*** ./dist/methods/max.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nmodule.exports = function max(key) {\n  if (typeof key === 'string') {\n    var filtered = this.items.filter(function (item) {\n      return item[key] !== undefined;\n    });\n\n    return Math.max.apply(Math, _toConsumableArray(filtered.map(function (item) {\n      return item[key];\n    })));\n  }\n\n  return Math.max.apply(Math, _toConsumableArray(this.items));\n};\n\n//# sourceURL=webpack://collect/./dist/methods/max.js?");

/***/ }),

/***/ "./dist/methods/median.js":
/*!********************************!*\
  !*** ./dist/methods/median.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function median(key) {\n  var length = this.items.length;\n\n\n  if (key === undefined) {\n    if (length % 2 === 0) {\n      return (this.items[length / 2 - 1] + this.items[length / 2]) / 2;\n    }\n\n    return this.items[Math.floor(length / 2)];\n  }\n\n  if (length % 2 === 0) {\n    return (this.items[length / 2 - 1][key] + this.items[length / 2][key]) / 2;\n  }\n\n  return this.items[Math.floor(length / 2)][key];\n};\n\n//# sourceURL=webpack://collect/./dist/methods/median.js?");

/***/ }),

/***/ "./dist/methods/merge.js":
/*!*******************************!*\
  !*** ./dist/methods/merge.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function merge(value) {\n  var arrayOrObject = value;\n\n  if (typeof arrayOrObject === 'string') {\n    arrayOrObject = [arrayOrObject];\n  }\n\n  if (Array.isArray(this.items) && Array.isArray(arrayOrObject)) {\n    return new this.constructor(this.items.concat(arrayOrObject));\n  }\n\n  var collection = JSON.parse(JSON.stringify(this.items));\n\n  Object.keys(arrayOrObject).forEach(function (key) {\n    collection[key] = arrayOrObject[key];\n  });\n\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/merge.js?");

/***/ }),

/***/ "./dist/methods/mergeRecursive.js":
/*!****************************************!*\
  !*** ./dist/methods/mergeRecursive.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nmodule.exports = function mergeRecursive(items) {\n  var merge = function merge(target, source) {\n    var merged = {};\n\n    var mergedKeys = Object.keys(Object.assign({}, target, source));\n\n    mergedKeys.forEach(function (key) {\n      if (target[key] === undefined && source[key] !== undefined) {\n        merged[key] = source[key];\n      } else if (target[key] !== undefined && source[key] === undefined) {\n        merged[key] = target[key];\n      } else if (target[key] !== undefined && source[key] !== undefined) {\n        if (target[key] === source[key]) {\n          merged[key] = target[key];\n        } else if (!Array.isArray(target[key]) && _typeof(target[key]) === 'object' && !Array.isArray(source[key]) && _typeof(source[key]) === 'object') {\n          merged[key] = merge(target[key], source[key]);\n        } else {\n          merged[key] = [].concat(target[key], source[key]);\n        }\n      }\n    });\n\n    return merged;\n  };\n\n  if (!items) {\n    return this;\n  }\n\n  if (items.constructor.name === 'Collection') {\n    return new this.constructor(merge(this.items, items.all()));\n  }\n\n  return new this.constructor(merge(this.items, items));\n};\n\n//# sourceURL=webpack://collect/./dist/methods/mergeRecursive.js?");

/***/ }),

/***/ "./dist/methods/min.js":
/*!*****************************!*\
  !*** ./dist/methods/min.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nmodule.exports = function min(key) {\n  if (key !== undefined) {\n    var filtered = this.items.filter(function (item) {\n      return item[key] !== undefined;\n    });\n\n    return Math.min.apply(Math, _toConsumableArray(filtered.map(function (item) {\n      return item[key];\n    })));\n  }\n\n  return Math.min.apply(Math, _toConsumableArray(this.items));\n};\n\n//# sourceURL=webpack://collect/./dist/methods/min.js?");

/***/ }),

/***/ "./dist/methods/mode.js":
/*!******************************!*\
  !*** ./dist/methods/mode.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function mode(key) {\n  var values = [];\n  var highestCount = 1;\n\n  if (!this.items.length) {\n    return null;\n  }\n\n  this.items.forEach(function (item) {\n    var tempValues = values.filter(function (value) {\n      if (key !== undefined) {\n        return value.key === item[key];\n      }\n\n      return value.key === item;\n    });\n\n    if (!tempValues.length) {\n      if (key !== undefined) {\n        values.push({ key: item[key], count: 1 });\n      } else {\n        values.push({ key: item, count: 1 });\n      }\n    } else {\n      tempValues[0].count += 1;\n      var count = tempValues[0].count;\n\n\n      if (count > highestCount) {\n        highestCount = count;\n      }\n    }\n  });\n\n  return values.filter(function (value) {\n    return value.count === highestCount;\n  }).map(function (value) {\n    return value.key;\n  });\n};\n\n//# sourceURL=webpack://collect/./dist/methods/mode.js?");

/***/ }),

/***/ "./dist/methods/nth.js":
/*!*****************************!*\
  !*** ./dist/methods/nth.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar values = __webpack_require__(/*! ../helpers/values */ \"./dist/helpers/values.js\");\n\nmodule.exports = function nth(n) {\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n\n  var items = values(this.items);\n\n  var collection = items.slice(offset).filter(function (item, index) {\n    return index % n === 0;\n  });\n\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/nth.js?");

/***/ }),

/***/ "./dist/methods/only.js":
/*!******************************!*\
  !*** ./dist/methods/only.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar variadic = __webpack_require__(/*! ../helpers/variadic */ \"./dist/helpers/variadic.js\");\n\nmodule.exports = function only() {\n  var _this = this;\n\n  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  var properties = variadic(args);\n\n  if (Array.isArray(this.items)) {\n    var _collection = this.items.filter(function (item) {\n      return properties.indexOf(item) !== -1;\n    });\n\n    return new this.constructor(_collection);\n  }\n\n  var collection = {};\n\n  Object.keys(this.items).forEach(function (prop) {\n    if (properties.indexOf(prop) !== -1) {\n      collection[prop] = _this.items[prop];\n    }\n  });\n\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/only.js?");

/***/ }),

/***/ "./dist/methods/pad.js":
/*!*****************************!*\
  !*** ./dist/methods/pad.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar clone = __webpack_require__(/*! ../helpers/clone */ \"./dist/helpers/clone.js\");\n\nmodule.exports = function pad(size, value) {\n  var abs = Math.abs(size);\n  var count = this.count();\n\n  if (abs <= count) {\n    return this;\n  }\n\n  var diff = abs - count;\n  var items = clone(this.items);\n  var isArray = Array.isArray(this.items);\n  var prepend = size < 0;\n\n  for (var iterator = 0; iterator < diff;) {\n    if (!isArray) {\n      if (items[iterator] !== undefined) {\n        diff += 1;\n      } else {\n        items[iterator] = value;\n      }\n    } else if (prepend) {\n      items.unshift(value);\n    } else {\n      items.push(value);\n    }\n\n    iterator += 1;\n  }\n\n  return new this.constructor(items);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/pad.js?");

/***/ }),

/***/ "./dist/methods/partition.js":
/*!***********************************!*\
  !*** ./dist/methods/partition.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function partition(fn) {\n  var _this = this;\n\n  var arrays = void 0;\n\n  if (Array.isArray(this.items)) {\n    arrays = [new this.constructor([]), new this.constructor([])];\n\n    this.items.forEach(function (item) {\n      if (fn(item) === true) {\n        arrays[0].push(item);\n      } else {\n        arrays[1].push(item);\n      }\n    });\n  } else {\n    arrays = [new this.constructor({}), new this.constructor({})];\n\n    Object.keys(this.items).forEach(function (prop) {\n      var value = _this.items[prop];\n\n      if (fn(value) === true) {\n        arrays[0].put(prop, value);\n      } else {\n        arrays[1].put(prop, value);\n      }\n    });\n  }\n\n  return new this.constructor(arrays);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/partition.js?");

/***/ }),

/***/ "./dist/methods/pipe.js":
/*!******************************!*\
  !*** ./dist/methods/pipe.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function pipe(fn) {\n  return fn(this);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/pipe.js?");

/***/ }),

/***/ "./dist/methods/pluck.js":
/*!*******************************!*\
  !*** ./dist/methods/pluck.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _require = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\"),\n    isArray = _require.isArray,\n    isObject = _require.isObject;\n\nvar nestedValue = __webpack_require__(/*! ../helpers/nestedValue */ \"./dist/helpers/nestedValue.js\");\n\nvar buildKeyPathMap = function buildKeyPathMap(items) {\n  var keyPaths = {};\n\n  items.forEach(function (item, index) {\n    function buildKeyPath(val, keyPath) {\n      if (isObject(val)) {\n        Object.keys(val).forEach(function (prop) {\n          buildKeyPath(val[prop], keyPath + '.' + prop);\n        });\n      } else if (isArray(val)) {\n        val.forEach(function (v, i) {\n          buildKeyPath(v, keyPath + '.' + i);\n        });\n      }\n\n      keyPaths[keyPath] = val;\n    }\n\n    buildKeyPath(item, index);\n  });\n\n  return keyPaths;\n};\n\nmodule.exports = function pluck(value, key) {\n  if (value.indexOf('*') !== -1) {\n    var keyPathMap = buildKeyPathMap(this.items);\n\n    var keyMatches = [];\n\n    if (key !== undefined) {\n      var keyRegex = new RegExp('0.' + key, 'g');\n      var keyNumberOfLevels = ('0.' + key).split('.').length;\n\n      Object.keys(keyPathMap).forEach(function (k) {\n        var matchingKey = k.match(keyRegex);\n\n        if (matchingKey) {\n          var match = matchingKey[0];\n\n          if (match.split('.').length === keyNumberOfLevels) {\n            keyMatches.push(keyPathMap[match]);\n          }\n        }\n      });\n    }\n\n    var valueMatches = [];\n    var valueRegex = new RegExp('0.' + value, 'g');\n    var valueNumberOfLevels = ('0.' + value).split('.').length;\n\n    Object.keys(keyPathMap).forEach(function (k) {\n      var matchingValue = k.match(valueRegex);\n\n      if (matchingValue) {\n        var match = matchingValue[0];\n\n        if (match.split('.').length === valueNumberOfLevels) {\n          valueMatches.push(keyPathMap[match]);\n        }\n      }\n    });\n\n    if (key !== undefined) {\n      var collection = {};\n\n      this.items.forEach(function (item, index) {\n        collection[keyMatches[index] || ''] = valueMatches;\n      });\n\n      return new this.constructor(collection);\n    }\n\n    return new this.constructor([valueMatches]);\n  }\n\n  if (key !== undefined) {\n    var _collection = {};\n\n    this.items.forEach(function (item) {\n      if (nestedValue(item, value) !== undefined) {\n        _collection[item[key] || ''] = nestedValue(item, value);\n      } else {\n        _collection[item[key] || ''] = null;\n      }\n    });\n\n    return new this.constructor(_collection);\n  }\n\n  return this.map(function (item) {\n    if (nestedValue(item, value) !== undefined) {\n      return nestedValue(item, value);\n    }\n\n    return null;\n  });\n};\n\n//# sourceURL=webpack://collect/./dist/methods/pluck.js?");

/***/ }),

/***/ "./dist/methods/pop.js":
/*!*****************************!*\
  !*** ./dist/methods/pop.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function pop() {\n  if (Array.isArray(this.items)) {\n    return this.items.pop();\n  }\n\n  var keys = Object.keys(this.items);\n  var key = keys[keys.length - 1];\n  var last = this.items[key];\n\n  delete this.items[key];\n\n  return last;\n};\n\n//# sourceURL=webpack://collect/./dist/methods/pop.js?");

/***/ }),

/***/ "./dist/methods/prepend.js":
/*!*********************************!*\
  !*** ./dist/methods/prepend.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function prepend(value, key) {\n  if (key !== undefined) {\n    return this.put(key, value);\n  }\n\n  this.items.unshift(value);\n\n  return this;\n};\n\n//# sourceURL=webpack://collect/./dist/methods/prepend.js?");

/***/ }),

/***/ "./dist/methods/pull.js":
/*!******************************!*\
  !*** ./dist/methods/pull.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _require = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\"),\n    isFunction = _require.isFunction;\n\nmodule.exports = function pull(key, defaultValue) {\n  var returnValue = this.items[key] || null;\n\n  if (!returnValue && defaultValue !== undefined) {\n    if (isFunction(defaultValue)) {\n      returnValue = defaultValue();\n    } else {\n      returnValue = defaultValue;\n    }\n  }\n\n  delete this.items[key];\n\n  return returnValue;\n};\n\n//# sourceURL=webpack://collect/./dist/methods/pull.js?");

/***/ }),

/***/ "./dist/methods/push.js":
/*!******************************!*\
  !*** ./dist/methods/push.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function push() {\n  var _items;\n\n  (_items = this.items).push.apply(_items, arguments);\n\n  return this;\n};\n\n//# sourceURL=webpack://collect/./dist/methods/push.js?");

/***/ }),

/***/ "./dist/methods/put.js":
/*!*****************************!*\
  !*** ./dist/methods/put.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function put(key, value) {\n  this.items[key] = value;\n\n  return this;\n};\n\n//# sourceURL=webpack://collect/./dist/methods/put.js?");

/***/ }),

/***/ "./dist/methods/random.js":
/*!********************************!*\
  !*** ./dist/methods/random.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar values = __webpack_require__(/*! ../helpers/values */ \"./dist/helpers/values.js\");\n\nmodule.exports = function random() {\n  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n  var items = values(this.items);\n\n  var collection = new this.constructor(items).shuffle();\n\n  // If not a length was specified\n  if (length !== parseInt(length, 10)) {\n    return collection.first();\n  }\n\n  return collection.take(length);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/random.js?");

/***/ }),

/***/ "./dist/methods/reduce.js":
/*!********************************!*\
  !*** ./dist/methods/reduce.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function reduce(fn, carry) {\n  var _this = this;\n\n  var reduceCarry = null;\n\n  if (carry !== undefined) {\n    reduceCarry = carry;\n  }\n\n  if (Array.isArray(this.items)) {\n    this.items.forEach(function (item) {\n      reduceCarry = fn(reduceCarry, item);\n    });\n  } else {\n    Object.keys(this.items).forEach(function (key) {\n      reduceCarry = fn(reduceCarry, _this.items[key], key);\n    });\n  }\n\n  return reduceCarry;\n};\n\n//# sourceURL=webpack://collect/./dist/methods/reduce.js?");

/***/ }),

/***/ "./dist/methods/reject.js":
/*!********************************!*\
  !*** ./dist/methods/reject.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function reject(fn) {\n  return new this.constructor(this.items).filter(function (item) {\n    return !fn(item);\n  });\n};\n\n//# sourceURL=webpack://collect/./dist/methods/reject.js?");

/***/ }),

/***/ "./dist/methods/replace.js":
/*!*********************************!*\
  !*** ./dist/methods/replace.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function replace(items) {\n  if (!items) {\n    return this;\n  }\n\n  if (Array.isArray(items)) {\n    var _replaced = this.items.map(function (value, index) {\n      return items[index] || value;\n    });\n\n    return new this.constructor(_replaced);\n  }\n\n  if (items.constructor.name === 'Collection') {\n    var _replaced2 = Object.assign({}, this.items, items.all());\n\n    return new this.constructor(_replaced2);\n  }\n\n  var replaced = Object.assign({}, this.items, items);\n\n  return new this.constructor(replaced);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/replace.js?");

/***/ }),

/***/ "./dist/methods/replaceRecursive.js":
/*!******************************************!*\
  !*** ./dist/methods/replaceRecursive.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nmodule.exports = function replaceRecursive(items) {\n  var replace = function replace(target, source) {\n    var replaced = Object.assign({}, target);\n\n    var mergedKeys = Object.keys(Object.assign({}, target, source));\n\n    mergedKeys.forEach(function (key) {\n      if (!Array.isArray(source[key]) && _typeof(source[key]) === 'object') {\n        replaced[key] = replace(target[key], source[key]);\n      } else if (target[key] === undefined && source[key] !== undefined) {\n        if (_typeof(target[key]) === 'object') {\n          replaced[key] = Object.assign({}, source[key]);\n        } else {\n          replaced[key] = source[key];\n        }\n      } else if (target[key] !== undefined && source[key] === undefined) {\n        if (_typeof(target[key]) === 'object') {\n          replaced[key] = Object.assign({}, target[key]);\n        } else {\n          replaced[key] = target[key];\n        }\n      } else if (target[key] !== undefined && source[key] !== undefined) {\n        if (_typeof(source[key]) === 'object') {\n          replaced[key] = Object.assign({}, source[key]);\n        } else {\n          replaced[key] = source[key];\n        }\n      }\n    });\n\n    return replaced;\n  };\n\n  if (!items) {\n    return this;\n  }\n\n  if (!Array.isArray(items) && (typeof items === 'undefined' ? 'undefined' : _typeof(items)) !== 'object') {\n    return new this.constructor(replace(this.items, [items]));\n  }\n\n  if (items.constructor.name === 'Collection') {\n    return new this.constructor(replace(this.items, items.all()));\n  }\n\n  return new this.constructor(replace(this.items, items));\n};\n\n//# sourceURL=webpack://collect/./dist/methods/replaceRecursive.js?");

/***/ }),

/***/ "./dist/methods/reverse.js":
/*!*********************************!*\
  !*** ./dist/methods/reverse.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function reverse() {\n  var collection = [].concat(this.items).reverse();\n\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/reverse.js?");

/***/ }),

/***/ "./dist/methods/search.js":
/*!********************************!*\
  !*** ./dist/methods/search.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/* eslint-disable eqeqeq */\n\nvar _require = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\"),\n    isArray = _require.isArray,\n    isObject = _require.isObject,\n    isFunction = _require.isFunction;\n\nmodule.exports = function search(valueOrFunction, strict) {\n  var _this = this;\n\n  var result = void 0;\n\n  var find = function find(item, key) {\n    if (isFunction(valueOrFunction)) {\n      return valueOrFunction(_this.items[key], key);\n    }\n\n    if (strict) {\n      return _this.items[key] === valueOrFunction;\n    }\n\n    return _this.items[key] == valueOrFunction;\n  };\n\n  if (isArray(this.items)) {\n    result = this.items.findIndex(find);\n  } else if (isObject(this.items)) {\n    result = Object.keys(this.items).find(function (key) {\n      return find(_this.items[key], key);\n    });\n  }\n\n  if (result === undefined || result < 0) {\n    return false;\n  }\n\n  return result;\n};\n\n//# sourceURL=webpack://collect/./dist/methods/search.js?");

/***/ }),

/***/ "./dist/methods/shift.js":
/*!*******************************!*\
  !*** ./dist/methods/shift.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function shift() {\n  if (Array.isArray(this.items) && this.items.length) {\n    return this.items.shift();\n  }\n\n  if (Object.keys(this.items).length) {\n    var key = Object.keys(this.items)[0];\n    var value = this.items[key];\n    delete this.items[key];\n\n    return value;\n  }\n\n  return null;\n};\n\n//# sourceURL=webpack://collect/./dist/methods/shift.js?");

/***/ }),

/***/ "./dist/methods/shuffle.js":
/*!*********************************!*\
  !*** ./dist/methods/shuffle.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar values = __webpack_require__(/*! ../helpers/values */ \"./dist/helpers/values.js\");\n\nmodule.exports = function shuffle() {\n  var items = values(this.items);\n\n  var j = void 0;\n  var x = void 0;\n  var i = void 0;\n\n  for (i = items.length; i; i -= 1) {\n    j = Math.floor(Math.random() * i);\n    x = items[i - 1];\n    items[i - 1] = items[j];\n    items[j] = x;\n  }\n\n  this.items = items;\n\n  return this;\n};\n\n//# sourceURL=webpack://collect/./dist/methods/shuffle.js?");

/***/ }),

/***/ "./dist/methods/skip.js":
/*!******************************!*\
  !*** ./dist/methods/skip.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _require = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\"),\n    isObject = _require.isObject;\n\nmodule.exports = function skip(number) {\n  var _this = this;\n\n  if (isObject(this.items)) {\n    return new this.constructor(Object.keys(this.items).reduce(function (accumulator, key, index) {\n      if (index + 1 > number) {\n        accumulator[key] = _this.items[key];\n      }\n\n      return accumulator;\n    }, {}));\n  }\n\n  return new this.constructor(this.items.slice(number));\n};\n\n//# sourceURL=webpack://collect/./dist/methods/skip.js?");

/***/ }),

/***/ "./dist/methods/slice.js":
/*!*******************************!*\
  !*** ./dist/methods/slice.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function slice(remove, limit) {\n  var collection = this.items.slice(remove);\n\n  if (limit !== undefined) {\n    collection = collection.slice(0, limit);\n  }\n\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/slice.js?");

/***/ }),

/***/ "./dist/methods/some.js":
/*!******************************!*\
  !*** ./dist/methods/some.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar contains = __webpack_require__(/*! ./contains */ \"./dist/methods/contains.js\");\n\nmodule.exports = contains;\n\n//# sourceURL=webpack://collect/./dist/methods/some.js?");

/***/ }),

/***/ "./dist/methods/sort.js":
/*!******************************!*\
  !*** ./dist/methods/sort.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function sort(fn) {\n  var collection = [].concat(this.items);\n\n  if (fn === undefined) {\n    if (this.every(function (item) {\n      return typeof item === 'number';\n    })) {\n      collection.sort(function (a, b) {\n        return a - b;\n      });\n    } else {\n      collection.sort();\n    }\n  } else {\n    collection.sort(fn);\n  }\n\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/sort.js?");

/***/ }),

/***/ "./dist/methods/sortBy.js":
/*!********************************!*\
  !*** ./dist/methods/sortBy.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar nestedValue = __webpack_require__(/*! ../helpers/nestedValue */ \"./dist/helpers/nestedValue.js\");\n\nvar _require = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\"),\n    isFunction = _require.isFunction;\n\nmodule.exports = function sortBy(valueOrFunction) {\n  var collection = [].concat(this.items);\n  var getValue = function getValue(item) {\n    if (isFunction(valueOrFunction)) {\n      return valueOrFunction(item);\n    }\n\n    return nestedValue(item, valueOrFunction);\n  };\n\n  collection.sort(function (a, b) {\n    var valueA = getValue(a);\n    var valueB = getValue(b);\n\n    if (valueA === null || valueA === undefined) {\n      return 1;\n    }\n    if (valueB === null || valueB === undefined) {\n      return -1;\n    }\n\n    if (valueA < valueB) {\n      return -1;\n    }\n    if (valueA > valueB) {\n      return 1;\n    }\n\n    return 0;\n  });\n\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/sortBy.js?");

/***/ }),

/***/ "./dist/methods/sortByDesc.js":
/*!************************************!*\
  !*** ./dist/methods/sortByDesc.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function sortByDesc(valueOrFunction) {\n  return this.sortBy(valueOrFunction).reverse();\n};\n\n//# sourceURL=webpack://collect/./dist/methods/sortByDesc.js?");

/***/ }),

/***/ "./dist/methods/sortDesc.js":
/*!**********************************!*\
  !*** ./dist/methods/sortDesc.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function sortDesc() {\n  return this.sort().reverse();\n};\n\n//# sourceURL=webpack://collect/./dist/methods/sortDesc.js?");

/***/ }),

/***/ "./dist/methods/sortKeys.js":
/*!**********************************!*\
  !*** ./dist/methods/sortKeys.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function sortKeys() {\n  var _this = this;\n\n  var ordered = {};\n\n  Object.keys(this.items).sort().forEach(function (key) {\n    ordered[key] = _this.items[key];\n  });\n\n  return new this.constructor(ordered);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/sortKeys.js?");

/***/ }),

/***/ "./dist/methods/sortKeysDesc.js":
/*!**************************************!*\
  !*** ./dist/methods/sortKeysDesc.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function sortKeysDesc() {\n  var _this = this;\n\n  var ordered = {};\n\n  Object.keys(this.items).sort().reverse().forEach(function (key) {\n    ordered[key] = _this.items[key];\n  });\n\n  return new this.constructor(ordered);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/sortKeysDesc.js?");

/***/ }),

/***/ "./dist/methods/splice.js":
/*!********************************!*\
  !*** ./dist/methods/splice.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function splice(index, limit, replace) {\n  var slicedCollection = this.slice(index, limit);\n\n  this.items = this.diff(slicedCollection.all()).all();\n\n  if (Array.isArray(replace)) {\n    for (var iterator = 0, length = replace.length; iterator < length; iterator += 1) {\n      this.items.splice(index + iterator, 0, replace[iterator]);\n    }\n  }\n\n  return slicedCollection;\n};\n\n//# sourceURL=webpack://collect/./dist/methods/splice.js?");

/***/ }),

/***/ "./dist/methods/split.js":
/*!*******************************!*\
  !*** ./dist/methods/split.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function split(numberOfGroups) {\n  var itemsPerGroup = Math.round(this.items.length / numberOfGroups);\n\n  var items = JSON.parse(JSON.stringify(this.items));\n  var collection = [];\n\n  for (var iterator = 0; iterator < numberOfGroups; iterator += 1) {\n    collection.push(new this.constructor(items.splice(0, itemsPerGroup)));\n  }\n\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/split.js?");

/***/ }),

/***/ "./dist/methods/sum.js":
/*!*****************************!*\
  !*** ./dist/methods/sum.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar values = __webpack_require__(/*! ../helpers/values */ \"./dist/helpers/values.js\");\n\nvar _require = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\"),\n    isFunction = _require.isFunction;\n\nvar Decimal = __webpack_require__(/*! decimal.js */ \"./node_modules/decimal.js/decimal.js\");\n\nmodule.exports = function sum(key) {\n  var items = values(this.items);\n\n  var total = 0;\n  var t = new Decimal(0);\n\n  if (key === undefined) {\n    for (var i = 0, length = items.length; i < length; i += 1) {\n      //total += parseFloat(items[i]);\n      t = t.add(new Decimal(items[i]));\n    }\n  } else if (isFunction(key)) {\n    for (var _i = 0, _length = items.length; _i < _length; _i += 1) {\n      //total += parseFloat(key(items[i]));\n      t = t.add(new Decimal(key(items[_i])));\n    }\n  } else {\n    for (var _i2 = 0, _length2 = items.length; _i2 < _length2; _i2 += 1) {\n      //total += parseFloat(items[i][key]);\n      t = t.add(new Decimal(items[_i2][key]));\n    }\n  }\n\n  total = t.toNumber();\n  return parseFloat(total.toPrecision(12));\n};\n\n//# sourceURL=webpack://collect/./dist/methods/sum.js?");

/***/ }),

/***/ "./dist/methods/symbol.iterator.js":
/*!*****************************************!*\
  !*** ./dist/methods/symbol.iterator.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function SymbolIterator() {\n  var _this = this;\n\n  var index = -1;\n\n  return {\n    next: function next() {\n      index += 1;\n\n      return {\n        value: _this.items[index],\n        done: index >= _this.items.length\n      };\n    }\n  };\n};\n\n//# sourceURL=webpack://collect/./dist/methods/symbol.iterator.js?");

/***/ }),

/***/ "./dist/methods/take.js":
/*!******************************!*\
  !*** ./dist/methods/take.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nmodule.exports = function take(length) {\n  var _this = this;\n\n  if (!Array.isArray(this.items) && _typeof(this.items) === 'object') {\n    var keys = Object.keys(this.items);\n    var slicedKeys = void 0;\n\n    if (length < 0) {\n      slicedKeys = keys.slice(length);\n    } else {\n      slicedKeys = keys.slice(0, length);\n    }\n\n    var collection = {};\n\n    keys.forEach(function (prop) {\n      if (slicedKeys.indexOf(prop) !== -1) {\n        collection[prop] = _this.items[prop];\n      }\n    });\n\n    return new this.constructor(collection);\n  }\n\n  if (length < 0) {\n    return new this.constructor(this.items.slice(length));\n  }\n\n  return new this.constructor(this.items.slice(0, length));\n};\n\n//# sourceURL=webpack://collect/./dist/methods/take.js?");

/***/ }),

/***/ "./dist/methods/tap.js":
/*!*****************************!*\
  !*** ./dist/methods/tap.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function tap(fn) {\n  fn(this);\n\n  return this;\n};\n\n//# sourceURL=webpack://collect/./dist/methods/tap.js?");

/***/ }),

/***/ "./dist/methods/times.js":
/*!*******************************!*\
  !*** ./dist/methods/times.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function times(n, fn) {\n  for (var iterator = 1; iterator <= n; iterator += 1) {\n    this.items.push(fn(iterator));\n  }\n\n  return this;\n};\n\n//# sourceURL=webpack://collect/./dist/methods/times.js?");

/***/ }),

/***/ "./dist/methods/toArray.js":
/*!*********************************!*\
  !*** ./dist/methods/toArray.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function toArray() {\n  var collectionInstance = this.constructor;\n\n  function iterate(list, collection) {\n    var childCollection = [];\n\n    if (list instanceof collectionInstance) {\n      list.items.forEach(function (i) {\n        return iterate(i, childCollection);\n      });\n      collection.push(childCollection);\n    } else if (Array.isArray(list)) {\n      list.forEach(function (i) {\n        return iterate(i, childCollection);\n      });\n      collection.push(childCollection);\n    } else {\n      collection.push(list);\n    }\n  }\n\n  if (Array.isArray(this.items)) {\n    var collection = [];\n\n    this.items.forEach(function (items) {\n      iterate(items, collection);\n    });\n\n    return collection;\n  }\n\n  return this.values().all();\n};\n\n//# sourceURL=webpack://collect/./dist/methods/toArray.js?");

/***/ }),

/***/ "./dist/methods/toJson.js":
/*!********************************!*\
  !*** ./dist/methods/toJson.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nmodule.exports = function toJson() {\n  if (_typeof(this.items) === 'object' && !Array.isArray(this.items)) {\n    return JSON.stringify(this.all());\n  }\n\n  return JSON.stringify(this.toArray());\n};\n\n//# sourceURL=webpack://collect/./dist/methods/toJson.js?");

/***/ }),

/***/ "./dist/methods/transform.js":
/*!***********************************!*\
  !*** ./dist/methods/transform.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function transform(fn) {\n  var _this = this;\n\n  if (Array.isArray(this.items)) {\n    this.items = this.items.map(fn);\n  } else {\n    var collection = {};\n\n    Object.keys(this.items).forEach(function (key) {\n      collection[key] = fn(_this.items[key], key);\n    });\n\n    this.items = collection;\n  }\n\n  return this;\n};\n\n//# sourceURL=webpack://collect/./dist/methods/transform.js?");

/***/ }),

/***/ "./dist/methods/union.js":
/*!*******************************!*\
  !*** ./dist/methods/union.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function union(object) {\n  var _this = this;\n\n  var collection = JSON.parse(JSON.stringify(this.items));\n\n  Object.keys(object).forEach(function (prop) {\n    if (_this.items[prop] === undefined) {\n      collection[prop] = object[prop];\n    }\n  });\n\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/union.js?");

/***/ }),

/***/ "./dist/methods/unique.js":
/*!********************************!*\
  !*** ./dist/methods/unique.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _require = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\"),\n    isFunction = _require.isFunction;\n\nmodule.exports = function unique(key) {\n  var collection = void 0;\n\n  if (key === undefined) {\n    collection = this.items.filter(function (element, index, self) {\n      return self.indexOf(element) === index;\n    });\n  } else {\n    collection = [];\n\n    var usedKeys = [];\n\n    for (var iterator = 0, length = this.items.length; iterator < length; iterator += 1) {\n      var uniqueKey = void 0;\n      if (isFunction(key)) {\n        uniqueKey = key(this.items[iterator]);\n      } else {\n        uniqueKey = this.items[iterator][key];\n      }\n\n      if (usedKeys.indexOf(uniqueKey) === -1) {\n        collection.push(this.items[iterator]);\n        usedKeys.push(uniqueKey);\n      }\n    }\n  }\n\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/unique.js?");

/***/ }),

/***/ "./dist/methods/unless.js":
/*!********************************!*\
  !*** ./dist/methods/unless.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function when(value, fn, defaultFn) {\n  if (!value) {\n    fn(this);\n  } else {\n    defaultFn(this);\n  }\n};\n\n//# sourceURL=webpack://collect/./dist/methods/unless.js?");

/***/ }),

/***/ "./dist/methods/unwrap.js":
/*!********************************!*\
  !*** ./dist/methods/unwrap.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function unwrap(value) {\n  if (value instanceof this.constructor) {\n    return value.all();\n  }\n\n  return value;\n};\n\n//# sourceURL=webpack://collect/./dist/methods/unwrap.js?");

/***/ }),

/***/ "./dist/methods/values.js":
/*!********************************!*\
  !*** ./dist/methods/values.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar getValues = __webpack_require__(/*! ../helpers/values */ \"./dist/helpers/values.js\");\n\nmodule.exports = function values() {\n  return new this.constructor(getValues(this.items));\n};\n\n//# sourceURL=webpack://collect/./dist/methods/values.js?");

/***/ }),

/***/ "./dist/methods/when.js":
/*!******************************!*\
  !*** ./dist/methods/when.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function when(value, fn, defaultFn) {\n  if (value) {\n    return fn(this, value);\n  }\n\n  if (defaultFn) {\n    return defaultFn(this, value);\n  }\n\n  return this;\n};\n\n//# sourceURL=webpack://collect/./dist/methods/when.js?");

/***/ }),

/***/ "./dist/methods/whenEmpty.js":
/*!***********************************!*\
  !*** ./dist/methods/whenEmpty.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function whenEmpty(fn, defaultFn) {\n  if (Array.isArray(this.items) && !this.items.length) {\n    return fn(this);\n  }if (!Object.keys(this.items).length) {\n    return fn(this);\n  }\n\n  if (defaultFn !== undefined) {\n    if (Array.isArray(this.items) && this.items.length) {\n      return defaultFn(this);\n    }if (Object.keys(this.items).length) {\n      return defaultFn(this);\n    }\n  }\n\n  return this;\n};\n\n//# sourceURL=webpack://collect/./dist/methods/whenEmpty.js?");

/***/ }),

/***/ "./dist/methods/whenNotEmpty.js":
/*!**************************************!*\
  !*** ./dist/methods/whenNotEmpty.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function whenNotEmpty(fn, defaultFn) {\n  if (Array.isArray(this.items) && this.items.length) {\n    return fn(this);\n  }if (Object.keys(this.items).length) {\n    return fn(this);\n  }\n\n  if (defaultFn !== undefined) {\n    if (Array.isArray(this.items) && !this.items.length) {\n      return defaultFn(this);\n    }if (!Object.keys(this.items).length) {\n      return defaultFn(this);\n    }\n  }\n\n  return this;\n};\n\n//# sourceURL=webpack://collect/./dist/methods/whenNotEmpty.js?");

/***/ }),

/***/ "./dist/methods/where.js":
/*!*******************************!*\
  !*** ./dist/methods/where.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar values = __webpack_require__(/*! ../helpers/values */ \"./dist/helpers/values.js\");\nvar nestedValue = __webpack_require__(/*! ../helpers/nestedValue */ \"./dist/helpers/nestedValue.js\");\n\nmodule.exports = function where(key, operator, value) {\n  var comparisonOperator = operator;\n  var comparisonValue = value;\n\n  var items = values(this.items);\n\n  if (operator === undefined || operator === true) {\n    return new this.constructor(items.filter(function (item) {\n      return nestedValue(item, key);\n    }));\n  }\n\n  if (operator === false) {\n    return new this.constructor(items.filter(function (item) {\n      return !nestedValue(item, key);\n    }));\n  }\n\n  if (value === undefined) {\n    comparisonValue = operator;\n    comparisonOperator = '===';\n  }\n\n  var collection = items.filter(function (item) {\n    switch (comparisonOperator) {\n      case '==':\n        return nestedValue(item, key) === Number(comparisonValue) || nestedValue(item, key) === comparisonValue.toString();\n\n      default:\n      case '===':\n        return nestedValue(item, key) === comparisonValue;\n\n      case '!=':\n      case '<>':\n        return nestedValue(item, key) !== Number(comparisonValue) && nestedValue(item, key) !== comparisonValue.toString();\n\n      case '!==':\n        return nestedValue(item, key) !== comparisonValue;\n\n      case '<':\n        return nestedValue(item, key) < comparisonValue;\n\n      case '<=':\n        return nestedValue(item, key) <= comparisonValue;\n\n      case '>':\n        return nestedValue(item, key) > comparisonValue;\n\n      case '>=':\n        return nestedValue(item, key) >= comparisonValue;\n    }\n  });\n\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/where.js?");

/***/ }),

/***/ "./dist/methods/whereBetween.js":
/*!**************************************!*\
  !*** ./dist/methods/whereBetween.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function whereBetween(key, values) {\n  return this.where(key, '>=', values[0]).where(key, '<=', values[values.length - 1]);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/whereBetween.js?");

/***/ }),

/***/ "./dist/methods/whereIn.js":
/*!*********************************!*\
  !*** ./dist/methods/whereIn.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar extractValues = __webpack_require__(/*! ../helpers/values */ \"./dist/helpers/values.js\");\nvar nestedValue = __webpack_require__(/*! ../helpers/nestedValue */ \"./dist/helpers/nestedValue.js\");\n\nmodule.exports = function whereIn(key, values) {\n  var items = extractValues(values);\n\n  var collection = this.items.filter(function (item) {\n    return items.indexOf(nestedValue(item, key)) !== -1;\n  });\n\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/whereIn.js?");

/***/ }),

/***/ "./dist/methods/whereInstanceOf.js":
/*!*****************************************!*\
  !*** ./dist/methods/whereInstanceOf.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function whereInstanceOf(type) {\n  return this.filter(function (item) {\n    return item instanceof type;\n  });\n};\n\n//# sourceURL=webpack://collect/./dist/methods/whereInstanceOf.js?");

/***/ }),

/***/ "./dist/methods/whereNotBetween.js":
/*!*****************************************!*\
  !*** ./dist/methods/whereNotBetween.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar nestedValue = __webpack_require__(/*! ../helpers/nestedValue */ \"./dist/helpers/nestedValue.js\");\n\nmodule.exports = function whereNotBetween(key, values) {\n  return this.filter(function (item) {\n    return nestedValue(item, key) < values[0] || nestedValue(item, key) > values[values.length - 1];\n  });\n};\n\n//# sourceURL=webpack://collect/./dist/methods/whereNotBetween.js?");

/***/ }),

/***/ "./dist/methods/whereNotIn.js":
/*!************************************!*\
  !*** ./dist/methods/whereNotIn.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar extractValues = __webpack_require__(/*! ../helpers/values */ \"./dist/helpers/values.js\");\nvar nestedValue = __webpack_require__(/*! ../helpers/nestedValue */ \"./dist/helpers/nestedValue.js\");\n\nmodule.exports = function whereNotIn(key, values) {\n  var items = extractValues(values);\n\n  var collection = this.items.filter(function (item) {\n    return items.indexOf(nestedValue(item, key)) === -1;\n  });\n\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/whereNotIn.js?");

/***/ }),

/***/ "./dist/methods/whereNotNull.js":
/*!**************************************!*\
  !*** ./dist/methods/whereNotNull.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function whereNotNull() {\n  var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n  return this.where(key, '!==', null);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/whereNotNull.js?");

/***/ }),

/***/ "./dist/methods/whereNull.js":
/*!***********************************!*\
  !*** ./dist/methods/whereNull.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function whereNull() {\n  var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n  return this.where(key, '===', null);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/whereNull.js?");

/***/ }),

/***/ "./dist/methods/wrap.js":
/*!******************************!*\
  !*** ./dist/methods/wrap.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nmodule.exports = function wrap(value) {\n  if (value instanceof this.constructor) {\n    return value;\n  }\n\n  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {\n    return new this.constructor(value);\n  }\n\n  return new this.constructor([value]);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/wrap.js?");

/***/ }),

/***/ "./dist/methods/zip.js":
/*!*****************************!*\
  !*** ./dist/methods/zip.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function zip(array) {\n  var _this = this;\n\n  var values = array;\n\n  if (values instanceof this.constructor) {\n    values = values.all();\n  }\n\n  var collection = this.items.map(function (item, index) {\n    return new _this.constructor([item, values[index]]);\n  });\n\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://collect/./dist/methods/zip.js?");

/***/ }),

/***/ "./node_modules/decimal.js/decimal.js":
/*!********************************************!*\
  !*** ./node_modules/decimal.js/decimal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;;(function (globalScope) {\r\n  'use strict';\r\n\r\n\r\n  /*\r\n   *  decimal.js v10.2.0\r\n   *  An arbitrary-precision Decimal type for JavaScript.\r\n   *  https://github.com/MikeMcl/decimal.js\r\n   *  Copyright (c) 2019 Michael Mclaughlin <M8ch88l@gmail.com>\r\n   *  MIT Licence\r\n   */\r\n\r\n\r\n  // -----------------------------------  EDITABLE DEFAULTS  ------------------------------------ //\r\n\r\n\r\n    // The maximum exponent magnitude.\r\n    // The limit on the value of `toExpNeg`, `toExpPos`, `minE` and `maxE`.\r\n  var EXP_LIMIT = 9e15,                      // 0 to 9e15\r\n\r\n    // The limit on the value of `precision`, and on the value of the first argument to\r\n    // `toDecimalPlaces`, `toExponential`, `toFixed`, `toPrecision` and `toSignificantDigits`.\r\n    MAX_DIGITS = 1e9,                        // 0 to 1e9\r\n\r\n    // Base conversion alphabet.\r\n    NUMERALS = '0123456789abcdef',\r\n\r\n    // The natural logarithm of 10 (1025 digits).\r\n    LN10 = '2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058',\r\n\r\n    // Pi (1025 digits).\r\n    PI = '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789',\r\n\r\n\r\n    // The initial configuration properties of the Decimal constructor.\r\n    DEFAULTS = {\r\n\r\n      // These values must be integers within the stated ranges (inclusive).\r\n      // Most of these values can be changed at run-time using the `Decimal.config` method.\r\n\r\n      // The maximum number of significant digits of the result of a calculation or base conversion.\r\n      // E.g. `Decimal.config({ precision: 20 });`\r\n      precision: 20,                         // 1 to MAX_DIGITS\r\n\r\n      // The rounding mode used when rounding to `precision`.\r\n      //\r\n      // ROUND_UP         0 Away from zero.\r\n      // ROUND_DOWN       1 Towards zero.\r\n      // ROUND_CEIL       2 Towards +Infinity.\r\n      // ROUND_FLOOR      3 Towards -Infinity.\r\n      // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.\r\n      // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.\r\n      // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.\r\n      // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.\r\n      // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.\r\n      //\r\n      // E.g.\r\n      // `Decimal.rounding = 4;`\r\n      // `Decimal.rounding = Decimal.ROUND_HALF_UP;`\r\n      rounding: 4,                           // 0 to 8\r\n\r\n      // The modulo mode used when calculating the modulus: a mod n.\r\n      // The quotient (q = a / n) is calculated according to the corresponding rounding mode.\r\n      // The remainder (r) is calculated as: r = a - n * q.\r\n      //\r\n      // UP         0 The remainder is positive if the dividend is negative, else is negative.\r\n      // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).\r\n      // FLOOR      3 The remainder has the same sign as the divisor (Python %).\r\n      // HALF_EVEN  6 The IEEE 754 remainder function.\r\n      // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.\r\n      //\r\n      // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian\r\n      // division (9) are commonly used for the modulus operation. The other rounding modes can also\r\n      // be used, but they may not give useful results.\r\n      modulo: 1,                             // 0 to 9\r\n\r\n      // The exponent value at and beneath which `toString` returns exponential notation.\r\n      // JavaScript numbers: -7\r\n      toExpNeg: -7,                          // 0 to -EXP_LIMIT\r\n\r\n      // The exponent value at and above which `toString` returns exponential notation.\r\n      // JavaScript numbers: 21\r\n      toExpPos:  21,                         // 0 to EXP_LIMIT\r\n\r\n      // The minimum exponent value, beneath which underflow to zero occurs.\r\n      // JavaScript numbers: -324  (5e-324)\r\n      minE: -EXP_LIMIT,                      // -1 to -EXP_LIMIT\r\n\r\n      // The maximum exponent value, above which overflow to Infinity occurs.\r\n      // JavaScript numbers: 308  (1.7976931348623157e+308)\r\n      maxE: EXP_LIMIT,                       // 1 to EXP_LIMIT\r\n\r\n      // Whether to use cryptographically-secure random number generation, if available.\r\n      crypto: false                          // true/false\r\n    },\r\n\r\n\r\n  // ----------------------------------- END OF EDITABLE DEFAULTS ------------------------------- //\r\n\r\n\r\n    Decimal, inexact, noConflict, quadrant,\r\n    external = true,\r\n\r\n    decimalError = '[DecimalError] ',\r\n    invalidArgument = decimalError + 'Invalid argument: ',\r\n    precisionLimitExceeded = decimalError + 'Precision limit exceeded',\r\n    cryptoUnavailable = decimalError + 'crypto unavailable',\r\n\r\n    mathfloor = Math.floor,\r\n    mathpow = Math.pow,\r\n\r\n    isBinary = /^0b([01]+(\\.[01]*)?|\\.[01]+)(p[+-]?\\d+)?$/i,\r\n    isHex = /^0x([0-9a-f]+(\\.[0-9a-f]*)?|\\.[0-9a-f]+)(p[+-]?\\d+)?$/i,\r\n    isOctal = /^0o([0-7]+(\\.[0-7]*)?|\\.[0-7]+)(p[+-]?\\d+)?$/i,\r\n    isDecimal = /^(\\d+(\\.\\d*)?|\\.\\d+)(e[+-]?\\d+)?$/i,\r\n\r\n    BASE = 1e7,\r\n    LOG_BASE = 7,\r\n    MAX_SAFE_INTEGER = 9007199254740991,\r\n\r\n    LN10_PRECISION = LN10.length - 1,\r\n    PI_PRECISION = PI.length - 1,\r\n\r\n    // Decimal.prototype object\r\n    P = { name: '[object Decimal]' };\r\n\r\n\r\n  // Decimal prototype methods\r\n\r\n\r\n  /*\r\n   *  absoluteValue             abs\r\n   *  ceil\r\n   *  comparedTo                cmp\r\n   *  cosine                    cos\r\n   *  cubeRoot                  cbrt\r\n   *  decimalPlaces             dp\r\n   *  dividedBy                 div\r\n   *  dividedToIntegerBy        divToInt\r\n   *  equals                    eq\r\n   *  floor\r\n   *  greaterThan               gt\r\n   *  greaterThanOrEqualTo      gte\r\n   *  hyperbolicCosine          cosh\r\n   *  hyperbolicSine            sinh\r\n   *  hyperbolicTangent         tanh\r\n   *  inverseCosine             acos\r\n   *  inverseHyperbolicCosine   acosh\r\n   *  inverseHyperbolicSine     asinh\r\n   *  inverseHyperbolicTangent  atanh\r\n   *  inverseSine               asin\r\n   *  inverseTangent            atan\r\n   *  isFinite\r\n   *  isInteger                 isInt\r\n   *  isNaN\r\n   *  isNegative                isNeg\r\n   *  isPositive                isPos\r\n   *  isZero\r\n   *  lessThan                  lt\r\n   *  lessThanOrEqualTo         lte\r\n   *  logarithm                 log\r\n   *  [maximum]                 [max]\r\n   *  [minimum]                 [min]\r\n   *  minus                     sub\r\n   *  modulo                    mod\r\n   *  naturalExponential        exp\r\n   *  naturalLogarithm          ln\r\n   *  negated                   neg\r\n   *  plus                      add\r\n   *  precision                 sd\r\n   *  round\r\n   *  sine                      sin\r\n   *  squareRoot                sqrt\r\n   *  tangent                   tan\r\n   *  times                     mul\r\n   *  toBinary\r\n   *  toDecimalPlaces           toDP\r\n   *  toExponential\r\n   *  toFixed\r\n   *  toFraction\r\n   *  toHexadecimal             toHex\r\n   *  toNearest\r\n   *  toNumber\r\n   *  toOctal\r\n   *  toPower                   pow\r\n   *  toPrecision\r\n   *  toSignificantDigits       toSD\r\n   *  toString\r\n   *  truncated                 trunc\r\n   *  valueOf                   toJSON\r\n   */\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the absolute value of this Decimal.\r\n   *\r\n   */\r\n  P.absoluteValue = P.abs = function () {\r\n    var x = new this.constructor(this);\r\n    if (x.s < 0) x.s = 1;\r\n    return finalise(x);\r\n  };\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the value of this Decimal rounded to a whole number in the\r\n   * direction of positive Infinity.\r\n   *\r\n   */\r\n  P.ceil = function () {\r\n    return finalise(new this.constructor(this), this.e + 1, 2);\r\n  };\r\n\r\n\r\n  /*\r\n   * Return\r\n   *   1    if the value of this Decimal is greater than the value of `y`,\r\n   *  -1    if the value of this Decimal is less than the value of `y`,\r\n   *   0    if they have the same value,\r\n   *   NaN  if the value of either Decimal is NaN.\r\n   *\r\n   */\r\n  P.comparedTo = P.cmp = function (y) {\r\n    var i, j, xdL, ydL,\r\n      x = this,\r\n      xd = x.d,\r\n      yd = (y = new x.constructor(y)).d,\r\n      xs = x.s,\r\n      ys = y.s;\r\n\r\n    // Either NaN or ±Infinity?\r\n    if (!xd || !yd) {\r\n      return !xs || !ys ? NaN : xs !== ys ? xs : xd === yd ? 0 : !xd ^ xs < 0 ? 1 : -1;\r\n    }\r\n\r\n    // Either zero?\r\n    if (!xd[0] || !yd[0]) return xd[0] ? xs : yd[0] ? -ys : 0;\r\n\r\n    // Signs differ?\r\n    if (xs !== ys) return xs;\r\n\r\n    // Compare exponents.\r\n    if (x.e !== y.e) return x.e > y.e ^ xs < 0 ? 1 : -1;\r\n\r\n    xdL = xd.length;\r\n    ydL = yd.length;\r\n\r\n    // Compare digit by digit.\r\n    for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {\r\n      if (xd[i] !== yd[i]) return xd[i] > yd[i] ^ xs < 0 ? 1 : -1;\r\n    }\r\n\r\n    // Compare lengths.\r\n    return xdL === ydL ? 0 : xdL > ydL ^ xs < 0 ? 1 : -1;\r\n  };\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the cosine of the value in radians of this Decimal.\r\n   *\r\n   * Domain: [-Infinity, Infinity]\r\n   * Range: [-1, 1]\r\n   *\r\n   * cos(0)         = 1\r\n   * cos(-0)        = 1\r\n   * cos(Infinity)  = NaN\r\n   * cos(-Infinity) = NaN\r\n   * cos(NaN)       = NaN\r\n   *\r\n   */\r\n  P.cosine = P.cos = function () {\r\n    var pr, rm,\r\n      x = this,\r\n      Ctor = x.constructor;\r\n\r\n    if (!x.d) return new Ctor(NaN);\r\n\r\n    // cos(0) = cos(-0) = 1\r\n    if (!x.d[0]) return new Ctor(1);\r\n\r\n    pr = Ctor.precision;\r\n    rm = Ctor.rounding;\r\n    Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;\r\n    Ctor.rounding = 1;\r\n\r\n    x = cosine(Ctor, toLessThanHalfPi(Ctor, x));\r\n\r\n    Ctor.precision = pr;\r\n    Ctor.rounding = rm;\r\n\r\n    return finalise(quadrant == 2 || quadrant == 3 ? x.neg() : x, pr, rm, true);\r\n  };\r\n\r\n\r\n  /*\r\n   *\r\n   * Return a new Decimal whose value is the cube root of the value of this Decimal, rounded to\r\n   * `precision` significant digits using rounding mode `rounding`.\r\n   *\r\n   *  cbrt(0)  =  0\r\n   *  cbrt(-0) = -0\r\n   *  cbrt(1)  =  1\r\n   *  cbrt(-1) = -1\r\n   *  cbrt(N)  =  N\r\n   *  cbrt(-I) = -I\r\n   *  cbrt(I)  =  I\r\n   *\r\n   * Math.cbrt(x) = (x < 0 ? -Math.pow(-x, 1/3) : Math.pow(x, 1/3))\r\n   *\r\n   */\r\n  P.cubeRoot = P.cbrt = function () {\r\n    var e, m, n, r, rep, s, sd, t, t3, t3plusx,\r\n      x = this,\r\n      Ctor = x.constructor;\r\n\r\n    if (!x.isFinite() || x.isZero()) return new Ctor(x);\r\n    external = false;\r\n\r\n    // Initial estimate.\r\n    s = x.s * mathpow(x.s * x, 1 / 3);\r\n\r\n     // Math.cbrt underflow/overflow?\r\n     // Pass x to Math.pow as integer, then adjust the exponent of the result.\r\n    if (!s || Math.abs(s) == 1 / 0) {\r\n      n = digitsToString(x.d);\r\n      e = x.e;\r\n\r\n      // Adjust n exponent so it is a multiple of 3 away from x exponent.\r\n      if (s = (e - n.length + 1) % 3) n += (s == 1 || s == -2 ? '0' : '00');\r\n      s = mathpow(n, 1 / 3);\r\n\r\n      // Rarely, e may be one less than the result exponent value.\r\n      e = mathfloor((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2));\r\n\r\n      if (s == 1 / 0) {\r\n        n = '5e' + e;\r\n      } else {\r\n        n = s.toExponential();\r\n        n = n.slice(0, n.indexOf('e') + 1) + e;\r\n      }\r\n\r\n      r = new Ctor(n);\r\n      r.s = x.s;\r\n    } else {\r\n      r = new Ctor(s.toString());\r\n    }\r\n\r\n    sd = (e = Ctor.precision) + 3;\r\n\r\n    // Halley's method.\r\n    // TODO? Compare Newton's method.\r\n    for (;;) {\r\n      t = r;\r\n      t3 = t.times(t).times(t);\r\n      t3plusx = t3.plus(x);\r\n      r = divide(t3plusx.plus(x).times(t), t3plusx.plus(t3), sd + 2, 1);\r\n\r\n      // TODO? Replace with for-loop and checkRoundingDigits.\r\n      if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {\r\n        n = n.slice(sd - 3, sd + 1);\r\n\r\n        // The 4th rounding digit may be in error by -1 so if the 4 rounding digits are 9999 or 4999\r\n        // , i.e. approaching a rounding boundary, continue the iteration.\r\n        if (n == '9999' || !rep && n == '4999') {\r\n\r\n          // On the first iteration only, check to see if rounding up gives the exact result as the\r\n          // nines may infinitely repeat.\r\n          if (!rep) {\r\n            finalise(t, e + 1, 0);\r\n\r\n            if (t.times(t).times(t).eq(x)) {\r\n              r = t;\r\n              break;\r\n            }\r\n          }\r\n\r\n          sd += 4;\r\n          rep = 1;\r\n        } else {\r\n\r\n          // If the rounding digits are null, 0{0,4} or 50{0,3}, check for an exact result.\r\n          // If not, then there are further digits and m will be truthy.\r\n          if (!+n || !+n.slice(1) && n.charAt(0) == '5') {\r\n\r\n            // Truncate to the first rounding digit.\r\n            finalise(r, e + 1, 1);\r\n            m = !r.times(r).times(r).eq(x);\r\n          }\r\n\r\n          break;\r\n        }\r\n      }\r\n    }\r\n\r\n    external = true;\r\n\r\n    return finalise(r, e, Ctor.rounding, m);\r\n  };\r\n\r\n\r\n  /*\r\n   * Return the number of decimal places of the value of this Decimal.\r\n   *\r\n   */\r\n  P.decimalPlaces = P.dp = function () {\r\n    var w,\r\n      d = this.d,\r\n      n = NaN;\r\n\r\n    if (d) {\r\n      w = d.length - 1;\r\n      n = (w - mathfloor(this.e / LOG_BASE)) * LOG_BASE;\r\n\r\n      // Subtract the number of trailing zeros of the last word.\r\n      w = d[w];\r\n      if (w) for (; w % 10 == 0; w /= 10) n--;\r\n      if (n < 0) n = 0;\r\n    }\r\n\r\n    return n;\r\n  };\r\n\r\n\r\n  /*\r\n   *  n / 0 = I\r\n   *  n / N = N\r\n   *  n / I = 0\r\n   *  0 / n = 0\r\n   *  0 / 0 = N\r\n   *  0 / N = N\r\n   *  0 / I = 0\r\n   *  N / n = N\r\n   *  N / 0 = N\r\n   *  N / N = N\r\n   *  N / I = N\r\n   *  I / n = I\r\n   *  I / 0 = I\r\n   *  I / N = N\r\n   *  I / I = N\r\n   *\r\n   * Return a new Decimal whose value is the value of this Decimal divided by `y`, rounded to\r\n   * `precision` significant digits using rounding mode `rounding`.\r\n   *\r\n   */\r\n  P.dividedBy = P.div = function (y) {\r\n    return divide(this, new this.constructor(y));\r\n  };\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the integer part of dividing the value of this Decimal\r\n   * by the value of `y`, rounded to `precision` significant digits using rounding mode `rounding`.\r\n   *\r\n   */\r\n  P.dividedToIntegerBy = P.divToInt = function (y) {\r\n    var x = this,\r\n      Ctor = x.constructor;\r\n    return finalise(divide(x, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);\r\n  };\r\n\r\n\r\n  /*\r\n   * Return true if the value of this Decimal is equal to the value of `y`, otherwise return false.\r\n   *\r\n   */\r\n  P.equals = P.eq = function (y) {\r\n    return this.cmp(y) === 0;\r\n  };\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the value of this Decimal rounded to a whole number in the\r\n   * direction of negative Infinity.\r\n   *\r\n   */\r\n  P.floor = function () {\r\n    return finalise(new this.constructor(this), this.e + 1, 3);\r\n  };\r\n\r\n\r\n  /*\r\n   * Return true if the value of this Decimal is greater than the value of `y`, otherwise return\r\n   * false.\r\n   *\r\n   */\r\n  P.greaterThan = P.gt = function (y) {\r\n    return this.cmp(y) > 0;\r\n  };\r\n\r\n\r\n  /*\r\n   * Return true if the value of this Decimal is greater than or equal to the value of `y`,\r\n   * otherwise return false.\r\n   *\r\n   */\r\n  P.greaterThanOrEqualTo = P.gte = function (y) {\r\n    var k = this.cmp(y);\r\n    return k == 1 || k === 0;\r\n  };\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the hyperbolic cosine of the value in radians of this\r\n   * Decimal.\r\n   *\r\n   * Domain: [-Infinity, Infinity]\r\n   * Range: [1, Infinity]\r\n   *\r\n   * cosh(x) = 1 + x^2/2! + x^4/4! + x^6/6! + ...\r\n   *\r\n   * cosh(0)         = 1\r\n   * cosh(-0)        = 1\r\n   * cosh(Infinity)  = Infinity\r\n   * cosh(-Infinity) = Infinity\r\n   * cosh(NaN)       = NaN\r\n   *\r\n   *  x        time taken (ms)   result\r\n   * 1000      9                 9.8503555700852349694e+433\r\n   * 10000     25                4.4034091128314607936e+4342\r\n   * 100000    171               1.4033316802130615897e+43429\r\n   * 1000000   3817              1.5166076984010437725e+434294\r\n   * 10000000  abandoned after 2 minute wait\r\n   *\r\n   * TODO? Compare performance of cosh(x) = 0.5 * (exp(x) + exp(-x))\r\n   *\r\n   */\r\n  P.hyperbolicCosine = P.cosh = function () {\r\n    var k, n, pr, rm, len,\r\n      x = this,\r\n      Ctor = x.constructor,\r\n      one = new Ctor(1);\r\n\r\n    if (!x.isFinite()) return new Ctor(x.s ? 1 / 0 : NaN);\r\n    if (x.isZero()) return one;\r\n\r\n    pr = Ctor.precision;\r\n    rm = Ctor.rounding;\r\n    Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;\r\n    Ctor.rounding = 1;\r\n    len = x.d.length;\r\n\r\n    // Argument reduction: cos(4x) = 1 - 8cos^2(x) + 8cos^4(x) + 1\r\n    // i.e. cos(x) = 1 - cos^2(x/4)(8 - 8cos^2(x/4))\r\n\r\n    // Estimate the optimum number of times to use the argument reduction.\r\n    // TODO? Estimation reused from cosine() and may not be optimal here.\r\n    if (len < 32) {\r\n      k = Math.ceil(len / 3);\r\n      n = (1 / tinyPow(4, k)).toString();\r\n    } else {\r\n      k = 16;\r\n      n = '2.3283064365386962890625e-10';\r\n    }\r\n\r\n    x = taylorSeries(Ctor, 1, x.times(n), new Ctor(1), true);\r\n\r\n    // Reverse argument reduction\r\n    var cosh2_x,\r\n      i = k,\r\n      d8 = new Ctor(8);\r\n    for (; i--;) {\r\n      cosh2_x = x.times(x);\r\n      x = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));\r\n    }\r\n\r\n    return finalise(x, Ctor.precision = pr, Ctor.rounding = rm, true);\r\n  };\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the hyperbolic sine of the value in radians of this\r\n   * Decimal.\r\n   *\r\n   * Domain: [-Infinity, Infinity]\r\n   * Range: [-Infinity, Infinity]\r\n   *\r\n   * sinh(x) = x + x^3/3! + x^5/5! + x^7/7! + ...\r\n   *\r\n   * sinh(0)         = 0\r\n   * sinh(-0)        = -0\r\n   * sinh(Infinity)  = Infinity\r\n   * sinh(-Infinity) = -Infinity\r\n   * sinh(NaN)       = NaN\r\n   *\r\n   * x        time taken (ms)\r\n   * 10       2 ms\r\n   * 100      5 ms\r\n   * 1000     14 ms\r\n   * 10000    82 ms\r\n   * 100000   886 ms            1.4033316802130615897e+43429\r\n   * 200000   2613 ms\r\n   * 300000   5407 ms\r\n   * 400000   8824 ms\r\n   * 500000   13026 ms          8.7080643612718084129e+217146\r\n   * 1000000  48543 ms\r\n   *\r\n   * TODO? Compare performance of sinh(x) = 0.5 * (exp(x) - exp(-x))\r\n   *\r\n   */\r\n  P.hyperbolicSine = P.sinh = function () {\r\n    var k, pr, rm, len,\r\n      x = this,\r\n      Ctor = x.constructor;\r\n\r\n    if (!x.isFinite() || x.isZero()) return new Ctor(x);\r\n\r\n    pr = Ctor.precision;\r\n    rm = Ctor.rounding;\r\n    Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;\r\n    Ctor.rounding = 1;\r\n    len = x.d.length;\r\n\r\n    if (len < 3) {\r\n      x = taylorSeries(Ctor, 2, x, x, true);\r\n    } else {\r\n\r\n      // Alternative argument reduction: sinh(3x) = sinh(x)(3 + 4sinh^2(x))\r\n      // i.e. sinh(x) = sinh(x/3)(3 + 4sinh^2(x/3))\r\n      // 3 multiplications and 1 addition\r\n\r\n      // Argument reduction: sinh(5x) = sinh(x)(5 + sinh^2(x)(20 + 16sinh^2(x)))\r\n      // i.e. sinh(x) = sinh(x/5)(5 + sinh^2(x/5)(20 + 16sinh^2(x/5)))\r\n      // 4 multiplications and 2 additions\r\n\r\n      // Estimate the optimum number of times to use the argument reduction.\r\n      k = 1.4 * Math.sqrt(len);\r\n      k = k > 16 ? 16 : k | 0;\r\n\r\n      x = x.times(1 / tinyPow(5, k));\r\n      x = taylorSeries(Ctor, 2, x, x, true);\r\n\r\n      // Reverse argument reduction\r\n      var sinh2_x,\r\n        d5 = new Ctor(5),\r\n        d16 = new Ctor(16),\r\n        d20 = new Ctor(20);\r\n      for (; k--;) {\r\n        sinh2_x = x.times(x);\r\n        x = x.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));\r\n      }\r\n    }\r\n\r\n    Ctor.precision = pr;\r\n    Ctor.rounding = rm;\r\n\r\n    return finalise(x, pr, rm, true);\r\n  };\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the hyperbolic tangent of the value in radians of this\r\n   * Decimal.\r\n   *\r\n   * Domain: [-Infinity, Infinity]\r\n   * Range: [-1, 1]\r\n   *\r\n   * tanh(x) = sinh(x) / cosh(x)\r\n   *\r\n   * tanh(0)         = 0\r\n   * tanh(-0)        = -0\r\n   * tanh(Infinity)  = 1\r\n   * tanh(-Infinity) = -1\r\n   * tanh(NaN)       = NaN\r\n   *\r\n   */\r\n  P.hyperbolicTangent = P.tanh = function () {\r\n    var pr, rm,\r\n      x = this,\r\n      Ctor = x.constructor;\r\n\r\n    if (!x.isFinite()) return new Ctor(x.s);\r\n    if (x.isZero()) return new Ctor(x);\r\n\r\n    pr = Ctor.precision;\r\n    rm = Ctor.rounding;\r\n    Ctor.precision = pr + 7;\r\n    Ctor.rounding = 1;\r\n\r\n    return divide(x.sinh(), x.cosh(), Ctor.precision = pr, Ctor.rounding = rm);\r\n  };\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the arccosine (inverse cosine) in radians of the value of\r\n   * this Decimal.\r\n   *\r\n   * Domain: [-1, 1]\r\n   * Range: [0, pi]\r\n   *\r\n   * acos(x) = pi/2 - asin(x)\r\n   *\r\n   * acos(0)       = pi/2\r\n   * acos(-0)      = pi/2\r\n   * acos(1)       = 0\r\n   * acos(-1)      = pi\r\n   * acos(1/2)     = pi/3\r\n   * acos(-1/2)    = 2*pi/3\r\n   * acos(|x| > 1) = NaN\r\n   * acos(NaN)     = NaN\r\n   *\r\n   */\r\n  P.inverseCosine = P.acos = function () {\r\n    var halfPi,\r\n      x = this,\r\n      Ctor = x.constructor,\r\n      k = x.abs().cmp(1),\r\n      pr = Ctor.precision,\r\n      rm = Ctor.rounding;\r\n\r\n    if (k !== -1) {\r\n      return k === 0\r\n        // |x| is 1\r\n        ? x.isNeg() ? getPi(Ctor, pr, rm) : new Ctor(0)\r\n        // |x| > 1 or x is NaN\r\n        : new Ctor(NaN);\r\n    }\r\n\r\n    if (x.isZero()) return getPi(Ctor, pr + 4, rm).times(0.5);\r\n\r\n    // TODO? Special case acos(0.5) = pi/3 and acos(-0.5) = 2*pi/3\r\n\r\n    Ctor.precision = pr + 6;\r\n    Ctor.rounding = 1;\r\n\r\n    x = x.asin();\r\n    halfPi = getPi(Ctor, pr + 4, rm).times(0.5);\r\n\r\n    Ctor.precision = pr;\r\n    Ctor.rounding = rm;\r\n\r\n    return halfPi.minus(x);\r\n  };\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the inverse of the hyperbolic cosine in radians of the\r\n   * value of this Decimal.\r\n   *\r\n   * Domain: [1, Infinity]\r\n   * Range: [0, Infinity]\r\n   *\r\n   * acosh(x) = ln(x + sqrt(x^2 - 1))\r\n   *\r\n   * acosh(x < 1)     = NaN\r\n   * acosh(NaN)       = NaN\r\n   * acosh(Infinity)  = Infinity\r\n   * acosh(-Infinity) = NaN\r\n   * acosh(0)         = NaN\r\n   * acosh(-0)        = NaN\r\n   * acosh(1)         = 0\r\n   * acosh(-1)        = NaN\r\n   *\r\n   */\r\n  P.inverseHyperbolicCosine = P.acosh = function () {\r\n    var pr, rm,\r\n      x = this,\r\n      Ctor = x.constructor;\r\n\r\n    if (x.lte(1)) return new Ctor(x.eq(1) ? 0 : NaN);\r\n    if (!x.isFinite()) return new Ctor(x);\r\n\r\n    pr = Ctor.precision;\r\n    rm = Ctor.rounding;\r\n    Ctor.precision = pr + Math.max(Math.abs(x.e), x.sd()) + 4;\r\n    Ctor.rounding = 1;\r\n    external = false;\r\n\r\n    x = x.times(x).minus(1).sqrt().plus(x);\r\n\r\n    external = true;\r\n    Ctor.precision = pr;\r\n    Ctor.rounding = rm;\r\n\r\n    return x.ln();\r\n  };\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the inverse of the hyperbolic sine in radians of the value\r\n   * of this Decimal.\r\n   *\r\n   * Domain: [-Infinity, Infinity]\r\n   * Range: [-Infinity, Infinity]\r\n   *\r\n   * asinh(x) = ln(x + sqrt(x^2 + 1))\r\n   *\r\n   * asinh(NaN)       = NaN\r\n   * asinh(Infinity)  = Infinity\r\n   * asinh(-Infinity) = -Infinity\r\n   * asinh(0)         = 0\r\n   * asinh(-0)        = -0\r\n   *\r\n   */\r\n  P.inverseHyperbolicSine = P.asinh = function () {\r\n    var pr, rm,\r\n      x = this,\r\n      Ctor = x.constructor;\r\n\r\n    if (!x.isFinite() || x.isZero()) return new Ctor(x);\r\n\r\n    pr = Ctor.precision;\r\n    rm = Ctor.rounding;\r\n    Ctor.precision = pr + 2 * Math.max(Math.abs(x.e), x.sd()) + 6;\r\n    Ctor.rounding = 1;\r\n    external = false;\r\n\r\n    x = x.times(x).plus(1).sqrt().plus(x);\r\n\r\n    external = true;\r\n    Ctor.precision = pr;\r\n    Ctor.rounding = rm;\r\n\r\n    return x.ln();\r\n  };\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the inverse of the hyperbolic tangent in radians of the\r\n   * value of this Decimal.\r\n   *\r\n   * Domain: [-1, 1]\r\n   * Range: [-Infinity, Infinity]\r\n   *\r\n   * atanh(x) = 0.5 * ln((1 + x) / (1 - x))\r\n   *\r\n   * atanh(|x| > 1)   = NaN\r\n   * atanh(NaN)       = NaN\r\n   * atanh(Infinity)  = NaN\r\n   * atanh(-Infinity) = NaN\r\n   * atanh(0)         = 0\r\n   * atanh(-0)        = -0\r\n   * atanh(1)         = Infinity\r\n   * atanh(-1)        = -Infinity\r\n   *\r\n   */\r\n  P.inverseHyperbolicTangent = P.atanh = function () {\r\n    var pr, rm, wpr, xsd,\r\n      x = this,\r\n      Ctor = x.constructor;\r\n\r\n    if (!x.isFinite()) return new Ctor(NaN);\r\n    if (x.e >= 0) return new Ctor(x.abs().eq(1) ? x.s / 0 : x.isZero() ? x : NaN);\r\n\r\n    pr = Ctor.precision;\r\n    rm = Ctor.rounding;\r\n    xsd = x.sd();\r\n\r\n    if (Math.max(xsd, pr) < 2 * -x.e - 1) return finalise(new Ctor(x), pr, rm, true);\r\n\r\n    Ctor.precision = wpr = xsd - x.e;\r\n\r\n    x = divide(x.plus(1), new Ctor(1).minus(x), wpr + pr, 1);\r\n\r\n    Ctor.precision = pr + 4;\r\n    Ctor.rounding = 1;\r\n\r\n    x = x.ln();\r\n\r\n    Ctor.precision = pr;\r\n    Ctor.rounding = rm;\r\n\r\n    return x.times(0.5);\r\n  };\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the arcsine (inverse sine) in radians of the value of this\r\n   * Decimal.\r\n   *\r\n   * Domain: [-Infinity, Infinity]\r\n   * Range: [-pi/2, pi/2]\r\n   *\r\n   * asin(x) = 2*atan(x/(1 + sqrt(1 - x^2)))\r\n   *\r\n   * asin(0)       = 0\r\n   * asin(-0)      = -0\r\n   * asin(1/2)     = pi/6\r\n   * asin(-1/2)    = -pi/6\r\n   * asin(1)       = pi/2\r\n   * asin(-1)      = -pi/2\r\n   * asin(|x| > 1) = NaN\r\n   * asin(NaN)     = NaN\r\n   *\r\n   * TODO? Compare performance of Taylor series.\r\n   *\r\n   */\r\n  P.inverseSine = P.asin = function () {\r\n    var halfPi, k,\r\n      pr, rm,\r\n      x = this,\r\n      Ctor = x.constructor;\r\n\r\n    if (x.isZero()) return new Ctor(x);\r\n\r\n    k = x.abs().cmp(1);\r\n    pr = Ctor.precision;\r\n    rm = Ctor.rounding;\r\n\r\n    if (k !== -1) {\r\n\r\n      // |x| is 1\r\n      if (k === 0) {\r\n        halfPi = getPi(Ctor, pr + 4, rm).times(0.5);\r\n        halfPi.s = x.s;\r\n        return halfPi;\r\n      }\r\n\r\n      // |x| > 1 or x is NaN\r\n      return new Ctor(NaN);\r\n    }\r\n\r\n    // TODO? Special case asin(1/2) = pi/6 and asin(-1/2) = -pi/6\r\n\r\n    Ctor.precision = pr + 6;\r\n    Ctor.rounding = 1;\r\n\r\n    x = x.div(new Ctor(1).minus(x.times(x)).sqrt().plus(1)).atan();\r\n\r\n    Ctor.precision = pr;\r\n    Ctor.rounding = rm;\r\n\r\n    return x.times(2);\r\n  };\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the arctangent (inverse tangent) in radians of the value\r\n   * of this Decimal.\r\n   *\r\n   * Domain: [-Infinity, Infinity]\r\n   * Range: [-pi/2, pi/2]\r\n   *\r\n   * atan(x) = x - x^3/3 + x^5/5 - x^7/7 + ...\r\n   *\r\n   * atan(0)         = 0\r\n   * atan(-0)        = -0\r\n   * atan(1)         = pi/4\r\n   * atan(-1)        = -pi/4\r\n   * atan(Infinity)  = pi/2\r\n   * atan(-Infinity) = -pi/2\r\n   * atan(NaN)       = NaN\r\n   *\r\n   */\r\n  P.inverseTangent = P.atan = function () {\r\n    var i, j, k, n, px, t, r, wpr, x2,\r\n      x = this,\r\n      Ctor = x.constructor,\r\n      pr = Ctor.precision,\r\n      rm = Ctor.rounding;\r\n\r\n    if (!x.isFinite()) {\r\n      if (!x.s) return new Ctor(NaN);\r\n      if (pr + 4 <= PI_PRECISION) {\r\n        r = getPi(Ctor, pr + 4, rm).times(0.5);\r\n        r.s = x.s;\r\n        return r;\r\n      }\r\n    } else if (x.isZero()) {\r\n      return new Ctor(x);\r\n    } else if (x.abs().eq(1) && pr + 4 <= PI_PRECISION) {\r\n      r = getPi(Ctor, pr + 4, rm).times(0.25);\r\n      r.s = x.s;\r\n      return r;\r\n    }\r\n\r\n    Ctor.precision = wpr = pr + 10;\r\n    Ctor.rounding = 1;\r\n\r\n    // TODO? if (x >= 1 && pr <= PI_PRECISION) atan(x) = halfPi * x.s - atan(1 / x);\r\n\r\n    // Argument reduction\r\n    // Ensure |x| < 0.42\r\n    // atan(x) = 2 * atan(x / (1 + sqrt(1 + x^2)))\r\n\r\n    k = Math.min(28, wpr / LOG_BASE + 2 | 0);\r\n\r\n    for (i = k; i; --i) x = x.div(x.times(x).plus(1).sqrt().plus(1));\r\n\r\n    external = false;\r\n\r\n    j = Math.ceil(wpr / LOG_BASE);\r\n    n = 1;\r\n    x2 = x.times(x);\r\n    r = new Ctor(x);\r\n    px = x;\r\n\r\n    // atan(x) = x - x^3/3 + x^5/5 - x^7/7 + ...\r\n    for (; i !== -1;) {\r\n      px = px.times(x2);\r\n      t = r.minus(px.div(n += 2));\r\n\r\n      px = px.times(x2);\r\n      r = t.plus(px.div(n += 2));\r\n\r\n      if (r.d[j] !== void 0) for (i = j; r.d[i] === t.d[i] && i--;);\r\n    }\r\n\r\n    if (k) r = r.times(2 << (k - 1));\r\n\r\n    external = true;\r\n\r\n    return finalise(r, Ctor.precision = pr, Ctor.rounding = rm, true);\r\n  };\r\n\r\n\r\n  /*\r\n   * Return true if the value of this Decimal is a finite number, otherwise return false.\r\n   *\r\n   */\r\n  P.isFinite = function () {\r\n    return !!this.d;\r\n  };\r\n\r\n\r\n  /*\r\n   * Return true if the value of this Decimal is an integer, otherwise return false.\r\n   *\r\n   */\r\n  P.isInteger = P.isInt = function () {\r\n    return !!this.d && mathfloor(this.e / LOG_BASE) > this.d.length - 2;\r\n  };\r\n\r\n\r\n  /*\r\n   * Return true if the value of this Decimal is NaN, otherwise return false.\r\n   *\r\n   */\r\n  P.isNaN = function () {\r\n    return !this.s;\r\n  };\r\n\r\n\r\n  /*\r\n   * Return true if the value of this Decimal is negative, otherwise return false.\r\n   *\r\n   */\r\n  P.isNegative = P.isNeg = function () {\r\n    return this.s < 0;\r\n  };\r\n\r\n\r\n  /*\r\n   * Return true if the value of this Decimal is positive, otherwise return false.\r\n   *\r\n   */\r\n  P.isPositive = P.isPos = function () {\r\n    return this.s > 0;\r\n  };\r\n\r\n\r\n  /*\r\n   * Return true if the value of this Decimal is 0 or -0, otherwise return false.\r\n   *\r\n   */\r\n  P.isZero = function () {\r\n    return !!this.d && this.d[0] === 0;\r\n  };\r\n\r\n\r\n  /*\r\n   * Return true if the value of this Decimal is less than `y`, otherwise return false.\r\n   *\r\n   */\r\n  P.lessThan = P.lt = function (y) {\r\n    return this.cmp(y) < 0;\r\n  };\r\n\r\n\r\n  /*\r\n   * Return true if the value of this Decimal is less than or equal to `y`, otherwise return false.\r\n   *\r\n   */\r\n  P.lessThanOrEqualTo = P.lte = function (y) {\r\n    return this.cmp(y) < 1;\r\n  };\r\n\r\n\r\n  /*\r\n   * Return the logarithm of the value of this Decimal to the specified base, rounded to `precision`\r\n   * significant digits using rounding mode `rounding`.\r\n   *\r\n   * If no base is specified, return log[10](arg).\r\n   *\r\n   * log[base](arg) = ln(arg) / ln(base)\r\n   *\r\n   * The result will always be correctly rounded if the base of the log is 10, and 'almost always'\r\n   * otherwise:\r\n   *\r\n   * Depending on the rounding mode, the result may be incorrectly rounded if the first fifteen\r\n   * rounding digits are [49]99999999999999 or [50]00000000000000. In that case, the maximum error\r\n   * between the result and the correctly rounded result will be one ulp (unit in the last place).\r\n   *\r\n   * log[-b](a)       = NaN\r\n   * log[0](a)        = NaN\r\n   * log[1](a)        = NaN\r\n   * log[NaN](a)      = NaN\r\n   * log[Infinity](a) = NaN\r\n   * log[b](0)        = -Infinity\r\n   * log[b](-0)       = -Infinity\r\n   * log[b](-a)       = NaN\r\n   * log[b](1)        = 0\r\n   * log[b](Infinity) = Infinity\r\n   * log[b](NaN)      = NaN\r\n   *\r\n   * [base] {number|string|Decimal} The base of the logarithm.\r\n   *\r\n   */\r\n  P.logarithm = P.log = function (base) {\r\n    var isBase10, d, denominator, k, inf, num, sd, r,\r\n      arg = this,\r\n      Ctor = arg.constructor,\r\n      pr = Ctor.precision,\r\n      rm = Ctor.rounding,\r\n      guard = 5;\r\n\r\n    // Default base is 10.\r\n    if (base == null) {\r\n      base = new Ctor(10);\r\n      isBase10 = true;\r\n    } else {\r\n      base = new Ctor(base);\r\n      d = base.d;\r\n\r\n      // Return NaN if base is negative, or non-finite, or is 0 or 1.\r\n      if (base.s < 0 || !d || !d[0] || base.eq(1)) return new Ctor(NaN);\r\n\r\n      isBase10 = base.eq(10);\r\n    }\r\n\r\n    d = arg.d;\r\n\r\n    // Is arg negative, non-finite, 0 or 1?\r\n    if (arg.s < 0 || !d || !d[0] || arg.eq(1)) {\r\n      return new Ctor(d && !d[0] ? -1 / 0 : arg.s != 1 ? NaN : d ? 0 : 1 / 0);\r\n    }\r\n\r\n    // The result will have a non-terminating decimal expansion if base is 10 and arg is not an\r\n    // integer power of 10.\r\n    if (isBase10) {\r\n      if (d.length > 1) {\r\n        inf = true;\r\n      } else {\r\n        for (k = d[0]; k % 10 === 0;) k /= 10;\r\n        inf = k !== 1;\r\n      }\r\n    }\r\n\r\n    external = false;\r\n    sd = pr + guard;\r\n    num = naturalLogarithm(arg, sd);\r\n    denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);\r\n\r\n    // The result will have 5 rounding digits.\r\n    r = divide(num, denominator, sd, 1);\r\n\r\n    // If at a rounding boundary, i.e. the result's rounding digits are [49]9999 or [50]0000,\r\n    // calculate 10 further digits.\r\n    //\r\n    // If the result is known to have an infinite decimal expansion, repeat this until it is clear\r\n    // that the result is above or below the boundary. Otherwise, if after calculating the 10\r\n    // further digits, the last 14 are nines, round up and assume the result is exact.\r\n    // Also assume the result is exact if the last 14 are zero.\r\n    //\r\n    // Example of a result that will be incorrectly rounded:\r\n    // log[1048576](4503599627370502) = 2.60000000000000009610279511444746...\r\n    // The above result correctly rounded using ROUND_CEIL to 1 decimal place should be 2.7, but it\r\n    // will be given as 2.6 as there are 15 zeros immediately after the requested decimal place, so\r\n    // the exact result would be assumed to be 2.6, which rounded using ROUND_CEIL to 1 decimal\r\n    // place is still 2.6.\r\n    if (checkRoundingDigits(r.d, k = pr, rm)) {\r\n\r\n      do {\r\n        sd += 10;\r\n        num = naturalLogarithm(arg, sd);\r\n        denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);\r\n        r = divide(num, denominator, sd, 1);\r\n\r\n        if (!inf) {\r\n\r\n          // Check for 14 nines from the 2nd rounding digit, as the first may be 4.\r\n          if (+digitsToString(r.d).slice(k + 1, k + 15) + 1 == 1e14) {\r\n            r = finalise(r, pr + 1, 0);\r\n          }\r\n\r\n          break;\r\n        }\r\n      } while (checkRoundingDigits(r.d, k += 10, rm));\r\n    }\r\n\r\n    external = true;\r\n\r\n    return finalise(r, pr, rm);\r\n  };\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the maximum of the arguments and the value of this Decimal.\r\n   *\r\n   * arguments {number|string|Decimal}\r\n   *\r\n  P.max = function () {\r\n    Array.prototype.push.call(arguments, this);\r\n    return maxOrMin(this.constructor, arguments, 'lt');\r\n  };\r\n   */\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the minimum of the arguments and the value of this Decimal.\r\n   *\r\n   * arguments {number|string|Decimal}\r\n   *\r\n  P.min = function () {\r\n    Array.prototype.push.call(arguments, this);\r\n    return maxOrMin(this.constructor, arguments, 'gt');\r\n  };\r\n   */\r\n\r\n\r\n  /*\r\n   *  n - 0 = n\r\n   *  n - N = N\r\n   *  n - I = -I\r\n   *  0 - n = -n\r\n   *  0 - 0 = 0\r\n   *  0 - N = N\r\n   *  0 - I = -I\r\n   *  N - n = N\r\n   *  N - 0 = N\r\n   *  N - N = N\r\n   *  N - I = N\r\n   *  I - n = I\r\n   *  I - 0 = I\r\n   *  I - N = N\r\n   *  I - I = N\r\n   *\r\n   * Return a new Decimal whose value is the value of this Decimal minus `y`, rounded to `precision`\r\n   * significant digits using rounding mode `rounding`.\r\n   *\r\n   */\r\n  P.minus = P.sub = function (y) {\r\n    var d, e, i, j, k, len, pr, rm, xd, xe, xLTy, yd,\r\n      x = this,\r\n      Ctor = x.constructor;\r\n\r\n    y = new Ctor(y);\r\n\r\n    // If either is not finite...\r\n    if (!x.d || !y.d) {\r\n\r\n      // Return NaN if either is NaN.\r\n      if (!x.s || !y.s) y = new Ctor(NaN);\r\n\r\n      // Return y negated if x is finite and y is ±Infinity.\r\n      else if (x.d) y.s = -y.s;\r\n\r\n      // Return x if y is finite and x is ±Infinity.\r\n      // Return x if both are ±Infinity with different signs.\r\n      // Return NaN if both are ±Infinity with the same sign.\r\n      else y = new Ctor(y.d || x.s !== y.s ? x : NaN);\r\n\r\n      return y;\r\n    }\r\n\r\n    // If signs differ...\r\n    if (x.s != y.s) {\r\n      y.s = -y.s;\r\n      return x.plus(y);\r\n    }\r\n\r\n    xd = x.d;\r\n    yd = y.d;\r\n    pr = Ctor.precision;\r\n    rm = Ctor.rounding;\r\n\r\n    // If either is zero...\r\n    if (!xd[0] || !yd[0]) {\r\n\r\n      // Return y negated if x is zero and y is non-zero.\r\n      if (yd[0]) y.s = -y.s;\r\n\r\n      // Return x if y is zero and x is non-zero.\r\n      else if (xd[0]) y = new Ctor(x);\r\n\r\n      // Return zero if both are zero.\r\n      // From IEEE 754 (2008) 6.3: 0 - 0 = -0 - -0 = -0 when rounding to -Infinity.\r\n      else return new Ctor(rm === 3 ? -0 : 0);\r\n\r\n      return external ? finalise(y, pr, rm) : y;\r\n    }\r\n\r\n    // x and y are finite, non-zero numbers with the same sign.\r\n\r\n    // Calculate base 1e7 exponents.\r\n    e = mathfloor(y.e / LOG_BASE);\r\n    xe = mathfloor(x.e / LOG_BASE);\r\n\r\n    xd = xd.slice();\r\n    k = xe - e;\r\n\r\n    // If base 1e7 exponents differ...\r\n    if (k) {\r\n      xLTy = k < 0;\r\n\r\n      if (xLTy) {\r\n        d = xd;\r\n        k = -k;\r\n        len = yd.length;\r\n      } else {\r\n        d = yd;\r\n        e = xe;\r\n        len = xd.length;\r\n      }\r\n\r\n      // Numbers with massively different exponents would result in a very high number of\r\n      // zeros needing to be prepended, but this can be avoided while still ensuring correct\r\n      // rounding by limiting the number of zeros to `Math.ceil(pr / LOG_BASE) + 2`.\r\n      i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;\r\n\r\n      if (k > i) {\r\n        k = i;\r\n        d.length = 1;\r\n      }\r\n\r\n      // Prepend zeros to equalise exponents.\r\n      d.reverse();\r\n      for (i = k; i--;) d.push(0);\r\n      d.reverse();\r\n\r\n    // Base 1e7 exponents equal.\r\n    } else {\r\n\r\n      // Check digits to determine which is the bigger number.\r\n\r\n      i = xd.length;\r\n      len = yd.length;\r\n      xLTy = i < len;\r\n      if (xLTy) len = i;\r\n\r\n      for (i = 0; i < len; i++) {\r\n        if (xd[i] != yd[i]) {\r\n          xLTy = xd[i] < yd[i];\r\n          break;\r\n        }\r\n      }\r\n\r\n      k = 0;\r\n    }\r\n\r\n    if (xLTy) {\r\n      d = xd;\r\n      xd = yd;\r\n      yd = d;\r\n      y.s = -y.s;\r\n    }\r\n\r\n    len = xd.length;\r\n\r\n    // Append zeros to `xd` if shorter.\r\n    // Don't add zeros to `yd` if shorter as subtraction only needs to start at `yd` length.\r\n    for (i = yd.length - len; i > 0; --i) xd[len++] = 0;\r\n\r\n    // Subtract yd from xd.\r\n    for (i = yd.length; i > k;) {\r\n\r\n      if (xd[--i] < yd[i]) {\r\n        for (j = i; j && xd[--j] === 0;) xd[j] = BASE - 1;\r\n        --xd[j];\r\n        xd[i] += BASE;\r\n      }\r\n\r\n      xd[i] -= yd[i];\r\n    }\r\n\r\n    // Remove trailing zeros.\r\n    for (; xd[--len] === 0;) xd.pop();\r\n\r\n    // Remove leading zeros and adjust exponent accordingly.\r\n    for (; xd[0] === 0; xd.shift()) --e;\r\n\r\n    // Zero?\r\n    if (!xd[0]) return new Ctor(rm === 3 ? -0 : 0);\r\n\r\n    y.d = xd;\r\n    y.e = getBase10Exponent(xd, e);\r\n\r\n    return external ? finalise(y, pr, rm) : y;\r\n  };\r\n\r\n\r\n  /*\r\n   *   n % 0 =  N\r\n   *   n % N =  N\r\n   *   n % I =  n\r\n   *   0 % n =  0\r\n   *  -0 % n = -0\r\n   *   0 % 0 =  N\r\n   *   0 % N =  N\r\n   *   0 % I =  0\r\n   *   N % n =  N\r\n   *   N % 0 =  N\r\n   *   N % N =  N\r\n   *   N % I =  N\r\n   *   I % n =  N\r\n   *   I % 0 =  N\r\n   *   I % N =  N\r\n   *   I % I =  N\r\n   *\r\n   * Return a new Decimal whose value is the value of this Decimal modulo `y`, rounded to\r\n   * `precision` significant digits using rounding mode `rounding`.\r\n   *\r\n   * The result depends on the modulo mode.\r\n   *\r\n   */\r\n  P.modulo = P.mod = function (y) {\r\n    var q,\r\n      x = this,\r\n      Ctor = x.constructor;\r\n\r\n    y = new Ctor(y);\r\n\r\n    // Return NaN if x is ±Infinity or NaN, or y is NaN or ±0.\r\n    if (!x.d || !y.s || y.d && !y.d[0]) return new Ctor(NaN);\r\n\r\n    // Return x if y is ±Infinity or x is ±0.\r\n    if (!y.d || x.d && !x.d[0]) {\r\n      return finalise(new Ctor(x), Ctor.precision, Ctor.rounding);\r\n    }\r\n\r\n    // Prevent rounding of intermediate calculations.\r\n    external = false;\r\n\r\n    if (Ctor.modulo == 9) {\r\n\r\n      // Euclidian division: q = sign(y) * floor(x / abs(y))\r\n      // result = x - q * y    where  0 <= result < abs(y)\r\n      q = divide(x, y.abs(), 0, 3, 1);\r\n      q.s *= y.s;\r\n    } else {\r\n      q = divide(x, y, 0, Ctor.modulo, 1);\r\n    }\r\n\r\n    q = q.times(y);\r\n\r\n    external = true;\r\n\r\n    return x.minus(q);\r\n  };\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the natural exponential of the value of this Decimal,\r\n   * i.e. the base e raised to the power the value of this Decimal, rounded to `precision`\r\n   * significant digits using rounding mode `rounding`.\r\n   *\r\n   */\r\n  P.naturalExponential = P.exp = function () {\r\n    return naturalExponential(this);\r\n  };\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the natural logarithm of the value of this Decimal,\r\n   * rounded to `precision` significant digits using rounding mode `rounding`.\r\n   *\r\n   */\r\n  P.naturalLogarithm = P.ln = function () {\r\n    return naturalLogarithm(this);\r\n  };\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the value of this Decimal negated, i.e. as if multiplied by\r\n   * -1.\r\n   *\r\n   */\r\n  P.negated = P.neg = function () {\r\n    var x = new this.constructor(this);\r\n    x.s = -x.s;\r\n    return finalise(x);\r\n  };\r\n\r\n\r\n  /*\r\n   *  n + 0 = n\r\n   *  n + N = N\r\n   *  n + I = I\r\n   *  0 + n = n\r\n   *  0 + 0 = 0\r\n   *  0 + N = N\r\n   *  0 + I = I\r\n   *  N + n = N\r\n   *  N + 0 = N\r\n   *  N + N = N\r\n   *  N + I = N\r\n   *  I + n = I\r\n   *  I + 0 = I\r\n   *  I + N = N\r\n   *  I + I = I\r\n   *\r\n   * Return a new Decimal whose value is the value of this Decimal plus `y`, rounded to `precision`\r\n   * significant digits using rounding mode `rounding`.\r\n   *\r\n   */\r\n  P.plus = P.add = function (y) {\r\n    var carry, d, e, i, k, len, pr, rm, xd, yd,\r\n      x = this,\r\n      Ctor = x.constructor;\r\n\r\n    y = new Ctor(y);\r\n\r\n    // If either is not finite...\r\n    if (!x.d || !y.d) {\r\n\r\n      // Return NaN if either is NaN.\r\n      if (!x.s || !y.s) y = new Ctor(NaN);\r\n\r\n      // Return x if y is finite and x is ±Infinity.\r\n      // Return x if both are ±Infinity with the same sign.\r\n      // Return NaN if both are ±Infinity with different signs.\r\n      // Return y if x is finite and y is ±Infinity.\r\n      else if (!x.d) y = new Ctor(y.d || x.s === y.s ? x : NaN);\r\n\r\n      return y;\r\n    }\r\n\r\n     // If signs differ...\r\n    if (x.s != y.s) {\r\n      y.s = -y.s;\r\n      return x.minus(y);\r\n    }\r\n\r\n    xd = x.d;\r\n    yd = y.d;\r\n    pr = Ctor.precision;\r\n    rm = Ctor.rounding;\r\n\r\n    // If either is zero...\r\n    if (!xd[0] || !yd[0]) {\r\n\r\n      // Return x if y is zero.\r\n      // Return y if y is non-zero.\r\n      if (!yd[0]) y = new Ctor(x);\r\n\r\n      return external ? finalise(y, pr, rm) : y;\r\n    }\r\n\r\n    // x and y are finite, non-zero numbers with the same sign.\r\n\r\n    // Calculate base 1e7 exponents.\r\n    k = mathfloor(x.e / LOG_BASE);\r\n    e = mathfloor(y.e / LOG_BASE);\r\n\r\n    xd = xd.slice();\r\n    i = k - e;\r\n\r\n    // If base 1e7 exponents differ...\r\n    if (i) {\r\n\r\n      if (i < 0) {\r\n        d = xd;\r\n        i = -i;\r\n        len = yd.length;\r\n      } else {\r\n        d = yd;\r\n        e = k;\r\n        len = xd.length;\r\n      }\r\n\r\n      // Limit number of zeros prepended to max(ceil(pr / LOG_BASE), len) + 1.\r\n      k = Math.ceil(pr / LOG_BASE);\r\n      len = k > len ? k + 1 : len + 1;\r\n\r\n      if (i > len) {\r\n        i = len;\r\n        d.length = 1;\r\n      }\r\n\r\n      // Prepend zeros to equalise exponents. Note: Faster to use reverse then do unshifts.\r\n      d.reverse();\r\n      for (; i--;) d.push(0);\r\n      d.reverse();\r\n    }\r\n\r\n    len = xd.length;\r\n    i = yd.length;\r\n\r\n    // If yd is longer than xd, swap xd and yd so xd points to the longer array.\r\n    if (len - i < 0) {\r\n      i = len;\r\n      d = yd;\r\n      yd = xd;\r\n      xd = d;\r\n    }\r\n\r\n    // Only start adding at yd.length - 1 as the further digits of xd can be left as they are.\r\n    for (carry = 0; i;) {\r\n      carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;\r\n      xd[i] %= BASE;\r\n    }\r\n\r\n    if (carry) {\r\n      xd.unshift(carry);\r\n      ++e;\r\n    }\r\n\r\n    // Remove trailing zeros.\r\n    // No need to check for zero, as +x + +y != 0 && -x + -y != 0\r\n    for (len = xd.length; xd[--len] == 0;) xd.pop();\r\n\r\n    y.d = xd;\r\n    y.e = getBase10Exponent(xd, e);\r\n\r\n    return external ? finalise(y, pr, rm) : y;\r\n  };\r\n\r\n\r\n  /*\r\n   * Return the number of significant digits of the value of this Decimal.\r\n   *\r\n   * [z] {boolean|number} Whether to count integer-part trailing zeros: true, false, 1 or 0.\r\n   *\r\n   */\r\n  P.precision = P.sd = function (z) {\r\n    var k,\r\n      x = this;\r\n\r\n    if (z !== void 0 && z !== !!z && z !== 1 && z !== 0) throw Error(invalidArgument + z);\r\n\r\n    if (x.d) {\r\n      k = getPrecision(x.d);\r\n      if (z && x.e + 1 > k) k = x.e + 1;\r\n    } else {\r\n      k = NaN;\r\n    }\r\n\r\n    return k;\r\n  };\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the value of this Decimal rounded to a whole number using\r\n   * rounding mode `rounding`.\r\n   *\r\n   */\r\n  P.round = function () {\r\n    var x = this,\r\n      Ctor = x.constructor;\r\n\r\n    return finalise(new Ctor(x), x.e + 1, Ctor.rounding);\r\n  };\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the sine of the value in radians of this Decimal.\r\n   *\r\n   * Domain: [-Infinity, Infinity]\r\n   * Range: [-1, 1]\r\n   *\r\n   * sin(x) = x - x^3/3! + x^5/5! - ...\r\n   *\r\n   * sin(0)         = 0\r\n   * sin(-0)        = -0\r\n   * sin(Infinity)  = NaN\r\n   * sin(-Infinity) = NaN\r\n   * sin(NaN)       = NaN\r\n   *\r\n   */\r\n  P.sine = P.sin = function () {\r\n    var pr, rm,\r\n      x = this,\r\n      Ctor = x.constructor;\r\n\r\n    if (!x.isFinite()) return new Ctor(NaN);\r\n    if (x.isZero()) return new Ctor(x);\r\n\r\n    pr = Ctor.precision;\r\n    rm = Ctor.rounding;\r\n    Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;\r\n    Ctor.rounding = 1;\r\n\r\n    x = sine(Ctor, toLessThanHalfPi(Ctor, x));\r\n\r\n    Ctor.precision = pr;\r\n    Ctor.rounding = rm;\r\n\r\n    return finalise(quadrant > 2 ? x.neg() : x, pr, rm, true);\r\n  };\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the square root of this Decimal, rounded to `precision`\r\n   * significant digits using rounding mode `rounding`.\r\n   *\r\n   *  sqrt(-n) =  N\r\n   *  sqrt(N)  =  N\r\n   *  sqrt(-I) =  N\r\n   *  sqrt(I)  =  I\r\n   *  sqrt(0)  =  0\r\n   *  sqrt(-0) = -0\r\n   *\r\n   */\r\n  P.squareRoot = P.sqrt = function () {\r\n    var m, n, sd, r, rep, t,\r\n      x = this,\r\n      d = x.d,\r\n      e = x.e,\r\n      s = x.s,\r\n      Ctor = x.constructor;\r\n\r\n    // Negative/NaN/Infinity/zero?\r\n    if (s !== 1 || !d || !d[0]) {\r\n      return new Ctor(!s || s < 0 && (!d || d[0]) ? NaN : d ? x : 1 / 0);\r\n    }\r\n\r\n    external = false;\r\n\r\n    // Initial estimate.\r\n    s = Math.sqrt(+x);\r\n\r\n    // Math.sqrt underflow/overflow?\r\n    // Pass x to Math.sqrt as integer, then adjust the exponent of the result.\r\n    if (s == 0 || s == 1 / 0) {\r\n      n = digitsToString(d);\r\n\r\n      if ((n.length + e) % 2 == 0) n += '0';\r\n      s = Math.sqrt(n);\r\n      e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);\r\n\r\n      if (s == 1 / 0) {\r\n        n = '1e' + e;\r\n      } else {\r\n        n = s.toExponential();\r\n        n = n.slice(0, n.indexOf('e') + 1) + e;\r\n      }\r\n\r\n      r = new Ctor(n);\r\n    } else {\r\n      r = new Ctor(s.toString());\r\n    }\r\n\r\n    sd = (e = Ctor.precision) + 3;\r\n\r\n    // Newton-Raphson iteration.\r\n    for (;;) {\r\n      t = r;\r\n      r = t.plus(divide(x, t, sd + 2, 1)).times(0.5);\r\n\r\n      // TODO? Replace with for-loop and checkRoundingDigits.\r\n      if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {\r\n        n = n.slice(sd - 3, sd + 1);\r\n\r\n        // The 4th rounding digit may be in error by -1 so if the 4 rounding digits are 9999 or\r\n        // 4999, i.e. approaching a rounding boundary, continue the iteration.\r\n        if (n == '9999' || !rep && n == '4999') {\r\n\r\n          // On the first iteration only, check to see if rounding up gives the exact result as the\r\n          // nines may infinitely repeat.\r\n          if (!rep) {\r\n            finalise(t, e + 1, 0);\r\n\r\n            if (t.times(t).eq(x)) {\r\n              r = t;\r\n              break;\r\n            }\r\n          }\r\n\r\n          sd += 4;\r\n          rep = 1;\r\n        } else {\r\n\r\n          // If the rounding digits are null, 0{0,4} or 50{0,3}, check for an exact result.\r\n          // If not, then there are further digits and m will be truthy.\r\n          if (!+n || !+n.slice(1) && n.charAt(0) == '5') {\r\n\r\n            // Truncate to the first rounding digit.\r\n            finalise(r, e + 1, 1);\r\n            m = !r.times(r).eq(x);\r\n          }\r\n\r\n          break;\r\n        }\r\n      }\r\n    }\r\n\r\n    external = true;\r\n\r\n    return finalise(r, e, Ctor.rounding, m);\r\n  };\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the tangent of the value in radians of this Decimal.\r\n   *\r\n   * Domain: [-Infinity, Infinity]\r\n   * Range: [-Infinity, Infinity]\r\n   *\r\n   * tan(0)         = 0\r\n   * tan(-0)        = -0\r\n   * tan(Infinity)  = NaN\r\n   * tan(-Infinity) = NaN\r\n   * tan(NaN)       = NaN\r\n   *\r\n   */\r\n  P.tangent = P.tan = function () {\r\n    var pr, rm,\r\n      x = this,\r\n      Ctor = x.constructor;\r\n\r\n    if (!x.isFinite()) return new Ctor(NaN);\r\n    if (x.isZero()) return new Ctor(x);\r\n\r\n    pr = Ctor.precision;\r\n    rm = Ctor.rounding;\r\n    Ctor.precision = pr + 10;\r\n    Ctor.rounding = 1;\r\n\r\n    x = x.sin();\r\n    x.s = 1;\r\n    x = divide(x, new Ctor(1).minus(x.times(x)).sqrt(), pr + 10, 0);\r\n\r\n    Ctor.precision = pr;\r\n    Ctor.rounding = rm;\r\n\r\n    return finalise(quadrant == 2 || quadrant == 4 ? x.neg() : x, pr, rm, true);\r\n  };\r\n\r\n\r\n  /*\r\n   *  n * 0 = 0\r\n   *  n * N = N\r\n   *  n * I = I\r\n   *  0 * n = 0\r\n   *  0 * 0 = 0\r\n   *  0 * N = N\r\n   *  0 * I = N\r\n   *  N * n = N\r\n   *  N * 0 = N\r\n   *  N * N = N\r\n   *  N * I = N\r\n   *  I * n = I\r\n   *  I * 0 = N\r\n   *  I * N = N\r\n   *  I * I = I\r\n   *\r\n   * Return a new Decimal whose value is this Decimal times `y`, rounded to `precision` significant\r\n   * digits using rounding mode `rounding`.\r\n   *\r\n   */\r\n  P.times = P.mul = function (y) {\r\n    var carry, e, i, k, r, rL, t, xdL, ydL,\r\n      x = this,\r\n      Ctor = x.constructor,\r\n      xd = x.d,\r\n      yd = (y = new Ctor(y)).d;\r\n\r\n    y.s *= x.s;\r\n\r\n     // If either is NaN, ±Infinity or ±0...\r\n    if (!xd || !xd[0] || !yd || !yd[0]) {\r\n\r\n      return new Ctor(!y.s || xd && !xd[0] && !yd || yd && !yd[0] && !xd\r\n\r\n        // Return NaN if either is NaN.\r\n        // Return NaN if x is ±0 and y is ±Infinity, or y is ±0 and x is ±Infinity.\r\n        ? NaN\r\n\r\n        // Return ±Infinity if either is ±Infinity.\r\n        // Return ±0 if either is ±0.\r\n        : !xd || !yd ? y.s / 0 : y.s * 0);\r\n    }\r\n\r\n    e = mathfloor(x.e / LOG_BASE) + mathfloor(y.e / LOG_BASE);\r\n    xdL = xd.length;\r\n    ydL = yd.length;\r\n\r\n    // Ensure xd points to the longer array.\r\n    if (xdL < ydL) {\r\n      r = xd;\r\n      xd = yd;\r\n      yd = r;\r\n      rL = xdL;\r\n      xdL = ydL;\r\n      ydL = rL;\r\n    }\r\n\r\n    // Initialise the result array with zeros.\r\n    r = [];\r\n    rL = xdL + ydL;\r\n    for (i = rL; i--;) r.push(0);\r\n\r\n    // Multiply!\r\n    for (i = ydL; --i >= 0;) {\r\n      carry = 0;\r\n      for (k = xdL + i; k > i;) {\r\n        t = r[k] + yd[i] * xd[k - i - 1] + carry;\r\n        r[k--] = t % BASE | 0;\r\n        carry = t / BASE | 0;\r\n      }\r\n\r\n      r[k] = (r[k] + carry) % BASE | 0;\r\n    }\r\n\r\n    // Remove trailing zeros.\r\n    for (; !r[--rL];) r.pop();\r\n\r\n    if (carry) ++e;\r\n    else r.shift();\r\n\r\n    y.d = r;\r\n    y.e = getBase10Exponent(r, e);\r\n\r\n    return external ? finalise(y, Ctor.precision, Ctor.rounding) : y;\r\n  };\r\n\r\n\r\n  /*\r\n   * Return a string representing the value of this Decimal in base 2, round to `sd` significant\r\n   * digits using rounding mode `rm`.\r\n   *\r\n   * If the optional `sd` argument is present then return binary exponential notation.\r\n   *\r\n   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.\r\n   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.\r\n   *\r\n   */\r\n  P.toBinary = function (sd, rm) {\r\n    return toStringBinary(this, 2, sd, rm);\r\n  };\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `dp`\r\n   * decimal places using rounding mode `rm` or `rounding` if `rm` is omitted.\r\n   *\r\n   * If `dp` is omitted, return a new Decimal whose value is the value of this Decimal.\r\n   *\r\n   * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.\r\n   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.\r\n   *\r\n   */\r\n  P.toDecimalPlaces = P.toDP = function (dp, rm) {\r\n    var x = this,\r\n      Ctor = x.constructor;\r\n\r\n    x = new Ctor(x);\r\n    if (dp === void 0) return x;\r\n\r\n    checkInt32(dp, 0, MAX_DIGITS);\r\n\r\n    if (rm === void 0) rm = Ctor.rounding;\r\n    else checkInt32(rm, 0, 8);\r\n\r\n    return finalise(x, dp + x.e + 1, rm);\r\n  };\r\n\r\n\r\n  /*\r\n   * Return a string representing the value of this Decimal in exponential notation rounded to\r\n   * `dp` fixed decimal places using rounding mode `rounding`.\r\n   *\r\n   * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.\r\n   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.\r\n   *\r\n   */\r\n  P.toExponential = function (dp, rm) {\r\n    var str,\r\n      x = this,\r\n      Ctor = x.constructor;\r\n\r\n    if (dp === void 0) {\r\n      str = finiteToString(x, true);\r\n    } else {\r\n      checkInt32(dp, 0, MAX_DIGITS);\r\n\r\n      if (rm === void 0) rm = Ctor.rounding;\r\n      else checkInt32(rm, 0, 8);\r\n\r\n      x = finalise(new Ctor(x), dp + 1, rm);\r\n      str = finiteToString(x, true, dp + 1);\r\n    }\r\n\r\n    return x.isNeg() && !x.isZero() ? '-' + str : str;\r\n  };\r\n\r\n\r\n  /*\r\n   * Return a string representing the value of this Decimal in normal (fixed-point) notation to\r\n   * `dp` fixed decimal places and rounded using rounding mode `rm` or `rounding` if `rm` is\r\n   * omitted.\r\n   *\r\n   * As with JavaScript numbers, (-0).toFixed(0) is '0', but e.g. (-0.00001).toFixed(0) is '-0'.\r\n   *\r\n   * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.\r\n   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.\r\n   *\r\n   * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.\r\n   * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.\r\n   * (-0).toFixed(3) is '0.000'.\r\n   * (-0.5).toFixed(0) is '-0'.\r\n   *\r\n   */\r\n  P.toFixed = function (dp, rm) {\r\n    var str, y,\r\n      x = this,\r\n      Ctor = x.constructor;\r\n\r\n    if (dp === void 0) {\r\n      str = finiteToString(x);\r\n    } else {\r\n      checkInt32(dp, 0, MAX_DIGITS);\r\n\r\n      if (rm === void 0) rm = Ctor.rounding;\r\n      else checkInt32(rm, 0, 8);\r\n\r\n      y = finalise(new Ctor(x), dp + x.e + 1, rm);\r\n      str = finiteToString(y, false, dp + y.e + 1);\r\n    }\r\n\r\n    // To determine whether to add the minus sign look at the value before it was rounded,\r\n    // i.e. look at `x` rather than `y`.\r\n    return x.isNeg() && !x.isZero() ? '-' + str : str;\r\n  };\r\n\r\n\r\n  /*\r\n   * Return an array representing the value of this Decimal as a simple fraction with an integer\r\n   * numerator and an integer denominator.\r\n   *\r\n   * The denominator will be a positive non-zero value less than or equal to the specified maximum\r\n   * denominator. If a maximum denominator is not specified, the denominator will be the lowest\r\n   * value necessary to represent the number exactly.\r\n   *\r\n   * [maxD] {number|string|Decimal} Maximum denominator. Integer >= 1 and < Infinity.\r\n   *\r\n   */\r\n  P.toFraction = function (maxD) {\r\n    var d, d0, d1, d2, e, k, n, n0, n1, pr, q, r,\r\n      x = this,\r\n      xd = x.d,\r\n      Ctor = x.constructor;\r\n\r\n    if (!xd) return new Ctor(x);\r\n\r\n    n1 = d0 = new Ctor(1);\r\n    d1 = n0 = new Ctor(0);\r\n\r\n    d = new Ctor(d1);\r\n    e = d.e = getPrecision(xd) - x.e - 1;\r\n    k = e % LOG_BASE;\r\n    d.d[0] = mathpow(10, k < 0 ? LOG_BASE + k : k);\r\n\r\n    if (maxD == null) {\r\n\r\n      // d is 10**e, the minimum max-denominator needed.\r\n      maxD = e > 0 ? d : n1;\r\n    } else {\r\n      n = new Ctor(maxD);\r\n      if (!n.isInt() || n.lt(n1)) throw Error(invalidArgument + n);\r\n      maxD = n.gt(d) ? (e > 0 ? d : n1) : n;\r\n    }\r\n\r\n    external = false;\r\n    n = new Ctor(digitsToString(xd));\r\n    pr = Ctor.precision;\r\n    Ctor.precision = e = xd.length * LOG_BASE * 2;\r\n\r\n    for (;;)  {\r\n      q = divide(n, d, 0, 1, 1);\r\n      d2 = d0.plus(q.times(d1));\r\n      if (d2.cmp(maxD) == 1) break;\r\n      d0 = d1;\r\n      d1 = d2;\r\n      d2 = n1;\r\n      n1 = n0.plus(q.times(d2));\r\n      n0 = d2;\r\n      d2 = d;\r\n      d = n.minus(q.times(d2));\r\n      n = d2;\r\n    }\r\n\r\n    d2 = divide(maxD.minus(d0), d1, 0, 1, 1);\r\n    n0 = n0.plus(d2.times(n1));\r\n    d0 = d0.plus(d2.times(d1));\r\n    n0.s = n1.s = x.s;\r\n\r\n    // Determine which fraction is closer to x, n0/d0 or n1/d1?\r\n    r = divide(n1, d1, e, 1).minus(x).abs().cmp(divide(n0, d0, e, 1).minus(x).abs()) < 1\r\n        ? [n1, d1] : [n0, d0];\r\n\r\n    Ctor.precision = pr;\r\n    external = true;\r\n\r\n    return r;\r\n  };\r\n\r\n\r\n  /*\r\n   * Return a string representing the value of this Decimal in base 16, round to `sd` significant\r\n   * digits using rounding mode `rm`.\r\n   *\r\n   * If the optional `sd` argument is present then return binary exponential notation.\r\n   *\r\n   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.\r\n   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.\r\n   *\r\n   */\r\n  P.toHexadecimal = P.toHex = function (sd, rm) {\r\n    return toStringBinary(this, 16, sd, rm);\r\n  };\r\n\r\n\r\n  /*\r\n   * Returns a new Decimal whose value is the nearest multiple of `y` in the direction of rounding\r\n   * mode `rm`, or `Decimal.rounding` if `rm` is omitted, to the value of this Decimal.\r\n   *\r\n   * The return value will always have the same sign as this Decimal, unless either this Decimal\r\n   * or `y` is NaN, in which case the return value will be also be NaN.\r\n   *\r\n   * The return value is not affected by the value of `precision`.\r\n   *\r\n   * y {number|string|Decimal} The magnitude to round to a multiple of.\r\n   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.\r\n   *\r\n   * 'toNearest() rounding mode not an integer: {rm}'\r\n   * 'toNearest() rounding mode out of range: {rm}'\r\n   *\r\n   */\r\n  P.toNearest = function (y, rm) {\r\n    var x = this,\r\n      Ctor = x.constructor;\r\n\r\n    x = new Ctor(x);\r\n\r\n    if (y == null) {\r\n\r\n      // If x is not finite, return x.\r\n      if (!x.d) return x;\r\n\r\n      y = new Ctor(1);\r\n      rm = Ctor.rounding;\r\n    } else {\r\n      y = new Ctor(y);\r\n      if (rm === void 0) {\r\n        rm = Ctor.rounding;\r\n      } else {\r\n        checkInt32(rm, 0, 8);\r\n      }\r\n\r\n      // If x is not finite, return x if y is not NaN, else NaN.\r\n      if (!x.d) return y.s ? x : y;\r\n\r\n      // If y is not finite, return Infinity with the sign of x if y is Infinity, else NaN.\r\n      if (!y.d) {\r\n        if (y.s) y.s = x.s;\r\n        return y;\r\n      }\r\n    }\r\n\r\n    // If y is not zero, calculate the nearest multiple of y to x.\r\n    if (y.d[0]) {\r\n      external = false;\r\n      x = divide(x, y, 0, rm, 1).times(y);\r\n      external = true;\r\n      finalise(x);\r\n\r\n    // If y is zero, return zero with the sign of x.\r\n    } else {\r\n      y.s = x.s;\r\n      x = y;\r\n    }\r\n\r\n    return x;\r\n  };\r\n\r\n\r\n  /*\r\n   * Return the value of this Decimal converted to a number primitive.\r\n   * Zero keeps its sign.\r\n   *\r\n   */\r\n  P.toNumber = function () {\r\n    return +this;\r\n  };\r\n\r\n\r\n  /*\r\n   * Return a string representing the value of this Decimal in base 8, round to `sd` significant\r\n   * digits using rounding mode `rm`.\r\n   *\r\n   * If the optional `sd` argument is present then return binary exponential notation.\r\n   *\r\n   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.\r\n   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.\r\n   *\r\n   */\r\n  P.toOctal = function (sd, rm) {\r\n    return toStringBinary(this, 8, sd, rm);\r\n  };\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the value of this Decimal raised to the power `y`, rounded\r\n   * to `precision` significant digits using rounding mode `rounding`.\r\n   *\r\n   * ECMAScript compliant.\r\n   *\r\n   *   pow(x, NaN)                           = NaN\r\n   *   pow(x, ±0)                            = 1\r\n\r\n   *   pow(NaN, non-zero)                    = NaN\r\n   *   pow(abs(x) > 1, +Infinity)            = +Infinity\r\n   *   pow(abs(x) > 1, -Infinity)            = +0\r\n   *   pow(abs(x) == 1, ±Infinity)           = NaN\r\n   *   pow(abs(x) < 1, +Infinity)            = +0\r\n   *   pow(abs(x) < 1, -Infinity)            = +Infinity\r\n   *   pow(+Infinity, y > 0)                 = +Infinity\r\n   *   pow(+Infinity, y < 0)                 = +0\r\n   *   pow(-Infinity, odd integer > 0)       = -Infinity\r\n   *   pow(-Infinity, even integer > 0)      = +Infinity\r\n   *   pow(-Infinity, odd integer < 0)       = -0\r\n   *   pow(-Infinity, even integer < 0)      = +0\r\n   *   pow(+0, y > 0)                        = +0\r\n   *   pow(+0, y < 0)                        = +Infinity\r\n   *   pow(-0, odd integer > 0)              = -0\r\n   *   pow(-0, even integer > 0)             = +0\r\n   *   pow(-0, odd integer < 0)              = -Infinity\r\n   *   pow(-0, even integer < 0)             = +Infinity\r\n   *   pow(finite x < 0, finite non-integer) = NaN\r\n   *\r\n   * For non-integer or very large exponents pow(x, y) is calculated using\r\n   *\r\n   *   x^y = exp(y*ln(x))\r\n   *\r\n   * Assuming the first 15 rounding digits are each equally likely to be any digit 0-9, the\r\n   * probability of an incorrectly rounded result\r\n   * P([49]9{14} | [50]0{14}) = 2 * 0.2 * 10^-14 = 4e-15 = 1/2.5e+14\r\n   * i.e. 1 in 250,000,000,000,000\r\n   *\r\n   * If a result is incorrectly rounded the maximum error will be 1 ulp (unit in last place).\r\n   *\r\n   * y {number|string|Decimal} The power to which to raise this Decimal.\r\n   *\r\n   */\r\n  P.toPower = P.pow = function (y) {\r\n    var e, k, pr, r, rm, s,\r\n      x = this,\r\n      Ctor = x.constructor,\r\n      yn = +(y = new Ctor(y));\r\n\r\n    // Either ±Infinity, NaN or ±0?\r\n    if (!x.d || !y.d || !x.d[0] || !y.d[0]) return new Ctor(mathpow(+x, yn));\r\n\r\n    x = new Ctor(x);\r\n\r\n    if (x.eq(1)) return x;\r\n\r\n    pr = Ctor.precision;\r\n    rm = Ctor.rounding;\r\n\r\n    if (y.eq(1)) return finalise(x, pr, rm);\r\n\r\n    // y exponent\r\n    e = mathfloor(y.e / LOG_BASE);\r\n\r\n    // If y is a small integer use the 'exponentiation by squaring' algorithm.\r\n    if (e >= y.d.length - 1 && (k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {\r\n      r = intPow(Ctor, x, k, pr);\r\n      return y.s < 0 ? new Ctor(1).div(r) : finalise(r, pr, rm);\r\n    }\r\n\r\n    s = x.s;\r\n\r\n    // if x is negative\r\n    if (s < 0) {\r\n\r\n      // if y is not an integer\r\n      if (e < y.d.length - 1) return new Ctor(NaN);\r\n\r\n      // Result is positive if x is negative and the last digit of integer y is even.\r\n      if ((y.d[e] & 1) == 0) s = 1;\r\n\r\n      // if x.eq(-1)\r\n      if (x.e == 0 && x.d[0] == 1 && x.d.length == 1) {\r\n        x.s = s;\r\n        return x;\r\n      }\r\n    }\r\n\r\n    // Estimate result exponent.\r\n    // x^y = 10^e,  where e = y * log10(x)\r\n    // log10(x) = log10(x_significand) + x_exponent\r\n    // log10(x_significand) = ln(x_significand) / ln(10)\r\n    k = mathpow(+x, yn);\r\n    e = k == 0 || !isFinite(k)\r\n      ? mathfloor(yn * (Math.log('0.' + digitsToString(x.d)) / Math.LN10 + x.e + 1))\r\n      : new Ctor(k + '').e;\r\n\r\n    // Exponent estimate may be incorrect e.g. x: 0.999999999999999999, y: 2.29, e: 0, r.e: -1.\r\n\r\n    // Overflow/underflow?\r\n    if (e > Ctor.maxE + 1 || e < Ctor.minE - 1) return new Ctor(e > 0 ? s / 0 : 0);\r\n\r\n    external = false;\r\n    Ctor.rounding = x.s = 1;\r\n\r\n    // Estimate the extra guard digits needed to ensure five correct rounding digits from\r\n    // naturalLogarithm(x). Example of failure without these extra digits (precision: 10):\r\n    // new Decimal(2.32456).pow('2087987436534566.46411')\r\n    // should be 1.162377823e+764914905173815, but is 1.162355823e+764914905173815\r\n    k = Math.min(12, (e + '').length);\r\n\r\n    // r = x^y = exp(y*ln(x))\r\n    r = naturalExponential(y.times(naturalLogarithm(x, pr + k)), pr);\r\n\r\n    // r may be Infinity, e.g. (0.9999999999999999).pow(-1e+40)\r\n    if (r.d) {\r\n\r\n      // Truncate to the required precision plus five rounding digits.\r\n      r = finalise(r, pr + 5, 1);\r\n\r\n      // If the rounding digits are [49]9999 or [50]0000 increase the precision by 10 and recalculate\r\n      // the result.\r\n      if (checkRoundingDigits(r.d, pr, rm)) {\r\n        e = pr + 10;\r\n\r\n        // Truncate to the increased precision plus five rounding digits.\r\n        r = finalise(naturalExponential(y.times(naturalLogarithm(x, e + k)), e), e + 5, 1);\r\n\r\n        // Check for 14 nines from the 2nd rounding digit (the first rounding digit may be 4 or 9).\r\n        if (+digitsToString(r.d).slice(pr + 1, pr + 15) + 1 == 1e14) {\r\n          r = finalise(r, pr + 1, 0);\r\n        }\r\n      }\r\n    }\r\n\r\n    r.s = s;\r\n    external = true;\r\n    Ctor.rounding = rm;\r\n\r\n    return finalise(r, pr, rm);\r\n  };\r\n\r\n\r\n  /*\r\n   * Return a string representing the value of this Decimal rounded to `sd` significant digits\r\n   * using rounding mode `rounding`.\r\n   *\r\n   * Return exponential notation if `sd` is less than the number of digits necessary to represent\r\n   * the integer part of the value in normal notation.\r\n   *\r\n   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.\r\n   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.\r\n   *\r\n   */\r\n  P.toPrecision = function (sd, rm) {\r\n    var str,\r\n      x = this,\r\n      Ctor = x.constructor;\r\n\r\n    if (sd === void 0) {\r\n      str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);\r\n    } else {\r\n      checkInt32(sd, 1, MAX_DIGITS);\r\n\r\n      if (rm === void 0) rm = Ctor.rounding;\r\n      else checkInt32(rm, 0, 8);\r\n\r\n      x = finalise(new Ctor(x), sd, rm);\r\n      str = finiteToString(x, sd <= x.e || x.e <= Ctor.toExpNeg, sd);\r\n    }\r\n\r\n    return x.isNeg() && !x.isZero() ? '-' + str : str;\r\n  };\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `sd`\r\n   * significant digits using rounding mode `rm`, or to `precision` and `rounding` respectively if\r\n   * omitted.\r\n   *\r\n   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.\r\n   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.\r\n   *\r\n   * 'toSD() digits out of range: {sd}'\r\n   * 'toSD() digits not an integer: {sd}'\r\n   * 'toSD() rounding mode not an integer: {rm}'\r\n   * 'toSD() rounding mode out of range: {rm}'\r\n   *\r\n   */\r\n  P.toSignificantDigits = P.toSD = function (sd, rm) {\r\n    var x = this,\r\n      Ctor = x.constructor;\r\n\r\n    if (sd === void 0) {\r\n      sd = Ctor.precision;\r\n      rm = Ctor.rounding;\r\n    } else {\r\n      checkInt32(sd, 1, MAX_DIGITS);\r\n\r\n      if (rm === void 0) rm = Ctor.rounding;\r\n      else checkInt32(rm, 0, 8);\r\n    }\r\n\r\n    return finalise(new Ctor(x), sd, rm);\r\n  };\r\n\r\n\r\n  /*\r\n   * Return a string representing the value of this Decimal.\r\n   *\r\n   * Return exponential notation if this Decimal has a positive exponent equal to or greater than\r\n   * `toExpPos`, or a negative exponent equal to or less than `toExpNeg`.\r\n   *\r\n   */\r\n  P.toString = function () {\r\n    var x = this,\r\n      Ctor = x.constructor,\r\n      str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);\r\n\r\n    return x.isNeg() && !x.isZero() ? '-' + str : str;\r\n  };\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the value of this Decimal truncated to a whole number.\r\n   *\r\n   */\r\n  P.truncated = P.trunc = function () {\r\n    return finalise(new this.constructor(this), this.e + 1, 1);\r\n  };\r\n\r\n\r\n  /*\r\n   * Return a string representing the value of this Decimal.\r\n   * Unlike `toString`, negative zero will include the minus sign.\r\n   *\r\n   */\r\n  P.valueOf = P.toJSON = function () {\r\n    var x = this,\r\n      Ctor = x.constructor,\r\n      str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);\r\n\r\n    return x.isNeg() ? '-' + str : str;\r\n  };\r\n\r\n\r\n  /*\r\n  // Add aliases to match BigDecimal method names.\r\n  // P.add = P.plus;\r\n  P.subtract = P.minus;\r\n  P.multiply = P.times;\r\n  P.divide = P.div;\r\n  P.remainder = P.mod;\r\n  P.compareTo = P.cmp;\r\n  P.negate = P.neg;\r\n   */\r\n\r\n\r\n  // Helper functions for Decimal.prototype (P) and/or Decimal methods, and their callers.\r\n\r\n\r\n  /*\r\n   *  digitsToString           P.cubeRoot, P.logarithm, P.squareRoot, P.toFraction, P.toPower,\r\n   *                           finiteToString, naturalExponential, naturalLogarithm\r\n   *  checkInt32               P.toDecimalPlaces, P.toExponential, P.toFixed, P.toNearest,\r\n   *                           P.toPrecision, P.toSignificantDigits, toStringBinary, random\r\n   *  checkRoundingDigits      P.logarithm, P.toPower, naturalExponential, naturalLogarithm\r\n   *  convertBase              toStringBinary, parseOther\r\n   *  cos                      P.cos\r\n   *  divide                   P.atanh, P.cubeRoot, P.dividedBy, P.dividedToIntegerBy,\r\n   *                           P.logarithm, P.modulo, P.squareRoot, P.tan, P.tanh, P.toFraction,\r\n   *                           P.toNearest, toStringBinary, naturalExponential, naturalLogarithm,\r\n   *                           taylorSeries, atan2, parseOther\r\n   *  finalise                 P.absoluteValue, P.atan, P.atanh, P.ceil, P.cos, P.cosh,\r\n   *                           P.cubeRoot, P.dividedToIntegerBy, P.floor, P.logarithm, P.minus,\r\n   *                           P.modulo, P.negated, P.plus, P.round, P.sin, P.sinh, P.squareRoot,\r\n   *                           P.tan, P.times, P.toDecimalPlaces, P.toExponential, P.toFixed,\r\n   *                           P.toNearest, P.toPower, P.toPrecision, P.toSignificantDigits,\r\n   *                           P.truncated, divide, getLn10, getPi, naturalExponential,\r\n   *                           naturalLogarithm, ceil, floor, round, trunc\r\n   *  finiteToString           P.toExponential, P.toFixed, P.toPrecision, P.toString, P.valueOf,\r\n   *                           toStringBinary\r\n   *  getBase10Exponent        P.minus, P.plus, P.times, parseOther\r\n   *  getLn10                  P.logarithm, naturalLogarithm\r\n   *  getPi                    P.acos, P.asin, P.atan, toLessThanHalfPi, atan2\r\n   *  getPrecision             P.precision, P.toFraction\r\n   *  getZeroString            digitsToString, finiteToString\r\n   *  intPow                   P.toPower, parseOther\r\n   *  isOdd                    toLessThanHalfPi\r\n   *  maxOrMin                 max, min\r\n   *  naturalExponential       P.naturalExponential, P.toPower\r\n   *  naturalLogarithm         P.acosh, P.asinh, P.atanh, P.logarithm, P.naturalLogarithm,\r\n   *                           P.toPower, naturalExponential\r\n   *  nonFiniteToString        finiteToString, toStringBinary\r\n   *  parseDecimal             Decimal\r\n   *  parseOther               Decimal\r\n   *  sin                      P.sin\r\n   *  taylorSeries             P.cosh, P.sinh, cos, sin\r\n   *  toLessThanHalfPi         P.cos, P.sin\r\n   *  toStringBinary           P.toBinary, P.toHexadecimal, P.toOctal\r\n   *  truncate                 intPow\r\n   *\r\n   *  Throws:                  P.logarithm, P.precision, P.toFraction, checkInt32, getLn10, getPi,\r\n   *                           naturalLogarithm, config, parseOther, random, Decimal\r\n   */\r\n\r\n\r\n  function digitsToString(d) {\r\n    var i, k, ws,\r\n      indexOfLastWord = d.length - 1,\r\n      str = '',\r\n      w = d[0];\r\n\r\n    if (indexOfLastWord > 0) {\r\n      str += w;\r\n      for (i = 1; i < indexOfLastWord; i++) {\r\n        ws = d[i] + '';\r\n        k = LOG_BASE - ws.length;\r\n        if (k) str += getZeroString(k);\r\n        str += ws;\r\n      }\r\n\r\n      w = d[i];\r\n      ws = w + '';\r\n      k = LOG_BASE - ws.length;\r\n      if (k) str += getZeroString(k);\r\n    } else if (w === 0) {\r\n      return '0';\r\n    }\r\n\r\n    // Remove trailing zeros of last w.\r\n    for (; w % 10 === 0;) w /= 10;\r\n\r\n    return str + w;\r\n  }\r\n\r\n\r\n  function checkInt32(i, min, max) {\r\n    if (i !== ~~i || i < min || i > max) {\r\n      throw Error(invalidArgument + i);\r\n    }\r\n  }\r\n\r\n\r\n  /*\r\n   * Check 5 rounding digits if `repeating` is null, 4 otherwise.\r\n   * `repeating == null` if caller is `log` or `pow`,\r\n   * `repeating != null` if caller is `naturalLogarithm` or `naturalExponential`.\r\n   */\r\n  function checkRoundingDigits(d, i, rm, repeating) {\r\n    var di, k, r, rd;\r\n\r\n    // Get the length of the first word of the array d.\r\n    for (k = d[0]; k >= 10; k /= 10) --i;\r\n\r\n    // Is the rounding digit in the first word of d?\r\n    if (--i < 0) {\r\n      i += LOG_BASE;\r\n      di = 0;\r\n    } else {\r\n      di = Math.ceil((i + 1) / LOG_BASE);\r\n      i %= LOG_BASE;\r\n    }\r\n\r\n    // i is the index (0 - 6) of the rounding digit.\r\n    // E.g. if within the word 3487563 the first rounding digit is 5,\r\n    // then i = 4, k = 1000, rd = 3487563 % 1000 = 563\r\n    k = mathpow(10, LOG_BASE - i);\r\n    rd = d[di] % k | 0;\r\n\r\n    if (repeating == null) {\r\n      if (i < 3) {\r\n        if (i == 0) rd = rd / 100 | 0;\r\n        else if (i == 1) rd = rd / 10 | 0;\r\n        r = rm < 4 && rd == 99999 || rm > 3 && rd == 49999 || rd == 50000 || rd == 0;\r\n      } else {\r\n        r = (rm < 4 && rd + 1 == k || rm > 3 && rd + 1 == k / 2) &&\r\n          (d[di + 1] / k / 100 | 0) == mathpow(10, i - 2) - 1 ||\r\n            (rd == k / 2 || rd == 0) && (d[di + 1] / k / 100 | 0) == 0;\r\n      }\r\n    } else {\r\n      if (i < 4) {\r\n        if (i == 0) rd = rd / 1000 | 0;\r\n        else if (i == 1) rd = rd / 100 | 0;\r\n        else if (i == 2) rd = rd / 10 | 0;\r\n        r = (repeating || rm < 4) && rd == 9999 || !repeating && rm > 3 && rd == 4999;\r\n      } else {\r\n        r = ((repeating || rm < 4) && rd + 1 == k ||\r\n        (!repeating && rm > 3) && rd + 1 == k / 2) &&\r\n          (d[di + 1] / k / 1000 | 0) == mathpow(10, i - 3) - 1;\r\n      }\r\n    }\r\n\r\n    return r;\r\n  }\r\n\r\n\r\n  // Convert string of `baseIn` to an array of numbers of `baseOut`.\r\n  // Eg. convertBase('255', 10, 16) returns [15, 15].\r\n  // Eg. convertBase('ff', 16, 10) returns [2, 5, 5].\r\n  function convertBase(str, baseIn, baseOut) {\r\n    var j,\r\n      arr = [0],\r\n      arrL,\r\n      i = 0,\r\n      strL = str.length;\r\n\r\n    for (; i < strL;) {\r\n      for (arrL = arr.length; arrL--;) arr[arrL] *= baseIn;\r\n      arr[0] += NUMERALS.indexOf(str.charAt(i++));\r\n      for (j = 0; j < arr.length; j++) {\r\n        if (arr[j] > baseOut - 1) {\r\n          if (arr[j + 1] === void 0) arr[j + 1] = 0;\r\n          arr[j + 1] += arr[j] / baseOut | 0;\r\n          arr[j] %= baseOut;\r\n        }\r\n      }\r\n    }\r\n\r\n    return arr.reverse();\r\n  }\r\n\r\n\r\n  /*\r\n   * cos(x) = 1 - x^2/2! + x^4/4! - ...\r\n   * |x| < pi/2\r\n   *\r\n   */\r\n  function cosine(Ctor, x) {\r\n    var k, y,\r\n      len = x.d.length;\r\n\r\n    // Argument reduction: cos(4x) = 8*(cos^4(x) - cos^2(x)) + 1\r\n    // i.e. cos(x) = 8*(cos^4(x/4) - cos^2(x/4)) + 1\r\n\r\n    // Estimate the optimum number of times to use the argument reduction.\r\n    if (len < 32) {\r\n      k = Math.ceil(len / 3);\r\n      y = (1 / tinyPow(4, k)).toString();\r\n    } else {\r\n      k = 16;\r\n      y = '2.3283064365386962890625e-10';\r\n    }\r\n\r\n    Ctor.precision += k;\r\n\r\n    x = taylorSeries(Ctor, 1, x.times(y), new Ctor(1));\r\n\r\n    // Reverse argument reduction\r\n    for (var i = k; i--;) {\r\n      var cos2x = x.times(x);\r\n      x = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);\r\n    }\r\n\r\n    Ctor.precision -= k;\r\n\r\n    return x;\r\n  }\r\n\r\n\r\n  /*\r\n   * Perform division in the specified base.\r\n   */\r\n  var divide = (function () {\r\n\r\n    // Assumes non-zero x and k, and hence non-zero result.\r\n    function multiplyInteger(x, k, base) {\r\n      var temp,\r\n        carry = 0,\r\n        i = x.length;\r\n\r\n      for (x = x.slice(); i--;) {\r\n        temp = x[i] * k + carry;\r\n        x[i] = temp % base | 0;\r\n        carry = temp / base | 0;\r\n      }\r\n\r\n      if (carry) x.unshift(carry);\r\n\r\n      return x;\r\n    }\r\n\r\n    function compare(a, b, aL, bL) {\r\n      var i, r;\r\n\r\n      if (aL != bL) {\r\n        r = aL > bL ? 1 : -1;\r\n      } else {\r\n        for (i = r = 0; i < aL; i++) {\r\n          if (a[i] != b[i]) {\r\n            r = a[i] > b[i] ? 1 : -1;\r\n            break;\r\n          }\r\n        }\r\n      }\r\n\r\n      return r;\r\n    }\r\n\r\n    function subtract(a, b, aL, base) {\r\n      var i = 0;\r\n\r\n      // Subtract b from a.\r\n      for (; aL--;) {\r\n        a[aL] -= i;\r\n        i = a[aL] < b[aL] ? 1 : 0;\r\n        a[aL] = i * base + a[aL] - b[aL];\r\n      }\r\n\r\n      // Remove leading zeros.\r\n      for (; !a[0] && a.length > 1;) a.shift();\r\n    }\r\n\r\n    return function (x, y, pr, rm, dp, base) {\r\n      var cmp, e, i, k, logBase, more, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0,\r\n        yL, yz,\r\n        Ctor = x.constructor,\r\n        sign = x.s == y.s ? 1 : -1,\r\n        xd = x.d,\r\n        yd = y.d;\r\n\r\n      // Either NaN, Infinity or 0?\r\n      if (!xd || !xd[0] || !yd || !yd[0]) {\r\n\r\n        return new Ctor(// Return NaN if either NaN, or both Infinity or 0.\r\n          !x.s || !y.s || (xd ? yd && xd[0] == yd[0] : !yd) ? NaN :\r\n\r\n          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.\r\n          xd && xd[0] == 0 || !yd ? sign * 0 : sign / 0);\r\n      }\r\n\r\n      if (base) {\r\n        logBase = 1;\r\n        e = x.e - y.e;\r\n      } else {\r\n        base = BASE;\r\n        logBase = LOG_BASE;\r\n        e = mathfloor(x.e / logBase) - mathfloor(y.e / logBase);\r\n      }\r\n\r\n      yL = yd.length;\r\n      xL = xd.length;\r\n      q = new Ctor(sign);\r\n      qd = q.d = [];\r\n\r\n      // Result exponent may be one less than e.\r\n      // The digit array of a Decimal from toStringBinary may have trailing zeros.\r\n      for (i = 0; yd[i] == (xd[i] || 0); i++);\r\n\r\n      if (yd[i] > (xd[i] || 0)) e--;\r\n\r\n      if (pr == null) {\r\n        sd = pr = Ctor.precision;\r\n        rm = Ctor.rounding;\r\n      } else if (dp) {\r\n        sd = pr + (x.e - y.e) + 1;\r\n      } else {\r\n        sd = pr;\r\n      }\r\n\r\n      if (sd < 0) {\r\n        qd.push(1);\r\n        more = true;\r\n      } else {\r\n\r\n        // Convert precision in number of base 10 digits to base 1e7 digits.\r\n        sd = sd / logBase + 2 | 0;\r\n        i = 0;\r\n\r\n        // divisor < 1e7\r\n        if (yL == 1) {\r\n          k = 0;\r\n          yd = yd[0];\r\n          sd++;\r\n\r\n          // k is the carry.\r\n          for (; (i < xL || k) && sd--; i++) {\r\n            t = k * base + (xd[i] || 0);\r\n            qd[i] = t / yd | 0;\r\n            k = t % yd | 0;\r\n          }\r\n\r\n          more = k || i < xL;\r\n\r\n        // divisor >= 1e7\r\n        } else {\r\n\r\n          // Normalise xd and yd so highest order digit of yd is >= base/2\r\n          k = base / (yd[0] + 1) | 0;\r\n\r\n          if (k > 1) {\r\n            yd = multiplyInteger(yd, k, base);\r\n            xd = multiplyInteger(xd, k, base);\r\n            yL = yd.length;\r\n            xL = xd.length;\r\n          }\r\n\r\n          xi = yL;\r\n          rem = xd.slice(0, yL);\r\n          remL = rem.length;\r\n\r\n          // Add zeros to make remainder as long as divisor.\r\n          for (; remL < yL;) rem[remL++] = 0;\r\n\r\n          yz = yd.slice();\r\n          yz.unshift(0);\r\n          yd0 = yd[0];\r\n\r\n          if (yd[1] >= base / 2) ++yd0;\r\n\r\n          do {\r\n            k = 0;\r\n\r\n            // Compare divisor and remainder.\r\n            cmp = compare(yd, rem, yL, remL);\r\n\r\n            // If divisor < remainder.\r\n            if (cmp < 0) {\r\n\r\n              // Calculate trial digit, k.\r\n              rem0 = rem[0];\r\n              if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);\r\n\r\n              // k will be how many times the divisor goes into the current remainder.\r\n              k = rem0 / yd0 | 0;\r\n\r\n              //  Algorithm:\r\n              //  1. product = divisor * trial digit (k)\r\n              //  2. if product > remainder: product -= divisor, k--\r\n              //  3. remainder -= product\r\n              //  4. if product was < remainder at 2:\r\n              //    5. compare new remainder and divisor\r\n              //    6. If remainder > divisor: remainder -= divisor, k++\r\n\r\n              if (k > 1) {\r\n                if (k >= base) k = base - 1;\r\n\r\n                // product = divisor * trial digit.\r\n                prod = multiplyInteger(yd, k, base);\r\n                prodL = prod.length;\r\n                remL = rem.length;\r\n\r\n                // Compare product and remainder.\r\n                cmp = compare(prod, rem, prodL, remL);\r\n\r\n                // product > remainder.\r\n                if (cmp == 1) {\r\n                  k--;\r\n\r\n                  // Subtract divisor from product.\r\n                  subtract(prod, yL < prodL ? yz : yd, prodL, base);\r\n                }\r\n              } else {\r\n\r\n                // cmp is -1.\r\n                // If k is 0, there is no need to compare yd and rem again below, so change cmp to 1\r\n                // to avoid it. If k is 1 there is a need to compare yd and rem again below.\r\n                if (k == 0) cmp = k = 1;\r\n                prod = yd.slice();\r\n              }\r\n\r\n              prodL = prod.length;\r\n              if (prodL < remL) prod.unshift(0);\r\n\r\n              // Subtract product from remainder.\r\n              subtract(rem, prod, remL, base);\r\n\r\n              // If product was < previous remainder.\r\n              if (cmp == -1) {\r\n                remL = rem.length;\r\n\r\n                // Compare divisor and new remainder.\r\n                cmp = compare(yd, rem, yL, remL);\r\n\r\n                // If divisor < new remainder, subtract divisor from remainder.\r\n                if (cmp < 1) {\r\n                  k++;\r\n\r\n                  // Subtract divisor from remainder.\r\n                  subtract(rem, yL < remL ? yz : yd, remL, base);\r\n                }\r\n              }\r\n\r\n              remL = rem.length;\r\n            } else if (cmp === 0) {\r\n              k++;\r\n              rem = [0];\r\n            }    // if cmp === 1, k will be 0\r\n\r\n            // Add the next digit, k, to the result array.\r\n            qd[i++] = k;\r\n\r\n            // Update the remainder.\r\n            if (cmp && rem[0]) {\r\n              rem[remL++] = xd[xi] || 0;\r\n            } else {\r\n              rem = [xd[xi]];\r\n              remL = 1;\r\n            }\r\n\r\n          } while ((xi++ < xL || rem[0] !== void 0) && sd--);\r\n\r\n          more = rem[0] !== void 0;\r\n        }\r\n\r\n        // Leading zero?\r\n        if (!qd[0]) qd.shift();\r\n      }\r\n\r\n      // logBase is 1 when divide is being used for base conversion.\r\n      if (logBase == 1) {\r\n        q.e = e;\r\n        inexact = more;\r\n      } else {\r\n\r\n        // To calculate q.e, first get the number of digits of qd[0].\r\n        for (i = 1, k = qd[0]; k >= 10; k /= 10) i++;\r\n        q.e = i + e * logBase - 1;\r\n\r\n        finalise(q, dp ? pr + q.e + 1 : pr, rm, more);\r\n      }\r\n\r\n      return q;\r\n    };\r\n  })();\r\n\r\n\r\n  /*\r\n   * Round `x` to `sd` significant digits using rounding mode `rm`.\r\n   * Check for over/under-flow.\r\n   */\r\n   function finalise(x, sd, rm, isTruncated) {\r\n    var digits, i, j, k, rd, roundUp, w, xd, xdi,\r\n      Ctor = x.constructor;\r\n\r\n    // Don't round if sd is null or undefined.\r\n    out: if (sd != null) {\r\n      xd = x.d;\r\n\r\n      // Infinity/NaN.\r\n      if (!xd) return x;\r\n\r\n      // rd: the rounding digit, i.e. the digit after the digit that may be rounded up.\r\n      // w: the word of xd containing rd, a base 1e7 number.\r\n      // xdi: the index of w within xd.\r\n      // digits: the number of digits of w.\r\n      // i: what would be the index of rd within w if all the numbers were 7 digits long (i.e. if\r\n      // they had leading zeros)\r\n      // j: if > 0, the actual index of rd within w (if < 0, rd is a leading zero).\r\n\r\n      // Get the length of the first word of the digits array xd.\r\n      for (digits = 1, k = xd[0]; k >= 10; k /= 10) digits++;\r\n      i = sd - digits;\r\n\r\n      // Is the rounding digit in the first word of xd?\r\n      if (i < 0) {\r\n        i += LOG_BASE;\r\n        j = sd;\r\n        w = xd[xdi = 0];\r\n\r\n        // Get the rounding digit at index j of w.\r\n        rd = w / mathpow(10, digits - j - 1) % 10 | 0;\r\n      } else {\r\n        xdi = Math.ceil((i + 1) / LOG_BASE);\r\n        k = xd.length;\r\n        if (xdi >= k) {\r\n          if (isTruncated) {\r\n\r\n            // Needed by `naturalExponential`, `naturalLogarithm` and `squareRoot`.\r\n            for (; k++ <= xdi;) xd.push(0);\r\n            w = rd = 0;\r\n            digits = 1;\r\n            i %= LOG_BASE;\r\n            j = i - LOG_BASE + 1;\r\n          } else {\r\n            break out;\r\n          }\r\n        } else {\r\n          w = k = xd[xdi];\r\n\r\n          // Get the number of digits of w.\r\n          for (digits = 1; k >= 10; k /= 10) digits++;\r\n\r\n          // Get the index of rd within w.\r\n          i %= LOG_BASE;\r\n\r\n          // Get the index of rd within w, adjusted for leading zeros.\r\n          // The number of leading zeros of w is given by LOG_BASE - digits.\r\n          j = i - LOG_BASE + digits;\r\n\r\n          // Get the rounding digit at index j of w.\r\n          rd = j < 0 ? 0 : w / mathpow(10, digits - j - 1) % 10 | 0;\r\n        }\r\n      }\r\n\r\n      // Are there any non-zero digits after the rounding digit?\r\n      isTruncated = isTruncated || sd < 0 ||\r\n        xd[xdi + 1] !== void 0 || (j < 0 ? w : w % mathpow(10, digits - j - 1));\r\n\r\n      // The expression `w % mathpow(10, digits - j - 1)` returns all the digits of w to the right\r\n      // of the digit at (left-to-right) index j, e.g. if w is 908714 and j is 2, the expression\r\n      // will give 714.\r\n\r\n      roundUp = rm < 4\r\n        ? (rd || isTruncated) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))\r\n        : rd > 5 || rd == 5 && (rm == 4 || isTruncated || rm == 6 &&\r\n\r\n          // Check whether the digit to the left of the rounding digit is odd.\r\n          ((i > 0 ? j > 0 ? w / mathpow(10, digits - j) : 0 : xd[xdi - 1]) % 10) & 1 ||\r\n            rm == (x.s < 0 ? 8 : 7));\r\n\r\n      if (sd < 1 || !xd[0]) {\r\n        xd.length = 0;\r\n        if (roundUp) {\r\n\r\n          // Convert sd to decimal places.\r\n          sd -= x.e + 1;\r\n\r\n          // 1, 0.1, 0.01, 0.001, 0.0001 etc.\r\n          xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);\r\n          x.e = -sd || 0;\r\n        } else {\r\n\r\n          // Zero.\r\n          xd[0] = x.e = 0;\r\n        }\r\n\r\n        return x;\r\n      }\r\n\r\n      // Remove excess digits.\r\n      if (i == 0) {\r\n        xd.length = xdi;\r\n        k = 1;\r\n        xdi--;\r\n      } else {\r\n        xd.length = xdi + 1;\r\n        k = mathpow(10, LOG_BASE - i);\r\n\r\n        // E.g. 56700 becomes 56000 if 7 is the rounding digit.\r\n        // j > 0 means i > number of leading zeros of w.\r\n        xd[xdi] = j > 0 ? (w / mathpow(10, digits - j) % mathpow(10, j) | 0) * k : 0;\r\n      }\r\n\r\n      if (roundUp) {\r\n        for (;;) {\r\n\r\n          // Is the digit to be rounded up in the first word of xd?\r\n          if (xdi == 0) {\r\n\r\n            // i will be the length of xd[0] before k is added.\r\n            for (i = 1, j = xd[0]; j >= 10; j /= 10) i++;\r\n            j = xd[0] += k;\r\n            for (k = 1; j >= 10; j /= 10) k++;\r\n\r\n            // if i != k the length has increased.\r\n            if (i != k) {\r\n              x.e++;\r\n              if (xd[0] == BASE) xd[0] = 1;\r\n            }\r\n\r\n            break;\r\n          } else {\r\n            xd[xdi] += k;\r\n            if (xd[xdi] != BASE) break;\r\n            xd[xdi--] = 0;\r\n            k = 1;\r\n          }\r\n        }\r\n      }\r\n\r\n      // Remove trailing zeros.\r\n      for (i = xd.length; xd[--i] === 0;) xd.pop();\r\n    }\r\n\r\n    if (external) {\r\n\r\n      // Overflow?\r\n      if (x.e > Ctor.maxE) {\r\n\r\n        // Infinity.\r\n        x.d = null;\r\n        x.e = NaN;\r\n\r\n      // Underflow?\r\n      } else if (x.e < Ctor.minE) {\r\n\r\n        // Zero.\r\n        x.e = 0;\r\n        x.d = [0];\r\n        // Ctor.underflow = true;\r\n      } // else Ctor.underflow = false;\r\n    }\r\n\r\n    return x;\r\n  }\r\n\r\n\r\n  function finiteToString(x, isExp, sd) {\r\n    if (!x.isFinite()) return nonFiniteToString(x);\r\n    var k,\r\n      e = x.e,\r\n      str = digitsToString(x.d),\r\n      len = str.length;\r\n\r\n    if (isExp) {\r\n      if (sd && (k = sd - len) > 0) {\r\n        str = str.charAt(0) + '.' + str.slice(1) + getZeroString(k);\r\n      } else if (len > 1) {\r\n        str = str.charAt(0) + '.' + str.slice(1);\r\n      }\r\n\r\n      str = str + (x.e < 0 ? 'e' : 'e+') + x.e;\r\n    } else if (e < 0) {\r\n      str = '0.' + getZeroString(-e - 1) + str;\r\n      if (sd && (k = sd - len) > 0) str += getZeroString(k);\r\n    } else if (e >= len) {\r\n      str += getZeroString(e + 1 - len);\r\n      if (sd && (k = sd - e - 1) > 0) str = str + '.' + getZeroString(k);\r\n    } else {\r\n      if ((k = e + 1) < len) str = str.slice(0, k) + '.' + str.slice(k);\r\n      if (sd && (k = sd - len) > 0) {\r\n        if (e + 1 === len) str += '.';\r\n        str += getZeroString(k);\r\n      }\r\n    }\r\n\r\n    return str;\r\n  }\r\n\r\n\r\n  // Calculate the base 10 exponent from the base 1e7 exponent.\r\n  function getBase10Exponent(digits, e) {\r\n    var w = digits[0];\r\n\r\n    // Add the number of digits of the first word of the digits array.\r\n    for ( e *= LOG_BASE; w >= 10; w /= 10) e++;\r\n    return e;\r\n  }\r\n\r\n\r\n  function getLn10(Ctor, sd, pr) {\r\n    if (sd > LN10_PRECISION) {\r\n\r\n      // Reset global state in case the exception is caught.\r\n      external = true;\r\n      if (pr) Ctor.precision = pr;\r\n      throw Error(precisionLimitExceeded);\r\n    }\r\n    return finalise(new Ctor(LN10), sd, 1, true);\r\n  }\r\n\r\n\r\n  function getPi(Ctor, sd, rm) {\r\n    if (sd > PI_PRECISION) throw Error(precisionLimitExceeded);\r\n    return finalise(new Ctor(PI), sd, rm, true);\r\n  }\r\n\r\n\r\n  function getPrecision(digits) {\r\n    var w = digits.length - 1,\r\n      len = w * LOG_BASE + 1;\r\n\r\n    w = digits[w];\r\n\r\n    // If non-zero...\r\n    if (w) {\r\n\r\n      // Subtract the number of trailing zeros of the last word.\r\n      for (; w % 10 == 0; w /= 10) len--;\r\n\r\n      // Add the number of digits of the first word.\r\n      for (w = digits[0]; w >= 10; w /= 10) len++;\r\n    }\r\n\r\n    return len;\r\n  }\r\n\r\n\r\n  function getZeroString(k) {\r\n    var zs = '';\r\n    for (; k--;) zs += '0';\r\n    return zs;\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the value of Decimal `x` to the power `n`, where `n` is an\r\n   * integer of type number.\r\n   *\r\n   * Implements 'exponentiation by squaring'. Called by `pow` and `parseOther`.\r\n   *\r\n   */\r\n  function intPow(Ctor, x, n, pr) {\r\n    var isTruncated,\r\n      r = new Ctor(1),\r\n\r\n      // Max n of 9007199254740991 takes 53 loop iterations.\r\n      // Maximum digits array length; leaves [28, 34] guard digits.\r\n      k = Math.ceil(pr / LOG_BASE + 4);\r\n\r\n    external = false;\r\n\r\n    for (;;) {\r\n      if (n % 2) {\r\n        r = r.times(x);\r\n        if (truncate(r.d, k)) isTruncated = true;\r\n      }\r\n\r\n      n = mathfloor(n / 2);\r\n      if (n === 0) {\r\n\r\n        // To ensure correct rounding when r.d is truncated, increment the last word if it is zero.\r\n        n = r.d.length - 1;\r\n        if (isTruncated && r.d[n] === 0) ++r.d[n];\r\n        break;\r\n      }\r\n\r\n      x = x.times(x);\r\n      truncate(x.d, k);\r\n    }\r\n\r\n    external = true;\r\n\r\n    return r;\r\n  }\r\n\r\n\r\n  function isOdd(n) {\r\n    return n.d[n.d.length - 1] & 1;\r\n  }\r\n\r\n\r\n  /*\r\n   * Handle `max` and `min`. `ltgt` is 'lt' or 'gt'.\r\n   */\r\n  function maxOrMin(Ctor, args, ltgt) {\r\n    var y,\r\n      x = new Ctor(args[0]),\r\n      i = 0;\r\n\r\n    for (; ++i < args.length;) {\r\n      y = new Ctor(args[i]);\r\n      if (!y.s) {\r\n        x = y;\r\n        break;\r\n      } else if (x[ltgt](y)) {\r\n        x = y;\r\n      }\r\n    }\r\n\r\n    return x;\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the natural exponential of `x` rounded to `sd` significant\r\n   * digits.\r\n   *\r\n   * Taylor/Maclaurin series.\r\n   *\r\n   * exp(x) = x^0/0! + x^1/1! + x^2/2! + x^3/3! + ...\r\n   *\r\n   * Argument reduction:\r\n   *   Repeat x = x / 32, k += 5, until |x| < 0.1\r\n   *   exp(x) = exp(x / 2^k)^(2^k)\r\n   *\r\n   * Previously, the argument was initially reduced by\r\n   * exp(x) = exp(r) * 10^k  where r = x - k * ln10, k = floor(x / ln10)\r\n   * to first put r in the range [0, ln10], before dividing by 32 until |x| < 0.1, but this was\r\n   * found to be slower than just dividing repeatedly by 32 as above.\r\n   *\r\n   * Max integer argument: exp('20723265836946413') = 6.3e+9000000000000000\r\n   * Min integer argument: exp('-20723265836946411') = 1.2e-9000000000000000\r\n   * (Math object integer min/max: Math.exp(709) = 8.2e+307, Math.exp(-745) = 5e-324)\r\n   *\r\n   *  exp(Infinity)  = Infinity\r\n   *  exp(-Infinity) = 0\r\n   *  exp(NaN)       = NaN\r\n   *  exp(±0)        = 1\r\n   *\r\n   *  exp(x) is non-terminating for any finite, non-zero x.\r\n   *\r\n   *  The result will always be correctly rounded.\r\n   *\r\n   */\r\n  function naturalExponential(x, sd) {\r\n    var denominator, guard, j, pow, sum, t, wpr,\r\n      rep = 0,\r\n      i = 0,\r\n      k = 0,\r\n      Ctor = x.constructor,\r\n      rm = Ctor.rounding,\r\n      pr = Ctor.precision;\r\n\r\n    // 0/NaN/Infinity?\r\n    if (!x.d || !x.d[0] || x.e > 17) {\r\n\r\n      return new Ctor(x.d\r\n        ? !x.d[0] ? 1 : x.s < 0 ? 0 : 1 / 0\r\n        : x.s ? x.s < 0 ? 0 : x : 0 / 0);\r\n    }\r\n\r\n    if (sd == null) {\r\n      external = false;\r\n      wpr = pr;\r\n    } else {\r\n      wpr = sd;\r\n    }\r\n\r\n    t = new Ctor(0.03125);\r\n\r\n    // while abs(x) >= 0.1\r\n    while (x.e > -2) {\r\n\r\n      // x = x / 2^5\r\n      x = x.times(t);\r\n      k += 5;\r\n    }\r\n\r\n    // Use 2 * log10(2^k) + 5 (empirically derived) to estimate the increase in precision\r\n    // necessary to ensure the first 4 rounding digits are correct.\r\n    guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;\r\n    wpr += guard;\r\n    denominator = pow = sum = new Ctor(1);\r\n    Ctor.precision = wpr;\r\n\r\n    for (;;) {\r\n      pow = finalise(pow.times(x), wpr, 1);\r\n      denominator = denominator.times(++i);\r\n      t = sum.plus(divide(pow, denominator, wpr, 1));\r\n\r\n      if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {\r\n        j = k;\r\n        while (j--) sum = finalise(sum.times(sum), wpr, 1);\r\n\r\n        // Check to see if the first 4 rounding digits are [49]999.\r\n        // If so, repeat the summation with a higher precision, otherwise\r\n        // e.g. with precision: 18, rounding: 1\r\n        // exp(18.404272462595034083567793919843761) = 98372560.1229999999 (should be 98372560.123)\r\n        // `wpr - guard` is the index of first rounding digit.\r\n        if (sd == null) {\r\n\r\n          if (rep < 3 && checkRoundingDigits(sum.d, wpr - guard, rm, rep)) {\r\n            Ctor.precision = wpr += 10;\r\n            denominator = pow = t = new Ctor(1);\r\n            i = 0;\r\n            rep++;\r\n          } else {\r\n            return finalise(sum, Ctor.precision = pr, rm, external = true);\r\n          }\r\n        } else {\r\n          Ctor.precision = pr;\r\n          return sum;\r\n        }\r\n      }\r\n\r\n      sum = t;\r\n    }\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the natural logarithm of `x` rounded to `sd` significant\r\n   * digits.\r\n   *\r\n   *  ln(-n)        = NaN\r\n   *  ln(0)         = -Infinity\r\n   *  ln(-0)        = -Infinity\r\n   *  ln(1)         = 0\r\n   *  ln(Infinity)  = Infinity\r\n   *  ln(-Infinity) = NaN\r\n   *  ln(NaN)       = NaN\r\n   *\r\n   *  ln(n) (n != 1) is non-terminating.\r\n   *\r\n   */\r\n  function naturalLogarithm(y, sd) {\r\n    var c, c0, denominator, e, numerator, rep, sum, t, wpr, x1, x2,\r\n      n = 1,\r\n      guard = 10,\r\n      x = y,\r\n      xd = x.d,\r\n      Ctor = x.constructor,\r\n      rm = Ctor.rounding,\r\n      pr = Ctor.precision;\r\n\r\n    // Is x negative or Infinity, NaN, 0 or 1?\r\n    if (x.s < 0 || !xd || !xd[0] || !x.e && xd[0] == 1 && xd.length == 1) {\r\n      return new Ctor(xd && !xd[0] ? -1 / 0 : x.s != 1 ? NaN : xd ? 0 : x);\r\n    }\r\n\r\n    if (sd == null) {\r\n      external = false;\r\n      wpr = pr;\r\n    } else {\r\n      wpr = sd;\r\n    }\r\n\r\n    Ctor.precision = wpr += guard;\r\n    c = digitsToString(xd);\r\n    c0 = c.charAt(0);\r\n\r\n    if (Math.abs(e = x.e) < 1.5e15) {\r\n\r\n      // Argument reduction.\r\n      // The series converges faster the closer the argument is to 1, so using\r\n      // ln(a^b) = b * ln(a),   ln(a) = ln(a^b) / b\r\n      // multiply the argument by itself until the leading digits of the significand are 7, 8, 9,\r\n      // 10, 11, 12 or 13, recording the number of multiplications so the sum of the series can\r\n      // later be divided by this number, then separate out the power of 10 using\r\n      // ln(a*10^b) = ln(a) + b*ln(10).\r\n\r\n      // max n is 21 (gives 0.9, 1.0 or 1.1) (9e15 / 21 = 4.2e14).\r\n      //while (c0 < 9 && c0 != 1 || c0 == 1 && c.charAt(1) > 1) {\r\n      // max n is 6 (gives 0.7 - 1.3)\r\n      while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {\r\n        x = x.times(y);\r\n        c = digitsToString(x.d);\r\n        c0 = c.charAt(0);\r\n        n++;\r\n      }\r\n\r\n      e = x.e;\r\n\r\n      if (c0 > 1) {\r\n        x = new Ctor('0.' + c);\r\n        e++;\r\n      } else {\r\n        x = new Ctor(c0 + '.' + c.slice(1));\r\n      }\r\n    } else {\r\n\r\n      // The argument reduction method above may result in overflow if the argument y is a massive\r\n      // number with exponent >= 1500000000000000 (9e15 / 6 = 1.5e15), so instead recall this\r\n      // function using ln(x*10^e) = ln(x) + e*ln(10).\r\n      t = getLn10(Ctor, wpr + 2, pr).times(e + '');\r\n      x = naturalLogarithm(new Ctor(c0 + '.' + c.slice(1)), wpr - guard).plus(t);\r\n      Ctor.precision = pr;\r\n\r\n      return sd == null ? finalise(x, pr, rm, external = true) : x;\r\n    }\r\n\r\n    // x1 is x reduced to a value near 1.\r\n    x1 = x;\r\n\r\n    // Taylor series.\r\n    // ln(y) = ln((1 + x)/(1 - x)) = 2(x + x^3/3 + x^5/5 + x^7/7 + ...)\r\n    // where x = (y - 1)/(y + 1)    (|x| < 1)\r\n    sum = numerator = x = divide(x.minus(1), x.plus(1), wpr, 1);\r\n    x2 = finalise(x.times(x), wpr, 1);\r\n    denominator = 3;\r\n\r\n    for (;;) {\r\n      numerator = finalise(numerator.times(x2), wpr, 1);\r\n      t = sum.plus(divide(numerator, new Ctor(denominator), wpr, 1));\r\n\r\n      if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {\r\n        sum = sum.times(2);\r\n\r\n        // Reverse the argument reduction. Check that e is not 0 because, besides preventing an\r\n        // unnecessary calculation, -0 + 0 = +0 and to ensure correct rounding -0 needs to stay -0.\r\n        if (e !== 0) sum = sum.plus(getLn10(Ctor, wpr + 2, pr).times(e + ''));\r\n        sum = divide(sum, new Ctor(n), wpr, 1);\r\n\r\n        // Is rm > 3 and the first 4 rounding digits 4999, or rm < 4 (or the summation has\r\n        // been repeated previously) and the first 4 rounding digits 9999?\r\n        // If so, restart the summation with a higher precision, otherwise\r\n        // e.g. with precision: 12, rounding: 1\r\n        // ln(135520028.6126091714265381533) = 18.7246299999 when it should be 18.72463.\r\n        // `wpr - guard` is the index of first rounding digit.\r\n        if (sd == null) {\r\n          if (checkRoundingDigits(sum.d, wpr - guard, rm, rep)) {\r\n            Ctor.precision = wpr += guard;\r\n            t = numerator = x = divide(x1.minus(1), x1.plus(1), wpr, 1);\r\n            x2 = finalise(x.times(x), wpr, 1);\r\n            denominator = rep = 1;\r\n          } else {\r\n            return finalise(sum, Ctor.precision = pr, rm, external = true);\r\n          }\r\n        } else {\r\n          Ctor.precision = pr;\r\n          return sum;\r\n        }\r\n      }\r\n\r\n      sum = t;\r\n      denominator += 2;\r\n    }\r\n  }\r\n\r\n\r\n  // ±Infinity, NaN.\r\n  function nonFiniteToString(x) {\r\n    // Unsigned.\r\n    return String(x.s * x.s / 0);\r\n  }\r\n\r\n\r\n  /*\r\n   * Parse the value of a new Decimal `x` from string `str`.\r\n   */\r\n  function parseDecimal(x, str) {\r\n    var e, i, len;\r\n\r\n    // Decimal point?\r\n    if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');\r\n\r\n    // Exponential form?\r\n    if ((i = str.search(/e/i)) > 0) {\r\n\r\n      // Determine exponent.\r\n      if (e < 0) e = i;\r\n      e += +str.slice(i + 1);\r\n      str = str.substring(0, i);\r\n    } else if (e < 0) {\r\n\r\n      // Integer.\r\n      e = str.length;\r\n    }\r\n\r\n    // Determine leading zeros.\r\n    for (i = 0; str.charCodeAt(i) === 48; i++);\r\n\r\n    // Determine trailing zeros.\r\n    for (len = str.length; str.charCodeAt(len - 1) === 48; --len);\r\n    str = str.slice(i, len);\r\n\r\n    if (str) {\r\n      len -= i;\r\n      x.e = e = e - i - 1;\r\n      x.d = [];\r\n\r\n      // Transform base\r\n\r\n      // e is the base 10 exponent.\r\n      // i is where to slice str to get the first word of the digits array.\r\n      i = (e + 1) % LOG_BASE;\r\n      if (e < 0) i += LOG_BASE;\r\n\r\n      if (i < len) {\r\n        if (i) x.d.push(+str.slice(0, i));\r\n        for (len -= LOG_BASE; i < len;) x.d.push(+str.slice(i, i += LOG_BASE));\r\n        str = str.slice(i);\r\n        i = LOG_BASE - str.length;\r\n      } else {\r\n        i -= len;\r\n      }\r\n\r\n      for (; i--;) str += '0';\r\n      x.d.push(+str);\r\n\r\n      if (external) {\r\n\r\n        // Overflow?\r\n        if (x.e > x.constructor.maxE) {\r\n\r\n          // Infinity.\r\n          x.d = null;\r\n          x.e = NaN;\r\n\r\n        // Underflow?\r\n        } else if (x.e < x.constructor.minE) {\r\n\r\n          // Zero.\r\n          x.e = 0;\r\n          x.d = [0];\r\n          // x.constructor.underflow = true;\r\n        } // else x.constructor.underflow = false;\r\n      }\r\n    } else {\r\n\r\n      // Zero.\r\n      x.e = 0;\r\n      x.d = [0];\r\n    }\r\n\r\n    return x;\r\n  }\r\n\r\n\r\n  /*\r\n   * Parse the value of a new Decimal `x` from a string `str`, which is not a decimal value.\r\n   */\r\n  function parseOther(x, str) {\r\n    var base, Ctor, divisor, i, isFloat, len, p, xd, xe;\r\n\r\n    if (str === 'Infinity' || str === 'NaN') {\r\n      if (!+str) x.s = NaN;\r\n      x.e = NaN;\r\n      x.d = null;\r\n      return x;\r\n    }\r\n\r\n    if (isHex.test(str))  {\r\n      base = 16;\r\n      str = str.toLowerCase();\r\n    } else if (isBinary.test(str))  {\r\n      base = 2;\r\n    } else if (isOctal.test(str))  {\r\n      base = 8;\r\n    } else {\r\n      throw Error(invalidArgument + str);\r\n    }\r\n\r\n    // Is there a binary exponent part?\r\n    i = str.search(/p/i);\r\n\r\n    if (i > 0) {\r\n      p = +str.slice(i + 1);\r\n      str = str.substring(2, i);\r\n    } else {\r\n      str = str.slice(2);\r\n    }\r\n\r\n    // Convert `str` as an integer then divide the result by `base` raised to a power such that the\r\n    // fraction part will be restored.\r\n    i = str.indexOf('.');\r\n    isFloat = i >= 0;\r\n    Ctor = x.constructor;\r\n\r\n    if (isFloat) {\r\n      str = str.replace('.', '');\r\n      len = str.length;\r\n      i = len - i;\r\n\r\n      // log[10](16) = 1.2041... , log[10](88) = 1.9444....\r\n      divisor = intPow(Ctor, new Ctor(base), i, i * 2);\r\n    }\r\n\r\n    xd = convertBase(str, base, BASE);\r\n    xe = xd.length - 1;\r\n\r\n    // Remove trailing zeros.\r\n    for (i = xe; xd[i] === 0; --i) xd.pop();\r\n    if (i < 0) return new Ctor(x.s * 0);\r\n    x.e = getBase10Exponent(xd, xe);\r\n    x.d = xd;\r\n    external = false;\r\n\r\n    // At what precision to perform the division to ensure exact conversion?\r\n    // maxDecimalIntegerPartDigitCount = ceil(log[10](b) * otherBaseIntegerPartDigitCount)\r\n    // log[10](2) = 0.30103, log[10](8) = 0.90309, log[10](16) = 1.20412\r\n    // E.g. ceil(1.2 * 3) = 4, so up to 4 decimal digits are needed to represent 3 hex int digits.\r\n    // maxDecimalFractionPartDigitCount = {Hex:4|Oct:3|Bin:1} * otherBaseFractionPartDigitCount\r\n    // Therefore using 4 * the number of digits of str will always be enough.\r\n    if (isFloat) x = divide(x, divisor, len * 4);\r\n\r\n    // Multiply by the binary exponent part if present.\r\n    if (p) x = x.times(Math.abs(p) < 54 ? mathpow(2, p) : Decimal.pow(2, p));\r\n    external = true;\r\n\r\n    return x;\r\n  }\r\n\r\n\r\n  /*\r\n   * sin(x) = x - x^3/3! + x^5/5! - ...\r\n   * |x| < pi/2\r\n   *\r\n   */\r\n  function sine(Ctor, x) {\r\n    var k,\r\n      len = x.d.length;\r\n\r\n    if (len < 3) return taylorSeries(Ctor, 2, x, x);\r\n\r\n    // Argument reduction: sin(5x) = 16*sin^5(x) - 20*sin^3(x) + 5*sin(x)\r\n    // i.e. sin(x) = 16*sin^5(x/5) - 20*sin^3(x/5) + 5*sin(x/5)\r\n    // and  sin(x) = sin(x/5)(5 + sin^2(x/5)(16sin^2(x/5) - 20))\r\n\r\n    // Estimate the optimum number of times to use the argument reduction.\r\n    k = 1.4 * Math.sqrt(len);\r\n    k = k > 16 ? 16 : k | 0;\r\n\r\n    x = x.times(1 / tinyPow(5, k));\r\n    x = taylorSeries(Ctor, 2, x, x);\r\n\r\n    // Reverse argument reduction\r\n    var sin2_x,\r\n      d5 = new Ctor(5),\r\n      d16 = new Ctor(16),\r\n      d20 = new Ctor(20);\r\n    for (; k--;) {\r\n      sin2_x = x.times(x);\r\n      x = x.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));\r\n    }\r\n\r\n    return x;\r\n  }\r\n\r\n\r\n  // Calculate Taylor series for `cos`, `cosh`, `sin` and `sinh`.\r\n  function taylorSeries(Ctor, n, x, y, isHyperbolic) {\r\n    var j, t, u, x2,\r\n      i = 1,\r\n      pr = Ctor.precision,\r\n      k = Math.ceil(pr / LOG_BASE);\r\n\r\n    external = false;\r\n    x2 = x.times(x);\r\n    u = new Ctor(y);\r\n\r\n    for (;;) {\r\n      t = divide(u.times(x2), new Ctor(n++ * n++), pr, 1);\r\n      u = isHyperbolic ? y.plus(t) : y.minus(t);\r\n      y = divide(t.times(x2), new Ctor(n++ * n++), pr, 1);\r\n      t = u.plus(y);\r\n\r\n      if (t.d[k] !== void 0) {\r\n        for (j = k; t.d[j] === u.d[j] && j--;);\r\n        if (j == -1) break;\r\n      }\r\n\r\n      j = u;\r\n      u = y;\r\n      y = t;\r\n      t = j;\r\n      i++;\r\n    }\r\n\r\n    external = true;\r\n    t.d.length = k + 1;\r\n\r\n    return t;\r\n  }\r\n\r\n\r\n  // Exponent e must be positive and non-zero.\r\n  function tinyPow(b, e) {\r\n    var n = b;\r\n    while (--e) n *= b;\r\n    return n;\r\n  }\r\n\r\n\r\n  // Return the absolute value of `x` reduced to less than or equal to half pi.\r\n  function toLessThanHalfPi(Ctor, x) {\r\n    var t,\r\n      isNeg = x.s < 0,\r\n      pi = getPi(Ctor, Ctor.precision, 1),\r\n      halfPi = pi.times(0.5);\r\n\r\n    x = x.abs();\r\n\r\n    if (x.lte(halfPi)) {\r\n      quadrant = isNeg ? 4 : 1;\r\n      return x;\r\n    }\r\n\r\n    t = x.divToInt(pi);\r\n\r\n    if (t.isZero()) {\r\n      quadrant = isNeg ? 3 : 2;\r\n    } else {\r\n      x = x.minus(t.times(pi));\r\n\r\n      // 0 <= x < pi\r\n      if (x.lte(halfPi)) {\r\n        quadrant = isOdd(t) ? (isNeg ? 2 : 3) : (isNeg ? 4 : 1);\r\n        return x;\r\n      }\r\n\r\n      quadrant = isOdd(t) ? (isNeg ? 1 : 4) : (isNeg ? 3 : 2);\r\n    }\r\n\r\n    return x.minus(pi).abs();\r\n  }\r\n\r\n\r\n  /*\r\n   * Return the value of Decimal `x` as a string in base `baseOut`.\r\n   *\r\n   * If the optional `sd` argument is present include a binary exponent suffix.\r\n   */\r\n  function toStringBinary(x, baseOut, sd, rm) {\r\n    var base, e, i, k, len, roundUp, str, xd, y,\r\n      Ctor = x.constructor,\r\n      isExp = sd !== void 0;\r\n\r\n    if (isExp) {\r\n      checkInt32(sd, 1, MAX_DIGITS);\r\n      if (rm === void 0) rm = Ctor.rounding;\r\n      else checkInt32(rm, 0, 8);\r\n    } else {\r\n      sd = Ctor.precision;\r\n      rm = Ctor.rounding;\r\n    }\r\n\r\n    if (!x.isFinite()) {\r\n      str = nonFiniteToString(x);\r\n    } else {\r\n      str = finiteToString(x);\r\n      i = str.indexOf('.');\r\n\r\n      // Use exponential notation according to `toExpPos` and `toExpNeg`? No, but if required:\r\n      // maxBinaryExponent = floor((decimalExponent + 1) * log[2](10))\r\n      // minBinaryExponent = floor(decimalExponent * log[2](10))\r\n      // log[2](10) = 3.321928094887362347870319429489390175864\r\n\r\n      if (isExp) {\r\n        base = 2;\r\n        if (baseOut == 16) {\r\n          sd = sd * 4 - 3;\r\n        } else if (baseOut == 8) {\r\n          sd = sd * 3 - 2;\r\n        }\r\n      } else {\r\n        base = baseOut;\r\n      }\r\n\r\n      // Convert the number as an integer then divide the result by its base raised to a power such\r\n      // that the fraction part will be restored.\r\n\r\n      // Non-integer.\r\n      if (i >= 0) {\r\n        str = str.replace('.', '');\r\n        y = new Ctor(1);\r\n        y.e = str.length - i;\r\n        y.d = convertBase(finiteToString(y), 10, base);\r\n        y.e = y.d.length;\r\n      }\r\n\r\n      xd = convertBase(str, 10, base);\r\n      e = len = xd.length;\r\n\r\n      // Remove trailing zeros.\r\n      for (; xd[--len] == 0;) xd.pop();\r\n\r\n      if (!xd[0]) {\r\n        str = isExp ? '0p+0' : '0';\r\n      } else {\r\n        if (i < 0) {\r\n          e--;\r\n        } else {\r\n          x = new Ctor(x);\r\n          x.d = xd;\r\n          x.e = e;\r\n          x = divide(x, y, sd, rm, 0, base);\r\n          xd = x.d;\r\n          e = x.e;\r\n          roundUp = inexact;\r\n        }\r\n\r\n        // The rounding digit, i.e. the digit after the digit that may be rounded up.\r\n        i = xd[sd];\r\n        k = base / 2;\r\n        roundUp = roundUp || xd[sd + 1] !== void 0;\r\n\r\n        roundUp = rm < 4\r\n          ? (i !== void 0 || roundUp) && (rm === 0 || rm === (x.s < 0 ? 3 : 2))\r\n          : i > k || i === k && (rm === 4 || roundUp || rm === 6 && xd[sd - 1] & 1 ||\r\n            rm === (x.s < 0 ? 8 : 7));\r\n\r\n        xd.length = sd;\r\n\r\n        if (roundUp) {\r\n\r\n          // Rounding up may mean the previous digit has to be rounded up and so on.\r\n          for (; ++xd[--sd] > base - 1;) {\r\n            xd[sd] = 0;\r\n            if (!sd) {\r\n              ++e;\r\n              xd.unshift(1);\r\n            }\r\n          }\r\n        }\r\n\r\n        // Determine trailing zeros.\r\n        for (len = xd.length; !xd[len - 1]; --len);\r\n\r\n        // E.g. [4, 11, 15] becomes 4bf.\r\n        for (i = 0, str = ''; i < len; i++) str += NUMERALS.charAt(xd[i]);\r\n\r\n        // Add binary exponent suffix?\r\n        if (isExp) {\r\n          if (len > 1) {\r\n            if (baseOut == 16 || baseOut == 8) {\r\n              i = baseOut == 16 ? 4 : 3;\r\n              for (--len; len % i; len++) str += '0';\r\n              xd = convertBase(str, base, baseOut);\r\n              for (len = xd.length; !xd[len - 1]; --len);\r\n\r\n              // xd[0] will always be be 1\r\n              for (i = 1, str = '1.'; i < len; i++) str += NUMERALS.charAt(xd[i]);\r\n            } else {\r\n              str = str.charAt(0) + '.' + str.slice(1);\r\n            }\r\n          }\r\n\r\n          str =  str + (e < 0 ? 'p' : 'p+') + e;\r\n        } else if (e < 0) {\r\n          for (; ++e;) str = '0' + str;\r\n          str = '0.' + str;\r\n        } else {\r\n          if (++e > len) for (e -= len; e-- ;) str += '0';\r\n          else if (e < len) str = str.slice(0, e) + '.' + str.slice(e);\r\n        }\r\n      }\r\n\r\n      str = (baseOut == 16 ? '0x' : baseOut == 2 ? '0b' : baseOut == 8 ? '0o' : '') + str;\r\n    }\r\n\r\n    return x.s < 0 ? '-' + str : str;\r\n  }\r\n\r\n\r\n  // Does not strip trailing zeros.\r\n  function truncate(arr, len) {\r\n    if (arr.length > len) {\r\n      arr.length = len;\r\n      return true;\r\n    }\r\n  }\r\n\r\n\r\n  // Decimal methods\r\n\r\n\r\n  /*\r\n   *  abs\r\n   *  acos\r\n   *  acosh\r\n   *  add\r\n   *  asin\r\n   *  asinh\r\n   *  atan\r\n   *  atanh\r\n   *  atan2\r\n   *  cbrt\r\n   *  ceil\r\n   *  clone\r\n   *  config\r\n   *  cos\r\n   *  cosh\r\n   *  div\r\n   *  exp\r\n   *  floor\r\n   *  hypot\r\n   *  ln\r\n   *  log\r\n   *  log2\r\n   *  log10\r\n   *  max\r\n   *  min\r\n   *  mod\r\n   *  mul\r\n   *  pow\r\n   *  random\r\n   *  round\r\n   *  set\r\n   *  sign\r\n   *  sin\r\n   *  sinh\r\n   *  sqrt\r\n   *  sub\r\n   *  tan\r\n   *  tanh\r\n   *  trunc\r\n   */\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the absolute value of `x`.\r\n   *\r\n   * x {number|string|Decimal}\r\n   *\r\n   */\r\n  function abs(x) {\r\n    return new this(x).abs();\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the arccosine in radians of `x`.\r\n   *\r\n   * x {number|string|Decimal}\r\n   *\r\n   */\r\n  function acos(x) {\r\n    return new this(x).acos();\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the inverse of the hyperbolic cosine of `x`, rounded to\r\n   * `precision` significant digits using rounding mode `rounding`.\r\n   *\r\n   * x {number|string|Decimal} A value in radians.\r\n   *\r\n   */\r\n  function acosh(x) {\r\n    return new this(x).acosh();\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the sum of `x` and `y`, rounded to `precision` significant\r\n   * digits using rounding mode `rounding`.\r\n   *\r\n   * x {number|string|Decimal}\r\n   * y {number|string|Decimal}\r\n   *\r\n   */\r\n  function add(x, y) {\r\n    return new this(x).plus(y);\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the arcsine in radians of `x`, rounded to `precision`\r\n   * significant digits using rounding mode `rounding`.\r\n   *\r\n   * x {number|string|Decimal}\r\n   *\r\n   */\r\n  function asin(x) {\r\n    return new this(x).asin();\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the inverse of the hyperbolic sine of `x`, rounded to\r\n   * `precision` significant digits using rounding mode `rounding`.\r\n   *\r\n   * x {number|string|Decimal} A value in radians.\r\n   *\r\n   */\r\n  function asinh(x) {\r\n    return new this(x).asinh();\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the arctangent in radians of `x`, rounded to `precision`\r\n   * significant digits using rounding mode `rounding`.\r\n   *\r\n   * x {number|string|Decimal}\r\n   *\r\n   */\r\n  function atan(x) {\r\n    return new this(x).atan();\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the inverse of the hyperbolic tangent of `x`, rounded to\r\n   * `precision` significant digits using rounding mode `rounding`.\r\n   *\r\n   * x {number|string|Decimal} A value in radians.\r\n   *\r\n   */\r\n  function atanh(x) {\r\n    return new this(x).atanh();\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the arctangent in radians of `y/x` in the range -pi to pi\r\n   * (inclusive), rounded to `precision` significant digits using rounding mode `rounding`.\r\n   *\r\n   * Domain: [-Infinity, Infinity]\r\n   * Range: [-pi, pi]\r\n   *\r\n   * y {number|string|Decimal} The y-coordinate.\r\n   * x {number|string|Decimal} The x-coordinate.\r\n   *\r\n   * atan2(±0, -0)               = ±pi\r\n   * atan2(±0, +0)               = ±0\r\n   * atan2(±0, -x)               = ±pi for x > 0\r\n   * atan2(±0, x)                = ±0 for x > 0\r\n   * atan2(-y, ±0)               = -pi/2 for y > 0\r\n   * atan2(y, ±0)                = pi/2 for y > 0\r\n   * atan2(±y, -Infinity)        = ±pi for finite y > 0\r\n   * atan2(±y, +Infinity)        = ±0 for finite y > 0\r\n   * atan2(±Infinity, x)         = ±pi/2 for finite x\r\n   * atan2(±Infinity, -Infinity) = ±3*pi/4\r\n   * atan2(±Infinity, +Infinity) = ±pi/4\r\n   * atan2(NaN, x) = NaN\r\n   * atan2(y, NaN) = NaN\r\n   *\r\n   */\r\n  function atan2(y, x) {\r\n    y = new this(y);\r\n    x = new this(x);\r\n    var r,\r\n      pr = this.precision,\r\n      rm = this.rounding,\r\n      wpr = pr + 4;\r\n\r\n    // Either NaN\r\n    if (!y.s || !x.s) {\r\n      r = new this(NaN);\r\n\r\n    // Both ±Infinity\r\n    } else if (!y.d && !x.d) {\r\n      r = getPi(this, wpr, 1).times(x.s > 0 ? 0.25 : 0.75);\r\n      r.s = y.s;\r\n\r\n    // x is ±Infinity or y is ±0\r\n    } else if (!x.d || y.isZero()) {\r\n      r = x.s < 0 ? getPi(this, pr, rm) : new this(0);\r\n      r.s = y.s;\r\n\r\n    // y is ±Infinity or x is ±0\r\n    } else if (!y.d || x.isZero()) {\r\n      r = getPi(this, wpr, 1).times(0.5);\r\n      r.s = y.s;\r\n\r\n    // Both non-zero and finite\r\n    } else if (x.s < 0) {\r\n      this.precision = wpr;\r\n      this.rounding = 1;\r\n      r = this.atan(divide(y, x, wpr, 1));\r\n      x = getPi(this, wpr, 1);\r\n      this.precision = pr;\r\n      this.rounding = rm;\r\n      r = y.s < 0 ? r.minus(x) : r.plus(x);\r\n    } else {\r\n      r = this.atan(divide(y, x, wpr, 1));\r\n    }\r\n\r\n    return r;\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the cube root of `x`, rounded to `precision` significant\r\n   * digits using rounding mode `rounding`.\r\n   *\r\n   * x {number|string|Decimal}\r\n   *\r\n   */\r\n  function cbrt(x) {\r\n    return new this(x).cbrt();\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is `x` rounded to an integer using `ROUND_CEIL`.\r\n   *\r\n   * x {number|string|Decimal}\r\n   *\r\n   */\r\n  function ceil(x) {\r\n    return finalise(x = new this(x), x.e + 1, 2);\r\n  }\r\n\r\n\r\n  /*\r\n   * Configure global settings for a Decimal constructor.\r\n   *\r\n   * `obj` is an object with one or more of the following properties,\r\n   *\r\n   *   precision  {number}\r\n   *   rounding   {number}\r\n   *   toExpNeg   {number}\r\n   *   toExpPos   {number}\r\n   *   maxE       {number}\r\n   *   minE       {number}\r\n   *   modulo     {number}\r\n   *   crypto     {boolean|number}\r\n   *   defaults   {true}\r\n   *\r\n   * E.g. Decimal.config({ precision: 20, rounding: 4 })\r\n   *\r\n   */\r\n  function config(obj) {\r\n    if (!obj || typeof obj !== 'object') throw Error(decimalError + 'Object expected');\r\n    var i, p, v,\r\n      useDefaults = obj.defaults === true,\r\n      ps = [\r\n        'precision', 1, MAX_DIGITS,\r\n        'rounding', 0, 8,\r\n        'toExpNeg', -EXP_LIMIT, 0,\r\n        'toExpPos', 0, EXP_LIMIT,\r\n        'maxE', 0, EXP_LIMIT,\r\n        'minE', -EXP_LIMIT, 0,\r\n        'modulo', 0, 9\r\n      ];\r\n\r\n    for (i = 0; i < ps.length; i += 3) {\r\n      if (p = ps[i], useDefaults) this[p] = DEFAULTS[p];\r\n      if ((v = obj[p]) !== void 0) {\r\n        if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2]) this[p] = v;\r\n        else throw Error(invalidArgument + p + ': ' + v);\r\n      }\r\n    }\r\n\r\n    if (p = 'crypto', useDefaults) this[p] = DEFAULTS[p];\r\n    if ((v = obj[p]) !== void 0) {\r\n      if (v === true || v === false || v === 0 || v === 1) {\r\n        if (v) {\r\n          if (typeof crypto != 'undefined' && crypto &&\r\n            (crypto.getRandomValues || crypto.randomBytes)) {\r\n            this[p] = true;\r\n          } else {\r\n            throw Error(cryptoUnavailable);\r\n          }\r\n        } else {\r\n          this[p] = false;\r\n        }\r\n      } else {\r\n        throw Error(invalidArgument + p + ': ' + v);\r\n      }\r\n    }\r\n\r\n    return this;\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the cosine of `x`, rounded to `precision` significant\r\n   * digits using rounding mode `rounding`.\r\n   *\r\n   * x {number|string|Decimal} A value in radians.\r\n   *\r\n   */\r\n  function cos(x) {\r\n    return new this(x).cos();\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the hyperbolic cosine of `x`, rounded to precision\r\n   * significant digits using rounding mode `rounding`.\r\n   *\r\n   * x {number|string|Decimal} A value in radians.\r\n   *\r\n   */\r\n  function cosh(x) {\r\n    return new this(x).cosh();\r\n  }\r\n\r\n\r\n  /*\r\n   * Create and return a Decimal constructor with the same configuration properties as this Decimal\r\n   * constructor.\r\n   *\r\n   */\r\n  function clone(obj) {\r\n    var i, p, ps;\r\n\r\n    /*\r\n     * The Decimal constructor and exported function.\r\n     * Return a new Decimal instance.\r\n     *\r\n     * v {number|string|Decimal} A numeric value.\r\n     *\r\n     */\r\n    function Decimal(v) {\r\n      var e, i, t,\r\n        x = this;\r\n\r\n      // Decimal called without new.\r\n      if (!(x instanceof Decimal)) return new Decimal(v);\r\n\r\n      // Retain a reference to this Decimal constructor, and shadow Decimal.prototype.constructor\r\n      // which points to Object.\r\n      x.constructor = Decimal;\r\n\r\n      // Duplicate.\r\n      if (v instanceof Decimal) {\r\n        x.s = v.s;\r\n\r\n        if (external) {\r\n          if (!v.d || v.e > Decimal.maxE) {\r\n\r\n            // Infinity.\r\n            x.e = NaN;\r\n            x.d = null;\r\n          } else if (v.e < Decimal.minE) {\r\n\r\n            // Zero.\r\n            x.e = 0;\r\n            x.d = [0];\r\n          } else {\r\n            x.e = v.e;\r\n            x.d = v.d.slice();\r\n          }\r\n        } else {\r\n          x.e = v.e;\r\n          x.d = v.d ? v.d.slice() : v.d;\r\n        }\r\n\r\n        return;\r\n      }\r\n\r\n      t = typeof v;\r\n\r\n      if (t === 'number') {\r\n        if (v === 0) {\r\n          x.s = 1 / v < 0 ? -1 : 1;\r\n          x.e = 0;\r\n          x.d = [0];\r\n          return;\r\n        }\r\n\r\n        if (v < 0) {\r\n          v = -v;\r\n          x.s = -1;\r\n        } else {\r\n          x.s = 1;\r\n        }\r\n\r\n        // Fast path for small integers.\r\n        if (v === ~~v && v < 1e7) {\r\n          for (e = 0, i = v; i >= 10; i /= 10) e++;\r\n\r\n          if (external) {\r\n            if (e > Decimal.maxE) {\r\n              x.e = NaN;\r\n              x.d = null;\r\n            } else if (e < Decimal.minE) {\r\n              x.e = 0;\r\n              x.d = [0];\r\n            } else {\r\n              x.e = e;\r\n              x.d = [v];\r\n            }\r\n          } else {\r\n            x.e = e;\r\n            x.d = [v];\r\n          }\r\n\r\n          return;\r\n\r\n        // Infinity, NaN.\r\n        } else if (v * 0 !== 0) {\r\n          if (!v) x.s = NaN;\r\n          x.e = NaN;\r\n          x.d = null;\r\n          return;\r\n        }\r\n\r\n        return parseDecimal(x, v.toString());\r\n\r\n      } else if (t !== 'string') {\r\n        throw Error(invalidArgument + v);\r\n      }\r\n\r\n      // Minus sign?\r\n      if ((i = v.charCodeAt(0)) === 45) {\r\n        v = v.slice(1);\r\n        x.s = -1;\r\n      } else {\r\n        // Plus sign?\r\n        if (i === 43) v = v.slice(1);\r\n        x.s = 1;\r\n      }\r\n\r\n      return isDecimal.test(v) ? parseDecimal(x, v) : parseOther(x, v);\r\n    }\r\n\r\n    Decimal.prototype = P;\r\n\r\n    Decimal.ROUND_UP = 0;\r\n    Decimal.ROUND_DOWN = 1;\r\n    Decimal.ROUND_CEIL = 2;\r\n    Decimal.ROUND_FLOOR = 3;\r\n    Decimal.ROUND_HALF_UP = 4;\r\n    Decimal.ROUND_HALF_DOWN = 5;\r\n    Decimal.ROUND_HALF_EVEN = 6;\r\n    Decimal.ROUND_HALF_CEIL = 7;\r\n    Decimal.ROUND_HALF_FLOOR = 8;\r\n    Decimal.EUCLID = 9;\r\n\r\n    Decimal.config = Decimal.set = config;\r\n    Decimal.clone = clone;\r\n    Decimal.isDecimal = isDecimalInstance;\r\n\r\n    Decimal.abs = abs;\r\n    Decimal.acos = acos;\r\n    Decimal.acosh = acosh;        // ES6\r\n    Decimal.add = add;\r\n    Decimal.asin = asin;\r\n    Decimal.asinh = asinh;        // ES6\r\n    Decimal.atan = atan;\r\n    Decimal.atanh = atanh;        // ES6\r\n    Decimal.atan2 = atan2;\r\n    Decimal.cbrt = cbrt;          // ES6\r\n    Decimal.ceil = ceil;\r\n    Decimal.cos = cos;\r\n    Decimal.cosh = cosh;          // ES6\r\n    Decimal.div = div;\r\n    Decimal.exp = exp;\r\n    Decimal.floor = floor;\r\n    Decimal.hypot = hypot;        // ES6\r\n    Decimal.ln = ln;\r\n    Decimal.log = log;\r\n    Decimal.log10 = log10;        // ES6\r\n    Decimal.log2 = log2;          // ES6\r\n    Decimal.max = max;\r\n    Decimal.min = min;\r\n    Decimal.mod = mod;\r\n    Decimal.mul = mul;\r\n    Decimal.pow = pow;\r\n    Decimal.random = random;\r\n    Decimal.round = round;\r\n    Decimal.sign = sign;          // ES6\r\n    Decimal.sin = sin;\r\n    Decimal.sinh = sinh;          // ES6\r\n    Decimal.sqrt = sqrt;\r\n    Decimal.sub = sub;\r\n    Decimal.tan = tan;\r\n    Decimal.tanh = tanh;          // ES6\r\n    Decimal.trunc = trunc;        // ES6\r\n\r\n    if (obj === void 0) obj = {};\r\n    if (obj) {\r\n      if (obj.defaults !== true) {\r\n        ps = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'maxE', 'minE', 'modulo', 'crypto'];\r\n        for (i = 0; i < ps.length;) if (!obj.hasOwnProperty(p = ps[i++])) obj[p] = this[p];\r\n      }\r\n    }\r\n\r\n    Decimal.config(obj);\r\n\r\n    return Decimal;\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is `x` divided by `y`, rounded to `precision` significant\r\n   * digits using rounding mode `rounding`.\r\n   *\r\n   * x {number|string|Decimal}\r\n   * y {number|string|Decimal}\r\n   *\r\n   */\r\n  function div(x, y) {\r\n    return new this(x).div(y);\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the natural exponential of `x`, rounded to `precision`\r\n   * significant digits using rounding mode `rounding`.\r\n   *\r\n   * x {number|string|Decimal} The power to which to raise the base of the natural log.\r\n   *\r\n   */\r\n  function exp(x) {\r\n    return new this(x).exp();\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is `x` round to an integer using `ROUND_FLOOR`.\r\n   *\r\n   * x {number|string|Decimal}\r\n   *\r\n   */\r\n  function floor(x) {\r\n    return finalise(x = new this(x), x.e + 1, 3);\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the square root of the sum of the squares of the arguments,\r\n   * rounded to `precision` significant digits using rounding mode `rounding`.\r\n   *\r\n   * hypot(a, b, ...) = sqrt(a^2 + b^2 + ...)\r\n   *\r\n   * arguments {number|string|Decimal}\r\n   *\r\n   */\r\n  function hypot() {\r\n    var i, n,\r\n      t = new this(0);\r\n\r\n    external = false;\r\n\r\n    for (i = 0; i < arguments.length;) {\r\n      n = new this(arguments[i++]);\r\n      if (!n.d) {\r\n        if (n.s) {\r\n          external = true;\r\n          return new this(1 / 0);\r\n        }\r\n        t = n;\r\n      } else if (t.d) {\r\n        t = t.plus(n.times(n));\r\n      }\r\n    }\r\n\r\n    external = true;\r\n\r\n    return t.sqrt();\r\n  }\r\n\r\n\r\n  /*\r\n   * Return true if object is a Decimal instance (where Decimal is any Decimal constructor),\r\n   * otherwise return false.\r\n   *\r\n   */\r\n  function isDecimalInstance(obj) {\r\n    return obj instanceof Decimal || obj && obj.name === '[object Decimal]' || false;\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the natural logarithm of `x`, rounded to `precision`\r\n   * significant digits using rounding mode `rounding`.\r\n   *\r\n   * x {number|string|Decimal}\r\n   *\r\n   */\r\n  function ln(x) {\r\n    return new this(x).ln();\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the log of `x` to the base `y`, or to base 10 if no base\r\n   * is specified, rounded to `precision` significant digits using rounding mode `rounding`.\r\n   *\r\n   * log[y](x)\r\n   *\r\n   * x {number|string|Decimal} The argument of the logarithm.\r\n   * y {number|string|Decimal} The base of the logarithm.\r\n   *\r\n   */\r\n  function log(x, y) {\r\n    return new this(x).log(y);\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the base 2 logarithm of `x`, rounded to `precision`\r\n   * significant digits using rounding mode `rounding`.\r\n   *\r\n   * x {number|string|Decimal}\r\n   *\r\n   */\r\n  function log2(x) {\r\n    return new this(x).log(2);\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the base 10 logarithm of `x`, rounded to `precision`\r\n   * significant digits using rounding mode `rounding`.\r\n   *\r\n   * x {number|string|Decimal}\r\n   *\r\n   */\r\n  function log10(x) {\r\n    return new this(x).log(10);\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the maximum of the arguments.\r\n   *\r\n   * arguments {number|string|Decimal}\r\n   *\r\n   */\r\n  function max() {\r\n    return maxOrMin(this, arguments, 'lt');\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the minimum of the arguments.\r\n   *\r\n   * arguments {number|string|Decimal}\r\n   *\r\n   */\r\n  function min() {\r\n    return maxOrMin(this, arguments, 'gt');\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is `x` modulo `y`, rounded to `precision` significant digits\r\n   * using rounding mode `rounding`.\r\n   *\r\n   * x {number|string|Decimal}\r\n   * y {number|string|Decimal}\r\n   *\r\n   */\r\n  function mod(x, y) {\r\n    return new this(x).mod(y);\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is `x` multiplied by `y`, rounded to `precision` significant\r\n   * digits using rounding mode `rounding`.\r\n   *\r\n   * x {number|string|Decimal}\r\n   * y {number|string|Decimal}\r\n   *\r\n   */\r\n  function mul(x, y) {\r\n    return new this(x).mul(y);\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is `x` raised to the power `y`, rounded to precision\r\n   * significant digits using rounding mode `rounding`.\r\n   *\r\n   * x {number|string|Decimal} The base.\r\n   * y {number|string|Decimal} The exponent.\r\n   *\r\n   */\r\n  function pow(x, y) {\r\n    return new this(x).pow(y);\r\n  }\r\n\r\n\r\n  /*\r\n   * Returns a new Decimal with a random value equal to or greater than 0 and less than 1, and with\r\n   * `sd`, or `Decimal.precision` if `sd` is omitted, significant digits (or less if trailing zeros\r\n   * are produced).\r\n   *\r\n   * [sd] {number} Significant digits. Integer, 0 to MAX_DIGITS inclusive.\r\n   *\r\n   */\r\n  function random(sd) {\r\n    var d, e, k, n,\r\n      i = 0,\r\n      r = new this(1),\r\n      rd = [];\r\n\r\n    if (sd === void 0) sd = this.precision;\r\n    else checkInt32(sd, 1, MAX_DIGITS);\r\n\r\n    k = Math.ceil(sd / LOG_BASE);\r\n\r\n    if (!this.crypto) {\r\n      for (; i < k;) rd[i++] = Math.random() * 1e7 | 0;\r\n\r\n    // Browsers supporting crypto.getRandomValues.\r\n    } else if (crypto.getRandomValues) {\r\n      d = crypto.getRandomValues(new Uint32Array(k));\r\n\r\n      for (; i < k;) {\r\n        n = d[i];\r\n\r\n        // 0 <= n < 4294967296\r\n        // Probability n >= 4.29e9, is 4967296 / 4294967296 = 0.00116 (1 in 865).\r\n        if (n >= 4.29e9) {\r\n          d[i] = crypto.getRandomValues(new Uint32Array(1))[0];\r\n        } else {\r\n\r\n          // 0 <= n <= 4289999999\r\n          // 0 <= (n % 1e7) <= 9999999\r\n          rd[i++] = n % 1e7;\r\n        }\r\n      }\r\n\r\n    // Node.js supporting crypto.randomBytes.\r\n    } else if (crypto.randomBytes) {\r\n\r\n      // buffer\r\n      d = crypto.randomBytes(k *= 4);\r\n\r\n      for (; i < k;) {\r\n\r\n        // 0 <= n < 2147483648\r\n        n = d[i] + (d[i + 1] << 8) + (d[i + 2] << 16) + ((d[i + 3] & 0x7f) << 24);\r\n\r\n        // Probability n >= 2.14e9, is 7483648 / 2147483648 = 0.0035 (1 in 286).\r\n        if (n >= 2.14e9) {\r\n          crypto.randomBytes(4).copy(d, i);\r\n        } else {\r\n\r\n          // 0 <= n <= 2139999999\r\n          // 0 <= (n % 1e7) <= 9999999\r\n          rd.push(n % 1e7);\r\n          i += 4;\r\n        }\r\n      }\r\n\r\n      i = k / 4;\r\n    } else {\r\n      throw Error(cryptoUnavailable);\r\n    }\r\n\r\n    k = rd[--i];\r\n    sd %= LOG_BASE;\r\n\r\n    // Convert trailing digits to zeros according to sd.\r\n    if (k && sd) {\r\n      n = mathpow(10, LOG_BASE - sd);\r\n      rd[i] = (k / n | 0) * n;\r\n    }\r\n\r\n    // Remove trailing words which are zero.\r\n    for (; rd[i] === 0; i--) rd.pop();\r\n\r\n    // Zero?\r\n    if (i < 0) {\r\n      e = 0;\r\n      rd = [0];\r\n    } else {\r\n      e = -1;\r\n\r\n      // Remove leading words which are zero and adjust exponent accordingly.\r\n      for (; rd[0] === 0; e -= LOG_BASE) rd.shift();\r\n\r\n      // Count the digits of the first word of rd to determine leading zeros.\r\n      for (k = 1, n = rd[0]; n >= 10; n /= 10) k++;\r\n\r\n      // Adjust the exponent for leading zeros of the first word of rd.\r\n      if (k < LOG_BASE) e -= LOG_BASE - k;\r\n    }\r\n\r\n    r.e = e;\r\n    r.d = rd;\r\n\r\n    return r;\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is `x` rounded to an integer using rounding mode `rounding`.\r\n   *\r\n   * To emulate `Math.round`, set rounding to 7 (ROUND_HALF_CEIL).\r\n   *\r\n   * x {number|string|Decimal}\r\n   *\r\n   */\r\n  function round(x) {\r\n    return finalise(x = new this(x), x.e + 1, this.rounding);\r\n  }\r\n\r\n\r\n  /*\r\n   * Return\r\n   *   1    if x > 0,\r\n   *  -1    if x < 0,\r\n   *   0    if x is 0,\r\n   *  -0    if x is -0,\r\n   *   NaN  otherwise\r\n   *\r\n   * x {number|string|Decimal}\r\n   *\r\n   */\r\n  function sign(x) {\r\n    x = new this(x);\r\n    return x.d ? (x.d[0] ? x.s : 0 * x.s) : x.s || NaN;\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the sine of `x`, rounded to `precision` significant digits\r\n   * using rounding mode `rounding`.\r\n   *\r\n   * x {number|string|Decimal} A value in radians.\r\n   *\r\n   */\r\n  function sin(x) {\r\n    return new this(x).sin();\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the hyperbolic sine of `x`, rounded to `precision`\r\n   * significant digits using rounding mode `rounding`.\r\n   *\r\n   * x {number|string|Decimal} A value in radians.\r\n   *\r\n   */\r\n  function sinh(x) {\r\n    return new this(x).sinh();\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the square root of `x`, rounded to `precision` significant\r\n   * digits using rounding mode `rounding`.\r\n   *\r\n   * x {number|string|Decimal}\r\n   *\r\n   */\r\n  function sqrt(x) {\r\n    return new this(x).sqrt();\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is `x` minus `y`, rounded to `precision` significant digits\r\n   * using rounding mode `rounding`.\r\n   *\r\n   * x {number|string|Decimal}\r\n   * y {number|string|Decimal}\r\n   *\r\n   */\r\n  function sub(x, y) {\r\n    return new this(x).sub(y);\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the tangent of `x`, rounded to `precision` significant\r\n   * digits using rounding mode `rounding`.\r\n   *\r\n   * x {number|string|Decimal} A value in radians.\r\n   *\r\n   */\r\n  function tan(x) {\r\n    return new this(x).tan();\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is the hyperbolic tangent of `x`, rounded to `precision`\r\n   * significant digits using rounding mode `rounding`.\r\n   *\r\n   * x {number|string|Decimal} A value in radians.\r\n   *\r\n   */\r\n  function tanh(x) {\r\n    return new this(x).tanh();\r\n  }\r\n\r\n\r\n  /*\r\n   * Return a new Decimal whose value is `x` truncated to an integer.\r\n   *\r\n   * x {number|string|Decimal}\r\n   *\r\n   */\r\n  function trunc(x) {\r\n    return finalise(x = new this(x), x.e + 1, 1);\r\n  }\r\n\r\n\r\n  // Create and configure initial Decimal constructor.\r\n  Decimal = clone(DEFAULTS);\r\n\r\n  Decimal['default'] = Decimal.Decimal = Decimal;\r\n\r\n  // Create the internal constants from their string values.\r\n  LN10 = new Decimal(LN10);\r\n  PI = new Decimal(PI);\r\n\r\n\r\n  // Export.\r\n\r\n\r\n  // AMD.\r\n  if (true) {\r\n    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {\r\n      return Decimal;\r\n    }).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\r\n\r\n  // Node and other environments that support module.exports.\r\n  } else {}\r\n})(this);\r\n\n\n//# sourceURL=webpack://collect/./node_modules/decimal.js/decimal.js?");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack://collect/./node_modules/process/browser.js?");

/***/ })

/******/ });