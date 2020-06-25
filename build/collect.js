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

/***/ "./dist/helpers/localDecimal.js":
/*!**************************************!*\
  !*** ./dist/helpers/localDecimal.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n\n/**\n *\n * @param {number} v\n * @returns {LocalDecimal}\n * @constructor\n */\n\nvar LocalDecimal = function LocalDecimal(v) {\n  this.value = 0;\n  this.exp = 0;\n  this.expLength = 0;\n\n  var parts = v.toString().split('.');\n  this.value = parseInt(parts[0], 10);\n  if (parts.length === 2) {\n    var neg = 1;\n    if (this.value < 0) {\n      neg = -1;\n    }\n    this.exp = parseInt(parts[1], 10) * neg;\n    this.expLength = parts[1].length;\n  }\n\n  /**\n     *\n     * @param {LocalDecimal} ldb\n     */\n  this.add = function (ldb) {\n    if (!(ldb instanceof LocalDecimal)) {\n      throw Error('LocalDecimalError: ' + ldb.toString() + ' is not a LocalDecimal instance!');\n    }\n    var ldr = new LocalDecimal(0);\n    // the integer part\n    ldr.value = this.value + ldb.value;\n    // the decimal part\n    var maxExpLength = this.expLength;\n    if (maxExpLength < ldb.expLength) {\n      maxExpLength = ldb.expLength;\n    }\n    ldr.expLength = maxExpLength;\n\n    var ldaExp = this.exp;\n    if (this.expLength < maxExpLength) {\n      ldaExp = Math.pow(10, maxExpLength - this.expLength) * this.exp;\n    }\n    var ldbExp = ldb.exp;\n    if (ldb.expLength < maxExpLength) {\n      ldbExp = Math.pow(10, maxExpLength - ldb.expLength) * ldb.exp;\n    }\n    var ldrExp = ldaExp + ldbExp;\n    var carryPoint = Math.pow(10, maxExpLength + 1);\n    if (ldrExp >= carryPoint) {\n      ldr.value += 1;\n      ldrExp -= carryPoint;\n    }\n    ldr.exp = ldrExp;\n\n    return ldr;\n  };\n\n  this.toNumber = function () {\n    return this.value + this.exp / Math.pow(10, this.expLength);\n  };\n\n  return this;\n};\n\nmodule.exports = LocalDecimal;\n\n//# sourceURL=webpack://collect/./dist/helpers/localDecimal.js?");

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
eval("\n\nvar values = __webpack_require__(/*! ../helpers/values */ \"./dist/helpers/values.js\");\n\nvar _require = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\"),\n    isFunction = _require.isFunction;\n\nvar LocalDecimal = __webpack_require__(/*! ../helpers/localDecimal */ \"./dist/helpers/localDecimal.js\");\n\nmodule.exports = function sum(key) {\n  var items = values(this.items);\n\n  var t = new LocalDecimal(0);\n\n  if (key === undefined) {\n    for (var i = 0, length = items.length; i < length; i += 1) {\n      t = t.add(new LocalDecimal(items[i]));\n    }\n  } else if (isFunction(key)) {\n    for (var _i = 0, _length = items.length; _i < _length; _i += 1) {\n      t = t.add(new LocalDecimal(key(items[_i])));\n    }\n  } else {\n    for (var _i2 = 0, _length2 = items.length; _i2 < _length2; _i2 += 1) {\n      t = t.add(new LocalDecimal(items[_i2][key]));\n    }\n  }\n\n  var total = t.toNumber();\n\n  return parseFloat(total.toPrecision(12));\n};\n\n//# sourceURL=webpack://collect/./dist/methods/sum.js?");

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

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack://collect/./node_modules/process/browser.js?");

/***/ })

/******/ });