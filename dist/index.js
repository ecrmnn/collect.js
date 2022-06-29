"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.collect = exports.Collection = void 0;

var _all2 = _interopRequireDefault(require("./methods/all"));

var _average2 = _interopRequireDefault(require("./methods/average"));

var _avg2 = _interopRequireDefault(require("./methods/avg"));

var _chunk2 = _interopRequireDefault(require("./methods/chunk"));

var _collapse2 = _interopRequireDefault(require("./methods/collapse"));

var _combine2 = _interopRequireDefault(require("./methods/combine"));

var _concat2 = _interopRequireDefault(require("./methods/concat"));

var _contains2 = _interopRequireDefault(require("./methods/contains"));

var _containsOneItem2 = _interopRequireDefault(require("./methods/containsOneItem"));

var _count2 = _interopRequireDefault(require("./methods/count"));

var _countBy2 = _interopRequireDefault(require("./methods/countBy"));

var _crossJoin2 = _interopRequireDefault(require("./methods/crossJoin"));

var _dd2 = _interopRequireDefault(require("./methods/dd"));

var _diff2 = _interopRequireDefault(require("./methods/diff"));

var _diffAssoc2 = _interopRequireDefault(require("./methods/diffAssoc"));

var _diffKeys2 = _interopRequireDefault(require("./methods/diffKeys"));

var _doesntContain2 = _interopRequireDefault(require("./methods/doesntContain"));

var _dump2 = _interopRequireDefault(require("./methods/dump"));

var _duplicates2 = _interopRequireDefault(require("./methods/duplicates"));

var _each2 = _interopRequireDefault(require("./methods/each"));

var _eachSpread2 = _interopRequireDefault(require("./methods/eachSpread"));

var _every2 = _interopRequireDefault(require("./methods/every"));

var _except2 = _interopRequireDefault(require("./methods/except"));

var _filter2 = _interopRequireDefault(require("./methods/filter"));

var _first2 = _interopRequireDefault(require("./methods/first"));

var _firstOrFail2 = _interopRequireDefault(require("./methods/firstOrFail"));

var _firstWhere2 = _interopRequireDefault(require("./methods/firstWhere"));

var _flatMap2 = _interopRequireDefault(require("./methods/flatMap"));

var _flatten2 = _interopRequireDefault(require("./methods/flatten"));

var _flip2 = _interopRequireDefault(require("./methods/flip"));

var _forPage2 = _interopRequireDefault(require("./methods/forPage"));

var _forget2 = _interopRequireDefault(require("./methods/forget"));

var _get2 = _interopRequireDefault(require("./methods/get"));

var _groupBy2 = _interopRequireDefault(require("./methods/groupBy"));

var _has2 = _interopRequireDefault(require("./methods/has"));

var _implode2 = _interopRequireDefault(require("./methods/implode"));

var _intersect2 = _interopRequireDefault(require("./methods/intersect"));

var _intersectByKeys2 = _interopRequireDefault(require("./methods/intersectByKeys"));

var _isEmpty2 = _interopRequireDefault(require("./methods/isEmpty"));

var _isNotEmpty2 = _interopRequireDefault(require("./methods/isNotEmpty"));

var _join2 = _interopRequireDefault(require("./methods/join"));

var _keyBy2 = _interopRequireDefault(require("./methods/keyBy"));

var _keys2 = _interopRequireDefault(require("./methods/keys"));

var _last2 = _interopRequireDefault(require("./methods/last"));

var _macro2 = _interopRequireDefault(require("./methods/macro"));

var _make2 = _interopRequireDefault(require("./methods/make"));

var _map2 = _interopRequireDefault(require("./methods/map"));

var _mapSpread2 = _interopRequireDefault(require("./methods/mapSpread"));

var _mapToDictionary2 = _interopRequireDefault(require("./methods/mapToDictionary"));

var _mapInto2 = _interopRequireDefault(require("./methods/mapInto"));

var _mapToGroups2 = _interopRequireDefault(require("./methods/mapToGroups"));

var _mapWithKeys2 = _interopRequireDefault(require("./methods/mapWithKeys"));

var _max2 = _interopRequireDefault(require("./methods/max"));

var _median2 = _interopRequireDefault(require("./methods/median"));

var _merge2 = _interopRequireDefault(require("./methods/merge"));

var _mergeRecursive2 = _interopRequireDefault(require("./methods/mergeRecursive"));

var _min2 = _interopRequireDefault(require("./methods/min"));

var _mode2 = _interopRequireDefault(require("./methods/mode"));

var _nth2 = _interopRequireDefault(require("./methods/nth"));

var _only2 = _interopRequireDefault(require("./methods/only"));

var _pad2 = _interopRequireDefault(require("./methods/pad"));

var _partition2 = _interopRequireDefault(require("./methods/partition"));

var _pipe2 = _interopRequireDefault(require("./methods/pipe"));

var _pluck2 = _interopRequireDefault(require("./methods/pluck"));

var _pop2 = _interopRequireDefault(require("./methods/pop"));

var _prepend2 = _interopRequireDefault(require("./methods/prepend"));

var _pull2 = _interopRequireDefault(require("./methods/pull"));

var _push2 = _interopRequireDefault(require("./methods/push"));

var _put2 = _interopRequireDefault(require("./methods/put"));

var _random2 = _interopRequireDefault(require("./methods/random"));

var _reduce2 = _interopRequireDefault(require("./methods/reduce"));

var _reject2 = _interopRequireDefault(require("./methods/reject"));

var _replace2 = _interopRequireDefault(require("./methods/replace"));

var _replaceRecursive2 = _interopRequireDefault(require("./methods/replaceRecursive"));

var _reverse2 = _interopRequireDefault(require("./methods/reverse"));

var _search2 = _interopRequireDefault(require("./methods/search"));

var _shift2 = _interopRequireDefault(require("./methods/shift"));

var _shuffle2 = _interopRequireDefault(require("./methods/shuffle"));

var _skip2 = _interopRequireDefault(require("./methods/skip"));

var _skipUntil2 = _interopRequireDefault(require("./methods/skipUntil"));

var _skipWhile2 = _interopRequireDefault(require("./methods/skipWhile"));

var _slice2 = _interopRequireDefault(require("./methods/slice"));

var _sole2 = _interopRequireDefault(require("./methods/sole"));

var _some2 = _interopRequireDefault(require("./methods/some"));

var _sort2 = _interopRequireDefault(require("./methods/sort"));

var _sortDesc2 = _interopRequireDefault(require("./methods/sortDesc"));

var _sortBy2 = _interopRequireDefault(require("./methods/sortBy"));

var _sortByDesc2 = _interopRequireDefault(require("./methods/sortByDesc"));

var _sortKeys2 = _interopRequireDefault(require("./methods/sortKeys"));

var _sortKeysDesc2 = _interopRequireDefault(require("./methods/sortKeysDesc"));

var _splice2 = _interopRequireDefault(require("./methods/splice"));

var _split2 = _interopRequireDefault(require("./methods/split"));

var _sum2 = _interopRequireDefault(require("./methods/sum"));

var _take2 = _interopRequireDefault(require("./methods/take"));

var _takeUntil2 = _interopRequireDefault(require("./methods/takeUntil"));

var _takeWhile2 = _interopRequireDefault(require("./methods/takeWhile"));

var _tap2 = _interopRequireDefault(require("./methods/tap"));

var _times2 = _interopRequireDefault(require("./methods/times"));

var _toArray2 = _interopRequireDefault(require("./methods/toArray"));

var _toJson2 = _interopRequireDefault(require("./methods/toJson"));

var _transform2 = _interopRequireDefault(require("./methods/transform"));

var _undot2 = _interopRequireDefault(require("./methods/undot"));

var _union2 = _interopRequireDefault(require("./methods/union"));

var _unique2 = _interopRequireDefault(require("./methods/unique"));

var _unless2 = _interopRequireDefault(require("./methods/unless"));

var _unwrap2 = _interopRequireDefault(require("./methods/unwrap"));

var _values2 = _interopRequireDefault(require("./methods/values"));

var _when2 = _interopRequireDefault(require("./methods/when"));

var _whenEmpty2 = _interopRequireDefault(require("./methods/whenEmpty"));

var _whenNotEmpty2 = _interopRequireDefault(require("./methods/whenNotEmpty"));

var _where2 = _interopRequireDefault(require("./methods/where"));

var _whereBetween2 = _interopRequireDefault(require("./methods/whereBetween"));

var _whereIn2 = _interopRequireDefault(require("./methods/whereIn"));

var _whereInstanceOf2 = _interopRequireDefault(require("./methods/whereInstanceOf"));

var _whereNotBetween2 = _interopRequireDefault(require("./methods/whereNotBetween"));

var _whereNotIn2 = _interopRequireDefault(require("./methods/whereNotIn"));

var _whereNull2 = _interopRequireDefault(require("./methods/whereNull"));

var _whereNotNull2 = _interopRequireDefault(require("./methods/whereNotNull"));

var _wrap2 = _interopRequireDefault(require("./methods/wrap"));

var _zip2 = _interopRequireDefault(require("./methods/zip"));

var _symbol = _interopRequireDefault(require("./methods/symbol.iterator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Collection = /*#__PURE__*/function () {
  function Collection(collection) {
    _classCallCheck(this, Collection);

    if (collection !== undefined && !Array.isArray(collection) && _typeof(collection) !== 'object') {
      this.items = [collection];
    } else if (collection instanceof this.constructor) {
      this.items = collection.all();
    } else {
      this.items = collection || [];
    }
  }

  _createClass(Collection, [{
    key: "all",
    value: function all() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _all2["default"].call.apply(_all2["default"], [this].concat(args));
    }
  }, {
    key: "average",
    value: function average() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _average2["default"].call.apply(_average2["default"], [this].concat(args));
    }
  }, {
    key: "avg",
    value: function avg() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _avg2["default"].call.apply(_avg2["default"], [this].concat(args));
    }
  }, {
    key: "chunk",
    value: function chunk() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _chunk2["default"].call.apply(_chunk2["default"], [this].concat(args));
    }
  }, {
    key: "collapse",
    value: function collapse() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _collapse2["default"].call.apply(_collapse2["default"], [this].concat(args));
    }
  }, {
    key: "combine",
    value: function combine() {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _combine2["default"].call.apply(_combine2["default"], [this].concat(args));
    }
  }, {
    key: "concat",
    value: function concat() {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _concat2["default"].call.apply(_concat2["default"], [this].concat(args));
    }
  }, {
    key: "contains",
    value: function contains() {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }

      return _contains2["default"].call.apply(_contains2["default"], [this].concat(args));
    }
  }, {
    key: "containsOneItem",
    value: function containsOneItem() {
      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }

      return _containsOneItem2["default"].call.apply(_containsOneItem2["default"], [this].concat(args));
    }
  }, {
    key: "count",
    value: function count() {
      for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        args[_key10] = arguments[_key10];
      }

      return _count2["default"].call.apply(_count2["default"], [this].concat(args));
    }
  }, {
    key: "countBy",
    value: function countBy() {
      for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        args[_key11] = arguments[_key11];
      }

      return _countBy2["default"].call.apply(_countBy2["default"], [this].concat(args));
    }
  }, {
    key: "crossJoin",
    value: function crossJoin() {
      for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
        args[_key12] = arguments[_key12];
      }

      return _crossJoin2["default"].call.apply(_crossJoin2["default"], [this].concat(args));
    }
  }, {
    key: "dd",
    value: function dd() {
      for (var _len13 = arguments.length, args = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
        args[_key13] = arguments[_key13];
      }

      return _dd2["default"].call.apply(_dd2["default"], [this].concat(args));
    }
  }, {
    key: "diff",
    value: function diff() {
      for (var _len14 = arguments.length, args = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
        args[_key14] = arguments[_key14];
      }

      return _diff2["default"].call.apply(_diff2["default"], [this].concat(args));
    }
  }, {
    key: "diffAssoc",
    value: function diffAssoc() {
      for (var _len15 = arguments.length, args = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
        args[_key15] = arguments[_key15];
      }

      return _diffAssoc2["default"].call.apply(_diffAssoc2["default"], [this].concat(args));
    }
  }, {
    key: "diffKeys",
    value: function diffKeys() {
      for (var _len16 = arguments.length, args = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
        args[_key16] = arguments[_key16];
      }

      return _diffKeys2["default"].call.apply(_diffKeys2["default"], [this].concat(args));
    }
  }, {
    key: "doesntContain",
    value: function doesntContain() {
      for (var _len17 = arguments.length, args = new Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
        args[_key17] = arguments[_key17];
      }

      return _doesntContain2["default"].call.apply(_doesntContain2["default"], [this].concat(args));
    }
  }, {
    key: "dump",
    value: function dump() {
      for (var _len18 = arguments.length, args = new Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
        args[_key18] = arguments[_key18];
      }

      return _dump2["default"].call.apply(_dump2["default"], [this].concat(args));
    }
  }, {
    key: "duplicates",
    value: function duplicates() {
      for (var _len19 = arguments.length, args = new Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
        args[_key19] = arguments[_key19];
      }

      return _duplicates2["default"].call.apply(_duplicates2["default"], [this].concat(args));
    }
  }, {
    key: "each",
    value: function each() {
      for (var _len20 = arguments.length, args = new Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
        args[_key20] = arguments[_key20];
      }

      return _each2["default"].call.apply(_each2["default"], [this].concat(args));
    }
  }, {
    key: "eachSpread",
    value: function eachSpread() {
      for (var _len21 = arguments.length, args = new Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
        args[_key21] = arguments[_key21];
      }

      return _eachSpread2["default"].call.apply(_eachSpread2["default"], [this].concat(args));
    }
  }, {
    key: "every",
    value: function every() {
      for (var _len22 = arguments.length, args = new Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
        args[_key22] = arguments[_key22];
      }

      return _every2["default"].call.apply(_every2["default"], [this].concat(args));
    }
  }, {
    key: "except",
    value: function except() {
      for (var _len23 = arguments.length, args = new Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
        args[_key23] = arguments[_key23];
      }

      return _except2["default"].call.apply(_except2["default"], [this].concat(args));
    }
  }, {
    key: "filter",
    value: function filter() {
      for (var _len24 = arguments.length, args = new Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
        args[_key24] = arguments[_key24];
      }

      return _filter2["default"].call.apply(_filter2["default"], [this].concat(args));
    }
  }, {
    key: "first",
    value: function first() {
      for (var _len25 = arguments.length, args = new Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {
        args[_key25] = arguments[_key25];
      }

      return _first2["default"].call.apply(_first2["default"], [this].concat(args));
    }
  }, {
    key: "firstOrFail",
    value: function firstOrFail() {
      for (var _len26 = arguments.length, args = new Array(_len26), _key26 = 0; _key26 < _len26; _key26++) {
        args[_key26] = arguments[_key26];
      }

      return _firstOrFail2["default"].call.apply(_firstOrFail2["default"], [this].concat(args));
    }
  }, {
    key: "firstWhere",
    value: function firstWhere() {
      for (var _len27 = arguments.length, args = new Array(_len27), _key27 = 0; _key27 < _len27; _key27++) {
        args[_key27] = arguments[_key27];
      }

      return _firstWhere2["default"].call.apply(_firstWhere2["default"], [this].concat(args));
    }
  }, {
    key: "flatMap",
    value: function flatMap() {
      for (var _len28 = arguments.length, args = new Array(_len28), _key28 = 0; _key28 < _len28; _key28++) {
        args[_key28] = arguments[_key28];
      }

      return _flatMap2["default"].call.apply(_flatMap2["default"], [this].concat(args));
    }
  }, {
    key: "flatten",
    value: function flatten() {
      for (var _len29 = arguments.length, args = new Array(_len29), _key29 = 0; _key29 < _len29; _key29++) {
        args[_key29] = arguments[_key29];
      }

      return _flatten2["default"].call.apply(_flatten2["default"], [this].concat(args));
    }
  }, {
    key: "flip",
    value: function flip() {
      for (var _len30 = arguments.length, args = new Array(_len30), _key30 = 0; _key30 < _len30; _key30++) {
        args[_key30] = arguments[_key30];
      }

      return _flip2["default"].call.apply(_flip2["default"], [this].concat(args));
    }
  }, {
    key: "forPage",
    value: function forPage() {
      for (var _len31 = arguments.length, args = new Array(_len31), _key31 = 0; _key31 < _len31; _key31++) {
        args[_key31] = arguments[_key31];
      }

      return _forPage2["default"].call.apply(_forPage2["default"], [this].concat(args));
    }
  }, {
    key: "forget",
    value: function forget() {
      for (var _len32 = arguments.length, args = new Array(_len32), _key32 = 0; _key32 < _len32; _key32++) {
        args[_key32] = arguments[_key32];
      }

      return _forget2["default"].call.apply(_forget2["default"], [this].concat(args));
    }
  }, {
    key: "get",
    value: function get() {
      for (var _len33 = arguments.length, args = new Array(_len33), _key33 = 0; _key33 < _len33; _key33++) {
        args[_key33] = arguments[_key33];
      }

      return _get2["default"].call.apply(_get2["default"], [this].concat(args));
    }
  }, {
    key: "groupBy",
    value: function groupBy() {
      for (var _len34 = arguments.length, args = new Array(_len34), _key34 = 0; _key34 < _len34; _key34++) {
        args[_key34] = arguments[_key34];
      }

      return _groupBy2["default"].call.apply(_groupBy2["default"], [this].concat(args));
    }
  }, {
    key: "has",
    value: function has() {
      for (var _len35 = arguments.length, args = new Array(_len35), _key35 = 0; _key35 < _len35; _key35++) {
        args[_key35] = arguments[_key35];
      }

      return _has2["default"].call.apply(_has2["default"], [this].concat(args));
    }
  }, {
    key: "implode",
    value: function implode() {
      for (var _len36 = arguments.length, args = new Array(_len36), _key36 = 0; _key36 < _len36; _key36++) {
        args[_key36] = arguments[_key36];
      }

      return _implode2["default"].call.apply(_implode2["default"], [this].concat(args));
    }
  }, {
    key: "intersect",
    value: function intersect() {
      for (var _len37 = arguments.length, args = new Array(_len37), _key37 = 0; _key37 < _len37; _key37++) {
        args[_key37] = arguments[_key37];
      }

      return _intersect2["default"].call.apply(_intersect2["default"], [this].concat(args));
    }
  }, {
    key: "intersectByKeys",
    value: function intersectByKeys() {
      for (var _len38 = arguments.length, args = new Array(_len38), _key38 = 0; _key38 < _len38; _key38++) {
        args[_key38] = arguments[_key38];
      }

      return _intersectByKeys2["default"].call.apply(_intersectByKeys2["default"], [this].concat(args));
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      for (var _len39 = arguments.length, args = new Array(_len39), _key39 = 0; _key39 < _len39; _key39++) {
        args[_key39] = arguments[_key39];
      }

      return _isEmpty2["default"].call.apply(_isEmpty2["default"], [this].concat(args));
    }
  }, {
    key: "isNotEmpty",
    value: function isNotEmpty() {
      for (var _len40 = arguments.length, args = new Array(_len40), _key40 = 0; _key40 < _len40; _key40++) {
        args[_key40] = arguments[_key40];
      }

      return _isNotEmpty2["default"].call.apply(_isNotEmpty2["default"], [this].concat(args));
    }
  }, {
    key: "join",
    value: function join() {
      for (var _len41 = arguments.length, args = new Array(_len41), _key41 = 0; _key41 < _len41; _key41++) {
        args[_key41] = arguments[_key41];
      }

      return _join2["default"].call.apply(_join2["default"], [this].concat(args));
    }
  }, {
    key: "keyBy",
    value: function keyBy() {
      for (var _len42 = arguments.length, args = new Array(_len42), _key42 = 0; _key42 < _len42; _key42++) {
        args[_key42] = arguments[_key42];
      }

      return _keyBy2["default"].call.apply(_keyBy2["default"], [this].concat(args));
    }
  }, {
    key: "keys",
    value: function keys() {
      for (var _len43 = arguments.length, args = new Array(_len43), _key43 = 0; _key43 < _len43; _key43++) {
        args[_key43] = arguments[_key43];
      }

      return _keys2["default"].call.apply(_keys2["default"], [this].concat(args));
    }
  }, {
    key: "last",
    value: function last() {
      for (var _len44 = arguments.length, args = new Array(_len44), _key44 = 0; _key44 < _len44; _key44++) {
        args[_key44] = arguments[_key44];
      }

      return _last2["default"].call.apply(_last2["default"], [this].concat(args));
    }
  }, {
    key: "macro",
    value: function macro() {
      for (var _len45 = arguments.length, args = new Array(_len45), _key45 = 0; _key45 < _len45; _key45++) {
        args[_key45] = arguments[_key45];
      }

      return _macro2["default"].call.apply(_macro2["default"], [this].concat(args));
    }
  }, {
    key: "make",
    value: function make() {
      for (var _len46 = arguments.length, args = new Array(_len46), _key46 = 0; _key46 < _len46; _key46++) {
        args[_key46] = arguments[_key46];
      }

      return _make2["default"].call.apply(_make2["default"], [this].concat(args));
    }
  }, {
    key: "map",
    value: function map() {
      for (var _len47 = arguments.length, args = new Array(_len47), _key47 = 0; _key47 < _len47; _key47++) {
        args[_key47] = arguments[_key47];
      }

      return _map2["default"].call.apply(_map2["default"], [this].concat(args));
    }
  }, {
    key: "mapSpread",
    value: function mapSpread() {
      for (var _len48 = arguments.length, args = new Array(_len48), _key48 = 0; _key48 < _len48; _key48++) {
        args[_key48] = arguments[_key48];
      }

      return _mapSpread2["default"].call.apply(_mapSpread2["default"], [this].concat(args));
    }
  }, {
    key: "mapToDictionary",
    value: function mapToDictionary() {
      for (var _len49 = arguments.length, args = new Array(_len49), _key49 = 0; _key49 < _len49; _key49++) {
        args[_key49] = arguments[_key49];
      }

      return _mapToDictionary2["default"].call.apply(_mapToDictionary2["default"], [this].concat(args));
    }
  }, {
    key: "mapInto",
    value: function mapInto() {
      for (var _len50 = arguments.length, args = new Array(_len50), _key50 = 0; _key50 < _len50; _key50++) {
        args[_key50] = arguments[_key50];
      }

      return _mapInto2["default"].call.apply(_mapInto2["default"], [this].concat(args));
    }
  }, {
    key: "mapToGroups",
    value: function mapToGroups() {
      for (var _len51 = arguments.length, args = new Array(_len51), _key51 = 0; _key51 < _len51; _key51++) {
        args[_key51] = arguments[_key51];
      }

      return _mapToGroups2["default"].call.apply(_mapToGroups2["default"], [this].concat(args));
    }
  }, {
    key: "mapWithKeys",
    value: function mapWithKeys() {
      for (var _len52 = arguments.length, args = new Array(_len52), _key52 = 0; _key52 < _len52; _key52++) {
        args[_key52] = arguments[_key52];
      }

      return _mapWithKeys2["default"].call.apply(_mapWithKeys2["default"], [this].concat(args));
    }
  }, {
    key: "max",
    value: function max() {
      for (var _len53 = arguments.length, args = new Array(_len53), _key53 = 0; _key53 < _len53; _key53++) {
        args[_key53] = arguments[_key53];
      }

      return _max2["default"].call.apply(_max2["default"], [this].concat(args));
    }
  }, {
    key: "median",
    value: function median() {
      for (var _len54 = arguments.length, args = new Array(_len54), _key54 = 0; _key54 < _len54; _key54++) {
        args[_key54] = arguments[_key54];
      }

      return _median2["default"].call.apply(_median2["default"], [this].concat(args));
    }
  }, {
    key: "merge",
    value: function merge() {
      for (var _len55 = arguments.length, args = new Array(_len55), _key55 = 0; _key55 < _len55; _key55++) {
        args[_key55] = arguments[_key55];
      }

      return _merge2["default"].call.apply(_merge2["default"], [this].concat(args));
    }
  }, {
    key: "mergeRecursive",
    value: function mergeRecursive() {
      for (var _len56 = arguments.length, args = new Array(_len56), _key56 = 0; _key56 < _len56; _key56++) {
        args[_key56] = arguments[_key56];
      }

      return _mergeRecursive2["default"].call.apply(_mergeRecursive2["default"], [this].concat(args));
    }
  }, {
    key: "min",
    value: function min() {
      for (var _len57 = arguments.length, args = new Array(_len57), _key57 = 0; _key57 < _len57; _key57++) {
        args[_key57] = arguments[_key57];
      }

      return _min2["default"].call.apply(_min2["default"], [this].concat(args));
    }
  }, {
    key: "mode",
    value: function mode() {
      for (var _len58 = arguments.length, args = new Array(_len58), _key58 = 0; _key58 < _len58; _key58++) {
        args[_key58] = arguments[_key58];
      }

      return _mode2["default"].call.apply(_mode2["default"], [this].concat(args));
    }
  }, {
    key: "nth",
    value: function nth() {
      for (var _len59 = arguments.length, args = new Array(_len59), _key59 = 0; _key59 < _len59; _key59++) {
        args[_key59] = arguments[_key59];
      }

      return _nth2["default"].call.apply(_nth2["default"], [this].concat(args));
    }
  }, {
    key: "only",
    value: function only() {
      for (var _len60 = arguments.length, args = new Array(_len60), _key60 = 0; _key60 < _len60; _key60++) {
        args[_key60] = arguments[_key60];
      }

      return _only2["default"].call.apply(_only2["default"], [this].concat(args));
    }
  }, {
    key: "pad",
    value: function pad() {
      for (var _len61 = arguments.length, args = new Array(_len61), _key61 = 0; _key61 < _len61; _key61++) {
        args[_key61] = arguments[_key61];
      }

      return _pad2["default"].call.apply(_pad2["default"], [this].concat(args));
    }
  }, {
    key: "partition",
    value: function partition() {
      for (var _len62 = arguments.length, args = new Array(_len62), _key62 = 0; _key62 < _len62; _key62++) {
        args[_key62] = arguments[_key62];
      }

      return _partition2["default"].call.apply(_partition2["default"], [this].concat(args));
    }
  }, {
    key: "pipe",
    value: function pipe() {
      for (var _len63 = arguments.length, args = new Array(_len63), _key63 = 0; _key63 < _len63; _key63++) {
        args[_key63] = arguments[_key63];
      }

      return _pipe2["default"].call.apply(_pipe2["default"], [this].concat(args));
    }
  }, {
    key: "pluck",
    value: function pluck() {
      for (var _len64 = arguments.length, args = new Array(_len64), _key64 = 0; _key64 < _len64; _key64++) {
        args[_key64] = arguments[_key64];
      }

      return _pluck2["default"].call.apply(_pluck2["default"], [this].concat(args));
    }
  }, {
    key: "pop",
    value: function pop() {
      for (var _len65 = arguments.length, args = new Array(_len65), _key65 = 0; _key65 < _len65; _key65++) {
        args[_key65] = arguments[_key65];
      }

      return _pop2["default"].call.apply(_pop2["default"], [this].concat(args));
    }
  }, {
    key: "prepend",
    value: function prepend() {
      for (var _len66 = arguments.length, args = new Array(_len66), _key66 = 0; _key66 < _len66; _key66++) {
        args[_key66] = arguments[_key66];
      }

      return _prepend2["default"].call.apply(_prepend2["default"], [this].concat(args));
    }
  }, {
    key: "pull",
    value: function pull() {
      for (var _len67 = arguments.length, args = new Array(_len67), _key67 = 0; _key67 < _len67; _key67++) {
        args[_key67] = arguments[_key67];
      }

      return _pull2["default"].call.apply(_pull2["default"], [this].concat(args));
    }
  }, {
    key: "push",
    value: function push() {
      for (var _len68 = arguments.length, args = new Array(_len68), _key68 = 0; _key68 < _len68; _key68++) {
        args[_key68] = arguments[_key68];
      }

      return _push2["default"].call.apply(_push2["default"], [this].concat(args));
    }
  }, {
    key: "put",
    value: function put() {
      for (var _len69 = arguments.length, args = new Array(_len69), _key69 = 0; _key69 < _len69; _key69++) {
        args[_key69] = arguments[_key69];
      }

      return _put2["default"].call.apply(_put2["default"], [this].concat(args));
    }
  }, {
    key: "random",
    value: function random() {
      for (var _len70 = arguments.length, args = new Array(_len70), _key70 = 0; _key70 < _len70; _key70++) {
        args[_key70] = arguments[_key70];
      }

      return _random2["default"].call.apply(_random2["default"], [this].concat(args));
    }
  }, {
    key: "reduce",
    value: function reduce() {
      for (var _len71 = arguments.length, args = new Array(_len71), _key71 = 0; _key71 < _len71; _key71++) {
        args[_key71] = arguments[_key71];
      }

      return _reduce2["default"].call.apply(_reduce2["default"], [this].concat(args));
    }
  }, {
    key: "reject",
    value: function reject() {
      for (var _len72 = arguments.length, args = new Array(_len72), _key72 = 0; _key72 < _len72; _key72++) {
        args[_key72] = arguments[_key72];
      }

      return _reject2["default"].call.apply(_reject2["default"], [this].concat(args));
    }
  }, {
    key: "replace",
    value: function replace() {
      for (var _len73 = arguments.length, args = new Array(_len73), _key73 = 0; _key73 < _len73; _key73++) {
        args[_key73] = arguments[_key73];
      }

      return _replace2["default"].call.apply(_replace2["default"], [this].concat(args));
    }
  }, {
    key: "replaceRecursive",
    value: function replaceRecursive() {
      for (var _len74 = arguments.length, args = new Array(_len74), _key74 = 0; _key74 < _len74; _key74++) {
        args[_key74] = arguments[_key74];
      }

      return _replaceRecursive2["default"].call.apply(_replaceRecursive2["default"], [this].concat(args));
    }
  }, {
    key: "reverse",
    value: function reverse() {
      for (var _len75 = arguments.length, args = new Array(_len75), _key75 = 0; _key75 < _len75; _key75++) {
        args[_key75] = arguments[_key75];
      }

      return _reverse2["default"].call.apply(_reverse2["default"], [this].concat(args));
    }
  }, {
    key: "search",
    value: function search() {
      for (var _len76 = arguments.length, args = new Array(_len76), _key76 = 0; _key76 < _len76; _key76++) {
        args[_key76] = arguments[_key76];
      }

      return _search2["default"].call.apply(_search2["default"], [this].concat(args));
    }
  }, {
    key: "shift",
    value: function shift() {
      for (var _len77 = arguments.length, args = new Array(_len77), _key77 = 0; _key77 < _len77; _key77++) {
        args[_key77] = arguments[_key77];
      }

      return _shift2["default"].call.apply(_shift2["default"], [this].concat(args));
    }
  }, {
    key: "shuffle",
    value: function shuffle() {
      for (var _len78 = arguments.length, args = new Array(_len78), _key78 = 0; _key78 < _len78; _key78++) {
        args[_key78] = arguments[_key78];
      }

      return _shuffle2["default"].call.apply(_shuffle2["default"], [this].concat(args));
    }
  }, {
    key: "skip",
    value: function skip() {
      for (var _len79 = arguments.length, args = new Array(_len79), _key79 = 0; _key79 < _len79; _key79++) {
        args[_key79] = arguments[_key79];
      }

      return _skip2["default"].call.apply(_skip2["default"], [this].concat(args));
    }
  }, {
    key: "skipUntil",
    value: function skipUntil() {
      for (var _len80 = arguments.length, args = new Array(_len80), _key80 = 0; _key80 < _len80; _key80++) {
        args[_key80] = arguments[_key80];
      }

      return _skipUntil2["default"].call.apply(_skipUntil2["default"], [this].concat(args));
    }
  }, {
    key: "skipWhile",
    value: function skipWhile() {
      for (var _len81 = arguments.length, args = new Array(_len81), _key81 = 0; _key81 < _len81; _key81++) {
        args[_key81] = arguments[_key81];
      }

      return _skipWhile2["default"].call.apply(_skipWhile2["default"], [this].concat(args));
    }
  }, {
    key: "slice",
    value: function slice() {
      for (var _len82 = arguments.length, args = new Array(_len82), _key82 = 0; _key82 < _len82; _key82++) {
        args[_key82] = arguments[_key82];
      }

      return _slice2["default"].call.apply(_slice2["default"], [this].concat(args));
    }
  }, {
    key: "sole",
    value: function sole() {
      for (var _len83 = arguments.length, args = new Array(_len83), _key83 = 0; _key83 < _len83; _key83++) {
        args[_key83] = arguments[_key83];
      }

      return _sole2["default"].call.apply(_sole2["default"], [this].concat(args));
    }
  }, {
    key: "some",
    value: function some() {
      for (var _len84 = arguments.length, args = new Array(_len84), _key84 = 0; _key84 < _len84; _key84++) {
        args[_key84] = arguments[_key84];
      }

      return _some2["default"].call.apply(_some2["default"], [this].concat(args));
    }
  }, {
    key: "sort",
    value: function sort() {
      for (var _len85 = arguments.length, args = new Array(_len85), _key85 = 0; _key85 < _len85; _key85++) {
        args[_key85] = arguments[_key85];
      }

      return _sort2["default"].call.apply(_sort2["default"], [this].concat(args));
    }
  }, {
    key: "sortDesc",
    value: function sortDesc() {
      for (var _len86 = arguments.length, args = new Array(_len86), _key86 = 0; _key86 < _len86; _key86++) {
        args[_key86] = arguments[_key86];
      }

      return _sortDesc2["default"].call.apply(_sortDesc2["default"], [this].concat(args));
    }
  }, {
    key: "sortBy",
    value: function sortBy() {
      for (var _len87 = arguments.length, args = new Array(_len87), _key87 = 0; _key87 < _len87; _key87++) {
        args[_key87] = arguments[_key87];
      }

      return _sortBy2["default"].call.apply(_sortBy2["default"], [this].concat(args));
    }
  }, {
    key: "sortByDesc",
    value: function sortByDesc() {
      for (var _len88 = arguments.length, args = new Array(_len88), _key88 = 0; _key88 < _len88; _key88++) {
        args[_key88] = arguments[_key88];
      }

      return _sortByDesc2["default"].call.apply(_sortByDesc2["default"], [this].concat(args));
    }
  }, {
    key: "sortKeys",
    value: function sortKeys() {
      for (var _len89 = arguments.length, args = new Array(_len89), _key89 = 0; _key89 < _len89; _key89++) {
        args[_key89] = arguments[_key89];
      }

      return _sortKeys2["default"].call.apply(_sortKeys2["default"], [this].concat(args));
    }
  }, {
    key: "sortKeysDesc",
    value: function sortKeysDesc() {
      for (var _len90 = arguments.length, args = new Array(_len90), _key90 = 0; _key90 < _len90; _key90++) {
        args[_key90] = arguments[_key90];
      }

      return _sortKeysDesc2["default"].call.apply(_sortKeysDesc2["default"], [this].concat(args));
    }
  }, {
    key: "splice",
    value: function splice() {
      for (var _len91 = arguments.length, args = new Array(_len91), _key91 = 0; _key91 < _len91; _key91++) {
        args[_key91] = arguments[_key91];
      }

      return _splice2["default"].call.apply(_splice2["default"], [this].concat(args));
    }
  }, {
    key: "split",
    value: function split() {
      for (var _len92 = arguments.length, args = new Array(_len92), _key92 = 0; _key92 < _len92; _key92++) {
        args[_key92] = arguments[_key92];
      }

      return _split2["default"].call.apply(_split2["default"], [this].concat(args));
    }
  }, {
    key: "sum",
    value: function sum() {
      for (var _len93 = arguments.length, args = new Array(_len93), _key93 = 0; _key93 < _len93; _key93++) {
        args[_key93] = arguments[_key93];
      }

      return _sum2["default"].call.apply(_sum2["default"], [this].concat(args));
    }
  }, {
    key: "take",
    value: function take() {
      for (var _len94 = arguments.length, args = new Array(_len94), _key94 = 0; _key94 < _len94; _key94++) {
        args[_key94] = arguments[_key94];
      }

      return _take2["default"].call.apply(_take2["default"], [this].concat(args));
    }
  }, {
    key: "takeUntil",
    value: function takeUntil() {
      for (var _len95 = arguments.length, args = new Array(_len95), _key95 = 0; _key95 < _len95; _key95++) {
        args[_key95] = arguments[_key95];
      }

      return _takeUntil2["default"].call.apply(_takeUntil2["default"], [this].concat(args));
    }
  }, {
    key: "takeWhile",
    value: function takeWhile() {
      for (var _len96 = arguments.length, args = new Array(_len96), _key96 = 0; _key96 < _len96; _key96++) {
        args[_key96] = arguments[_key96];
      }

      return _takeWhile2["default"].call.apply(_takeWhile2["default"], [this].concat(args));
    }
  }, {
    key: "tap",
    value: function tap() {
      for (var _len97 = arguments.length, args = new Array(_len97), _key97 = 0; _key97 < _len97; _key97++) {
        args[_key97] = arguments[_key97];
      }

      return _tap2["default"].call.apply(_tap2["default"], [this].concat(args));
    }
  }, {
    key: "times",
    value: function times() {
      for (var _len98 = arguments.length, args = new Array(_len98), _key98 = 0; _key98 < _len98; _key98++) {
        args[_key98] = arguments[_key98];
      }

      return _times2["default"].call.apply(_times2["default"], [this].concat(args));
    }
  }, {
    key: "toArray",
    value: function toArray() {
      for (var _len99 = arguments.length, args = new Array(_len99), _key99 = 0; _key99 < _len99; _key99++) {
        args[_key99] = arguments[_key99];
      }

      return _toArray2["default"].call.apply(_toArray2["default"], [this].concat(args));
    }
  }, {
    key: "toJson",
    value: function toJson() {
      for (var _len100 = arguments.length, args = new Array(_len100), _key100 = 0; _key100 < _len100; _key100++) {
        args[_key100] = arguments[_key100];
      }

      return _toJson2["default"].call.apply(_toJson2["default"], [this].concat(args));
    }
  }, {
    key: "transform",
    value: function transform() {
      for (var _len101 = arguments.length, args = new Array(_len101), _key101 = 0; _key101 < _len101; _key101++) {
        args[_key101] = arguments[_key101];
      }

      return _transform2["default"].call.apply(_transform2["default"], [this].concat(args));
    }
  }, {
    key: "undot",
    value: function undot() {
      for (var _len102 = arguments.length, args = new Array(_len102), _key102 = 0; _key102 < _len102; _key102++) {
        args[_key102] = arguments[_key102];
      }

      return _undot2["default"].call.apply(_undot2["default"], [this].concat(args));
    }
  }, {
    key: "unless",
    value: function unless() {
      for (var _len103 = arguments.length, args = new Array(_len103), _key103 = 0; _key103 < _len103; _key103++) {
        args[_key103] = arguments[_key103];
      }

      return _unless2["default"].call.apply(_unless2["default"], [this].concat(args));
    }
  }, {
    key: "unlessEmpty",
    value: function unlessEmpty() {
      for (var _len104 = arguments.length, args = new Array(_len104), _key104 = 0; _key104 < _len104; _key104++) {
        args[_key104] = arguments[_key104];
      }

      return _whenNotEmpty2["default"].call.apply(_whenNotEmpty2["default"], [this].concat(args));
    }
  }, {
    key: "unlessNotEmpty",
    value: function unlessNotEmpty() {
      for (var _len105 = arguments.length, args = new Array(_len105), _key105 = 0; _key105 < _len105; _key105++) {
        args[_key105] = arguments[_key105];
      }

      return _whenEmpty2["default"].call.apply(_whenEmpty2["default"], [this].concat(args));
    }
  }, {
    key: "union",
    value: function union() {
      for (var _len106 = arguments.length, args = new Array(_len106), _key106 = 0; _key106 < _len106; _key106++) {
        args[_key106] = arguments[_key106];
      }

      return _union2["default"].call.apply(_union2["default"], [this].concat(args));
    }
  }, {
    key: "unique",
    value: function unique() {
      for (var _len107 = arguments.length, args = new Array(_len107), _key107 = 0; _key107 < _len107; _key107++) {
        args[_key107] = arguments[_key107];
      }

      return _unique2["default"].call.apply(_unique2["default"], [this].concat(args));
    }
  }, {
    key: "unwrap",
    value: function unwrap() {
      for (var _len108 = arguments.length, args = new Array(_len108), _key108 = 0; _key108 < _len108; _key108++) {
        args[_key108] = arguments[_key108];
      }

      return _unwrap2["default"].call.apply(_unwrap2["default"], [this].concat(args));
    }
  }, {
    key: "values",
    value: function values() {
      for (var _len109 = arguments.length, args = new Array(_len109), _key109 = 0; _key109 < _len109; _key109++) {
        args[_key109] = arguments[_key109];
      }

      return _values2["default"].call.apply(_values2["default"], [this].concat(args));
    }
  }, {
    key: "when",
    value: function when() {
      for (var _len110 = arguments.length, args = new Array(_len110), _key110 = 0; _key110 < _len110; _key110++) {
        args[_key110] = arguments[_key110];
      }

      return _when2["default"].call.apply(_when2["default"], [this].concat(args));
    }
  }, {
    key: "whenEmpty",
    value: function whenEmpty() {
      for (var _len111 = arguments.length, args = new Array(_len111), _key111 = 0; _key111 < _len111; _key111++) {
        args[_key111] = arguments[_key111];
      }

      return _whenEmpty2["default"].call.apply(_whenEmpty2["default"], [this].concat(args));
    }
  }, {
    key: "whenNotEmpty",
    value: function whenNotEmpty() {
      for (var _len112 = arguments.length, args = new Array(_len112), _key112 = 0; _key112 < _len112; _key112++) {
        args[_key112] = arguments[_key112];
      }

      return _whenNotEmpty2["default"].call.apply(_whenNotEmpty2["default"], [this].concat(args));
    }
  }, {
    key: "where",
    value: function where() {
      for (var _len113 = arguments.length, args = new Array(_len113), _key113 = 0; _key113 < _len113; _key113++) {
        args[_key113] = arguments[_key113];
      }

      return _where2["default"].call.apply(_where2["default"], [this].concat(args));
    }
  }, {
    key: "whereBetween",
    value: function whereBetween() {
      for (var _len114 = arguments.length, args = new Array(_len114), _key114 = 0; _key114 < _len114; _key114++) {
        args[_key114] = arguments[_key114];
      }

      return _whereBetween2["default"].call.apply(_whereBetween2["default"], [this].concat(args));
    }
  }, {
    key: "whereIn",
    value: function whereIn() {
      for (var _len115 = arguments.length, args = new Array(_len115), _key115 = 0; _key115 < _len115; _key115++) {
        args[_key115] = arguments[_key115];
      }

      return _whereIn2["default"].call.apply(_whereIn2["default"], [this].concat(args));
    }
  }, {
    key: "whereInstanceOf",
    value: function whereInstanceOf() {
      for (var _len116 = arguments.length, args = new Array(_len116), _key116 = 0; _key116 < _len116; _key116++) {
        args[_key116] = arguments[_key116];
      }

      return _whereInstanceOf2["default"].call.apply(_whereInstanceOf2["default"], [this].concat(args));
    }
  }, {
    key: "whereNotBetween",
    value: function whereNotBetween() {
      for (var _len117 = arguments.length, args = new Array(_len117), _key117 = 0; _key117 < _len117; _key117++) {
        args[_key117] = arguments[_key117];
      }

      return _whereNotBetween2["default"].call.apply(_whereNotBetween2["default"], [this].concat(args));
    }
  }, {
    key: "whereNotIn",
    value: function whereNotIn() {
      for (var _len118 = arguments.length, args = new Array(_len118), _key118 = 0; _key118 < _len118; _key118++) {
        args[_key118] = arguments[_key118];
      }

      return _whereNotIn2["default"].call.apply(_whereNotIn2["default"], [this].concat(args));
    }
  }, {
    key: "whereNull",
    value: function whereNull() {
      for (var _len119 = arguments.length, args = new Array(_len119), _key119 = 0; _key119 < _len119; _key119++) {
        args[_key119] = arguments[_key119];
      }

      return _whereNull2["default"].call.apply(_whereNull2["default"], [this].concat(args));
    }
  }, {
    key: "whereNotNull",
    value: function whereNotNull() {
      for (var _len120 = arguments.length, args = new Array(_len120), _key120 = 0; _key120 < _len120; _key120++) {
        args[_key120] = arguments[_key120];
      }

      return _whereNotNull2["default"].call.apply(_whereNotNull2["default"], [this].concat(args));
    }
  }, {
    key: "wrap",
    value: function wrap() {
      for (var _len121 = arguments.length, args = new Array(_len121), _key121 = 0; _key121 < _len121; _key121++) {
        args[_key121] = arguments[_key121];
      }

      return _wrap2["default"].call.apply(_wrap2["default"], [this].concat(args));
    }
  }, {
    key: "zip",
    value: function zip() {
      for (var _len122 = arguments.length, args = new Array(_len122), _key122 = 0; _key122 < _len122; _key122++) {
        args[_key122] = arguments[_key122];
      }

      return _zip2["default"].call.apply(_zip2["default"], [this].concat(args));
    }
    /**
    * Support JSON.stringify
    * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
    */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.items;
    }
  }]);

  return Collection;
}();

exports.Collection = Collection;

var collect = function collect(collection) {
  return new Collection(collection);
};
/**
 * Symbol.iterator
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator
 */


exports.collect = collect;

if (typeof Symbol !== 'undefined') {
  Collection.prototype[Symbol.iterator] = _symbol["default"];
}

collect.collect = collect;
collect.Collection = Collection;
var _default = collect;
exports["default"] = _default;
module.exports = collect;