type Operator = "===" | "==" | "!==" | "!=" | "<>" | ">" | "<" | ">=" | "<="

interface CollectionInstance<Item> {
  /**
   * The unique method returns all of the unique items in the collection.
   * 
   * @template K 
   * @param {K} [key] 
   * @returns {K[]}
   *
   * @memberof CollectionInstance
   */
  unique<K>(key?: K | Function): CollectionInstance<Item>;

  /**
   * The sum method returns the sum of all items in the collection.
   * 
   * @template K 
   * @param {(K | Function)} [key] 
   * @returns {number | string}
   *
   * @memberof CollectionInstance
   */
  sum<K>(key?: K | ((item: Item) => number | string)): number | string;

  /**
   * Alias for the avg() method.
   * 
   * @template K 
   * @param {K} [key] 
   * @returns {number}
   *
   * @memberof CollectionInstance
   */
  average<K>(key?: K): number;

  /**
   * The avg method returns the average of all items in the collection.
   * 
   * @template K 
   * @param {K} [key] 
   * @returns {number}
   *
   * @memberof CollectionInstance
   */
  avg<K>(key?: K): number;

  /**
   * The median method returns the median value of a given key.
   * 
   * @template K 
   * @param {K} [key] 
   * @returns {Item}
   * 
   * @memberof CollectionInstance
   */
  median<K>(key?: K): Item;

  /**
   * The mode method returns the mode value of a given key.
   * 
   * @template K 
   * @param {K} [key] 
   * @returns {(CollectionInstance<Item> | null)} 
   * 
   * @memberof CollectionInstance
   */
  mode<K>(key?: K): CollectionInstance<Item> | null;

  /**
   * The count method returns the total number of items in the collection.
   * 
   * @returns {number} 
   * 
   * @memberof CollectionInstance
   */
  count(): number;

  /**
   * The isEmpty method returns true if the collection is empty; otherwise, false is returned.
   * 
   * @returns {boolean} 
   * 
   * @memberof CollectionInstance
   */
  isEmpty(): boolean;

  /**
   * The each method iterates over the items in the collection and passes each item to a callback.
   * 
   * @param {Function} fn 
   * @returns {CollectionInstance} 
   * 
   * @memberof CollectionInstance
   */
  each(fn: Function): this;

  /**
   * The map method iterates through the collection and passes each value to the given callback.
   * The callback is free to modify the item and return it, thus forming a new collection of modified items.
   *
   * @template T
   * @param {<T>(...any) => T} fn 
   * @returns {CollectionInstance<T>} 
   * 
   * @memberof CollectionInstance
   */
  map<T>(fn: <T>(...any) => T): CollectionInstance<T>;

  /**
   * The mapWithKeys method iterates through the collection and passes each value to the given callback.
   * The callback should return an array where the first element represents the key
   * and the second element represents the value pair.
   *
   * @template T
   * @param {Function} fn 
   * @returns {CollectionInstance} 
   * 
   * @memberof CollectionInstance
   */
  mapWithKeys<T>(fn: Function): CollectionInstance<T>;

  /**
   * The filter method filters the collection using the given callback,
   * keeping only those items that pass a given truth test.
   * 
   * @param {(item: Item) => boolean} fn 
   * @returns {CollectionInstance<Item>} 
   * 
   * @memberof CollectionInstance
   */
  filter(fn: (item: Item) => boolean): CollectionInstance<Item>;

  /**
   * The has method determines if a given key exists in the collection.
   * 
   * @template K 
   * @param {K} key 
   * @returns {boolean} 
   * 
   * @memberof CollectionInstance
   */
  has<K>(key: K): boolean;

  /**
   * The first method returns the first element in the collection that passes a given truth test.
   * 
   * @param {(item: Item) => boolean} [fn] 
   * @returns {T} 
   * 
   * @memberof CollectionInstance
   */
  first(fn?: (item: Item) => boolean): Item;

  /**
   * The last method returns the last element in the collection that passes a given truth test.
   * 
   * @param {(item: Item) => boolean} [fn] 
   * @returns {T} 
   * 
   * @memberof CollectionInstance
   */
  last(fn?: (item: Item) => boolean): Item;

  /**
   * The get method returns the item at a given key. If the key does not exist, null is returned.
   * 
   * @template K
   * @template V
   * @param {K} key 
   * @param {((...any) => V | Item)} [defaultValue] 
   * @returns {(Item | null)} 
   * 
   * @memberof CollectionInstance
   */
  get<K, V>(key: K, defaultValue?: (...any) => V | Item): Item | null;

  /**
   * The only method returns the items in the collection with the specified keys.
   * 
   * @template K 
   * @param {K[]} properties 
   * @returns {Object} 
   * 
   * @memberof CollectionInstance
   */
  only<K>(properties: K[]): Object;

  /**
   * The except method returns all items in the collection except for those with the specified keys.
   * 
   * @template K 
   * @param {K[]} properties 
   * @returns {Object} 
   * 
   * @memberof CollectionInstance
   */
  except<K>(properties: K[]): Object;

  /**
   * The groupBy method groups the collection's items by a given key.
   *
   * @template T
   * @template K 
   * @param {(((item: Item, index?: number) => K) | K)} key 
   * @returns {CollectionInstance<T>} 
   * 
   * @memberof CollectionInstance
   */
  groupBy<T, K>(key: ((item: Item, index?: number) => K) | K): CollectionInstance<T>;

  /**
   * The where method filters the collection by a given key / value pair.
   * 
   * @template K 
   * @template V 
   * @param {K} key 
   * @param {V} value 
   * @returns {CollectionInstance} 
   * 
   * @memberof CollectionInstance
   */
  where<K, V>(key: K, value: V): CollectionInstance<Item>;

  /**
   * The where method filters the collection by a given key / value pair.
   * 
   * @template K 
   * @template V 
   * @param {K} key 
   * @param {Operator} operator 
   * @param {V} value 
   * @returns {CollectionInstance} 
   * 
   * @memberof CollectionInstance
   */
  where<K, V>(key: K, operator: Operator, value: V): CollectionInstance<Item>;

  /**
   * The whereIn method filters the collection by a given key / value contained within the given array.
   * 
   * @template K 
   * @template V 
   * @param {K} key 
   * @param {V[]} values 
   * @returns {CollectionInstance} 
   * 
   * @memberof CollectionInstance
   */
  whereIn<K, V>(key: K, values: V[]): CollectionInstance<Item>;

  /**
   * The diff method compares the collection against another collection or a plain array based on its values.
   * This method will return the values in the original collection that are not present in the given collection.
   * 
   * @param {Item[] | CollectionInstance<Item>} values 
   * @returns {CollectionInstance<Item>} 
   * 
   * @memberof CollectionInstance
   */
  diff(values: Item[] | CollectionInstance<Item>): CollectionInstance<Item>;

  /**
   * The intersect method removes any values from the original collection
   * that are not present in the given array or collection.
   * The resulting collection will preserve the original collection's keys.
   * 
   * @param {Item[] | CollectionInstance<Item>} values 
   * @returns {CollectionInstance<Item>} 
   * 
   * @memberof CollectionInstance
   */
  intersect(values: Item[] | CollectionInstance<Item>): CollectionInstance<Item>;

  /**
   * The pluck method retrieves all of the values for a given key.
   * 
   * @template T
   * @template K 
   * @template V 
   * @param {V} value 
   * @param {K} [key] 
   * @returns {CollectionInstance<T>} 
   * 
   * @memberof CollectionInstance
   */
  pluck<T, K, V>(value: V, key?: K): CollectionInstance<T>;

  /**
   * The implode method joins the items in a collection.
   * Its arguments depend on the type of items in the collection.
   *
   * If the collection contains arrays or objects,
   * you should pass the key of the attributes you wish to join,
   * and the "glue" string you wish to place between the values.
   * 
   * @template K 
   * @param {K} key 
   * @param {string} [glue] 
   * @returns {string} 
   * 
   * @memberof CollectionInstance
   */
  implode<K>(key: K, glue?: string): string;

  /**
   * The pull method removes and returns an item from the collection by its key.
   * 
   * @template K 
   * @param {K} key 
   * @returns {(T | null)} 
   * 
   * @memberof CollectionInstance
   */
  pull<K>(key: K): Item | null;

  /**
   * The push method appends an item to the end of the collection.
   * 
   * @param {Item} item 
   * @returns {this} 
   * 
   * @memberof CollectionInstance
   */
  push(item: Item): this;

  /**
   * The put method sets the given key and value in the collection.
   * 
   * @template K 
   * @template V 
   * @param {K} key 
   * @param {V} value 
   * @returns {this} 
   * 
   * @memberof CollectionInstance
   */
  put<K, V>(key: K, value: V): this;

  /**
   * The shift method removes and returns the first item from the collection.
   * 
   * @returns {Item} 
   * 
   * @memberof CollectionInstance
   */
  shift(): Item;

  /**
   * The chunk method breaks the collection into multiple, smaller collections of a given size.
   * 
   * @param {number} size 
   * @returns {CollectionInstance} 
   * @memberof CollectionInstance
   */
  chunk(size: number): CollectionInstance<Array<Item>>;

  /**
   * The collapse method collapses a collection of arrays into a single, flat collection.
   *
   * @template T
   * @returns {CollectionInstance<T>} 
   * @memberof CollectionInstance
   */
  collapse<T>(): CollectionInstance<T>;

  /**
   * The combine method combines the keys of the collection with the values of another array or collection.
   * 
   * @template T
   * @template U
   * @param {U[]} array 
   * @returns {CollectionInstance<T>}
   * @memberof CollectionInstance
   */
  combine<T, U>(array: U[]): CollectionInstance<T>;

  /**
   * The flip method swaps the collection's keys with their corresponding values.
   *
   * @template T
   * @returns {CollectionInstance<T>} 
   * @memberof CollectionInstance
   */
  flip<T>(): CollectionInstance<T>;

  /**
   * The forget method removes an item from the collection by its key.
   * 
   * @template K 
   * @param {K} key 
   * @returns {this} 
   * @memberof CollectionInstance
   */
  forget<K>(key: K): this;

  /**
   * The forPage method returns a new collection containing the items that would be present on a given page number.
   * The method accepts the page number as its first argument
   * and the number of items to show per page as its second argument.
   * 
   * @param {number} page 
   * @param {number} chunk 
   * @returns {CollectionInstance<Item>} 
   * @memberof CollectionInstance
   */
  forPage(page: number, chunk: number): CollectionInstance<Item>;

  /**
   * The keys method returns all of the collection's keys.
   * 
   * @returns {CollectionInstance<string>} 
   * @memberof CollectionInstance
   */
  keys(): CollectionInstance<string>;

  /**
   * The merge method merges the given object into the original collection.
   * If a key in the given object matches a key in the original collection,
   * the given objects value will overwrite the value in the original collection.
   * 
   * @template T
   * @param {Object} object 
   * @returns {CollectionInstance<T>} 
   * @memberof CollectionInstance
   */
  merge<T>(object: Object): CollectionInstance<T>;

  /**
   * The merge method merges the given object into the original collection.
   * If a key in the given object matches a key in the original collection,
   * the given objects value will overwrite the value in the original collection.
   * 
   * @template T 
   * @param {T[]} array 
   * @returns {CollectionInstance<T>} 
   * @memberof CollectionInstance
   */
  merge<T>(array: T[]): CollectionInstance<T>;

  /**
   * The max method returns the maximum value of a given key.
   * 
   * @param {string} [key] 
   * @returns {number} 
   * @memberof CollectionInstance
   */
  max(key?: string): number;

  /**
   * The pipe method passes the collection to the given callback and returns the result.
   * 
   * @template U 
   * @param {(...any) => U} fn 
   * @returns {U} 
   * @memberof CollectionInstance
   */
  pipe<U>(fn: (...any) => U): U;

  /**
   * The contains method determines whether the collection contains a given item.
   * 
   * @template K 
   * @template V 
   * @param {(K | Function)} key 
   * @param {V} [value] 
   * @returns {boolean} 
   * @memberof CollectionInstance
   */
  contains<K, V>(key: K | Function, value?: V): boolean;

  /**
   * The diffKeys method compares the collection against another collection or a plain object based on its keys.
   * This method will return the key / value pairs in the original collection that are not present in the given collection.
   * 
   * @template T
   * @param {Object} object 
   * @returns {CollectionInstance<T>} 
   * @memberof CollectionInstance
   */
  diffKeys<T>(object: Object): CollectionInstance<T>;

  /**
   * The every method may be used to verify that all elements of a collection pass a given truth test.
   * 
   * @param {(item: Item) => boolean} fn 
   * @returns {boolean} 
   * @memberof CollectionInstance
   */
  every(fn: (item: Item) => boolean): boolean;

  /**
   * The nth method creates a new collection consisting of every n-th element.
   * 
   * @param {number} n 
   * @param {number} offset 
   * @returns {CollectionInstance<Item>} 
   * @memberof CollectionInstance
   */
  nth(n: number, offset?: number): CollectionInstance<Item>;

  /**
   * The flatMap method iterates through the collection and passes each value to the given callback.
   * The callback is free to modify the item and return it, thus forming a new collection of modified items.
   * Then, the array is flattened by a level.
   * 
   * @template T
   * @param {Function} fn 
   * @returns {CollectionInstance<T>} 
   * @memberof CollectionInstance
   */
  flatMap<T>(fn: Function): CollectionInstance<T>;

  /**
   * The flatten method flattens a multi-dimensional collection into a single dimension.
   * 
   * @template T
   * @param {number} [depth] 
   * @returns {CollectionInstance<T>} 
   * @memberof CollectionInstance
   */
  flatten<T>(depth?: number): CollectionInstance<T>;

  /**
   * The keyBy method keys the collection by the given key.
   * If multiple items have the same key, only the last one will appear in the new collection.
   * 
   * @template T
   * @template K 
   * @param {(K | Function)} key 
   * @returns {CollectionInstance<T>} 
   * @memberof CollectionInstance
   */
  keyBy<T, K>(key: K | Function): CollectionInstance<T>;

  /**
   * The min method returns the minimum value of a given key.
   * 
   * @template K 
   * @param {K} [key] 
   * @returns {number} 
   * @memberof CollectionInstance
   */
  min<K>(key?: K): number;

  /**
   * The pop method removes and returns the last item from the collection.
   * 
   * @template Item 
   * @returns {Item} 
   * @memberof CollectionInstance
   */
  pop(): Item;

  /**
   * The prepend method adds an item to the beginning of the collection.
   * 
   * @template K 
   * @template V 
   * @param {V} value 
   * @param {K} [key] 
   * @returns {this} 
   * @memberof CollectionInstance
   */
  prepend<K, V>(value: V, key?: K): this;

  /**
   * The shuffle method randomly shuffles the items in the collection.
   * 
   * @returns {this} 
   * @memberof CollectionInstance
   */
  shuffle(): this;

  /**
   * The random method returns a random item from the collection.
   * 
   * @param {number} [length] 
   * @returns {(this | Item)} 
   * @memberof CollectionInstance
   */
  random(length?: number): this | Item;

  /**
   * The reduce method reduces the collection to a single value,
   * passing the result of each iteration into the subsequent iteration.
   * 
   * @template T 
   * @param {((_carry: T | null, item: Item) => T)} fn 
   * @param {T} [carry] 
   * @memberof CollectionInstance
   */
  reduce<T>(fn: (_carry: T | null, item: Item) => T, carry?: T);

  /**
   * The reject method filters the collection using the given callback.
   * The callback should return true if the item should be removed from the resulting collection.
   * 
   * @param {(item: Item) => boolean} fn 
   * @returns {CollectionInstance<Item>} 
   * @memberof CollectionInstance
   */
  reject(fn: (item: Item) => boolean): CollectionInstance<Item>;

  /**
   * The reverse method reverses the order of the collection's items.
   * 
   * @returns {CollectionInstance<Item>} 
   * @memberof CollectionInstance
   */
  reverse(): CollectionInstance<Item>;

  /**
   * The search method searches the collection for the given value and returns its key if found.
   * If the item is not found, false is returned.
   * 
   * @param {Item} value
   * @param {any} strict 
   * @memberof CollectionInstance
   */
  search(value: Item, strict);

  /**
   * The search method searches the collection for the given value and returns its key if found.
   * If the item is not found, false is returned.
   * 
   * @param {(value: Item, key: number) => boolean} fn 
   * @param {any} strict 
   * @memberof CollectionInstance
   */
  search(fn: (value: Item, key: number) => boolean, strict);

  /**
   * The slice method returns a slice of the collection starting at the given index.
   * 
   * @param {number} remove 
   * @param {number} [limit] 
   * @returns {CollectionInstance<Item>} 
   * @memberof CollectionInstance
   */
  slice(remove: number, limit?: number): CollectionInstance<Item>;

  /**
   * The sort method sorts the collection.
   * 
   * @param {(a: Item, b: Item) => number} [fn] 
   * @returns {CollectionInstance<Item>} 
   * @memberof CollectionInstance
   */
  sort(fn?: (a: Item, b: Item) => number): CollectionInstance<Item>;

  /**
   * The sortBy method sorts the collection by the given key.
   * The sorted collection keeps the original array keys.
   * 
   * @template V 
   * @param {V} value 
   * @returns {CollectionInstance<Item>} 
   * @memberof CollectionInstance
   */
  sortBy<V>(value: V): CollectionInstance<Item>;

  /**
   * The sortBy method sorts the collection by the given callback.
   * The sorted collection keeps the original array keys.
   * 
   * @param {(item: Item) => number} fn 
   * @returns {CollectionInstance<Item>} 
   * @memberof CollectionInstance
   */
  sortBy(fn: (item: Item) => number): CollectionInstance<Item>;

  /**
   * The splice method removes and returns a slice of items starting at the specified index.
   * You may pass a second argument to limit the size of the resulting chunk.
   * 
   * @param {number} index 
   * @param {number} limit 
   * @param {Item[]} [replace] 
   * @returns {CollectionInstance<Item>} 
   * @memberof CollectionInstance
   */
  splice(index: number, limit: number, replace?: Item[]): CollectionInstance<Item>;

  /**
   * This method has the same signature as the sortBy method,
   * but will sort the collection in the opposite order.
   * 
   * @template V 
   * @param {V} value 
   * @returns {CollectionInstance<Item>} 
   * @memberof CollectionInstance
   */
  sortByDesc<V>(value: V): CollectionInstance<Item>;

  /**
   * This method has the same signature as the sortBy method,
   * but will sort the collection in the opposite order.
   * 
   * @param {(item: Item) => number} fn 
   * @returns {CollectionInstance<Item>} 
   * @memberof CollectionInstance
   */
  sortByDesc(fn: (item: Item) => number): CollectionInstance<Item>;

  /**
   * The take method returns a new collection with the specified number of items:
   * You may also pass a negative integer to take the specified amount of items from the end of the collection.
   * 
   * @param {number} length 
   * @returns {CollectionInstance<Item>} 
   * @memberof CollectionInstance
   */
  take(length: number): CollectionInstance<Item>;

  /**
   * The toJson method converts the collection into JSON string.
   * 
   * @returns {string} 
   * @memberof CollectionInstance
   */
  toJson(): string;

  /**
   * The transform method iterates over the collection and calls the given callback with each item in the collection.
   * The items in the collection will be replaced by the values returned by the callback.
   * 
   * @template T 
   * @param {(item: Item) => T} fn 
   * @returns {this} 
   * @memberof CollectionInstance
   */
  transform<T>(fn: (item: Item) => T): this;

  /**
   * The union method adds the given array to the collection.
   * If the given array contains keys that are already in the original collection,
   * the original collection's values will be preferred.
   * 
   * @template T
   * @param {Object} object 
   * @returns {CollectionInstance<T>} 
   * @memberof CollectionInstance
   */
  union<T>(object: Object): CollectionInstance<T>;

  /**
   * The whereNotIn method filters the collection by a given key / value not contained within the given array.
   * 
   * @template K 
   * @template V 
   * @param {K} key 
   * @param {V[]} values 
   * @returns {CollectionInstance<Item>} 
   * @memberof CollectionInstance
   */
  whereNotIn<K, V>(key: K, values: V[]): CollectionInstance<Item>;

  /**
   * The zip method merges together the values of the given array with the values
   * of the original collection at the corresponding index.
   * 
   * @template T 
   * @param {T[]} array 
   * @returns {CollectionInstance<[Item, T]>}
   * @memberof CollectionInstance
   */
  zip<T>(array: T[]): CollectionInstance<[Item, T]>;

  /**
   * The values method returns a new collection with the keys reset to consecutive integers.
   * 
   * @template T
   * @returns {CollectionInstance<T>}
   * @memberof CollectionInstance
   */
  values<T>(): CollectionInstance<T>;

  /**
   * The isNotEmpty method returns true if the collection is not empty; otherwise, false is returned.
   * 
   * @returns {boolean} 
   * @memberof CollectionInstance
   */
  isNotEmpty(): boolean;

  /**
   * The partition method may be combined with destructuring to separate elements
   * that pass a given truth test from those that do not.
   * 
   * @param {(item: Item) => boolean} fn 
   * @returns {[Item[], Item[]]} 
   * @memberof CollectionInstance
   */
  partition(fn: (item: Item) => boolean): [Item[], Item[]];

  /**
   * The split method breaks a collection into the given number of groups.
   * 
   * @param {number} numberOfGroups 
   * @returns {Item[]} 
   * @memberof CollectionInstance
   */
  split(numberOfGroups: number): Item[];

  /**
   * The when method will execute the given callback when the first argument given to the method evaluates to true.
   * 
   * @param {boolean} condition 
   * @param {Function} fn 
   * @memberof CollectionInstance
   */
  when(condition: boolean, fn: Function): void;

  /**
   * The times method creates a new collection by invoking the callback a given amount of times.
   * 
   * @template T 
   * @param {number} times 
   * @param {(time: number) => T} fn 
   * @returns {T[]} 
   * @memberof CollectionInstance
   */
  times<T>(times: number, fn: (time: number) => T): T[];

  /**
   * The tap method passes the collection to the given callback,
   * allowing you to "tap" into the collection at a specific point
   * and do something with the items while not affecting the collection itself.
   * 
   * @param {Function} fn 
   * @returns {this} 
   * @memberof CollectionInstance
   */
  tap(fn: Function): this;

  /**
   * The all method returns the underlying array represented by the collection.
   * 
   * @returns {Item[]} 
   * @memberof CollectionInstance
   */
  all(): Item[];

  /**
   * The toArray method converts the collection into a plain array.
   * If the collection is an object, an array containing the values will be returned.
   * 
   * @template T
   * @returns {T[]} 
   * @memberof CollectionInstance
   */
  toArray<T>(): T[];

  /**
   * The macro method lets you register custom methods.
   * 
   * @param {string} name 
   * @param {Function} fn 
   * @memberof CollectionInstance
   */
  macro(name: string, fn: Function): void;

  [macroFn: string]: Function;
}

declare module 'collect.js' {
  export default function <T>(collection?: T[] | Object): CollectionInstance<T>;
}
