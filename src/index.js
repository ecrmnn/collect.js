import all from './methods/all';
import average from './methods/average';
import avg from './methods/avg';
import chunk from './methods/chunk';
import collapse from './methods/collapse';
import combine from './methods/combine';
import concat from './methods/concat';
import contains from './methods/contains';
import containsOneItem from './methods/containsOneItem';
import count from './methods/count';
import countBy from './methods/countBy';
import crossJoin from './methods/crossJoin';
import dd from './methods/dd';
import diff from './methods/diff';
import diffAssoc from './methods/diffAssoc';
import diffKeys from './methods/diffKeys';
import doesntContain from './methods/doesntContain';
import dump from './methods/dump';
import duplicates from './methods/duplicates';
import each from './methods/each';
import eachSpread from './methods/eachSpread';
import every from './methods/every';
import except from './methods/except';
import filter from './methods/filter';
import first from './methods/first';
import firstOrFail from './methods/firstOrFail';
import firstWhere from './methods/firstWhere';
import flatMap from './methods/flatMap';
import flatten from './methods/flatten';
import flip from './methods/flip';
import forPage from './methods/forPage';
import forget from './methods/forget';
import get from './methods/get';
import groupBy from './methods/groupBy';
import has from './methods/has';
import implode from './methods/implode';
import intersect from './methods/intersect';
import intersectByKeys from './methods/intersectByKeys';
import isEmpty from './methods/isEmpty';
import isNotEmpty from './methods/isNotEmpty';
import join from './methods/join';
import keyBy from './methods/keyBy';
import keys from './methods/keys';
import last from './methods/last';
import macro from './methods/macro';
import make from './methods/make';
import map from './methods/map';
import mapSpread from './methods/mapSpread';
import mapToDictionary from './methods/mapToDictionary';
import mapInto from './methods/mapInto';
import mapToGroups from './methods/mapToGroups';
import mapWithKeys from './methods/mapWithKeys';
import max from './methods/max';
import median from './methods/median';
import merge from './methods/merge';
import mergeRecursive from './methods/mergeRecursive';
import min from './methods/min';
import mode from './methods/mode';
import nth from './methods/nth';
import only from './methods/only';
import pad from './methods/pad';
import partition from './methods/partition';
import pipe from './methods/pipe';
import pluck from './methods/pluck';
import pop from './methods/pop';
import prepend from './methods/prepend';
import pull from './methods/pull';
import push from './methods/push';
import put from './methods/put';
import random from './methods/random';
import reduce from './methods/reduce';
import reject from './methods/reject';
import replace from './methods/replace';
import replaceRecursive from './methods/replaceRecursive';
import reverse from './methods/reverse';
import search from './methods/search';
import shift from './methods/shift';
import shuffle from './methods/shuffle';
import skip from './methods/skip';
import skipUntil from './methods/skipUntil';
import skipWhile from './methods/skipWhile';
import slice from './methods/slice';
import sole from './methods/sole';
import some from './methods/some';
import sort from './methods/sort';
import sortDesc from './methods/sortDesc';
import sortBy from './methods/sortBy';
import sortByDesc from './methods/sortByDesc';
import sortKeys from './methods/sortKeys';
import sortKeysDesc from './methods/sortKeysDesc';
import splice from './methods/splice';
import split from './methods/split';
import sum from './methods/sum';
import take from './methods/take';
import takeUntil from './methods/takeUntil';
import takeWhile from './methods/takeWhile';
import tap from './methods/tap';
import times from './methods/times';
import toArray from './methods/toArray';
import toJson from './methods/toJson';
import transform from './methods/transform';
import undot from './methods/undot';
import union from './methods/union';
import unique from './methods/unique';
import unless from './methods/unless';
import unwrap from './methods/unwrap';
import values from './methods/values';
import when from './methods/when';
import whenEmpty from './methods/whenEmpty';
import whenNotEmpty from './methods/whenNotEmpty';
import where from './methods/where';
import whereBetween from './methods/whereBetween';
import whereIn from './methods/whereIn';
import whereInstanceOf from './methods/whereInstanceOf';
import whereNotBetween from './methods/whereNotBetween';
import whereNotIn from './methods/whereNotIn';
import whereNull from './methods/whereNull';
import whereNotNull from './methods/whereNotNull';
import wrap from './methods/wrap';
import zip from './methods/zip';

import SymbolIterator from './methods/symbol.iterator';

export class Collection {
  constructor(collection) {
    if (collection !== undefined && !Array.isArray(collection) && typeof collection !== 'object') {
      this.items = [collection];
    } else if (collection instanceof this.constructor) {
      this.items = collection.all();
    } else {
      this.items = collection || [];
    }
  }

  all(...args) {
    return all.call(this, ...args);
  }

  average(...args) {
    return average.call(this, ...args);
  }

  avg(...args) {
    return avg.call(this, ...args);
  }

  chunk(...args) {
    return chunk.call(this, ...args);
  }

  collapse(...args) {
    return collapse.call(this, ...args);
  }

  combine(...args) {
    return combine.call(this, ...args);
  }

  concat(...args) {
    return concat.call(this, ...args);
  }

  contains(...args) {
    return contains.call(this, ...args);
  }

  containsOneItem(...args) {
    return containsOneItem.call(this, ...args);
  }

  count(...args) {
    return count.call(this, ...args);
  }

  countBy(...args) {
    return countBy.call(this, ...args);
  }

  crossJoin(...args) {
    return crossJoin.call(this, ...args);
  }

  dd(...args) {
    return dd.call(this, ...args);
  }

  diff(...args) {
    return diff.call(this, ...args);
  }

  diffAssoc(...args) {
    return diffAssoc.call(this, ...args);
  }

  diffKeys(...args) {
    return diffKeys.call(this, ...args);
  }

  doesntContain(...args) {
    return doesntContain.call(this, ...args);
  }

  dump(...args) {
    return dump.call(this, ...args);
  }

  duplicates(...args) {
    return duplicates.call(this, ...args);
  }

  each(...args) {
    return each.call(this, ...args);
  }

  eachSpread(...args) {
    return eachSpread.call(this, ...args);
  }

  every(...args) {
    return every.call(this, ...args);
  }

  except(...args) {
    return except.call(this, ...args);
  }

  filter(...args) {
    return filter.call(this, ...args);
  }

  first(...args) {
    return first.call(this, ...args);
  }

  firstOrFail(...args) {
    return firstOrFail.call(this, ...args);
  }

  firstWhere(...args) {
    return firstWhere.call(this, ...args);
  }

  flatMap(...args) {
    return flatMap.call(this, ...args);
  }

  flatten(...args) {
    return flatten.call(this, ...args);
  }

  flip(...args) {
    return flip.call(this, ...args);
  }

  forPage(...args) {
    return forPage.call(this, ...args);
  }

  forget(...args) {
    return forget.call(this, ...args);
  }

  get(...args) {
    return get.call(this, ...args);
  }

  groupBy(...args) {
    return groupBy.call(this, ...args);
  }

  has(...args) {
    return has.call(this, ...args);
  }

  implode(...args) {
    return implode.call(this, ...args);
  }

  intersect(...args) {
    return intersect.call(this, ...args);
  }

  intersectByKeys(...args) {
    return intersectByKeys.call(this, ...args);
  }

  isEmpty(...args) {
    return isEmpty.call(this, ...args);
  }

  isNotEmpty(...args) {
    return isNotEmpty.call(this, ...args);
  }

  join(...args) {
    return join.call(this, ...args);
  }

  keyBy(...args) {
    return keyBy.call(this, ...args);
  }

  keys(...args) {
    return keys.call(this, ...args);
  }

  last(...args) {
    return last.call(this, ...args);
  }

  macro(...args) {
    return macro.call(this, ...args);
  }

  make(...args) {
    return make.call(this, ...args);
  }

  map(...args) {
    return map.call(this, ...args);
  }

  mapSpread(...args) {
    return mapSpread.call(this, ...args);
  }

  mapToDictionary(...args) {
    return mapToDictionary.call(this, ...args);
  }

  mapInto(...args) {
    return mapInto.call(this, ...args);
  }

  mapToGroups(...args) {
    return mapToGroups.call(this, ...args);
  }

  mapWithKeys(...args) {
    return mapWithKeys.call(this, ...args);
  }

  max(...args) {
    return max.call(this, ...args);
  }

  median(...args) {
    return median.call(this, ...args);
  }

  merge(...args) {
    return merge.call(this, ...args);
  }

  mergeRecursive(...args) {
    return mergeRecursive.call(this, ...args);
  }

  min(...args) {
    return min.call(this, ...args);
  }

  mode(...args) {
    return mode.call(this, ...args);
  }

  nth(...args) {
    return nth.call(this, ...args);
  }

  only(...args) {
    return only.call(this, ...args);
  }

  pad(...args) {
    return pad.call(this, ...args);
  }

  partition(...args) {
    return partition.call(this, ...args);
  }

  pipe(...args) {
    return pipe.call(this, ...args);
  }

  pluck(...args) {
    return pluck.call(this, ...args);
  }

  pop(...args) {
    return pop.call(this, ...args);
  }

  prepend(...args) {
    return prepend.call(this, ...args);
  }

  pull(...args) {
    return pull.call(this, ...args);
  }

  push(...args) {
    return push.call(this, ...args);
  }

  put(...args) {
    return put.call(this, ...args);
  }

  random(...args) {
    return random.call(this, ...args);
  }

  reduce(...args) {
    return reduce.call(this, ...args);
  }

  reject(...args) {
    return reject.call(this, ...args);
  }

  replace(...args) {
    return replace.call(this, ...args);
  }

  replaceRecursive(...args) {
    return replaceRecursive.call(this, ...args);
  }

  reverse(...args) {
    return reverse.call(this, ...args);
  }

  search(...args) {
    return search.call(this, ...args);
  }

  shift(...args) {
    return shift.call(this, ...args);
  }

  shuffle(...args) {
    return shuffle.call(this, ...args);
  }

  skip(...args) {
    return skip.call(this, ...args);
  }

  skipUntil(...args) {
    return skipUntil.call(this, ...args);
  }

  skipWhile(...args) {
    return skipWhile.call(this, ...args);
  }

  slice(...args) {
    return slice.call(this, ...args);
  }

  sole(...args) {
    return sole.call(this, ...args);
  }

  some(...args) {
    return some.call(this, ...args);
  }

  sort(...args) {
    return sort.call(this, ...args);
  }

  sortDesc(...args) {
    return sortDesc.call(this, ...args);
  }

  sortBy(...args) {
    return sortBy.call(this, ...args);
  }

  sortByDesc(...args) {
    return sortByDesc.call(this, ...args);
  }

  sortKeys(...args) {
    return sortKeys.call(this, ...args);
  }

  sortKeysDesc(...args) {
    return sortKeysDesc.call(this, ...args);
  }

  splice(...args) {
    return splice.call(this, ...args);
  }

  split(...args) {
    return split.call(this, ...args);
  }

  sum(...args) {
    return sum.call(this, ...args);
  }

  take(...args) {
    return take.call(this, ...args);
  }

  takeUntil(...args) {
    return takeUntil.call(this, ...args);
  }

  takeWhile(...args) {
    return takeWhile.call(this, ...args);
  }

  tap(...args) {
    return tap.call(this, ...args);
  }

  times(...args) {
    return times.call(this, ...args);
  }

  toArray(...args) {
    return toArray.call(this, ...args);
  }

  toJson(...args) {
    return toJson.call(this, ...args);
  }

  transform(...args) {
    return transform.call(this, ...args);
  }

  undot(...args) {
    return undot.call(this, ...args);
  }

  unless(...args) {
    return unless.call(this, ...args);
  }

  unlessEmpty(...args) {
    return whenNotEmpty.call(this, ...args);
  }

  unlessNotEmpty(...args) {
    return whenEmpty.call(this, ...args);
  }

  union(...args) {
    return union.call(this, ...args);
  }

  unique(...args) {
    return unique.call(this, ...args);
  }

  unwrap(...args) {
    return unwrap.call(this, ...args);
  }

  values(...args) {
    return values.call(this, ...args);
  }

  when(...args) {
    return when.call(this, ...args);
  }

  whenEmpty(...args) {
    return whenEmpty.call(this, ...args);
  }

  whenNotEmpty(...args) {
    return whenNotEmpty.call(this, ...args);
  }

  where(...args) {
    return where.call(this, ...args);
  }

  whereBetween(...args) {
    return whereBetween.call(this, ...args);
  }

  whereIn(...args) {
    return whereIn.call(this, ...args);
  }

  whereInstanceOf(...args) {
    return whereInstanceOf.call(this, ...args);
  }

  whereNotBetween(...args) {
    return whereNotBetween.call(this, ...args);
  }

  whereNotIn(...args) {
    return whereNotIn.call(this, ...args);
  }

  whereNull(...args) {
    return whereNull.call(this, ...args);
  }

  whereNotNull(...args) {
    return whereNotNull.call(this, ...args);
  }

  wrap(...args) {
    return wrap.call(this, ...args);
  }

  zip(...args) {
    return zip.call(this, ...args);
  }

  /**
 * Support JSON.stringify
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
 */
  toJSON() {
    return this.items;
  }
}
export const collect = collection => new Collection(collection);

/**
 * Symbol.iterator
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator
 */
if (typeof Symbol !== 'undefined') {
  Collection.prototype[Symbol.iterator] = SymbolIterator;
}

collect.collect = collect;
collect.Collection = Collection;

export default collect;

module.exports = collect;
