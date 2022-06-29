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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = clone;\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/**\n * Clone helper\n *\n * Clone an array or object\n *\n * @param items\n * @returns {*}\n */\nfunction clone(items) {\n  var cloned;\n\n  if (Array.isArray(items)) {\n    var _cloned;\n\n    cloned = [];\n\n    (_cloned = cloned).push.apply(_cloned, _toConsumableArray(items));\n  } else {\n    cloned = {};\n    Object.keys(items).forEach(function (prop) {\n      cloned[prop] = items[prop];\n    });\n  }\n\n  return cloned;\n}\n\n//# sourceURL=webpack://collect/./dist/helpers/clone.js?");

/***/ }),

/***/ "./dist/helpers/deleteKeys.js":
/*!************************************!*\
  !*** ./dist/helpers/deleteKeys.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = deleteKeys;\n\nvar _variadic = _interopRequireDefault(__webpack_require__(/*! ./variadic */ \"./dist/helpers/variadic.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n/**\n * Delete keys helper\n *\n * Delete one or multiple keys from an object\n *\n * @param obj\n * @param keys\n * @returns {void}\n */\nfunction deleteKeys(obj) {\n  for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    keys[_key - 1] = arguments[_key];\n  }\n\n  (0, _variadic[\"default\"])(keys).forEach(function (key) {\n    // eslint-disable-next-line\n    delete obj[key];\n  });\n}\n\n//# sourceURL=webpack://collect/./dist/helpers/deleteKeys.js?");

/***/ }),

/***/ "./dist/helpers/is.js":
/*!****************************!*\
  !*** ./dist/helpers/is.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.isObject = exports.isFunction = exports.isArray = void 0;\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n/**\n * @returns {boolean}\n */\nvar isArray = function isArray(item) {\n  return Array.isArray(item);\n};\n/**\n * @returns {boolean}\n */\n\n\nexports.isArray = isArray;\n\nvar isObject = function isObject(item) {\n  return _typeof(item) === 'object' && Array.isArray(item) === false && item !== null;\n};\n/**\n * @returns {boolean}\n */\n\n\nexports.isObject = isObject;\n\nvar isFunction = function isFunction(item) {\n  return typeof item === 'function';\n};\n\nexports.isFunction = isFunction;\n\n//# sourceURL=webpack://collect/./dist/helpers/is.js?");

/***/ }),

/***/ "./dist/helpers/nestedValue.js":
/*!*************************************!*\
  !*** ./dist/helpers/nestedValue.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = nestedValue;\n\n/**\n * Get value of a nested property\n *\n * @param mainObject\n * @param key\n * @returns {*}\n */\nfunction nestedValue(mainObject, key) {\n  try {\n    return key.split('.').reduce(function (obj, property) {\n      return obj[property];\n    }, mainObject);\n  } catch (err) {\n    // If we end up here, we're not working with an object, and @var mainObject is the value itself\n    return mainObject;\n  }\n}\n\n//# sourceURL=webpack://collect/./dist/helpers/nestedValue.js?");

/***/ }),

/***/ "./dist/helpers/values.js":
/*!********************************!*\
  !*** ./dist/helpers/values.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = values;\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/**\n * Values helper\n *\n * Retrieve values from [this.items] when it is an array, object or Collection\n *\n * @param items\n * @returns {*}\n */\nfunction values(items) {\n  var valuesArray = [];\n\n  if (Array.isArray(items)) {\n    valuesArray.push.apply(valuesArray, _toConsumableArray(items));\n  } else if (items.constructor.name === 'Collection') {\n    valuesArray.push.apply(valuesArray, _toConsumableArray(items.all()));\n  } else {\n    Object.keys(items).forEach(function (prop) {\n      return valuesArray.push(items[prop]);\n    });\n  }\n\n  return valuesArray;\n}\n\n//# sourceURL=webpack://collect/./dist/helpers/values.js?");

/***/ }),

/***/ "./dist/helpers/variadic.js":
/*!**********************************!*\
  !*** ./dist/helpers/variadic.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = variadic;\n\n/**\n * Variadic helper function\n *\n * @param args\n * @returns {Array}\n */\nfunction variadic(args) {\n  if (Array.isArray(args[0])) {\n    return args[0];\n  }\n\n  return args;\n}\n\n//# sourceURL=webpack://collect/./dist/helpers/variadic.js?");

/***/ }),

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = exports.collect = exports.Collection = void 0;\n\nvar _all2 = _interopRequireDefault(__webpack_require__(/*! ./methods/all */ \"./dist/methods/all.js\"));\n\nvar _average2 = _interopRequireDefault(__webpack_require__(/*! ./methods/average */ \"./dist/methods/average.js\"));\n\nvar _avg2 = _interopRequireDefault(__webpack_require__(/*! ./methods/avg */ \"./dist/methods/avg.js\"));\n\nvar _chunk2 = _interopRequireDefault(__webpack_require__(/*! ./methods/chunk */ \"./dist/methods/chunk.js\"));\n\nvar _collapse2 = _interopRequireDefault(__webpack_require__(/*! ./methods/collapse */ \"./dist/methods/collapse.js\"));\n\nvar _combine2 = _interopRequireDefault(__webpack_require__(/*! ./methods/combine */ \"./dist/methods/combine.js\"));\n\nvar _concat2 = _interopRequireDefault(__webpack_require__(/*! ./methods/concat */ \"./dist/methods/concat.js\"));\n\nvar _contains2 = _interopRequireDefault(__webpack_require__(/*! ./methods/contains */ \"./dist/methods/contains.js\"));\n\nvar _containsOneItem2 = _interopRequireDefault(__webpack_require__(/*! ./methods/containsOneItem */ \"./dist/methods/containsOneItem.js\"));\n\nvar _count2 = _interopRequireDefault(__webpack_require__(/*! ./methods/count */ \"./dist/methods/count.js\"));\n\nvar _countBy2 = _interopRequireDefault(__webpack_require__(/*! ./methods/countBy */ \"./dist/methods/countBy.js\"));\n\nvar _crossJoin2 = _interopRequireDefault(__webpack_require__(/*! ./methods/crossJoin */ \"./dist/methods/crossJoin.js\"));\n\nvar _dd2 = _interopRequireDefault(__webpack_require__(/*! ./methods/dd */ \"./dist/methods/dd.js\"));\n\nvar _diff2 = _interopRequireDefault(__webpack_require__(/*! ./methods/diff */ \"./dist/methods/diff.js\"));\n\nvar _diffAssoc2 = _interopRequireDefault(__webpack_require__(/*! ./methods/diffAssoc */ \"./dist/methods/diffAssoc.js\"));\n\nvar _diffKeys2 = _interopRequireDefault(__webpack_require__(/*! ./methods/diffKeys */ \"./dist/methods/diffKeys.js\"));\n\nvar _doesntContain2 = _interopRequireDefault(__webpack_require__(/*! ./methods/doesntContain */ \"./dist/methods/doesntContain.js\"));\n\nvar _dump2 = _interopRequireDefault(__webpack_require__(/*! ./methods/dump */ \"./dist/methods/dump.js\"));\n\nvar _duplicates2 = _interopRequireDefault(__webpack_require__(/*! ./methods/duplicates */ \"./dist/methods/duplicates.js\"));\n\nvar _each2 = _interopRequireDefault(__webpack_require__(/*! ./methods/each */ \"./dist/methods/each.js\"));\n\nvar _eachSpread2 = _interopRequireDefault(__webpack_require__(/*! ./methods/eachSpread */ \"./dist/methods/eachSpread.js\"));\n\nvar _every2 = _interopRequireDefault(__webpack_require__(/*! ./methods/every */ \"./dist/methods/every.js\"));\n\nvar _except2 = _interopRequireDefault(__webpack_require__(/*! ./methods/except */ \"./dist/methods/except.js\"));\n\nvar _filter2 = _interopRequireDefault(__webpack_require__(/*! ./methods/filter */ \"./dist/methods/filter.js\"));\n\nvar _first2 = _interopRequireDefault(__webpack_require__(/*! ./methods/first */ \"./dist/methods/first.js\"));\n\nvar _firstOrFail2 = _interopRequireDefault(__webpack_require__(/*! ./methods/firstOrFail */ \"./dist/methods/firstOrFail.js\"));\n\nvar _firstWhere2 = _interopRequireDefault(__webpack_require__(/*! ./methods/firstWhere */ \"./dist/methods/firstWhere.js\"));\n\nvar _flatMap2 = _interopRequireDefault(__webpack_require__(/*! ./methods/flatMap */ \"./dist/methods/flatMap.js\"));\n\nvar _flatten2 = _interopRequireDefault(__webpack_require__(/*! ./methods/flatten */ \"./dist/methods/flatten.js\"));\n\nvar _flip2 = _interopRequireDefault(__webpack_require__(/*! ./methods/flip */ \"./dist/methods/flip.js\"));\n\nvar _forPage2 = _interopRequireDefault(__webpack_require__(/*! ./methods/forPage */ \"./dist/methods/forPage.js\"));\n\nvar _forget2 = _interopRequireDefault(__webpack_require__(/*! ./methods/forget */ \"./dist/methods/forget.js\"));\n\nvar _get2 = _interopRequireDefault(__webpack_require__(/*! ./methods/get */ \"./dist/methods/get.js\"));\n\nvar _groupBy2 = _interopRequireDefault(__webpack_require__(/*! ./methods/groupBy */ \"./dist/methods/groupBy.js\"));\n\nvar _has2 = _interopRequireDefault(__webpack_require__(/*! ./methods/has */ \"./dist/methods/has.js\"));\n\nvar _implode2 = _interopRequireDefault(__webpack_require__(/*! ./methods/implode */ \"./dist/methods/implode.js\"));\n\nvar _intersect2 = _interopRequireDefault(__webpack_require__(/*! ./methods/intersect */ \"./dist/methods/intersect.js\"));\n\nvar _intersectByKeys2 = _interopRequireDefault(__webpack_require__(/*! ./methods/intersectByKeys */ \"./dist/methods/intersectByKeys.js\"));\n\nvar _isEmpty2 = _interopRequireDefault(__webpack_require__(/*! ./methods/isEmpty */ \"./dist/methods/isEmpty.js\"));\n\nvar _isNotEmpty2 = _interopRequireDefault(__webpack_require__(/*! ./methods/isNotEmpty */ \"./dist/methods/isNotEmpty.js\"));\n\nvar _join2 = _interopRequireDefault(__webpack_require__(/*! ./methods/join */ \"./dist/methods/join.js\"));\n\nvar _keyBy2 = _interopRequireDefault(__webpack_require__(/*! ./methods/keyBy */ \"./dist/methods/keyBy.js\"));\n\nvar _keys2 = _interopRequireDefault(__webpack_require__(/*! ./methods/keys */ \"./dist/methods/keys.js\"));\n\nvar _last2 = _interopRequireDefault(__webpack_require__(/*! ./methods/last */ \"./dist/methods/last.js\"));\n\nvar _macro2 = _interopRequireDefault(__webpack_require__(/*! ./methods/macro */ \"./dist/methods/macro.js\"));\n\nvar _make2 = _interopRequireDefault(__webpack_require__(/*! ./methods/make */ \"./dist/methods/make.js\"));\n\nvar _map2 = _interopRequireDefault(__webpack_require__(/*! ./methods/map */ \"./dist/methods/map.js\"));\n\nvar _mapSpread2 = _interopRequireDefault(__webpack_require__(/*! ./methods/mapSpread */ \"./dist/methods/mapSpread.js\"));\n\nvar _mapToDictionary2 = _interopRequireDefault(__webpack_require__(/*! ./methods/mapToDictionary */ \"./dist/methods/mapToDictionary.js\"));\n\nvar _mapInto2 = _interopRequireDefault(__webpack_require__(/*! ./methods/mapInto */ \"./dist/methods/mapInto.js\"));\n\nvar _mapToGroups2 = _interopRequireDefault(__webpack_require__(/*! ./methods/mapToGroups */ \"./dist/methods/mapToGroups.js\"));\n\nvar _mapWithKeys2 = _interopRequireDefault(__webpack_require__(/*! ./methods/mapWithKeys */ \"./dist/methods/mapWithKeys.js\"));\n\nvar _max2 = _interopRequireDefault(__webpack_require__(/*! ./methods/max */ \"./dist/methods/max.js\"));\n\nvar _median2 = _interopRequireDefault(__webpack_require__(/*! ./methods/median */ \"./dist/methods/median.js\"));\n\nvar _merge2 = _interopRequireDefault(__webpack_require__(/*! ./methods/merge */ \"./dist/methods/merge.js\"));\n\nvar _mergeRecursive2 = _interopRequireDefault(__webpack_require__(/*! ./methods/mergeRecursive */ \"./dist/methods/mergeRecursive.js\"));\n\nvar _min2 = _interopRequireDefault(__webpack_require__(/*! ./methods/min */ \"./dist/methods/min.js\"));\n\nvar _mode2 = _interopRequireDefault(__webpack_require__(/*! ./methods/mode */ \"./dist/methods/mode.js\"));\n\nvar _nth2 = _interopRequireDefault(__webpack_require__(/*! ./methods/nth */ \"./dist/methods/nth.js\"));\n\nvar _only2 = _interopRequireDefault(__webpack_require__(/*! ./methods/only */ \"./dist/methods/only.js\"));\n\nvar _pad2 = _interopRequireDefault(__webpack_require__(/*! ./methods/pad */ \"./dist/methods/pad.js\"));\n\nvar _partition2 = _interopRequireDefault(__webpack_require__(/*! ./methods/partition */ \"./dist/methods/partition.js\"));\n\nvar _pipe2 = _interopRequireDefault(__webpack_require__(/*! ./methods/pipe */ \"./dist/methods/pipe.js\"));\n\nvar _pluck2 = _interopRequireDefault(__webpack_require__(/*! ./methods/pluck */ \"./dist/methods/pluck.js\"));\n\nvar _pop2 = _interopRequireDefault(__webpack_require__(/*! ./methods/pop */ \"./dist/methods/pop.js\"));\n\nvar _prepend2 = _interopRequireDefault(__webpack_require__(/*! ./methods/prepend */ \"./dist/methods/prepend.js\"));\n\nvar _pull2 = _interopRequireDefault(__webpack_require__(/*! ./methods/pull */ \"./dist/methods/pull.js\"));\n\nvar _push2 = _interopRequireDefault(__webpack_require__(/*! ./methods/push */ \"./dist/methods/push.js\"));\n\nvar _put2 = _interopRequireDefault(__webpack_require__(/*! ./methods/put */ \"./dist/methods/put.js\"));\n\nvar _random2 = _interopRequireDefault(__webpack_require__(/*! ./methods/random */ \"./dist/methods/random.js\"));\n\nvar _reduce2 = _interopRequireDefault(__webpack_require__(/*! ./methods/reduce */ \"./dist/methods/reduce.js\"));\n\nvar _reject2 = _interopRequireDefault(__webpack_require__(/*! ./methods/reject */ \"./dist/methods/reject.js\"));\n\nvar _replace2 = _interopRequireDefault(__webpack_require__(/*! ./methods/replace */ \"./dist/methods/replace.js\"));\n\nvar _replaceRecursive2 = _interopRequireDefault(__webpack_require__(/*! ./methods/replaceRecursive */ \"./dist/methods/replaceRecursive.js\"));\n\nvar _reverse2 = _interopRequireDefault(__webpack_require__(/*! ./methods/reverse */ \"./dist/methods/reverse.js\"));\n\nvar _search2 = _interopRequireDefault(__webpack_require__(/*! ./methods/search */ \"./dist/methods/search.js\"));\n\nvar _shift2 = _interopRequireDefault(__webpack_require__(/*! ./methods/shift */ \"./dist/methods/shift.js\"));\n\nvar _shuffle2 = _interopRequireDefault(__webpack_require__(/*! ./methods/shuffle */ \"./dist/methods/shuffle.js\"));\n\nvar _skip2 = _interopRequireDefault(__webpack_require__(/*! ./methods/skip */ \"./dist/methods/skip.js\"));\n\nvar _skipUntil2 = _interopRequireDefault(__webpack_require__(/*! ./methods/skipUntil */ \"./dist/methods/skipUntil.js\"));\n\nvar _skipWhile2 = _interopRequireDefault(__webpack_require__(/*! ./methods/skipWhile */ \"./dist/methods/skipWhile.js\"));\n\nvar _slice2 = _interopRequireDefault(__webpack_require__(/*! ./methods/slice */ \"./dist/methods/slice.js\"));\n\nvar _sole2 = _interopRequireDefault(__webpack_require__(/*! ./methods/sole */ \"./dist/methods/sole.js\"));\n\nvar _some2 = _interopRequireDefault(__webpack_require__(/*! ./methods/some */ \"./dist/methods/some.js\"));\n\nvar _sort2 = _interopRequireDefault(__webpack_require__(/*! ./methods/sort */ \"./dist/methods/sort.js\"));\n\nvar _sortDesc2 = _interopRequireDefault(__webpack_require__(/*! ./methods/sortDesc */ \"./dist/methods/sortDesc.js\"));\n\nvar _sortBy2 = _interopRequireDefault(__webpack_require__(/*! ./methods/sortBy */ \"./dist/methods/sortBy.js\"));\n\nvar _sortByDesc2 = _interopRequireDefault(__webpack_require__(/*! ./methods/sortByDesc */ \"./dist/methods/sortByDesc.js\"));\n\nvar _sortKeys2 = _interopRequireDefault(__webpack_require__(/*! ./methods/sortKeys */ \"./dist/methods/sortKeys.js\"));\n\nvar _sortKeysDesc2 = _interopRequireDefault(__webpack_require__(/*! ./methods/sortKeysDesc */ \"./dist/methods/sortKeysDesc.js\"));\n\nvar _splice2 = _interopRequireDefault(__webpack_require__(/*! ./methods/splice */ \"./dist/methods/splice.js\"));\n\nvar _split2 = _interopRequireDefault(__webpack_require__(/*! ./methods/split */ \"./dist/methods/split.js\"));\n\nvar _sum2 = _interopRequireDefault(__webpack_require__(/*! ./methods/sum */ \"./dist/methods/sum.js\"));\n\nvar _take2 = _interopRequireDefault(__webpack_require__(/*! ./methods/take */ \"./dist/methods/take.js\"));\n\nvar _takeUntil2 = _interopRequireDefault(__webpack_require__(/*! ./methods/takeUntil */ \"./dist/methods/takeUntil.js\"));\n\nvar _takeWhile2 = _interopRequireDefault(__webpack_require__(/*! ./methods/takeWhile */ \"./dist/methods/takeWhile.js\"));\n\nvar _tap2 = _interopRequireDefault(__webpack_require__(/*! ./methods/tap */ \"./dist/methods/tap.js\"));\n\nvar _times2 = _interopRequireDefault(__webpack_require__(/*! ./methods/times */ \"./dist/methods/times.js\"));\n\nvar _toArray2 = _interopRequireDefault(__webpack_require__(/*! ./methods/toArray */ \"./dist/methods/toArray.js\"));\n\nvar _toJson2 = _interopRequireDefault(__webpack_require__(/*! ./methods/toJson */ \"./dist/methods/toJson.js\"));\n\nvar _transform2 = _interopRequireDefault(__webpack_require__(/*! ./methods/transform */ \"./dist/methods/transform.js\"));\n\nvar _undot2 = _interopRequireDefault(__webpack_require__(/*! ./methods/undot */ \"./dist/methods/undot.js\"));\n\nvar _union2 = _interopRequireDefault(__webpack_require__(/*! ./methods/union */ \"./dist/methods/union.js\"));\n\nvar _unique2 = _interopRequireDefault(__webpack_require__(/*! ./methods/unique */ \"./dist/methods/unique.js\"));\n\nvar _unless2 = _interopRequireDefault(__webpack_require__(/*! ./methods/unless */ \"./dist/methods/unless.js\"));\n\nvar _unwrap2 = _interopRequireDefault(__webpack_require__(/*! ./methods/unwrap */ \"./dist/methods/unwrap.js\"));\n\nvar _values2 = _interopRequireDefault(__webpack_require__(/*! ./methods/values */ \"./dist/methods/values.js\"));\n\nvar _when2 = _interopRequireDefault(__webpack_require__(/*! ./methods/when */ \"./dist/methods/when.js\"));\n\nvar _whenEmpty2 = _interopRequireDefault(__webpack_require__(/*! ./methods/whenEmpty */ \"./dist/methods/whenEmpty.js\"));\n\nvar _whenNotEmpty2 = _interopRequireDefault(__webpack_require__(/*! ./methods/whenNotEmpty */ \"./dist/methods/whenNotEmpty.js\"));\n\nvar _where2 = _interopRequireDefault(__webpack_require__(/*! ./methods/where */ \"./dist/methods/where.js\"));\n\nvar _whereBetween2 = _interopRequireDefault(__webpack_require__(/*! ./methods/whereBetween */ \"./dist/methods/whereBetween.js\"));\n\nvar _whereIn2 = _interopRequireDefault(__webpack_require__(/*! ./methods/whereIn */ \"./dist/methods/whereIn.js\"));\n\nvar _whereInstanceOf2 = _interopRequireDefault(__webpack_require__(/*! ./methods/whereInstanceOf */ \"./dist/methods/whereInstanceOf.js\"));\n\nvar _whereNotBetween2 = _interopRequireDefault(__webpack_require__(/*! ./methods/whereNotBetween */ \"./dist/methods/whereNotBetween.js\"));\n\nvar _whereNotIn2 = _interopRequireDefault(__webpack_require__(/*! ./methods/whereNotIn */ \"./dist/methods/whereNotIn.js\"));\n\nvar _whereNull2 = _interopRequireDefault(__webpack_require__(/*! ./methods/whereNull */ \"./dist/methods/whereNull.js\"));\n\nvar _whereNotNull2 = _interopRequireDefault(__webpack_require__(/*! ./methods/whereNotNull */ \"./dist/methods/whereNotNull.js\"));\n\nvar _wrap2 = _interopRequireDefault(__webpack_require__(/*! ./methods/wrap */ \"./dist/methods/wrap.js\"));\n\nvar _zip2 = _interopRequireDefault(__webpack_require__(/*! ./methods/zip */ \"./dist/methods/zip.js\"));\n\nvar _symbol = _interopRequireDefault(__webpack_require__(/*! ./methods/symbol.iterator */ \"./dist/methods/symbol.iterator.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Collection = /*#__PURE__*/function () {\n  function Collection(collection) {\n    _classCallCheck(this, Collection);\n\n    if (collection !== undefined && !Array.isArray(collection) && _typeof(collection) !== 'object') {\n      this.items = [collection];\n    } else if (collection instanceof this.constructor) {\n      this.items = collection.all();\n    } else {\n      this.items = collection || [];\n    }\n  }\n\n  _createClass(Collection, [{\n    key: \"all\",\n    value: function all() {\n      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n\n      return _all2[\"default\"].call.apply(_all2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"average\",\n    value: function average() {\n      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n        args[_key2] = arguments[_key2];\n      }\n\n      return _average2[\"default\"].call.apply(_average2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"avg\",\n    value: function avg() {\n      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {\n        args[_key3] = arguments[_key3];\n      }\n\n      return _avg2[\"default\"].call.apply(_avg2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"chunk\",\n    value: function chunk() {\n      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {\n        args[_key4] = arguments[_key4];\n      }\n\n      return _chunk2[\"default\"].call.apply(_chunk2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"collapse\",\n    value: function collapse() {\n      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {\n        args[_key5] = arguments[_key5];\n      }\n\n      return _collapse2[\"default\"].call.apply(_collapse2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"combine\",\n    value: function combine() {\n      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {\n        args[_key6] = arguments[_key6];\n      }\n\n      return _combine2[\"default\"].call.apply(_combine2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"concat\",\n    value: function concat() {\n      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {\n        args[_key7] = arguments[_key7];\n      }\n\n      return _concat2[\"default\"].call.apply(_concat2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"contains\",\n    value: function contains() {\n      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {\n        args[_key8] = arguments[_key8];\n      }\n\n      return _contains2[\"default\"].call.apply(_contains2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"containsOneItem\",\n    value: function containsOneItem() {\n      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {\n        args[_key9] = arguments[_key9];\n      }\n\n      return _containsOneItem2[\"default\"].call.apply(_containsOneItem2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"count\",\n    value: function count() {\n      for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {\n        args[_key10] = arguments[_key10];\n      }\n\n      return _count2[\"default\"].call.apply(_count2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"countBy\",\n    value: function countBy() {\n      for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {\n        args[_key11] = arguments[_key11];\n      }\n\n      return _countBy2[\"default\"].call.apply(_countBy2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"crossJoin\",\n    value: function crossJoin() {\n      for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {\n        args[_key12] = arguments[_key12];\n      }\n\n      return _crossJoin2[\"default\"].call.apply(_crossJoin2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"dd\",\n    value: function dd() {\n      for (var _len13 = arguments.length, args = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {\n        args[_key13] = arguments[_key13];\n      }\n\n      return _dd2[\"default\"].call.apply(_dd2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"diff\",\n    value: function diff() {\n      for (var _len14 = arguments.length, args = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {\n        args[_key14] = arguments[_key14];\n      }\n\n      return _diff2[\"default\"].call.apply(_diff2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"diffAssoc\",\n    value: function diffAssoc() {\n      for (var _len15 = arguments.length, args = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {\n        args[_key15] = arguments[_key15];\n      }\n\n      return _diffAssoc2[\"default\"].call.apply(_diffAssoc2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"diffKeys\",\n    value: function diffKeys() {\n      for (var _len16 = arguments.length, args = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {\n        args[_key16] = arguments[_key16];\n      }\n\n      return _diffKeys2[\"default\"].call.apply(_diffKeys2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"doesntContain\",\n    value: function doesntContain() {\n      for (var _len17 = arguments.length, args = new Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {\n        args[_key17] = arguments[_key17];\n      }\n\n      return _doesntContain2[\"default\"].call.apply(_doesntContain2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"dump\",\n    value: function dump() {\n      for (var _len18 = arguments.length, args = new Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {\n        args[_key18] = arguments[_key18];\n      }\n\n      return _dump2[\"default\"].call.apply(_dump2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"duplicates\",\n    value: function duplicates() {\n      for (var _len19 = arguments.length, args = new Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {\n        args[_key19] = arguments[_key19];\n      }\n\n      return _duplicates2[\"default\"].call.apply(_duplicates2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"each\",\n    value: function each() {\n      for (var _len20 = arguments.length, args = new Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {\n        args[_key20] = arguments[_key20];\n      }\n\n      return _each2[\"default\"].call.apply(_each2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"eachSpread\",\n    value: function eachSpread() {\n      for (var _len21 = arguments.length, args = new Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {\n        args[_key21] = arguments[_key21];\n      }\n\n      return _eachSpread2[\"default\"].call.apply(_eachSpread2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"every\",\n    value: function every() {\n      for (var _len22 = arguments.length, args = new Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {\n        args[_key22] = arguments[_key22];\n      }\n\n      return _every2[\"default\"].call.apply(_every2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"except\",\n    value: function except() {\n      for (var _len23 = arguments.length, args = new Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {\n        args[_key23] = arguments[_key23];\n      }\n\n      return _except2[\"default\"].call.apply(_except2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"filter\",\n    value: function filter() {\n      for (var _len24 = arguments.length, args = new Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {\n        args[_key24] = arguments[_key24];\n      }\n\n      return _filter2[\"default\"].call.apply(_filter2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"first\",\n    value: function first() {\n      for (var _len25 = arguments.length, args = new Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {\n        args[_key25] = arguments[_key25];\n      }\n\n      return _first2[\"default\"].call.apply(_first2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"firstOrFail\",\n    value: function firstOrFail() {\n      for (var _len26 = arguments.length, args = new Array(_len26), _key26 = 0; _key26 < _len26; _key26++) {\n        args[_key26] = arguments[_key26];\n      }\n\n      return _firstOrFail2[\"default\"].call.apply(_firstOrFail2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"firstWhere\",\n    value: function firstWhere() {\n      for (var _len27 = arguments.length, args = new Array(_len27), _key27 = 0; _key27 < _len27; _key27++) {\n        args[_key27] = arguments[_key27];\n      }\n\n      return _firstWhere2[\"default\"].call.apply(_firstWhere2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"flatMap\",\n    value: function flatMap() {\n      for (var _len28 = arguments.length, args = new Array(_len28), _key28 = 0; _key28 < _len28; _key28++) {\n        args[_key28] = arguments[_key28];\n      }\n\n      return _flatMap2[\"default\"].call.apply(_flatMap2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"flatten\",\n    value: function flatten() {\n      for (var _len29 = arguments.length, args = new Array(_len29), _key29 = 0; _key29 < _len29; _key29++) {\n        args[_key29] = arguments[_key29];\n      }\n\n      return _flatten2[\"default\"].call.apply(_flatten2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"flip\",\n    value: function flip() {\n      for (var _len30 = arguments.length, args = new Array(_len30), _key30 = 0; _key30 < _len30; _key30++) {\n        args[_key30] = arguments[_key30];\n      }\n\n      return _flip2[\"default\"].call.apply(_flip2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"forPage\",\n    value: function forPage() {\n      for (var _len31 = arguments.length, args = new Array(_len31), _key31 = 0; _key31 < _len31; _key31++) {\n        args[_key31] = arguments[_key31];\n      }\n\n      return _forPage2[\"default\"].call.apply(_forPage2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"forget\",\n    value: function forget() {\n      for (var _len32 = arguments.length, args = new Array(_len32), _key32 = 0; _key32 < _len32; _key32++) {\n        args[_key32] = arguments[_key32];\n      }\n\n      return _forget2[\"default\"].call.apply(_forget2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"get\",\n    value: function get() {\n      for (var _len33 = arguments.length, args = new Array(_len33), _key33 = 0; _key33 < _len33; _key33++) {\n        args[_key33] = arguments[_key33];\n      }\n\n      return _get2[\"default\"].call.apply(_get2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"groupBy\",\n    value: function groupBy() {\n      for (var _len34 = arguments.length, args = new Array(_len34), _key34 = 0; _key34 < _len34; _key34++) {\n        args[_key34] = arguments[_key34];\n      }\n\n      return _groupBy2[\"default\"].call.apply(_groupBy2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"has\",\n    value: function has() {\n      for (var _len35 = arguments.length, args = new Array(_len35), _key35 = 0; _key35 < _len35; _key35++) {\n        args[_key35] = arguments[_key35];\n      }\n\n      return _has2[\"default\"].call.apply(_has2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"implode\",\n    value: function implode() {\n      for (var _len36 = arguments.length, args = new Array(_len36), _key36 = 0; _key36 < _len36; _key36++) {\n        args[_key36] = arguments[_key36];\n      }\n\n      return _implode2[\"default\"].call.apply(_implode2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"intersect\",\n    value: function intersect() {\n      for (var _len37 = arguments.length, args = new Array(_len37), _key37 = 0; _key37 < _len37; _key37++) {\n        args[_key37] = arguments[_key37];\n      }\n\n      return _intersect2[\"default\"].call.apply(_intersect2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"intersectByKeys\",\n    value: function intersectByKeys() {\n      for (var _len38 = arguments.length, args = new Array(_len38), _key38 = 0; _key38 < _len38; _key38++) {\n        args[_key38] = arguments[_key38];\n      }\n\n      return _intersectByKeys2[\"default\"].call.apply(_intersectByKeys2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"isEmpty\",\n    value: function isEmpty() {\n      for (var _len39 = arguments.length, args = new Array(_len39), _key39 = 0; _key39 < _len39; _key39++) {\n        args[_key39] = arguments[_key39];\n      }\n\n      return _isEmpty2[\"default\"].call.apply(_isEmpty2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"isNotEmpty\",\n    value: function isNotEmpty() {\n      for (var _len40 = arguments.length, args = new Array(_len40), _key40 = 0; _key40 < _len40; _key40++) {\n        args[_key40] = arguments[_key40];\n      }\n\n      return _isNotEmpty2[\"default\"].call.apply(_isNotEmpty2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"join\",\n    value: function join() {\n      for (var _len41 = arguments.length, args = new Array(_len41), _key41 = 0; _key41 < _len41; _key41++) {\n        args[_key41] = arguments[_key41];\n      }\n\n      return _join2[\"default\"].call.apply(_join2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"keyBy\",\n    value: function keyBy() {\n      for (var _len42 = arguments.length, args = new Array(_len42), _key42 = 0; _key42 < _len42; _key42++) {\n        args[_key42] = arguments[_key42];\n      }\n\n      return _keyBy2[\"default\"].call.apply(_keyBy2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"keys\",\n    value: function keys() {\n      for (var _len43 = arguments.length, args = new Array(_len43), _key43 = 0; _key43 < _len43; _key43++) {\n        args[_key43] = arguments[_key43];\n      }\n\n      return _keys2[\"default\"].call.apply(_keys2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"last\",\n    value: function last() {\n      for (var _len44 = arguments.length, args = new Array(_len44), _key44 = 0; _key44 < _len44; _key44++) {\n        args[_key44] = arguments[_key44];\n      }\n\n      return _last2[\"default\"].call.apply(_last2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"macro\",\n    value: function macro() {\n      for (var _len45 = arguments.length, args = new Array(_len45), _key45 = 0; _key45 < _len45; _key45++) {\n        args[_key45] = arguments[_key45];\n      }\n\n      return _macro2[\"default\"].call.apply(_macro2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"make\",\n    value: function make() {\n      for (var _len46 = arguments.length, args = new Array(_len46), _key46 = 0; _key46 < _len46; _key46++) {\n        args[_key46] = arguments[_key46];\n      }\n\n      return _make2[\"default\"].call.apply(_make2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"map\",\n    value: function map() {\n      for (var _len47 = arguments.length, args = new Array(_len47), _key47 = 0; _key47 < _len47; _key47++) {\n        args[_key47] = arguments[_key47];\n      }\n\n      return _map2[\"default\"].call.apply(_map2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"mapSpread\",\n    value: function mapSpread() {\n      for (var _len48 = arguments.length, args = new Array(_len48), _key48 = 0; _key48 < _len48; _key48++) {\n        args[_key48] = arguments[_key48];\n      }\n\n      return _mapSpread2[\"default\"].call.apply(_mapSpread2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"mapToDictionary\",\n    value: function mapToDictionary() {\n      for (var _len49 = arguments.length, args = new Array(_len49), _key49 = 0; _key49 < _len49; _key49++) {\n        args[_key49] = arguments[_key49];\n      }\n\n      return _mapToDictionary2[\"default\"].call.apply(_mapToDictionary2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"mapInto\",\n    value: function mapInto() {\n      for (var _len50 = arguments.length, args = new Array(_len50), _key50 = 0; _key50 < _len50; _key50++) {\n        args[_key50] = arguments[_key50];\n      }\n\n      return _mapInto2[\"default\"].call.apply(_mapInto2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"mapToGroups\",\n    value: function mapToGroups() {\n      for (var _len51 = arguments.length, args = new Array(_len51), _key51 = 0; _key51 < _len51; _key51++) {\n        args[_key51] = arguments[_key51];\n      }\n\n      return _mapToGroups2[\"default\"].call.apply(_mapToGroups2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"mapWithKeys\",\n    value: function mapWithKeys() {\n      for (var _len52 = arguments.length, args = new Array(_len52), _key52 = 0; _key52 < _len52; _key52++) {\n        args[_key52] = arguments[_key52];\n      }\n\n      return _mapWithKeys2[\"default\"].call.apply(_mapWithKeys2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"max\",\n    value: function max() {\n      for (var _len53 = arguments.length, args = new Array(_len53), _key53 = 0; _key53 < _len53; _key53++) {\n        args[_key53] = arguments[_key53];\n      }\n\n      return _max2[\"default\"].call.apply(_max2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"median\",\n    value: function median() {\n      for (var _len54 = arguments.length, args = new Array(_len54), _key54 = 0; _key54 < _len54; _key54++) {\n        args[_key54] = arguments[_key54];\n      }\n\n      return _median2[\"default\"].call.apply(_median2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"merge\",\n    value: function merge() {\n      for (var _len55 = arguments.length, args = new Array(_len55), _key55 = 0; _key55 < _len55; _key55++) {\n        args[_key55] = arguments[_key55];\n      }\n\n      return _merge2[\"default\"].call.apply(_merge2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"mergeRecursive\",\n    value: function mergeRecursive() {\n      for (var _len56 = arguments.length, args = new Array(_len56), _key56 = 0; _key56 < _len56; _key56++) {\n        args[_key56] = arguments[_key56];\n      }\n\n      return _mergeRecursive2[\"default\"].call.apply(_mergeRecursive2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"min\",\n    value: function min() {\n      for (var _len57 = arguments.length, args = new Array(_len57), _key57 = 0; _key57 < _len57; _key57++) {\n        args[_key57] = arguments[_key57];\n      }\n\n      return _min2[\"default\"].call.apply(_min2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"mode\",\n    value: function mode() {\n      for (var _len58 = arguments.length, args = new Array(_len58), _key58 = 0; _key58 < _len58; _key58++) {\n        args[_key58] = arguments[_key58];\n      }\n\n      return _mode2[\"default\"].call.apply(_mode2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"nth\",\n    value: function nth() {\n      for (var _len59 = arguments.length, args = new Array(_len59), _key59 = 0; _key59 < _len59; _key59++) {\n        args[_key59] = arguments[_key59];\n      }\n\n      return _nth2[\"default\"].call.apply(_nth2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"only\",\n    value: function only() {\n      for (var _len60 = arguments.length, args = new Array(_len60), _key60 = 0; _key60 < _len60; _key60++) {\n        args[_key60] = arguments[_key60];\n      }\n\n      return _only2[\"default\"].call.apply(_only2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"pad\",\n    value: function pad() {\n      for (var _len61 = arguments.length, args = new Array(_len61), _key61 = 0; _key61 < _len61; _key61++) {\n        args[_key61] = arguments[_key61];\n      }\n\n      return _pad2[\"default\"].call.apply(_pad2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"partition\",\n    value: function partition() {\n      for (var _len62 = arguments.length, args = new Array(_len62), _key62 = 0; _key62 < _len62; _key62++) {\n        args[_key62] = arguments[_key62];\n      }\n\n      return _partition2[\"default\"].call.apply(_partition2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"pipe\",\n    value: function pipe() {\n      for (var _len63 = arguments.length, args = new Array(_len63), _key63 = 0; _key63 < _len63; _key63++) {\n        args[_key63] = arguments[_key63];\n      }\n\n      return _pipe2[\"default\"].call.apply(_pipe2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"pluck\",\n    value: function pluck() {\n      for (var _len64 = arguments.length, args = new Array(_len64), _key64 = 0; _key64 < _len64; _key64++) {\n        args[_key64] = arguments[_key64];\n      }\n\n      return _pluck2[\"default\"].call.apply(_pluck2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"pop\",\n    value: function pop() {\n      for (var _len65 = arguments.length, args = new Array(_len65), _key65 = 0; _key65 < _len65; _key65++) {\n        args[_key65] = arguments[_key65];\n      }\n\n      return _pop2[\"default\"].call.apply(_pop2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"prepend\",\n    value: function prepend() {\n      for (var _len66 = arguments.length, args = new Array(_len66), _key66 = 0; _key66 < _len66; _key66++) {\n        args[_key66] = arguments[_key66];\n      }\n\n      return _prepend2[\"default\"].call.apply(_prepend2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"pull\",\n    value: function pull() {\n      for (var _len67 = arguments.length, args = new Array(_len67), _key67 = 0; _key67 < _len67; _key67++) {\n        args[_key67] = arguments[_key67];\n      }\n\n      return _pull2[\"default\"].call.apply(_pull2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"push\",\n    value: function push() {\n      for (var _len68 = arguments.length, args = new Array(_len68), _key68 = 0; _key68 < _len68; _key68++) {\n        args[_key68] = arguments[_key68];\n      }\n\n      return _push2[\"default\"].call.apply(_push2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"put\",\n    value: function put() {\n      for (var _len69 = arguments.length, args = new Array(_len69), _key69 = 0; _key69 < _len69; _key69++) {\n        args[_key69] = arguments[_key69];\n      }\n\n      return _put2[\"default\"].call.apply(_put2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"random\",\n    value: function random() {\n      for (var _len70 = arguments.length, args = new Array(_len70), _key70 = 0; _key70 < _len70; _key70++) {\n        args[_key70] = arguments[_key70];\n      }\n\n      return _random2[\"default\"].call.apply(_random2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"reduce\",\n    value: function reduce() {\n      for (var _len71 = arguments.length, args = new Array(_len71), _key71 = 0; _key71 < _len71; _key71++) {\n        args[_key71] = arguments[_key71];\n      }\n\n      return _reduce2[\"default\"].call.apply(_reduce2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"reject\",\n    value: function reject() {\n      for (var _len72 = arguments.length, args = new Array(_len72), _key72 = 0; _key72 < _len72; _key72++) {\n        args[_key72] = arguments[_key72];\n      }\n\n      return _reject2[\"default\"].call.apply(_reject2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"replace\",\n    value: function replace() {\n      for (var _len73 = arguments.length, args = new Array(_len73), _key73 = 0; _key73 < _len73; _key73++) {\n        args[_key73] = arguments[_key73];\n      }\n\n      return _replace2[\"default\"].call.apply(_replace2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"replaceRecursive\",\n    value: function replaceRecursive() {\n      for (var _len74 = arguments.length, args = new Array(_len74), _key74 = 0; _key74 < _len74; _key74++) {\n        args[_key74] = arguments[_key74];\n      }\n\n      return _replaceRecursive2[\"default\"].call.apply(_replaceRecursive2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"reverse\",\n    value: function reverse() {\n      for (var _len75 = arguments.length, args = new Array(_len75), _key75 = 0; _key75 < _len75; _key75++) {\n        args[_key75] = arguments[_key75];\n      }\n\n      return _reverse2[\"default\"].call.apply(_reverse2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"search\",\n    value: function search() {\n      for (var _len76 = arguments.length, args = new Array(_len76), _key76 = 0; _key76 < _len76; _key76++) {\n        args[_key76] = arguments[_key76];\n      }\n\n      return _search2[\"default\"].call.apply(_search2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"shift\",\n    value: function shift() {\n      for (var _len77 = arguments.length, args = new Array(_len77), _key77 = 0; _key77 < _len77; _key77++) {\n        args[_key77] = arguments[_key77];\n      }\n\n      return _shift2[\"default\"].call.apply(_shift2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"shuffle\",\n    value: function shuffle() {\n      for (var _len78 = arguments.length, args = new Array(_len78), _key78 = 0; _key78 < _len78; _key78++) {\n        args[_key78] = arguments[_key78];\n      }\n\n      return _shuffle2[\"default\"].call.apply(_shuffle2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"skip\",\n    value: function skip() {\n      for (var _len79 = arguments.length, args = new Array(_len79), _key79 = 0; _key79 < _len79; _key79++) {\n        args[_key79] = arguments[_key79];\n      }\n\n      return _skip2[\"default\"].call.apply(_skip2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"skipUntil\",\n    value: function skipUntil() {\n      for (var _len80 = arguments.length, args = new Array(_len80), _key80 = 0; _key80 < _len80; _key80++) {\n        args[_key80] = arguments[_key80];\n      }\n\n      return _skipUntil2[\"default\"].call.apply(_skipUntil2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"skipWhile\",\n    value: function skipWhile() {\n      for (var _len81 = arguments.length, args = new Array(_len81), _key81 = 0; _key81 < _len81; _key81++) {\n        args[_key81] = arguments[_key81];\n      }\n\n      return _skipWhile2[\"default\"].call.apply(_skipWhile2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"slice\",\n    value: function slice() {\n      for (var _len82 = arguments.length, args = new Array(_len82), _key82 = 0; _key82 < _len82; _key82++) {\n        args[_key82] = arguments[_key82];\n      }\n\n      return _slice2[\"default\"].call.apply(_slice2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"sole\",\n    value: function sole() {\n      for (var _len83 = arguments.length, args = new Array(_len83), _key83 = 0; _key83 < _len83; _key83++) {\n        args[_key83] = arguments[_key83];\n      }\n\n      return _sole2[\"default\"].call.apply(_sole2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"some\",\n    value: function some() {\n      for (var _len84 = arguments.length, args = new Array(_len84), _key84 = 0; _key84 < _len84; _key84++) {\n        args[_key84] = arguments[_key84];\n      }\n\n      return _some2[\"default\"].call.apply(_some2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"sort\",\n    value: function sort() {\n      for (var _len85 = arguments.length, args = new Array(_len85), _key85 = 0; _key85 < _len85; _key85++) {\n        args[_key85] = arguments[_key85];\n      }\n\n      return _sort2[\"default\"].call.apply(_sort2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"sortDesc\",\n    value: function sortDesc() {\n      for (var _len86 = arguments.length, args = new Array(_len86), _key86 = 0; _key86 < _len86; _key86++) {\n        args[_key86] = arguments[_key86];\n      }\n\n      return _sortDesc2[\"default\"].call.apply(_sortDesc2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"sortBy\",\n    value: function sortBy() {\n      for (var _len87 = arguments.length, args = new Array(_len87), _key87 = 0; _key87 < _len87; _key87++) {\n        args[_key87] = arguments[_key87];\n      }\n\n      return _sortBy2[\"default\"].call.apply(_sortBy2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"sortByDesc\",\n    value: function sortByDesc() {\n      for (var _len88 = arguments.length, args = new Array(_len88), _key88 = 0; _key88 < _len88; _key88++) {\n        args[_key88] = arguments[_key88];\n      }\n\n      return _sortByDesc2[\"default\"].call.apply(_sortByDesc2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"sortKeys\",\n    value: function sortKeys() {\n      for (var _len89 = arguments.length, args = new Array(_len89), _key89 = 0; _key89 < _len89; _key89++) {\n        args[_key89] = arguments[_key89];\n      }\n\n      return _sortKeys2[\"default\"].call.apply(_sortKeys2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"sortKeysDesc\",\n    value: function sortKeysDesc() {\n      for (var _len90 = arguments.length, args = new Array(_len90), _key90 = 0; _key90 < _len90; _key90++) {\n        args[_key90] = arguments[_key90];\n      }\n\n      return _sortKeysDesc2[\"default\"].call.apply(_sortKeysDesc2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"splice\",\n    value: function splice() {\n      for (var _len91 = arguments.length, args = new Array(_len91), _key91 = 0; _key91 < _len91; _key91++) {\n        args[_key91] = arguments[_key91];\n      }\n\n      return _splice2[\"default\"].call.apply(_splice2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"split\",\n    value: function split() {\n      for (var _len92 = arguments.length, args = new Array(_len92), _key92 = 0; _key92 < _len92; _key92++) {\n        args[_key92] = arguments[_key92];\n      }\n\n      return _split2[\"default\"].call.apply(_split2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"sum\",\n    value: function sum() {\n      for (var _len93 = arguments.length, args = new Array(_len93), _key93 = 0; _key93 < _len93; _key93++) {\n        args[_key93] = arguments[_key93];\n      }\n\n      return _sum2[\"default\"].call.apply(_sum2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"take\",\n    value: function take() {\n      for (var _len94 = arguments.length, args = new Array(_len94), _key94 = 0; _key94 < _len94; _key94++) {\n        args[_key94] = arguments[_key94];\n      }\n\n      return _take2[\"default\"].call.apply(_take2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"takeUntil\",\n    value: function takeUntil() {\n      for (var _len95 = arguments.length, args = new Array(_len95), _key95 = 0; _key95 < _len95; _key95++) {\n        args[_key95] = arguments[_key95];\n      }\n\n      return _takeUntil2[\"default\"].call.apply(_takeUntil2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"takeWhile\",\n    value: function takeWhile() {\n      for (var _len96 = arguments.length, args = new Array(_len96), _key96 = 0; _key96 < _len96; _key96++) {\n        args[_key96] = arguments[_key96];\n      }\n\n      return _takeWhile2[\"default\"].call.apply(_takeWhile2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"tap\",\n    value: function tap() {\n      for (var _len97 = arguments.length, args = new Array(_len97), _key97 = 0; _key97 < _len97; _key97++) {\n        args[_key97] = arguments[_key97];\n      }\n\n      return _tap2[\"default\"].call.apply(_tap2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"times\",\n    value: function times() {\n      for (var _len98 = arguments.length, args = new Array(_len98), _key98 = 0; _key98 < _len98; _key98++) {\n        args[_key98] = arguments[_key98];\n      }\n\n      return _times2[\"default\"].call.apply(_times2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"toArray\",\n    value: function toArray() {\n      for (var _len99 = arguments.length, args = new Array(_len99), _key99 = 0; _key99 < _len99; _key99++) {\n        args[_key99] = arguments[_key99];\n      }\n\n      return _toArray2[\"default\"].call.apply(_toArray2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"toJson\",\n    value: function toJson() {\n      for (var _len100 = arguments.length, args = new Array(_len100), _key100 = 0; _key100 < _len100; _key100++) {\n        args[_key100] = arguments[_key100];\n      }\n\n      return _toJson2[\"default\"].call.apply(_toJson2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"transform\",\n    value: function transform() {\n      for (var _len101 = arguments.length, args = new Array(_len101), _key101 = 0; _key101 < _len101; _key101++) {\n        args[_key101] = arguments[_key101];\n      }\n\n      return _transform2[\"default\"].call.apply(_transform2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"undot\",\n    value: function undot() {\n      for (var _len102 = arguments.length, args = new Array(_len102), _key102 = 0; _key102 < _len102; _key102++) {\n        args[_key102] = arguments[_key102];\n      }\n\n      return _undot2[\"default\"].call.apply(_undot2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"unless\",\n    value: function unless() {\n      for (var _len103 = arguments.length, args = new Array(_len103), _key103 = 0; _key103 < _len103; _key103++) {\n        args[_key103] = arguments[_key103];\n      }\n\n      return _unless2[\"default\"].call.apply(_unless2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"unlessEmpty\",\n    value: function unlessEmpty() {\n      for (var _len104 = arguments.length, args = new Array(_len104), _key104 = 0; _key104 < _len104; _key104++) {\n        args[_key104] = arguments[_key104];\n      }\n\n      return _whenNotEmpty2[\"default\"].call.apply(_whenNotEmpty2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"unlessNotEmpty\",\n    value: function unlessNotEmpty() {\n      for (var _len105 = arguments.length, args = new Array(_len105), _key105 = 0; _key105 < _len105; _key105++) {\n        args[_key105] = arguments[_key105];\n      }\n\n      return _whenEmpty2[\"default\"].call.apply(_whenEmpty2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"union\",\n    value: function union() {\n      for (var _len106 = arguments.length, args = new Array(_len106), _key106 = 0; _key106 < _len106; _key106++) {\n        args[_key106] = arguments[_key106];\n      }\n\n      return _union2[\"default\"].call.apply(_union2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"unique\",\n    value: function unique() {\n      for (var _len107 = arguments.length, args = new Array(_len107), _key107 = 0; _key107 < _len107; _key107++) {\n        args[_key107] = arguments[_key107];\n      }\n\n      return _unique2[\"default\"].call.apply(_unique2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"unwrap\",\n    value: function unwrap() {\n      for (var _len108 = arguments.length, args = new Array(_len108), _key108 = 0; _key108 < _len108; _key108++) {\n        args[_key108] = arguments[_key108];\n      }\n\n      return _unwrap2[\"default\"].call.apply(_unwrap2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"values\",\n    value: function values() {\n      for (var _len109 = arguments.length, args = new Array(_len109), _key109 = 0; _key109 < _len109; _key109++) {\n        args[_key109] = arguments[_key109];\n      }\n\n      return _values2[\"default\"].call.apply(_values2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"when\",\n    value: function when() {\n      for (var _len110 = arguments.length, args = new Array(_len110), _key110 = 0; _key110 < _len110; _key110++) {\n        args[_key110] = arguments[_key110];\n      }\n\n      return _when2[\"default\"].call.apply(_when2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"whenEmpty\",\n    value: function whenEmpty() {\n      for (var _len111 = arguments.length, args = new Array(_len111), _key111 = 0; _key111 < _len111; _key111++) {\n        args[_key111] = arguments[_key111];\n      }\n\n      return _whenEmpty2[\"default\"].call.apply(_whenEmpty2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"whenNotEmpty\",\n    value: function whenNotEmpty() {\n      for (var _len112 = arguments.length, args = new Array(_len112), _key112 = 0; _key112 < _len112; _key112++) {\n        args[_key112] = arguments[_key112];\n      }\n\n      return _whenNotEmpty2[\"default\"].call.apply(_whenNotEmpty2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"where\",\n    value: function where() {\n      for (var _len113 = arguments.length, args = new Array(_len113), _key113 = 0; _key113 < _len113; _key113++) {\n        args[_key113] = arguments[_key113];\n      }\n\n      return _where2[\"default\"].call.apply(_where2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"whereBetween\",\n    value: function whereBetween() {\n      for (var _len114 = arguments.length, args = new Array(_len114), _key114 = 0; _key114 < _len114; _key114++) {\n        args[_key114] = arguments[_key114];\n      }\n\n      return _whereBetween2[\"default\"].call.apply(_whereBetween2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"whereIn\",\n    value: function whereIn() {\n      for (var _len115 = arguments.length, args = new Array(_len115), _key115 = 0; _key115 < _len115; _key115++) {\n        args[_key115] = arguments[_key115];\n      }\n\n      return _whereIn2[\"default\"].call.apply(_whereIn2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"whereInstanceOf\",\n    value: function whereInstanceOf() {\n      for (var _len116 = arguments.length, args = new Array(_len116), _key116 = 0; _key116 < _len116; _key116++) {\n        args[_key116] = arguments[_key116];\n      }\n\n      return _whereInstanceOf2[\"default\"].call.apply(_whereInstanceOf2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"whereNotBetween\",\n    value: function whereNotBetween() {\n      for (var _len117 = arguments.length, args = new Array(_len117), _key117 = 0; _key117 < _len117; _key117++) {\n        args[_key117] = arguments[_key117];\n      }\n\n      return _whereNotBetween2[\"default\"].call.apply(_whereNotBetween2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"whereNotIn\",\n    value: function whereNotIn() {\n      for (var _len118 = arguments.length, args = new Array(_len118), _key118 = 0; _key118 < _len118; _key118++) {\n        args[_key118] = arguments[_key118];\n      }\n\n      return _whereNotIn2[\"default\"].call.apply(_whereNotIn2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"whereNull\",\n    value: function whereNull() {\n      for (var _len119 = arguments.length, args = new Array(_len119), _key119 = 0; _key119 < _len119; _key119++) {\n        args[_key119] = arguments[_key119];\n      }\n\n      return _whereNull2[\"default\"].call.apply(_whereNull2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"whereNotNull\",\n    value: function whereNotNull() {\n      for (var _len120 = arguments.length, args = new Array(_len120), _key120 = 0; _key120 < _len120; _key120++) {\n        args[_key120] = arguments[_key120];\n      }\n\n      return _whereNotNull2[\"default\"].call.apply(_whereNotNull2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"wrap\",\n    value: function wrap() {\n      for (var _len121 = arguments.length, args = new Array(_len121), _key121 = 0; _key121 < _len121; _key121++) {\n        args[_key121] = arguments[_key121];\n      }\n\n      return _wrap2[\"default\"].call.apply(_wrap2[\"default\"], [this].concat(args));\n    }\n  }, {\n    key: \"zip\",\n    value: function zip() {\n      for (var _len122 = arguments.length, args = new Array(_len122), _key122 = 0; _key122 < _len122; _key122++) {\n        args[_key122] = arguments[_key122];\n      }\n\n      return _zip2[\"default\"].call.apply(_zip2[\"default\"], [this].concat(args));\n    }\n    /**\n    * Support JSON.stringify\n    * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify\n    */\n\n  }, {\n    key: \"toJSON\",\n    value: function toJSON() {\n      return this.items;\n    }\n  }]);\n\n  return Collection;\n}();\n\nexports.Collection = Collection;\n\nvar collect = function collect(collection) {\n  return new Collection(collection);\n};\n/**\n * Symbol.iterator\n * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator\n */\n\n\nexports.collect = collect;\n\nif (typeof Symbol !== 'undefined') {\n  Collection.prototype[Symbol.iterator] = _symbol[\"default\"];\n}\n\ncollect.collect = collect;\ncollect.Collection = Collection;\nvar _default = collect;\nexports[\"default\"] = _default;\nmodule.exports = collect;\n\n//# sourceURL=webpack://collect/./dist/index.js?");

/***/ }),

/***/ "./dist/methods/all.js":
/*!*****************************!*\
  !*** ./dist/methods/all.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = all;\n\nfunction all() {\n  return this.items;\n}\n\n//# sourceURL=webpack://collect/./dist/methods/all.js?");

/***/ }),

/***/ "./dist/methods/average.js":
/*!*********************************!*\
  !*** ./dist/methods/average.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = average;\n\nvar _is = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\");\n\nfunction average(key) {\n  if (key === undefined) {\n    return this.sum() / this.items.length;\n  }\n\n  if ((0, _is.isFunction)(key)) {\n    return new this.constructor(this.items).sum(key) / this.items.length;\n  }\n\n  return new this.constructor(this.items).pluck(key).sum() / this.items.length;\n}\n\n//# sourceURL=webpack://collect/./dist/methods/average.js?");

/***/ }),

/***/ "./dist/methods/avg.js":
/*!*****************************!*\
  !*** ./dist/methods/avg.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _average = _interopRequireDefault(__webpack_require__(/*! ./average */ \"./dist/methods/average.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default = _average[\"default\"];\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://collect/./dist/methods/avg.js?");

/***/ }),

/***/ "./dist/methods/chunk.js":
/*!*******************************!*\
  !*** ./dist/methods/chunk.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = chunk;\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction chunk(size) {\n  var _this = this;\n\n  var chunks = [];\n  var index = 0;\n\n  if (Array.isArray(this.items)) {\n    do {\n      var items = this.items.slice(index, index + size);\n      var collection = new this.constructor(items);\n      chunks.push(collection);\n      index += size;\n    } while (index < this.items.length);\n  } else if (_typeof(this.items) === 'object') {\n    var keys = Object.keys(this.items);\n\n    var _loop = function _loop() {\n      var keysOfChunk = keys.slice(index, index + size);\n      var collection = new _this.constructor({});\n      keysOfChunk.forEach(function (key) {\n        return collection.put(key, _this.items[key]);\n      });\n      chunks.push(collection);\n      index += size;\n    };\n\n    do {\n      _loop();\n    } while (index < keys.length);\n  } else {\n    chunks.push(new this.constructor([this.items]));\n  }\n\n  return new this.constructor(chunks);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/chunk.js?");

/***/ }),

/***/ "./dist/methods/collapse.js":
/*!**********************************!*\
  !*** ./dist/methods/collapse.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = collapse;\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction collapse() {\n  var _ref;\n\n  return new this.constructor((_ref = []).concat.apply(_ref, _toConsumableArray(this.items)));\n}\n\n//# sourceURL=webpack://collect/./dist/methods/collapse.js?");

/***/ }),

/***/ "./dist/methods/combine.js":
/*!*********************************!*\
  !*** ./dist/methods/combine.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = combine;\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction combine(array) {\n  var _this = this;\n\n  var values = array;\n\n  if (values instanceof this.constructor) {\n    values = array.all();\n  }\n\n  var collection = {};\n\n  if (Array.isArray(this.items) && Array.isArray(values)) {\n    this.items.forEach(function (key, iterator) {\n      collection[key] = values[iterator];\n    });\n  } else if (_typeof(this.items) === 'object' && _typeof(values) === 'object') {\n    Object.keys(this.items).forEach(function (key, index) {\n      collection[_this.items[key]] = values[Object.keys(values)[index]];\n    });\n  } else if (Array.isArray(this.items)) {\n    collection[this.items[0]] = values;\n  } else if (typeof this.items === 'string' && Array.isArray(values)) {\n    var _values = values;\n\n    var _values2 = _slicedToArray(_values, 1);\n\n    collection[this.items] = _values2[0];\n  } else if (typeof this.items === 'string') {\n    collection[this.items] = values;\n  }\n\n  return new this.constructor(collection);\n}\n\n;\n\n//# sourceURL=webpack://collect/./dist/methods/combine.js?");

/***/ }),

/***/ "./dist/methods/concat.js":
/*!********************************!*\
  !*** ./dist/methods/concat.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = concat;\n\nvar _clone = _interopRequireDefault(__webpack_require__(/*! ../helpers/clone */ \"./dist/helpers/clone.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction concat(collectionOrArrayOrObject) {\n  var list = collectionOrArrayOrObject;\n\n  if (collectionOrArrayOrObject instanceof this.constructor) {\n    list = collectionOrArrayOrObject.all();\n  } else if (_typeof(collectionOrArrayOrObject) === 'object') {\n    list = [];\n    Object.keys(collectionOrArrayOrObject).forEach(function (property) {\n      list.push(collectionOrArrayOrObject[property]);\n    });\n  }\n\n  var collection = (0, _clone[\"default\"])(this.items);\n  list.forEach(function (item) {\n    if (_typeof(item) === 'object') {\n      Object.keys(item).forEach(function (key) {\n        return collection.push(item[key]);\n      });\n    } else {\n      collection.push(item);\n    }\n  });\n  return new this.constructor(collection);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/concat.js?");

/***/ }),

/***/ "./dist/methods/contains.js":
/*!**********************************!*\
  !*** ./dist/methods/contains.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = contains;\n\nvar _values = _interopRequireDefault(__webpack_require__(/*! ../helpers/values */ \"./dist/helpers/values.js\"));\n\nvar _is = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction contains(key, value) {\n  if (value !== undefined) {\n    if (Array.isArray(this.items)) {\n      return this.items.filter(function (items) {\n        return items[key] !== undefined && items[key] === value;\n      }).length > 0;\n    }\n\n    return this.items[key] !== undefined && this.items[key] === value;\n  }\n\n  if ((0, _is.isFunction)(key)) {\n    return this.items.filter(function (item, index) {\n      return key(item, index);\n    }).length > 0;\n  }\n\n  if (Array.isArray(this.items)) {\n    return this.items.indexOf(key) !== -1;\n  }\n\n  var keysAndValues = (0, _values[\"default\"])(this.items);\n  keysAndValues.push.apply(keysAndValues, _toConsumableArray(Object.keys(this.items)));\n  return keysAndValues.indexOf(key) !== -1;\n}\n\n//# sourceURL=webpack://collect/./dist/methods/contains.js?");

/***/ }),

/***/ "./dist/methods/containsOneItem.js":
/*!*****************************************!*\
  !*** ./dist/methods/containsOneItem.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = containsOneItem;\n\nfunction containsOneItem() {\n  return this.count() === 1;\n}\n\n//# sourceURL=webpack://collect/./dist/methods/containsOneItem.js?");

/***/ }),

/***/ "./dist/methods/count.js":
/*!*******************************!*\
  !*** ./dist/methods/count.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = count;\n\nfunction count() {\n  var arrayLength = 0;\n\n  if (Array.isArray(this.items)) {\n    arrayLength = this.items.length;\n  }\n\n  return Math.max(Object.keys(this.items).length, arrayLength);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/count.js?");

/***/ }),

/***/ "./dist/methods/countBy.js":
/*!*********************************!*\
  !*** ./dist/methods/countBy.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = countBy;\n\nfunction countBy() {\n  var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (value) {\n    return value;\n  };\n  return new this.constructor(this.items).groupBy(fn).map(function (value) {\n    return value.count();\n  });\n}\n\n//# sourceURL=webpack://collect/./dist/methods/countBy.js?");

/***/ }),

/***/ "./dist/methods/crossJoin.js":
/*!***********************************!*\
  !*** ./dist/methods/crossJoin.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = crossJoin;\n\nfunction crossJoin() {\n  function join(collection, constructor, args) {\n    var current = args[0];\n\n    if (current instanceof constructor) {\n      current = current.all();\n    }\n\n    var rest = args.slice(1);\n    var last = !rest.length;\n    var result = [];\n\n    for (var i = 0; i < current.length; i += 1) {\n      var collectionCopy = collection.slice();\n      collectionCopy.push(current[i]);\n\n      if (last) {\n        result.push(collectionCopy);\n      } else {\n        result = result.concat(join(collectionCopy, constructor, rest));\n      }\n    }\n\n    return result;\n  }\n\n  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {\n    values[_key] = arguments[_key];\n  }\n\n  return new this.constructor(join([], this.constructor, [].concat([this.items], values)));\n}\n\n;\n\n//# sourceURL=webpack://collect/./dist/methods/crossJoin.js?");

/***/ }),

/***/ "./dist/methods/dd.js":
/*!****************************!*\
  !*** ./dist/methods/dd.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = dd;\n\nfunction dd() {\n  this.dump();\n\n  if (typeof process !== 'undefined') {\n    process.exit(1);\n  }\n}\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js */ \"./node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js\")))\n\n//# sourceURL=webpack://collect/./dist/methods/dd.js?");

/***/ }),

/***/ "./dist/methods/diff.js":
/*!******************************!*\
  !*** ./dist/methods/diff.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = diff;\n\nfunction diff(values) {\n  var valuesToDiff;\n\n  if (values instanceof this.constructor) {\n    valuesToDiff = values.all();\n  } else {\n    valuesToDiff = values;\n  }\n\n  var collection = this.items.filter(function (item) {\n    return valuesToDiff.indexOf(item) === -1;\n  });\n  return new this.constructor(collection);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/diff.js?");

/***/ }),

/***/ "./dist/methods/diffAssoc.js":
/*!***********************************!*\
  !*** ./dist/methods/diffAssoc.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = diffAssoc;\n\nfunction diffAssoc(values) {\n  var _this = this;\n\n  var diffValues = values;\n\n  if (values instanceof this.constructor) {\n    diffValues = values.all();\n  }\n\n  var collection = {};\n  Object.keys(this.items).forEach(function (key) {\n    if (diffValues[key] === undefined || diffValues[key] !== _this.items[key]) {\n      collection[key] = _this.items[key];\n    }\n  });\n  return new this.constructor(collection);\n}\n\n;\n\n//# sourceURL=webpack://collect/./dist/methods/diffAssoc.js?");

/***/ }),

/***/ "./dist/methods/diffKeys.js":
/*!**********************************!*\
  !*** ./dist/methods/diffKeys.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = diffKeys;\n\nfunction diffKeys(object) {\n  var objectToDiff;\n\n  if (object instanceof this.constructor) {\n    objectToDiff = object.all();\n  } else {\n    objectToDiff = object;\n  }\n\n  var objectKeys = Object.keys(objectToDiff);\n  var remainingKeys = Object.keys(this.items).filter(function (item) {\n    return objectKeys.indexOf(item) === -1;\n  });\n  return new this.constructor(this.items).only(remainingKeys);\n}\n\n;\n\n//# sourceURL=webpack://collect/./dist/methods/diffKeys.js?");

/***/ }),

/***/ "./dist/methods/doesntContain.js":
/*!***************************************!*\
  !*** ./dist/methods/doesntContain.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = contains;\n\nfunction contains(key, value) {\n  return !this.contains(key, value);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/doesntContain.js?");

/***/ }),

/***/ "./dist/methods/dump.js":
/*!******************************!*\
  !*** ./dist/methods/dump.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = dump;\n\nfunction dump() {\n  // eslint-disable-next-line\n  console.log(this);\n  return this;\n}\n\n//# sourceURL=webpack://collect/./dist/methods/dump.js?");

/***/ }),

/***/ "./dist/methods/duplicates.js":
/*!************************************!*\
  !*** ./dist/methods/duplicates.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = duplicates;\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction duplicates() {\n  var _this = this;\n\n  var occuredValues = [];\n  var duplicateValues = {};\n\n  var stringifiedValue = function stringifiedValue(value) {\n    if (Array.isArray(value) || _typeof(value) === 'object') {\n      return JSON.stringify(value);\n    }\n\n    return value;\n  };\n\n  if (Array.isArray(this.items)) {\n    this.items.forEach(function (value, index) {\n      var valueAsString = stringifiedValue(value);\n\n      if (occuredValues.indexOf(valueAsString) === -1) {\n        occuredValues.push(valueAsString);\n      } else {\n        duplicateValues[index] = value;\n      }\n    });\n  } else if (_typeof(this.items) === 'object') {\n    Object.keys(this.items).forEach(function (key) {\n      var valueAsString = stringifiedValue(_this.items[key]);\n\n      if (occuredValues.indexOf(valueAsString) === -1) {\n        occuredValues.push(valueAsString);\n      } else {\n        duplicateValues[key] = _this.items[key];\n      }\n    });\n  }\n\n  return new this.constructor(duplicateValues);\n}\n\n;\n\n//# sourceURL=webpack://collect/./dist/methods/duplicates.js?");

/***/ }),

/***/ "./dist/methods/each.js":
/*!******************************!*\
  !*** ./dist/methods/each.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = each;\n\nfunction each(fn) {\n  var stop = false;\n\n  if (Array.isArray(this.items)) {\n    var length = this.items.length;\n\n    for (var index = 0; index < length && !stop; index += 1) {\n      stop = fn(this.items[index], index, this.items) === false;\n    }\n  } else {\n    var keys = Object.keys(this.items);\n    var _length = keys.length;\n\n    for (var _index = 0; _index < _length && !stop; _index += 1) {\n      var key = keys[_index];\n      stop = fn(this.items[key], key, this.items) === false;\n    }\n  }\n\n  return this;\n}\n\n;\n\n//# sourceURL=webpack://collect/./dist/methods/each.js?");

/***/ }),

/***/ "./dist/methods/eachSpread.js":
/*!************************************!*\
  !*** ./dist/methods/eachSpread.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = eachSpread;\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction eachSpread(fn) {\n  this.each(function (values, key) {\n    fn.apply(void 0, _toConsumableArray(values).concat([key]));\n  });\n  return this;\n}\n\n;\n\n//# sourceURL=webpack://collect/./dist/methods/eachSpread.js?");

/***/ }),

/***/ "./dist/methods/every.js":
/*!*******************************!*\
  !*** ./dist/methods/every.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = every;\n\nvar _values = _interopRequireDefault(__webpack_require__(/*! ../helpers/values */ \"./dist/helpers/values.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction every(fn) {\n  var items = (0, _values[\"default\"])(this.items);\n  return items.every(fn);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/every.js?");

/***/ }),

/***/ "./dist/methods/except.js":
/*!********************************!*\
  !*** ./dist/methods/except.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = except;\n\nvar _variadic = _interopRequireDefault(__webpack_require__(/*! ../helpers/variadic */ \"./dist/helpers/variadic.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction except() {\n  var _this = this;\n\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  var properties = (0, _variadic[\"default\"])(args);\n\n  if (Array.isArray(this.items)) {\n    var _collection = this.items.filter(function (item) {\n      return properties.indexOf(item) === -1;\n    });\n\n    return new this.constructor(_collection);\n  }\n\n  var collection = {};\n  Object.keys(this.items).forEach(function (property) {\n    if (properties.indexOf(property) === -1) {\n      collection[property] = _this.items[property];\n    }\n  });\n  return new this.constructor(collection);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/except.js?");

/***/ }),

/***/ "./dist/methods/filter.js":
/*!********************************!*\
  !*** ./dist/methods/filter.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = filter;\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction falsyValue(item) {\n  if (Array.isArray(item)) {\n    if (item.length) {\n      return false;\n    }\n  } else if (item !== undefined && item !== null && _typeof(item) === 'object') {\n    if (Object.keys(item).length) {\n      return false;\n    }\n  } else if (item) {\n    return false;\n  }\n\n  return true;\n}\n\nfunction filterObject(func, items) {\n  var result = {};\n  Object.keys(items).forEach(function (key) {\n    if (func) {\n      if (func(items[key], key)) {\n        result[key] = items[key];\n      }\n    } else if (!falsyValue(items[key])) {\n      result[key] = items[key];\n    }\n  });\n  return result;\n}\n\nfunction filterArray(func, items) {\n  if (func) {\n    return items.filter(func);\n  }\n\n  var result = [];\n\n  for (var i = 0; i < items.length; i += 1) {\n    var item = items[i];\n\n    if (!falsyValue(item)) {\n      result.push(item);\n    }\n  }\n\n  return result;\n}\n\nfunction filter(fn) {\n  var func = fn || false;\n  var filteredItems = null;\n\n  if (Array.isArray(this.items)) {\n    filteredItems = filterArray(func, this.items);\n  } else {\n    filteredItems = filterObject(func, this.items);\n  }\n\n  return new this.constructor(filteredItems);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/filter.js?");

/***/ }),

/***/ "./dist/methods/first.js":
/*!*******************************!*\
  !*** ./dist/methods/first.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = first;\n\nvar _is = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\");\n\nfunction first(fn, defaultValue) {\n  if ((0, _is.isFunction)(fn)) {\n    var keys = Object.keys(this.items);\n\n    for (var i = 0; i < keys.length; i += 1) {\n      var key = keys[i];\n      var item = this.items[key];\n\n      if (fn(item, key)) {\n        return item;\n      }\n    }\n\n    if ((0, _is.isFunction)(defaultValue)) {\n      return defaultValue();\n    }\n\n    return defaultValue;\n  }\n\n  if (Array.isArray(this.items) && this.items.length || Object.keys(this.items).length) {\n    if (Array.isArray(this.items)) {\n      return this.items[0];\n    }\n\n    var firstKey = Object.keys(this.items)[0];\n    return this.items[firstKey];\n  }\n\n  if ((0, _is.isFunction)(defaultValue)) {\n    return defaultValue();\n  }\n\n  return defaultValue;\n}\n\n//# sourceURL=webpack://collect/./dist/methods/first.js?");

/***/ }),

/***/ "./dist/methods/firstOrFail.js":
/*!*************************************!*\
  !*** ./dist/methods/firstOrFail.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = firstOrFail;\n\nvar _is = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\");\n\nfunction firstOrFail(key, operator, value) {\n  if ((0, _is.isFunction)(key)) {\n    return this.first(key, function () {\n      throw new Error('Item not found.');\n    });\n  }\n\n  var collection = this.where(key, operator, value);\n\n  if (collection.isEmpty()) {\n    throw new Error('Item not found.');\n  }\n\n  return collection.first();\n}\n\n//# sourceURL=webpack://collect/./dist/methods/firstOrFail.js?");

/***/ }),

/***/ "./dist/methods/firstWhere.js":
/*!************************************!*\
  !*** ./dist/methods/firstWhere.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = firstWhere;\n\nfunction firstWhere(key, operator, value) {\n  return this.where(key, operator, value).first() || null;\n}\n\n//# sourceURL=webpack://collect/./dist/methods/firstWhere.js?");

/***/ }),

/***/ "./dist/methods/flatMap.js":
/*!*********************************!*\
  !*** ./dist/methods/flatMap.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = flatMap;\n\nfunction flatMap(fn) {\n  return this.map(fn).collapse();\n}\n\n//# sourceURL=webpack://collect/./dist/methods/flatMap.js?");

/***/ }),

/***/ "./dist/methods/flatten.js":
/*!*********************************!*\
  !*** ./dist/methods/flatten.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = flatten;\n\nvar _is = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\");\n\nfunction flatten(depth) {\n  var flattenDepth = depth || Infinity;\n  var fullyFlattened = false;\n  var collection = [];\n\n  var flat = function flat(items) {\n    collection = [];\n\n    if ((0, _is.isArray)(items)) {\n      items.forEach(function (item) {\n        if ((0, _is.isArray)(item)) {\n          collection = collection.concat(item);\n        } else if ((0, _is.isObject)(item)) {\n          Object.keys(item).forEach(function (property) {\n            collection = collection.concat(item[property]);\n          });\n        } else {\n          collection.push(item);\n        }\n      });\n    } else {\n      Object.keys(items).forEach(function (property) {\n        if ((0, _is.isArray)(items[property])) {\n          collection = collection.concat(items[property]);\n        } else if ((0, _is.isObject)(items[property])) {\n          Object.keys(items[property]).forEach(function (prop) {\n            collection = collection.concat(items[property][prop]);\n          });\n        } else {\n          collection.push(items[property]);\n        }\n      });\n    }\n\n    fullyFlattened = collection.filter(function (item) {\n      return (0, _is.isObject)(item);\n    });\n    fullyFlattened = fullyFlattened.length === 0;\n    flattenDepth -= 1;\n  };\n\n  flat(this.items);\n\n  while (!fullyFlattened && flattenDepth > 0) {\n    flat(collection);\n  }\n\n  return new this.constructor(collection);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/flatten.js?");

/***/ }),

/***/ "./dist/methods/flip.js":
/*!******************************!*\
  !*** ./dist/methods/flip.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = flip;\n\nfunction flip() {\n  var _this = this;\n\n  var collection = {};\n\n  if (Array.isArray(this.items)) {\n    Object.keys(this.items).forEach(function (key) {\n      collection[_this.items[key]] = Number(key);\n    });\n  } else {\n    Object.keys(this.items).forEach(function (key) {\n      collection[_this.items[key]] = key;\n    });\n  }\n\n  return new this.constructor(collection);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/flip.js?");

/***/ }),

/***/ "./dist/methods/forPage.js":
/*!*********************************!*\
  !*** ./dist/methods/forPage.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = forPage;\n\nfunction forPage(page, chunk) {\n  var _this = this;\n\n  var collection = {};\n\n  if (Array.isArray(this.items)) {\n    collection = this.items.slice(page * chunk - chunk, page * chunk);\n  } else {\n    Object.keys(this.items).slice(page * chunk - chunk, page * chunk).forEach(function (key) {\n      collection[key] = _this.items[key];\n    });\n  }\n\n  return new this.constructor(collection);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/forPage.js?");

/***/ }),

/***/ "./dist/methods/forget.js":
/*!********************************!*\
  !*** ./dist/methods/forget.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = forget;\n\nfunction forget(key) {\n  if (Array.isArray(this.items)) {\n    this.items.splice(key, 1);\n  } else {\n    delete this.items[key];\n  }\n\n  return this;\n}\n\n;\n\n//# sourceURL=webpack://collect/./dist/methods/forget.js?");

/***/ }),

/***/ "./dist/methods/get.js":
/*!*****************************!*\
  !*** ./dist/methods/get.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = get;\n\nvar _is = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\");\n\nfunction get(key) {\n  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n  if (this.items[key] !== undefined) {\n    return this.items[key];\n  }\n\n  if ((0, _is.isFunction)(defaultValue)) {\n    return defaultValue();\n  }\n\n  if (defaultValue !== null) {\n    return defaultValue;\n  }\n\n  return null;\n}\n\n//# sourceURL=webpack://collect/./dist/methods/get.js?");

/***/ }),

/***/ "./dist/methods/groupBy.js":
/*!*********************************!*\
  !*** ./dist/methods/groupBy.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = groupBy;\n\nvar _nestedValue = _interopRequireDefault(__webpack_require__(/*! ../helpers/nestedValue */ \"./dist/helpers/nestedValue.js\"));\n\nvar _is = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction groupBy(key) {\n  var _this = this;\n\n  var collection = {};\n  this.items.forEach(function (item, index) {\n    var resolvedKey;\n\n    if ((0, _is.isFunction)(key)) {\n      resolvedKey = key(item, index);\n    } else if ((0, _nestedValue[\"default\"])(item, key) || (0, _nestedValue[\"default\"])(item, key) === 0) {\n      resolvedKey = (0, _nestedValue[\"default\"])(item, key);\n    } else {\n      resolvedKey = '';\n    }\n\n    if (collection[resolvedKey] === undefined) {\n      collection[resolvedKey] = new _this.constructor([]);\n    }\n\n    collection[resolvedKey].push(item);\n  });\n  return new this.constructor(collection);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/groupBy.js?");

/***/ }),

/***/ "./dist/methods/has.js":
/*!*****************************!*\
  !*** ./dist/methods/has.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = has;\n\nvar _variadic = _interopRequireDefault(__webpack_require__(/*! ../helpers/variadic */ \"./dist/helpers/variadic.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction has() {\n  var _this = this;\n\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  var properties = (0, _variadic[\"default\"])(args);\n  return properties.filter(function (key) {\n    return Object.hasOwnProperty.call(_this.items, key);\n  }).length === properties.length;\n}\n\n//# sourceURL=webpack://collect/./dist/methods/has.js?");

/***/ }),

/***/ "./dist/methods/implode.js":
/*!*********************************!*\
  !*** ./dist/methods/implode.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = implode;\n\nfunction implode(key, glue) {\n  if (glue === undefined) {\n    return this.items.join(key);\n  }\n\n  return new this.constructor(this.items).pluck(key).all().join(glue);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/implode.js?");

/***/ }),

/***/ "./dist/methods/intersect.js":
/*!***********************************!*\
  !*** ./dist/methods/intersect.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = intersect;\n\nfunction intersect(values) {\n  var intersectValues = values;\n\n  if (values instanceof this.constructor) {\n    intersectValues = values.all();\n  }\n\n  var collection = this.items.filter(function (item) {\n    return intersectValues.indexOf(item) !== -1;\n  });\n  return new this.constructor(collection);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/intersect.js?");

/***/ }),

/***/ "./dist/methods/intersectByKeys.js":
/*!*****************************************!*\
  !*** ./dist/methods/intersectByKeys.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = intersectByKeys;\n\nfunction intersectByKeys(values) {\n  var _this = this;\n\n  var intersectKeys = Object.keys(values);\n\n  if (values instanceof this.constructor) {\n    intersectKeys = Object.keys(values.all());\n  }\n\n  var collection = {};\n  Object.keys(this.items).forEach(function (key) {\n    if (intersectKeys.indexOf(key) !== -1) {\n      collection[key] = _this.items[key];\n    }\n  });\n  return new this.constructor(collection);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/intersectByKeys.js?");

/***/ }),

/***/ "./dist/methods/isEmpty.js":
/*!*********************************!*\
  !*** ./dist/methods/isEmpty.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = isEmpty;\n\nfunction isEmpty() {\n  if (Array.isArray(this.items)) {\n    return !this.items.length;\n  }\n\n  return !Object.keys(this.items).length;\n}\n\n;\n\n//# sourceURL=webpack://collect/./dist/methods/isEmpty.js?");

/***/ }),

/***/ "./dist/methods/isNotEmpty.js":
/*!************************************!*\
  !*** ./dist/methods/isNotEmpty.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = isNotEmpty;\n\nfunction isNotEmpty() {\n  return !this.isEmpty();\n}\n\n//# sourceURL=webpack://collect/./dist/methods/isNotEmpty.js?");

/***/ }),

/***/ "./dist/methods/join.js":
/*!******************************!*\
  !*** ./dist/methods/join.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = join;\n\nfunction join(glue, finalGlue) {\n  var collection = this.values();\n\n  if (finalGlue === undefined) {\n    return collection.implode(glue);\n  }\n\n  var count = collection.count();\n\n  if (count === 0) {\n    return '';\n  }\n\n  if (count === 1) {\n    return collection.last();\n  }\n\n  var finalItem = collection.pop();\n  return collection.implode(glue) + finalGlue + finalItem;\n}\n\n;\n\n//# sourceURL=webpack://collect/./dist/methods/join.js?");

/***/ }),

/***/ "./dist/methods/keyBy.js":
/*!*******************************!*\
  !*** ./dist/methods/keyBy.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = keyBy;\n\nvar _nestedValue = _interopRequireDefault(__webpack_require__(/*! ../helpers/nestedValue */ \"./dist/helpers/nestedValue.js\"));\n\nvar _is = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction keyBy(key) {\n  var collection = {};\n\n  if ((0, _is.isFunction)(key)) {\n    this.items.forEach(function (item) {\n      collection[key(item)] = item;\n    });\n  } else {\n    this.items.forEach(function (item) {\n      var keyValue = (0, _nestedValue[\"default\"])(item, key);\n      collection[keyValue || ''] = item;\n    });\n  }\n\n  return new this.constructor(collection);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/keyBy.js?");

/***/ }),

/***/ "./dist/methods/keys.js":
/*!******************************!*\
  !*** ./dist/methods/keys.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = keys;\n\nfunction keys() {\n  var collection = Object.keys(this.items);\n\n  if (Array.isArray(this.items)) {\n    collection = collection.map(Number);\n  }\n\n  return new this.constructor(collection);\n}\n\n;\n\n//# sourceURL=webpack://collect/./dist/methods/keys.js?");

/***/ }),

/***/ "./dist/methods/last.js":
/*!******************************!*\
  !*** ./dist/methods/last.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = last;\n\nvar _require = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\"),\n    isFunction = _require.isFunction;\n\nfunction last(fn, defaultValue) {\n  var items = this.items;\n\n  if (isFunction(fn)) {\n    items = this.filter(fn).all();\n  }\n\n  if (Array.isArray(items) && !items.length || !Object.keys(items).length) {\n    if (isFunction(defaultValue)) {\n      return defaultValue();\n    }\n\n    return defaultValue;\n  }\n\n  if (Array.isArray(items)) {\n    return items[items.length - 1];\n  }\n\n  var keys = Object.keys(items);\n  return items[keys[keys.length - 1]];\n}\n\n//# sourceURL=webpack://collect/./dist/methods/last.js?");

/***/ }),

/***/ "./dist/methods/macro.js":
/*!*******************************!*\
  !*** ./dist/methods/macro.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = macro;\n\nfunction macro(name, fn) {\n  this.constructor.prototype[name] = fn;\n}\n\n//# sourceURL=webpack://collect/./dist/methods/macro.js?");

/***/ }),

/***/ "./dist/methods/make.js":
/*!******************************!*\
  !*** ./dist/methods/make.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = make;\n\nfunction make() {\n  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  return new this.constructor(items);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/make.js?");

/***/ }),

/***/ "./dist/methods/map.js":
/*!*****************************!*\
  !*** ./dist/methods/map.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = map;\n\nfunction map(fn) {\n  var _this = this;\n\n  if (Array.isArray(this.items)) {\n    return new this.constructor(this.items.map(fn));\n  }\n\n  var collection = {};\n  Object.keys(this.items).forEach(function (key) {\n    collection[key] = fn(_this.items[key], key);\n  });\n  return new this.constructor(collection);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/map.js?");

/***/ }),

/***/ "./dist/methods/mapInto.js":
/*!*********************************!*\
  !*** ./dist/methods/mapInto.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = mapInto;\n\nfunction mapInto(ClassName) {\n  return this.map(function (value, key) {\n    return new ClassName(value, key);\n  });\n}\n\n//# sourceURL=webpack://collect/./dist/methods/mapInto.js?");

/***/ }),

/***/ "./dist/methods/mapSpread.js":
/*!***********************************!*\
  !*** ./dist/methods/mapSpread.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = mapSpread;\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction mapSpread(fn) {\n  return this.map(function (values, key) {\n    return fn.apply(void 0, _toConsumableArray(values).concat([key]));\n  });\n}\n\n//# sourceURL=webpack://collect/./dist/methods/mapSpread.js?");

/***/ }),

/***/ "./dist/methods/mapToDictionary.js":
/*!*****************************************!*\
  !*** ./dist/methods/mapToDictionary.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = mapToDictionary;\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction mapToDictionary(fn) {\n  var collection = {};\n  this.items.forEach(function (item, k) {\n    var _fn = fn(item, k),\n        _fn2 = _slicedToArray(_fn, 2),\n        key = _fn2[0],\n        value = _fn2[1];\n\n    if (collection[key] === undefined) {\n      collection[key] = [value];\n    } else {\n      collection[key].push(value);\n    }\n  });\n  return new this.constructor(collection);\n}\n\n;\n\n//# sourceURL=webpack://collect/./dist/methods/mapToDictionary.js?");

/***/ }),

/***/ "./dist/methods/mapToGroups.js":
/*!*************************************!*\
  !*** ./dist/methods/mapToGroups.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = mapToGroups;\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction mapToGroups(fn) {\n  var collection = {};\n  this.items.forEach(function (item, key) {\n    var _fn = fn(item, key),\n        _fn2 = _slicedToArray(_fn, 2),\n        keyed = _fn2[0],\n        value = _fn2[1];\n\n    if (collection[keyed] === undefined) {\n      collection[keyed] = [value];\n    } else {\n      collection[keyed].push(value);\n    }\n  });\n  return new this.constructor(collection);\n}\n\n;\n\n//# sourceURL=webpack://collect/./dist/methods/mapToGroups.js?");

/***/ }),

/***/ "./dist/methods/mapWithKeys.js":
/*!*************************************!*\
  !*** ./dist/methods/mapWithKeys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = mapWithKeys;\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction mapWithKeys(fn) {\n  var _this = this;\n\n  var collection = {};\n\n  if (Array.isArray(this.items)) {\n    this.items.forEach(function (item, index) {\n      var _fn = fn(item, index),\n          _fn2 = _slicedToArray(_fn, 2),\n          keyed = _fn2[0],\n          value = _fn2[1];\n\n      collection[keyed] = value;\n    });\n  } else {\n    Object.keys(this.items).forEach(function (key) {\n      var _fn3 = fn(_this.items[key], key),\n          _fn4 = _slicedToArray(_fn3, 2),\n          keyed = _fn4[0],\n          value = _fn4[1];\n\n      collection[keyed] = value;\n    });\n  }\n\n  return new this.constructor(collection);\n}\n\n;\n\n//# sourceURL=webpack://collect/./dist/methods/mapWithKeys.js?");

/***/ }),

/***/ "./dist/methods/max.js":
/*!*****************************!*\
  !*** ./dist/methods/max.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = max;\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction max(key) {\n  if (typeof key === 'string') {\n    var filtered = this.items.filter(function (item) {\n      return item[key] !== undefined;\n    });\n    return Math.max.apply(Math, _toConsumableArray(filtered.map(function (item) {\n      return item[key];\n    })));\n  }\n\n  return Math.max.apply(Math, _toConsumableArray(this.items));\n}\n\n;\n\n//# sourceURL=webpack://collect/./dist/methods/max.js?");

/***/ }),

/***/ "./dist/methods/median.js":
/*!********************************!*\
  !*** ./dist/methods/median.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = median;\n\nfunction median(key) {\n  var length = this.items.length;\n\n  if (key === undefined) {\n    if (length % 2 === 0) {\n      return (this.items[length / 2 - 1] + this.items[length / 2]) / 2;\n    }\n\n    return this.items[Math.floor(length / 2)];\n  }\n\n  if (length % 2 === 0) {\n    return (this.items[length / 2 - 1][key] + this.items[length / 2][key]) / 2;\n  }\n\n  return this.items[Math.floor(length / 2)][key];\n}\n\n//# sourceURL=webpack://collect/./dist/methods/median.js?");

/***/ }),

/***/ "./dist/methods/merge.js":
/*!*******************************!*\
  !*** ./dist/methods/merge.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = merge;\n\nfunction merge(value) {\n  var arrayOrObject = value;\n\n  if (typeof arrayOrObject === 'string') {\n    arrayOrObject = [arrayOrObject];\n  }\n\n  if (Array.isArray(this.items) && Array.isArray(arrayOrObject)) {\n    return new this.constructor(this.items.concat(arrayOrObject));\n  }\n\n  var collection = JSON.parse(JSON.stringify(this.items));\n  Object.keys(arrayOrObject).forEach(function (key) {\n    collection[key] = arrayOrObject[key];\n  });\n  return new this.constructor(collection);\n}\n\n;\n\n//# sourceURL=webpack://collect/./dist/methods/merge.js?");

/***/ }),

/***/ "./dist/methods/mergeRecursive.js":
/*!****************************************!*\
  !*** ./dist/methods/mergeRecursive.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = mergeRecursive;\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction mergeRecursive(items) {\n  var merge = function merge(target, source) {\n    var merged = {};\n    var mergedKeys = Object.keys(_objectSpread(_objectSpread({}, target), source));\n    mergedKeys.forEach(function (key) {\n      if (target[key] === undefined && source[key] !== undefined) {\n        merged[key] = source[key];\n      } else if (target[key] !== undefined && source[key] === undefined) {\n        merged[key] = target[key];\n      } else if (target[key] !== undefined && source[key] !== undefined) {\n        if (target[key] === source[key]) {\n          merged[key] = target[key];\n        } else if (!Array.isArray(target[key]) && _typeof(target[key]) === 'object' && !Array.isArray(source[key]) && _typeof(source[key]) === 'object') {\n          merged[key] = merge(target[key], source[key]);\n        } else {\n          merged[key] = [].concat(target[key], source[key]);\n        }\n      }\n    });\n    return merged;\n  };\n\n  if (!items) {\n    return this;\n  }\n\n  if (items.constructor.name === 'Collection') {\n    return new this.constructor(merge(this.items, items.all()));\n  }\n\n  return new this.constructor(merge(this.items, items));\n}\n\n;\n\n//# sourceURL=webpack://collect/./dist/methods/mergeRecursive.js?");

/***/ }),

/***/ "./dist/methods/min.js":
/*!*****************************!*\
  !*** ./dist/methods/min.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = min;\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction min(key) {\n  if (key !== undefined) {\n    var filtered = this.items.filter(function (item) {\n      return item[key] !== undefined;\n    });\n    return Math.min.apply(Math, _toConsumableArray(filtered.map(function (item) {\n      return item[key];\n    })));\n  }\n\n  return Math.min.apply(Math, _toConsumableArray(this.items));\n}\n\n//# sourceURL=webpack://collect/./dist/methods/min.js?");

/***/ }),

/***/ "./dist/methods/mode.js":
/*!******************************!*\
  !*** ./dist/methods/mode.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = mode;\n\nfunction mode(key) {\n  var values = [];\n  var highestCount = 1;\n\n  if (!this.items.length) {\n    return null;\n  }\n\n  this.items.forEach(function (item) {\n    var tempValues = values.filter(function (value) {\n      if (key !== undefined) {\n        return value.key === item[key];\n      }\n\n      return value.key === item;\n    });\n\n    if (!tempValues.length) {\n      if (key !== undefined) {\n        values.push({\n          key: item[key],\n          count: 1\n        });\n      } else {\n        values.push({\n          key: item,\n          count: 1\n        });\n      }\n    } else {\n      tempValues[0].count += 1;\n      var count = tempValues[0].count;\n\n      if (count > highestCount) {\n        highestCount = count;\n      }\n    }\n  });\n  return values.filter(function (value) {\n    return value.count === highestCount;\n  }).map(function (value) {\n    return value.key;\n  });\n}\n\n//# sourceURL=webpack://collect/./dist/methods/mode.js?");

/***/ }),

/***/ "./dist/methods/nth.js":
/*!*****************************!*\
  !*** ./dist/methods/nth.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = nth;\n\nvar _values = _interopRequireDefault(__webpack_require__(/*! ../helpers/values */ \"./dist/helpers/values.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction nth(n) {\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  var items = (0, _values[\"default\"])(this.items);\n  var collection = items.slice(offset).filter(function (item, index) {\n    return index % n === 0;\n  });\n  return new this.constructor(collection);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/nth.js?");

/***/ }),

/***/ "./dist/methods/only.js":
/*!******************************!*\
  !*** ./dist/methods/only.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = only;\n\nvar _variadic = _interopRequireDefault(__webpack_require__(/*! ../helpers/variadic */ \"./dist/helpers/variadic.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction only() {\n  var _this = this;\n\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  var properties = (0, _variadic[\"default\"])(args);\n\n  if (Array.isArray(this.items)) {\n    var _collection = this.items.filter(function (item) {\n      return properties.indexOf(item) !== -1;\n    });\n\n    return new this.constructor(_collection);\n  }\n\n  var collection = {};\n  Object.keys(this.items).forEach(function (prop) {\n    if (properties.indexOf(prop) !== -1) {\n      collection[prop] = _this.items[prop];\n    }\n  });\n  return new this.constructor(collection);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/only.js?");

/***/ }),

/***/ "./dist/methods/pad.js":
/*!*****************************!*\
  !*** ./dist/methods/pad.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = pad;\n\nvar _clone = _interopRequireDefault(__webpack_require__(/*! ../helpers/clone */ \"./dist/helpers/clone.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction pad(size, value) {\n  var abs = Math.abs(size);\n  var count = this.count();\n\n  if (abs <= count) {\n    return this;\n  }\n\n  var diff = abs - count;\n  var items = (0, _clone[\"default\"])(this.items);\n  var isArray = Array.isArray(this.items);\n  var prepend = size < 0;\n\n  for (var iterator = 0; iterator < diff;) {\n    if (!isArray) {\n      if (items[iterator] !== undefined) {\n        diff += 1;\n      } else {\n        items[iterator] = value;\n      }\n    } else if (prepend) {\n      items.unshift(value);\n    } else {\n      items.push(value);\n    }\n\n    iterator += 1;\n  }\n\n  return new this.constructor(items);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/pad.js?");

/***/ }),

/***/ "./dist/methods/partition.js":
/*!***********************************!*\
  !*** ./dist/methods/partition.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = partition;\n\nfunction partition(fn) {\n  var _this = this;\n\n  var arrays;\n\n  if (Array.isArray(this.items)) {\n    arrays = [new this.constructor([]), new this.constructor([])];\n    this.items.forEach(function (item) {\n      if (fn(item) === true) {\n        arrays[0].push(item);\n      } else {\n        arrays[1].push(item);\n      }\n    });\n  } else {\n    arrays = [new this.constructor({}), new this.constructor({})];\n    Object.keys(this.items).forEach(function (prop) {\n      var value = _this.items[prop];\n\n      if (fn(value) === true) {\n        arrays[0].put(prop, value);\n      } else {\n        arrays[1].put(prop, value);\n      }\n    });\n  }\n\n  return new this.constructor(arrays);\n}\n\n;\n\n//# sourceURL=webpack://collect/./dist/methods/partition.js?");

/***/ }),

/***/ "./dist/methods/pipe.js":
/*!******************************!*\
  !*** ./dist/methods/pipe.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = pipe;\n\nfunction pipe(fn) {\n  return fn(this);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/pipe.js?");

/***/ }),

/***/ "./dist/methods/pluck.js":
/*!*******************************!*\
  !*** ./dist/methods/pluck.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = pluck;\n\nvar _is = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\");\n\nvar _nestedValue = _interopRequireDefault(__webpack_require__(/*! ../helpers/nestedValue */ \"./dist/helpers/nestedValue.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar buildKeyPathMap = function buildKeyPathMap(items) {\n  var keyPaths = {};\n  items.forEach(function (item, index) {\n    function buildKeyPath(val, keyPath) {\n      if ((0, _is.isObject)(val)) {\n        Object.keys(val).forEach(function (prop) {\n          buildKeyPath(val[prop], \"\".concat(keyPath, \".\").concat(prop));\n        });\n      } else if ((0, _is.isArray)(val)) {\n        val.forEach(function (v, i) {\n          buildKeyPath(v, \"\".concat(keyPath, \".\").concat(i));\n        });\n      }\n\n      keyPaths[keyPath] = val;\n    }\n\n    buildKeyPath(item, index);\n  });\n  return keyPaths;\n};\n\nfunction pluck(value, key) {\n  if (value.indexOf('*') !== -1) {\n    var keyPathMap = buildKeyPathMap(this.items);\n    var keyMatches = [];\n\n    if (key !== undefined) {\n      var keyRegex = new RegExp(\"0.\".concat(key), 'g');\n      var keyNumberOfLevels = \"0.\".concat(key).split('.').length;\n      Object.keys(keyPathMap).forEach(function (k) {\n        var matchingKey = k.match(keyRegex);\n\n        if (matchingKey) {\n          var match = matchingKey[0];\n\n          if (match.split('.').length === keyNumberOfLevels) {\n            keyMatches.push(keyPathMap[match]);\n          }\n        }\n      });\n    }\n\n    var valueMatches = [];\n    var valueRegex = new RegExp(\"0.\".concat(value), 'g');\n    var valueNumberOfLevels = \"0.\".concat(value).split('.').length;\n    Object.keys(keyPathMap).forEach(function (k) {\n      var matchingValue = k.match(valueRegex);\n\n      if (matchingValue) {\n        var match = matchingValue[0];\n\n        if (match.split('.').length === valueNumberOfLevels) {\n          valueMatches.push(keyPathMap[match]);\n        }\n      }\n    });\n\n    if (key !== undefined) {\n      var collection = {};\n      this.items.forEach(function (item, index) {\n        collection[keyMatches[index] || ''] = valueMatches;\n      });\n      return new this.constructor(collection);\n    }\n\n    return new this.constructor([valueMatches]);\n  }\n\n  if (key !== undefined) {\n    var _collection = {};\n    this.items.forEach(function (item) {\n      if ((0, _nestedValue[\"default\"])(item, value) !== undefined) {\n        _collection[item[key] || ''] = (0, _nestedValue[\"default\"])(item, value);\n      } else {\n        _collection[item[key] || ''] = null;\n      }\n    });\n    return new this.constructor(_collection);\n  }\n\n  return this.map(function (item) {\n    if ((0, _nestedValue[\"default\"])(item, value) !== undefined) {\n      return (0, _nestedValue[\"default\"])(item, value);\n    }\n\n    return null;\n  });\n}\n\n//# sourceURL=webpack://collect/./dist/methods/pluck.js?");

/***/ }),

/***/ "./dist/methods/pop.js":
/*!*****************************!*\
  !*** ./dist/methods/pop.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = pop;\n\nvar _is = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\");\n\nvar _deleteKeys = _interopRequireDefault(__webpack_require__(/*! ../helpers/deleteKeys */ \"./dist/helpers/deleteKeys.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction pop() {\n  var _this = this;\n\n  var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n\n  if (this.isEmpty()) {\n    return null;\n  }\n\n  if ((0, _is.isArray)(this.items)) {\n    if (count === 1) {\n      return this.items.pop();\n    }\n\n    return new this.constructor(this.items.splice(-count));\n  }\n\n  if ((0, _is.isObject)(this.items)) {\n    var keys = Object.keys(this.items);\n\n    if (count === 1) {\n      var key = keys[keys.length - 1];\n      var last = this.items[key];\n      (0, _deleteKeys[\"default\"])(this.items, key);\n      return last;\n    }\n\n    var poppedKeys = keys.slice(-count);\n    var newObject = poppedKeys.reduce(function (acc, current) {\n      acc[current] = _this.items[current];\n      return acc;\n    }, {});\n    (0, _deleteKeys[\"default\"])(this.items, poppedKeys);\n    return new this.constructor(newObject);\n  }\n\n  return null;\n}\n\n//# sourceURL=webpack://collect/./dist/methods/pop.js?");

/***/ }),

/***/ "./dist/methods/prepend.js":
/*!*********************************!*\
  !*** ./dist/methods/prepend.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = prepend;\n\nfunction prepend(value, key) {\n  if (key !== undefined) {\n    return this.put(key, value);\n  }\n\n  this.items.unshift(value);\n  return this;\n}\n\n//# sourceURL=webpack://collect/./dist/methods/prepend.js?");

/***/ }),

/***/ "./dist/methods/pull.js":
/*!******************************!*\
  !*** ./dist/methods/pull.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = pull;\n\nvar _is = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\");\n\nfunction pull(key, defaultValue) {\n  var returnValue = this.items[key] || null;\n\n  if (!returnValue && defaultValue !== undefined) {\n    if ((0, _is.isFunction)(defaultValue)) {\n      returnValue = defaultValue();\n    } else {\n      returnValue = defaultValue;\n    }\n  }\n\n  delete this.items[key];\n  return returnValue;\n}\n\n//# sourceURL=webpack://collect/./dist/methods/pull.js?");

/***/ }),

/***/ "./dist/methods/push.js":
/*!******************************!*\
  !*** ./dist/methods/push.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = push;\n\nfunction push() {\n  var _this$items;\n\n  (_this$items = this.items).push.apply(_this$items, arguments);\n\n  return this;\n}\n\n//# sourceURL=webpack://collect/./dist/methods/push.js?");

/***/ }),

/***/ "./dist/methods/put.js":
/*!*****************************!*\
  !*** ./dist/methods/put.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = put;\n\nfunction put(key, value) {\n  this.items[key] = value;\n  return this;\n}\n\n//# sourceURL=webpack://collect/./dist/methods/put.js?");

/***/ }),

/***/ "./dist/methods/random.js":
/*!********************************!*\
  !*** ./dist/methods/random.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = random;\n\nvar _values = _interopRequireDefault(__webpack_require__(/*! ../helpers/values */ \"./dist/helpers/values.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction random() {\n  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var items = (0, _values[\"default\"])(this.items);\n  var collection = new this.constructor(items).shuffle(); // If not a length was specified\n\n  if (length !== parseInt(length, 10)) {\n    return collection.first();\n  }\n\n  return collection.take(length);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/random.js?");

/***/ }),

/***/ "./dist/methods/reduce.js":
/*!********************************!*\
  !*** ./dist/methods/reduce.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = reduce;\n\nfunction reduce(fn, carry) {\n  var _this = this;\n\n  var reduceCarry = null;\n\n  if (carry !== undefined) {\n    reduceCarry = carry;\n  }\n\n  if (Array.isArray(this.items)) {\n    this.items.forEach(function (item) {\n      reduceCarry = fn(reduceCarry, item);\n    });\n  } else {\n    Object.keys(this.items).forEach(function (key) {\n      reduceCarry = fn(reduceCarry, _this.items[key], key);\n    });\n  }\n\n  return reduceCarry;\n}\n\n;\n\n//# sourceURL=webpack://collect/./dist/methods/reduce.js?");

/***/ }),

/***/ "./dist/methods/reject.js":
/*!********************************!*\
  !*** ./dist/methods/reject.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = reject;\n\nfunction reject(fn) {\n  return new this.constructor(this.items).filter(function (item) {\n    return !fn(item);\n  });\n}\n\n;\n\n//# sourceURL=webpack://collect/./dist/methods/reject.js?");

/***/ }),

/***/ "./dist/methods/replace.js":
/*!*********************************!*\
  !*** ./dist/methods/replace.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = replace;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction replace(items) {\n  if (!items) {\n    return this;\n  }\n\n  if (Array.isArray(items)) {\n    var _replaced = this.items.map(function (value, index) {\n      return items[index] || value;\n    });\n\n    return new this.constructor(_replaced);\n  }\n\n  if (items.constructor.name === 'Collection') {\n    var _replaced2 = _objectSpread(_objectSpread({}, this.items), items.all());\n\n    return new this.constructor(_replaced2);\n  }\n\n  var replaced = _objectSpread(_objectSpread({}, this.items), items);\n\n  return new this.constructor(replaced);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/replace.js?");

/***/ }),

/***/ "./dist/methods/replaceRecursive.js":
/*!******************************************!*\
  !*** ./dist/methods/replaceRecursive.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = replaceRecursive;\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction replaceRecursive(items) {\n  var replace = function replace(target, source) {\n    var replaced = _objectSpread({}, target);\n\n    var mergedKeys = Object.keys(_objectSpread(_objectSpread({}, target), source));\n    mergedKeys.forEach(function (key) {\n      if (!Array.isArray(source[key]) && _typeof(source[key]) === 'object') {\n        replaced[key] = replace(target[key], source[key]);\n      } else if (target[key] === undefined && source[key] !== undefined) {\n        if (_typeof(target[key]) === 'object') {\n          replaced[key] = _objectSpread({}, source[key]);\n        } else {\n          replaced[key] = source[key];\n        }\n      } else if (target[key] !== undefined && source[key] === undefined) {\n        if (_typeof(target[key]) === 'object') {\n          replaced[key] = _objectSpread({}, target[key]);\n        } else {\n          replaced[key] = target[key];\n        }\n      } else if (target[key] !== undefined && source[key] !== undefined) {\n        if (_typeof(source[key]) === 'object') {\n          replaced[key] = _objectSpread({}, source[key]);\n        } else {\n          replaced[key] = source[key];\n        }\n      }\n    });\n    return replaced;\n  };\n\n  if (!items) {\n    return this;\n  }\n\n  if (!Array.isArray(items) && _typeof(items) !== 'object') {\n    return new this.constructor(replace(this.items, [items]));\n  }\n\n  if (items.constructor.name === 'Collection') {\n    return new this.constructor(replace(this.items, items.all()));\n  }\n\n  return new this.constructor(replace(this.items, items));\n}\n\n//# sourceURL=webpack://collect/./dist/methods/replaceRecursive.js?");

/***/ }),

/***/ "./dist/methods/reverse.js":
/*!*********************************!*\
  !*** ./dist/methods/reverse.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = reverse;\n\nfunction reverse() {\n  var collection = [].concat(this.items).reverse();\n  return new this.constructor(collection);\n}\n\n;\n\n//# sourceURL=webpack://collect/./dist/methods/reverse.js?");

/***/ }),

/***/ "./dist/methods/search.js":
/*!********************************!*\
  !*** ./dist/methods/search.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = search;\n\nvar _is = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\");\n\n/* eslint-disable eqeqeq */\nfunction search(valueOrFunction, strict) {\n  var _this = this;\n\n  var result;\n\n  var find = function find(item, key) {\n    if ((0, _is.isFunction)(valueOrFunction)) {\n      return valueOrFunction(_this.items[key], key);\n    }\n\n    if (strict) {\n      return _this.items[key] === valueOrFunction;\n    }\n\n    return _this.items[key] == valueOrFunction;\n  };\n\n  if ((0, _is.isArray)(this.items)) {\n    result = this.items.findIndex(find);\n  } else if ((0, _is.isObject)(this.items)) {\n    result = Object.keys(this.items).find(function (key) {\n      return find(_this.items[key], key);\n    });\n  }\n\n  if (result === undefined || result < 0) {\n    return false;\n  }\n\n  return result;\n}\n\n//# sourceURL=webpack://collect/./dist/methods/search.js?");

/***/ }),

/***/ "./dist/methods/shift.js":
/*!*******************************!*\
  !*** ./dist/methods/shift.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = shift;\n\nvar _is = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\");\n\nvar _deleteKeys = _interopRequireDefault(__webpack_require__(/*! ../helpers/deleteKeys */ \"./dist/helpers/deleteKeys.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction shift() {\n  var _this = this;\n\n  var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n\n  if (this.isEmpty()) {\n    return null;\n  }\n\n  if ((0, _is.isArray)(this.items)) {\n    if (count === 1) {\n      return this.items.shift();\n    }\n\n    return new this.constructor(this.items.splice(0, count));\n  }\n\n  if ((0, _is.isObject)(this.items)) {\n    if (count === 1) {\n      var key = Object.keys(this.items)[0];\n      var value = this.items[key];\n      delete this.items[key];\n      return value;\n    }\n\n    var keys = Object.keys(this.items);\n    var poppedKeys = keys.slice(0, count);\n    var newObject = poppedKeys.reduce(function (acc, current) {\n      acc[current] = _this.items[current];\n      return acc;\n    }, {});\n    (0, _deleteKeys[\"default\"])(this.items, poppedKeys);\n    return new this.constructor(newObject);\n  }\n\n  return null;\n}\n\n//# sourceURL=webpack://collect/./dist/methods/shift.js?");

/***/ }),

/***/ "./dist/methods/shuffle.js":
/*!*********************************!*\
  !*** ./dist/methods/shuffle.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = shuffle;\n\nvar _values = _interopRequireDefault(__webpack_require__(/*! ../helpers/values */ \"./dist/helpers/values.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction shuffle() {\n  var items = (0, _values[\"default\"])(this.items);\n  var j;\n  var x;\n  var i;\n\n  for (i = items.length; i; i -= 1) {\n    j = Math.floor(Math.random() * i);\n    x = items[i - 1];\n    items[i - 1] = items[j];\n    items[j] = x;\n  }\n\n  this.items = items;\n  return this;\n}\n\n//# sourceURL=webpack://collect/./dist/methods/shuffle.js?");

/***/ }),

/***/ "./dist/methods/skip.js":
/*!******************************!*\
  !*** ./dist/methods/skip.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = skip;\n\nvar _is = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\");\n\nfunction skip(number) {\n  var _this = this;\n\n  if ((0, _is.isObject)(this.items)) {\n    return new this.constructor(Object.keys(this.items).reduce(function (accumulator, key, index) {\n      if (index + 1 > number) {\n        accumulator[key] = _this.items[key];\n      }\n\n      return accumulator;\n    }, {}));\n  }\n\n  return new this.constructor(this.items.slice(number));\n}\n\n//# sourceURL=webpack://collect/./dist/methods/skip.js?");

/***/ }),

/***/ "./dist/methods/skipUntil.js":
/*!***********************************!*\
  !*** ./dist/methods/skipUntil.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = skipUntil;\n\nvar _is = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\");\n\nfunction skipUntil(valueOrFunction) {\n  var _this = this;\n\n  var previous = null;\n  var items;\n\n  var callback = function callback(value) {\n    return value === valueOrFunction;\n  };\n\n  if ((0, _is.isFunction)(valueOrFunction)) {\n    callback = valueOrFunction;\n  }\n\n  if ((0, _is.isArray)(this.items)) {\n    items = this.items.filter(function (item) {\n      if (previous !== true) {\n        previous = callback(item);\n      }\n\n      return previous;\n    });\n  }\n\n  if ((0, _is.isObject)(this.items)) {\n    items = Object.keys(this.items).reduce(function (acc, key) {\n      if (previous !== true) {\n        previous = callback(_this.items[key]);\n      }\n\n      if (previous !== false) {\n        acc[key] = _this.items[key];\n      }\n\n      return acc;\n    }, {});\n  }\n\n  return new this.constructor(items);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/skipUntil.js?");

/***/ }),

/***/ "./dist/methods/skipWhile.js":
/*!***********************************!*\
  !*** ./dist/methods/skipWhile.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = skipWhile;\n\nvar _is = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\");\n\nfunction skipWhile(valueOrFunction) {\n  var _this = this;\n\n  var previous = null;\n  var items;\n\n  var callback = function callback(value) {\n    return value === valueOrFunction;\n  };\n\n  if ((0, _is.isFunction)(valueOrFunction)) {\n    callback = valueOrFunction;\n  }\n\n  if ((0, _is.isArray)(this.items)) {\n    items = this.items.filter(function (item) {\n      if (previous !== true) {\n        previous = !callback(item);\n      }\n\n      return previous;\n    });\n  }\n\n  if ((0, _is.isObject)(this.items)) {\n    items = Object.keys(this.items).reduce(function (acc, key) {\n      if (previous !== true) {\n        previous = !callback(_this.items[key]);\n      }\n\n      if (previous !== false) {\n        acc[key] = _this.items[key];\n      }\n\n      return acc;\n    }, {});\n  }\n\n  return new this.constructor(items);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/skipWhile.js?");

/***/ }),

/***/ "./dist/methods/slice.js":
/*!*******************************!*\
  !*** ./dist/methods/slice.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = slice;\n\nfunction slice(remove, limit) {\n  var collection = this.items.slice(remove);\n\n  if (limit !== undefined) {\n    collection = collection.slice(0, limit);\n  }\n\n  return new this.constructor(collection);\n}\n\n;\n\n//# sourceURL=webpack://collect/./dist/methods/slice.js?");

/***/ }),

/***/ "./dist/methods/sole.js":
/*!******************************!*\
  !*** ./dist/methods/sole.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = sole;\n\nvar _is = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\");\n\nfunction sole(key, operator, value) {\n  var collection;\n\n  if ((0, _is.isFunction)(key)) {\n    collection = this.filter(key);\n  } else {\n    collection = this.where(key, operator, value);\n  }\n\n  if (collection.isEmpty()) {\n    throw new Error('Item not found.');\n  }\n\n  if (collection.count() > 1) {\n    throw new Error('Multiple items found.');\n  }\n\n  return collection.first();\n}\n\n//# sourceURL=webpack://collect/./dist/methods/sole.js?");

/***/ }),

/***/ "./dist/methods/some.js":
/*!******************************!*\
  !*** ./dist/methods/some.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _contains = _interopRequireDefault(__webpack_require__(/*! ./contains */ \"./dist/methods/contains.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default = _contains[\"default\"];\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://collect/./dist/methods/some.js?");

/***/ }),

/***/ "./dist/methods/sort.js":
/*!******************************!*\
  !*** ./dist/methods/sort.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = sort;\n\nfunction sort(fn) {\n  var collection = [].concat(this.items);\n\n  if (fn === undefined) {\n    if (this.every(function (item) {\n      return typeof item === 'number';\n    })) {\n      collection.sort(function (a, b) {\n        return a - b;\n      });\n    } else {\n      collection.sort();\n    }\n  } else {\n    collection.sort(fn);\n  }\n\n  return new this.constructor(collection);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/sort.js?");

/***/ }),

/***/ "./dist/methods/sortBy.js":
/*!********************************!*\
  !*** ./dist/methods/sortBy.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = sortBy;\n\nvar _nestedValue = _interopRequireDefault(__webpack_require__(/*! ../helpers/nestedValue */ \"./dist/helpers/nestedValue.js\"));\n\nvar _is = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction sortBy(valueOrFunction) {\n  var collection = [].concat(this.items);\n\n  var getValue = function getValue(item) {\n    if ((0, _is.isFunction)(valueOrFunction)) {\n      return valueOrFunction(item);\n    }\n\n    return (0, _nestedValue[\"default\"])(item, valueOrFunction);\n  };\n\n  collection.sort(function (a, b) {\n    var valueA = getValue(a);\n    var valueB = getValue(b);\n\n    if (valueA === null || valueA === undefined) {\n      return 1;\n    }\n\n    if (valueB === null || valueB === undefined) {\n      return -1;\n    }\n\n    if (valueA < valueB) {\n      return -1;\n    }\n\n    if (valueA > valueB) {\n      return 1;\n    }\n\n    return 0;\n  });\n  return new this.constructor(collection);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/sortBy.js?");

/***/ }),

/***/ "./dist/methods/sortByDesc.js":
/*!************************************!*\
  !*** ./dist/methods/sortByDesc.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = sortByDesc;\n\nfunction sortByDesc(valueOrFunction) {\n  return this.sortBy(valueOrFunction).reverse();\n}\n\n;\n\n//# sourceURL=webpack://collect/./dist/methods/sortByDesc.js?");

/***/ }),

/***/ "./dist/methods/sortDesc.js":
/*!**********************************!*\
  !*** ./dist/methods/sortDesc.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = sortDesc;\n\nfunction sortDesc() {\n  return this.sort().reverse();\n}\n\n;\n\n//# sourceURL=webpack://collect/./dist/methods/sortDesc.js?");

/***/ }),

/***/ "./dist/methods/sortKeys.js":
/*!**********************************!*\
  !*** ./dist/methods/sortKeys.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = sortKeys;\n\nfunction sortKeys() {\n  var _this = this;\n\n  var ordered = {};\n  Object.keys(this.items).sort().forEach(function (key) {\n    ordered[key] = _this.items[key];\n  });\n  return new this.constructor(ordered);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/sortKeys.js?");

/***/ }),

/***/ "./dist/methods/sortKeysDesc.js":
/*!**************************************!*\
  !*** ./dist/methods/sortKeysDesc.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = sortKeysDesc;\n\nfunction sortKeysDesc() {\n  var _this = this;\n\n  var ordered = {};\n  Object.keys(this.items).sort().reverse().forEach(function (key) {\n    ordered[key] = _this.items[key];\n  });\n  return new this.constructor(ordered);\n}\n\n;\n\n//# sourceURL=webpack://collect/./dist/methods/sortKeysDesc.js?");

/***/ }),

/***/ "./dist/methods/splice.js":
/*!********************************!*\
  !*** ./dist/methods/splice.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = splice;\n\nfunction splice(index, limit, replace) {\n  var slicedCollection = this.slice(index, limit);\n  this.items = this.diff(slicedCollection.all()).all();\n\n  if (Array.isArray(replace)) {\n    for (var iterator = 0, length = replace.length; iterator < length; iterator += 1) {\n      this.items.splice(index + iterator, 0, replace[iterator]);\n    }\n  }\n\n  return slicedCollection;\n}\n\n//# sourceURL=webpack://collect/./dist/methods/splice.js?");

/***/ }),

/***/ "./dist/methods/split.js":
/*!*******************************!*\
  !*** ./dist/methods/split.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = split;\n\nfunction split(numberOfGroups) {\n  var itemsPerGroup = Math.round(this.items.length / numberOfGroups);\n  var items = JSON.parse(JSON.stringify(this.items));\n  var collection = [];\n\n  for (var iterator = 0; iterator < numberOfGroups; iterator += 1) {\n    collection.push(new this.constructor(items.splice(0, itemsPerGroup)));\n  }\n\n  return new this.constructor(collection);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/split.js?");

/***/ }),

/***/ "./dist/methods/sum.js":
/*!*****************************!*\
  !*** ./dist/methods/sum.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = sum;\n\nvar _values = _interopRequireDefault(__webpack_require__(/*! ../helpers/values */ \"./dist/helpers/values.js\"));\n\nvar _is = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction sum(key) {\n  var items = (0, _values[\"default\"])(this.items);\n  var total = 0;\n\n  if (key === undefined) {\n    for (var i = 0, length = items.length; i < length; i += 1) {\n      total += parseFloat(items[i]);\n    }\n  } else if ((0, _is.isFunction)(key)) {\n    for (var _i = 0, _length = items.length; _i < _length; _i += 1) {\n      total += parseFloat(key(items[_i]));\n    }\n  } else {\n    for (var _i2 = 0, _length2 = items.length; _i2 < _length2; _i2 += 1) {\n      total += parseFloat(items[_i2][key]);\n    }\n  }\n\n  return parseFloat(total.toPrecision(12));\n}\n\n//# sourceURL=webpack://collect/./dist/methods/sum.js?");

/***/ }),

/***/ "./dist/methods/symbol.iterator.js":
/*!*****************************************!*\
  !*** ./dist/methods/symbol.iterator.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = SymbolIterator;\n\nfunction SymbolIterator() {\n  var _this = this;\n\n  var index = -1;\n  return {\n    next: function next() {\n      index += 1;\n      return {\n        value: _this.items[index],\n        done: index >= _this.items.length\n      };\n    }\n  };\n}\n\n//# sourceURL=webpack://collect/./dist/methods/symbol.iterator.js?");

/***/ }),

/***/ "./dist/methods/take.js":
/*!******************************!*\
  !*** ./dist/methods/take.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = take;\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction take(length) {\n  var _this = this;\n\n  if (!Array.isArray(this.items) && _typeof(this.items) === 'object') {\n    var keys = Object.keys(this.items);\n    var slicedKeys;\n\n    if (length < 0) {\n      slicedKeys = keys.slice(length);\n    } else {\n      slicedKeys = keys.slice(0, length);\n    }\n\n    var collection = {};\n    keys.forEach(function (prop) {\n      if (slicedKeys.indexOf(prop) !== -1) {\n        collection[prop] = _this.items[prop];\n      }\n    });\n    return new this.constructor(collection);\n  }\n\n  if (length < 0) {\n    return new this.constructor(this.items.slice(length));\n  }\n\n  return new this.constructor(this.items.slice(0, length));\n}\n\n//# sourceURL=webpack://collect/./dist/methods/take.js?");

/***/ }),

/***/ "./dist/methods/takeUntil.js":
/*!***********************************!*\
  !*** ./dist/methods/takeUntil.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = takeUntil;\n\nvar _is = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\");\n\nfunction takeUntil(valueOrFunction) {\n  var _this = this;\n\n  var previous = null;\n  var items;\n\n  var callback = function callback(value) {\n    return value === valueOrFunction;\n  };\n\n  if ((0, _is.isFunction)(valueOrFunction)) {\n    callback = valueOrFunction;\n  }\n\n  if ((0, _is.isArray)(this.items)) {\n    items = this.items.filter(function (item) {\n      if (previous !== false) {\n        previous = !callback(item);\n      }\n\n      return previous;\n    });\n  }\n\n  if ((0, _is.isObject)(this.items)) {\n    items = Object.keys(this.items).reduce(function (acc, key) {\n      if (previous !== false) {\n        previous = !callback(_this.items[key]);\n      }\n\n      if (previous !== false) {\n        acc[key] = _this.items[key];\n      }\n\n      return acc;\n    }, {});\n  }\n\n  return new this.constructor(items);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/takeUntil.js?");

/***/ }),

/***/ "./dist/methods/takeWhile.js":
/*!***********************************!*\
  !*** ./dist/methods/takeWhile.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = takeWhile;\n\nvar _is = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\");\n\nfunction takeWhile(valueOrFunction) {\n  var _this = this;\n\n  var previous = null;\n  var items;\n\n  var callback = function callback(value) {\n    return value === valueOrFunction;\n  };\n\n  if ((0, _is.isFunction)(valueOrFunction)) {\n    callback = valueOrFunction;\n  }\n\n  if ((0, _is.isArray)(this.items)) {\n    items = this.items.filter(function (item) {\n      if (previous !== false) {\n        previous = callback(item);\n      }\n\n      return previous;\n    });\n  }\n\n  if ((0, _is.isObject)(this.items)) {\n    items = Object.keys(this.items).reduce(function (acc, key) {\n      if (previous !== false) {\n        previous = callback(_this.items[key]);\n      }\n\n      if (previous !== false) {\n        acc[key] = _this.items[key];\n      }\n\n      return acc;\n    }, {});\n  }\n\n  return new this.constructor(items);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/takeWhile.js?");

/***/ }),

/***/ "./dist/methods/tap.js":
/*!*****************************!*\
  !*** ./dist/methods/tap.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = tap;\n\nfunction tap(fn) {\n  fn(this);\n  return this;\n}\n\n//# sourceURL=webpack://collect/./dist/methods/tap.js?");

/***/ }),

/***/ "./dist/methods/times.js":
/*!*******************************!*\
  !*** ./dist/methods/times.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = times;\n\nfunction times(n, fn) {\n  for (var iterator = 1; iterator <= n; iterator += 1) {\n    this.items.push(fn(iterator));\n  }\n\n  return this;\n}\n\n;\n\n//# sourceURL=webpack://collect/./dist/methods/times.js?");

/***/ }),

/***/ "./dist/methods/toArray.js":
/*!*********************************!*\
  !*** ./dist/methods/toArray.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = toArray;\n\nfunction toArray() {\n  var collectionInstance = this.constructor;\n\n  function iterate(list, collection) {\n    var childCollection = [];\n\n    if (list instanceof collectionInstance) {\n      list.items.forEach(function (i) {\n        return iterate(i, childCollection);\n      });\n      collection.push(childCollection);\n    } else if (Array.isArray(list)) {\n      list.forEach(function (i) {\n        return iterate(i, childCollection);\n      });\n      collection.push(childCollection);\n    } else {\n      collection.push(list);\n    }\n  }\n\n  if (Array.isArray(this.items)) {\n    var collection = [];\n    this.items.forEach(function (items) {\n      iterate(items, collection);\n    });\n    return collection;\n  }\n\n  return this.values().all();\n}\n\n;\n\n//# sourceURL=webpack://collect/./dist/methods/toArray.js?");

/***/ }),

/***/ "./dist/methods/toJson.js":
/*!********************************!*\
  !*** ./dist/methods/toJson.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = toJson;\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction toJson() {\n  if (_typeof(this.items) === 'object' && !Array.isArray(this.items)) {\n    return JSON.stringify(this.all());\n  }\n\n  return JSON.stringify(this.toArray());\n}\n\n//# sourceURL=webpack://collect/./dist/methods/toJson.js?");

/***/ }),

/***/ "./dist/methods/transform.js":
/*!***********************************!*\
  !*** ./dist/methods/transform.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = transform;\n\nfunction transform(fn) {\n  var _this = this;\n\n  if (Array.isArray(this.items)) {\n    this.items = this.items.map(fn);\n  } else {\n    var collection = {};\n    Object.keys(this.items).forEach(function (key) {\n      collection[key] = fn(_this.items[key], key);\n    });\n    this.items = collection;\n  }\n\n  return this;\n}\n\n//# sourceURL=webpack://collect/./dist/methods/transform.js?");

/***/ }),

/***/ "./dist/methods/undot.js":
/*!*******************************!*\
  !*** ./dist/methods/undot.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = undot;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction undot() {\n  var _this = this;\n\n  if (Array.isArray(this.items)) {\n    return this;\n  }\n\n  var collection = {};\n  Object.keys(this.items).forEach(function (key) {\n    if (key.indexOf('.') !== -1) {\n      var obj = collection;\n      key.split('.').reduce(function (acc, current, index, array) {\n        if (!acc[current]) {\n          acc[current] = {};\n        }\n\n        if (index === array.length - 1) {\n          acc[current] = _this.items[key];\n        }\n\n        return acc[current];\n      }, obj);\n      collection = _objectSpread(_objectSpread({}, collection), obj);\n    } else {\n      collection[key] = _this.items[key];\n    }\n  });\n  return new this.constructor(collection);\n}\n\n;\n\n//# sourceURL=webpack://collect/./dist/methods/undot.js?");

/***/ }),

/***/ "./dist/methods/union.js":
/*!*******************************!*\
  !*** ./dist/methods/union.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = union;\n\nfunction union(object) {\n  var _this = this;\n\n  var collection = JSON.parse(JSON.stringify(this.items));\n  Object.keys(object).forEach(function (prop) {\n    if (_this.items[prop] === undefined) {\n      collection[prop] = object[prop];\n    }\n  });\n  return new this.constructor(collection);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/union.js?");

/***/ }),

/***/ "./dist/methods/unique.js":
/*!********************************!*\
  !*** ./dist/methods/unique.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = unique;\n\nvar _is = __webpack_require__(/*! ../helpers/is */ \"./dist/helpers/is.js\");\n\nfunction unique(key) {\n  var collection;\n\n  if (key === undefined) {\n    collection = this.items.filter(function (element, index, self) {\n      return self.indexOf(element) === index;\n    });\n  } else {\n    collection = [];\n    var usedKeys = [];\n\n    for (var iterator = 0, length = this.items.length; iterator < length; iterator += 1) {\n      var uniqueKey = void 0;\n\n      if ((0, _is.isFunction)(key)) {\n        uniqueKey = key(this.items[iterator]);\n      } else {\n        uniqueKey = this.items[iterator][key];\n      }\n\n      if (usedKeys.indexOf(uniqueKey) === -1) {\n        collection.push(this.items[iterator]);\n        usedKeys.push(uniqueKey);\n      }\n    }\n  }\n\n  return new this.constructor(collection);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/unique.js?");

/***/ }),

/***/ "./dist/methods/unless.js":
/*!********************************!*\
  !*** ./dist/methods/unless.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = when;\n\nfunction when(value, fn, defaultFn) {\n  if (!value) {\n    fn(this);\n  } else {\n    defaultFn(this);\n  }\n}\n\n;\n\n//# sourceURL=webpack://collect/./dist/methods/unless.js?");

/***/ }),

/***/ "./dist/methods/unwrap.js":
/*!********************************!*\
  !*** ./dist/methods/unwrap.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = unwrap;\n\nfunction unwrap(value) {\n  if (value instanceof this.constructor) {\n    return value.all();\n  }\n\n  return value;\n}\n\n;\n\n//# sourceURL=webpack://collect/./dist/methods/unwrap.js?");

/***/ }),

/***/ "./dist/methods/values.js":
/*!********************************!*\
  !*** ./dist/methods/values.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = values;\n\nvar _values = _interopRequireDefault(__webpack_require__(/*! ../helpers/values */ \"./dist/helpers/values.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction values() {\n  return new this.constructor((0, _values[\"default\"])(this.items));\n}\n\n//# sourceURL=webpack://collect/./dist/methods/values.js?");

/***/ }),

/***/ "./dist/methods/when.js":
/*!******************************!*\
  !*** ./dist/methods/when.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = when;\n\nfunction when(value, fn, defaultFn) {\n  if (value) {\n    return fn(this, value);\n  }\n\n  if (defaultFn) {\n    return defaultFn(this, value);\n  }\n\n  return this;\n}\n\n//# sourceURL=webpack://collect/./dist/methods/when.js?");

/***/ }),

/***/ "./dist/methods/whenEmpty.js":
/*!***********************************!*\
  !*** ./dist/methods/whenEmpty.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = whenEmpty;\n\nfunction whenEmpty(fn, defaultFn) {\n  if (Array.isArray(this.items) && !this.items.length) {\n    return fn(this);\n  }\n\n  if (!Object.keys(this.items).length) {\n    return fn(this);\n  }\n\n  if (defaultFn !== undefined) {\n    if (Array.isArray(this.items) && this.items.length) {\n      return defaultFn(this);\n    }\n\n    if (Object.keys(this.items).length) {\n      return defaultFn(this);\n    }\n  }\n\n  return this;\n}\n\n//# sourceURL=webpack://collect/./dist/methods/whenEmpty.js?");

/***/ }),

/***/ "./dist/methods/whenNotEmpty.js":
/*!**************************************!*\
  !*** ./dist/methods/whenNotEmpty.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = whenNotEmpty;\n\nfunction whenNotEmpty(fn, defaultFn) {\n  if (Array.isArray(this.items) && this.items.length) {\n    return fn(this);\n  }\n\n  if (Object.keys(this.items).length) {\n    return fn(this);\n  }\n\n  if (defaultFn !== undefined) {\n    if (Array.isArray(this.items) && !this.items.length) {\n      return defaultFn(this);\n    }\n\n    if (!Object.keys(this.items).length) {\n      return defaultFn(this);\n    }\n  }\n\n  return this;\n}\n\n;\n\n//# sourceURL=webpack://collect/./dist/methods/whenNotEmpty.js?");

/***/ }),

/***/ "./dist/methods/where.js":
/*!*******************************!*\
  !*** ./dist/methods/where.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = where;\n\nvar _values = _interopRequireDefault(__webpack_require__(/*! ../helpers/values */ \"./dist/helpers/values.js\"));\n\nvar _nestedValue = _interopRequireDefault(__webpack_require__(/*! ../helpers/nestedValue */ \"./dist/helpers/nestedValue.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction where(key, operator, value) {\n  var comparisonOperator = operator;\n  var comparisonValue = value;\n  var items = (0, _values[\"default\"])(this.items);\n\n  if (operator === undefined || operator === true) {\n    return new this.constructor(items.filter(function (item) {\n      return (0, _nestedValue[\"default\"])(item, key);\n    }));\n  }\n\n  if (operator === false) {\n    return new this.constructor(items.filter(function (item) {\n      return !(0, _nestedValue[\"default\"])(item, key);\n    }));\n  }\n\n  if (value === undefined) {\n    comparisonValue = operator;\n    comparisonOperator = '===';\n  }\n\n  var collection = items.filter(function (item) {\n    switch (comparisonOperator) {\n      case '==':\n        return (0, _nestedValue[\"default\"])(item, key) === Number(comparisonValue) || (0, _nestedValue[\"default\"])(item, key) === comparisonValue.toString();\n\n      default:\n      case '===':\n        return (0, _nestedValue[\"default\"])(item, key) === comparisonValue;\n\n      case '!=':\n      case '<>':\n        return (0, _nestedValue[\"default\"])(item, key) !== Number(comparisonValue) && (0, _nestedValue[\"default\"])(item, key) !== comparisonValue.toString();\n\n      case '!==':\n        return (0, _nestedValue[\"default\"])(item, key) !== comparisonValue;\n\n      case '<':\n        return (0, _nestedValue[\"default\"])(item, key) < comparisonValue;\n\n      case '<=':\n        return (0, _nestedValue[\"default\"])(item, key) <= comparisonValue;\n\n      case '>':\n        return (0, _nestedValue[\"default\"])(item, key) > comparisonValue;\n\n      case '>=':\n        return (0, _nestedValue[\"default\"])(item, key) >= comparisonValue;\n    }\n  });\n  return new this.constructor(collection);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/where.js?");

/***/ }),

/***/ "./dist/methods/whereBetween.js":
/*!**************************************!*\
  !*** ./dist/methods/whereBetween.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = whereBetween;\n\nfunction whereBetween(key, values) {\n  return this.where(key, '>=', values[0]).where(key, '<=', values[values.length - 1]);\n}\n\n;\n\n//# sourceURL=webpack://collect/./dist/methods/whereBetween.js?");

/***/ }),

/***/ "./dist/methods/whereIn.js":
/*!*********************************!*\
  !*** ./dist/methods/whereIn.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = whereIn;\n\nvar _values = _interopRequireDefault(__webpack_require__(/*! ../helpers/values */ \"./dist/helpers/values.js\"));\n\nvar _nestedValue = _interopRequireDefault(__webpack_require__(/*! ../helpers/nestedValue */ \"./dist/helpers/nestedValue.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction whereIn(key, values) {\n  var items = (0, _values[\"default\"])(values);\n  var collection = this.items.filter(function (item) {\n    return items.indexOf((0, _nestedValue[\"default\"])(item, key)) !== -1;\n  });\n  return new this.constructor(collection);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/whereIn.js?");

/***/ }),

/***/ "./dist/methods/whereInstanceOf.js":
/*!*****************************************!*\
  !*** ./dist/methods/whereInstanceOf.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = whereInstanceOf;\n\nfunction whereInstanceOf(type) {\n  return this.filter(function (item) {\n    return item instanceof type;\n  });\n}\n\n//# sourceURL=webpack://collect/./dist/methods/whereInstanceOf.js?");

/***/ }),

/***/ "./dist/methods/whereNotBetween.js":
/*!*****************************************!*\
  !*** ./dist/methods/whereNotBetween.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = whereNotBetween;\n\nvar _nestedValue = _interopRequireDefault(__webpack_require__(/*! ../helpers/nestedValue */ \"./dist/helpers/nestedValue.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction whereNotBetween(key, values) {\n  return this.filter(function (item) {\n    return (0, _nestedValue[\"default\"])(item, key) < values[0] || (0, _nestedValue[\"default\"])(item, key) > values[values.length - 1];\n  });\n}\n\n//# sourceURL=webpack://collect/./dist/methods/whereNotBetween.js?");

/***/ }),

/***/ "./dist/methods/whereNotIn.js":
/*!************************************!*\
  !*** ./dist/methods/whereNotIn.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = whereNotIn;\n\nvar _values = _interopRequireDefault(__webpack_require__(/*! ../helpers/values */ \"./dist/helpers/values.js\"));\n\nvar _nestedValue = _interopRequireDefault(__webpack_require__(/*! ../helpers/nestedValue */ \"./dist/helpers/nestedValue.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction whereNotIn(key, values) {\n  var items = (0, _values[\"default\"])(values);\n  var collection = this.items.filter(function (item) {\n    return items.indexOf((0, _nestedValue[\"default\"])(item, key)) === -1;\n  });\n  return new this.constructor(collection);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/whereNotIn.js?");

/***/ }),

/***/ "./dist/methods/whereNotNull.js":
/*!**************************************!*\
  !*** ./dist/methods/whereNotNull.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = whereNotNull;\n\nfunction whereNotNull() {\n  var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  return this.where(key, '!==', null);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/whereNotNull.js?");

/***/ }),

/***/ "./dist/methods/whereNull.js":
/*!***********************************!*\
  !*** ./dist/methods/whereNull.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = whereNull;\n\nfunction whereNull() {\n  var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  return this.where(key, '===', null);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/whereNull.js?");

/***/ }),

/***/ "./dist/methods/wrap.js":
/*!******************************!*\
  !*** ./dist/methods/wrap.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = wrap;\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction wrap(value) {\n  if (value instanceof this.constructor) {\n    return value;\n  }\n\n  if (_typeof(value) === 'object') {\n    return new this.constructor(value);\n  }\n\n  return new this.constructor([value]);\n}\n\n;\n\n//# sourceURL=webpack://collect/./dist/methods/wrap.js?");

/***/ }),

/***/ "./dist/methods/zip.js":
/*!*****************************!*\
  !*** ./dist/methods/zip.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = zip;\n\nfunction zip(array) {\n  var _this = this;\n\n  var values = array;\n\n  if (values instanceof this.constructor) {\n    values = values.all();\n  }\n\n  var collection = this.items.map(function (item, index) {\n    return new _this.constructor([item, values[index]]);\n  });\n  return new this.constructor(collection);\n}\n\n//# sourceURL=webpack://collect/./dist/methods/zip.js?");

/***/ }),

/***/ "./node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack://collect/./node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js?");

/***/ })

/******/ });