type Operator = "===" | "==" | "!==" | "!=" | "<>" | ">" | "<" | ">=" | "<="

declare class Collection<Item> {
  /**
   * The all method returns the underlying array represented by the collection.
   * 
   * @returns {Item[]} 
   * @memberof Collection
   */
  all(): Item[];

  /**
   * Alias for the avg() method.
   * 
   * @template K 
   * @param {K} [key] 
   * @returns {number}
   *
   * @memberof Collection
   */
  average<K>(key?: K): number;

  /**
   * The avg method returns the average of all items in the collection.
   * 
   * @template K 
   * @param {K} [key] 
   * @returns {number}
   *
   * @memberof Collection
   */
  avg<K>(key?: K): number;

  /**
   * The chunk method breaks the collection into multiple, smaller collections of a given size.
   * 
   * @param {number} size 
   * @returns {Collection} 
   * @memberof Collection
   */
  chunk(size: number): Collection<Array<Item>>;

  /**
   * The collapse method collapses a collection of arrays into a single, flat collection.
   *
   * @template T
   * @returns {Collection<T>} 
   * @memberof Collection
   */
  collapse<T>(): Collection<T>;

  /**
   * The combine method combines the keys of the collection with the values of another array or collection.
   * 
   * @template T
   * @template U
   * @param {U[]} array 
   * @returns {Collection<T>}
   * @memberof Collection
   */
  combine<T, U>(array: U[]): Collection<T>;

  /**
   * The contains method determines whether the collection contains a given item.
   * 
   * @template K 
   * @template V 
   * @param {(K | Function)} key 
   * @param {V} [value] 
   * @returns {boolean} 
   * @memberof Collection
   */
  contains<K, V>(key: K | Function, value?: V): boolean;

  /**
   * The count method returns the total number of items in the collection.
   * 
   * @returns {number} 
   * 
   * @memberof Collection
   */
  count(): number;

  /**
   * The diff method compares the collection against another collection or a plain array based on its values.
   * This method will return the values in the original collection that are not present in the given collection.
   * 
   * @param {Item[] | Collection<Item>} values 
   * @returns {Collection<Item>} 
   * 
   * @memberof Collection
   */
  diff(values: Item[] | Collection<Item>): Collection<Item>;

  /**
   * The diffKeys method compares the collection against another collection or a plain object based on its keys.
   * This method will return the key / value pairs in the original collection that are not present in the given collection.
   * 
   * @template T
   * @param {Object} object 
   * @returns {Collection<T>} 
   * @memberof Collection
   */
  diffKeys<T>(object: Object): Collection<T>;

  /**
   * The each method iterates over the items in the collection and passes each item to a callback.
   * 
   * @param {Function} fn 
   * @returns {Collection} 
   * 
   * @memberof Collection
   */
  each(fn: Function): this;

  /**
   * The every method may be used to verify that all elements of a collection pass a given truth test.
   * 
   * @param {(item: Item) => boolean} fn 
   * @returns {boolean} 
   * @memberof Collection
   */
  every(fn: (item: Item) => boolean): boolean;

  /**
   * The except method returns all items in the collection except for those with the specified keys.
   * 
   * @template K 
   * @param {K[]} properties 
   * @returns {Object} 
   * 
   * @memberof Collection
   */
  except<K>(properties: K[]): Object;

  /**
   * The filter method filters the collection using the given callback,
   * keeping only those items that pass a given truth test.
   * 
   * @param {(item: Item) => boolean} fn 
   * @returns {Collection<Item>} 
   * 
   * @memberof Collection
   */
  filter(fn: (item: Item) => boolean): Collection<Item>;
  
  /**
   * The first method returns the first element in the collection that passes a given truth test.
   * 
   * @param {(item: Item) => boolean} [fn] 
   * @returns {T} 
   * 
   * @memberof Collection
   */
  first(fn?: (item: Item) => boolean): Item;

  /**
   * The flatMap method iterates through the collection and passes each value to the given callback.
   * The callback is free to modify the item and return it, thus forming a new collection of modified items.
   * Then, the array is flattened by a level.
   * 
   * @template T
   * @param {Function} fn 
   * @returns {Collection<T>} 
   * @memberof Collection
   */
  flatMap<T>(fn: Function): Collection<T>;
  
  /**
   * The flatten method flattens a multi-dimensional collection into a single dimension.
   * 
   * @template T
   * @param {number} [depth] 
   * @returns {Collection<T>} 
   * @memberof Collection
   */
  flatten<T>(depth?: number): Collection<T>;

  /**
   * The flip method swaps the collection's keys with their corresponding values.
   *
   * @template T
   * @returns {Collection<T>} 
   * @memberof Collection
   */
  flip<T>(): Collection<T>;

  /**
   * The forget method removes an item from the collection by its key.
   * 
   * @template K 
   * @param {K} key 
   * @returns {this} 
   * @memberof Collection
   */
  forget<K>(key: K): this;

  /**
   * The forPage method returns a new collection containing the items that would be present on a given page number.
   * The method accepts the page number as its first argument
   * and the number of items to show per page as its second argument.
   * 
   * @param {number} page 
   * @param {number} chunk 
   * @returns {Collection<Item>} 
   * @memberof Collection
   */
  forPage(page: number, chunk: number): Collection<Item>;


  /**
   * The get method returns the item at a given key. If the key does not exist, null is returned.
   * 
   * @template K
   * @template V
   * @param {K} key 
   * @param {((...any) => V | Item)} [defaultValue] 
   * @returns {(Item | null)} 
   * 
   * @memberof Collection
   */
  get<K, V>(key: K, defaultValue?: (...any) => V | Item): Item | null;

  /**
   * The groupBy method groups the collection's items by a given key.
   *
   * @template T
   * @template K 
   * @param {(((item: Item, index?: number) => K) | K)} key 
   * @returns {Collection<T>} 
   * 
   * @memberof Collection
   */
  groupBy<T, K>(key: ((item: Item, index?: number) => K) | K): Collection<T>;
  
  /**
   * The has method determines if a given key exists in the collection.
   * 
   * @template K 
   * @param {K} key 
   * @returns {boolean} 
   * 
   * @memberof Collection
   */
  has<K>(key: K): boolean;

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
   * @memberof Collection
   */
  implode<K>(key: K, glue?: string): string;

  /**
   * The intersect method removes any values from the original collection
   * that are not present in the given array or collection.
   * The resulting collection will preserve the original collection's keys.
   * 
   * @param {Item[] | Collection<Item>} values 
   * @returns {Collection<Item>} 
   * 
   * @memberof Collection
   */
  intersect(values: Item[] | Collection<Item>): Collection<Item>;
  
  /**
   * The isEmpty method returns true if the collection is empty; otherwise, false is returned.
   * 
   * @returns {boolean} 
   * 
   * @memberof Collection
   */
  isEmpty(): boolean;

  /**
   * The isNotEmpty method returns true if the collection is not empty; otherwise, false is returned.
   * 
   * @returns {boolean} 
   * @memberof Collection
   */
  isNotEmpty(): boolean;

  /**
   * The keyBy method keys the collection by the given key.
   * If multiple items have the same key, only the last one will appear in the new collection.
   * 
   * @template T
   * @template K 
   * @param {(K | Function)} key 
   * @returns {Collection<T>} 
   * @memberof Collection
   */
  keyBy<T, K>(key: K | Function): Collection<T>;

  /**
   * The keys method returns all of the collection's keys.
   * 
   * @returns {Collection<string>} 
   * @memberof Collection
   */
  keys(): Collection<string>;
  
  /**
   * The last method returns the last element in the collection that passes a given truth test.
   * 
   * @param {(item: Item) => boolean} [fn] 
   * @returns {T} 
   * 
   * @memberof Collection
   */
  last(fn?: (item: Item) => boolean): Item;
  
  /**
   * The macro method lets you register custom methods.
   * 
   * @param {string} name 
   * @param {Function} fn 
   * @memberof Collection
   */
  macro(name: string, fn: Function): void;

  /**
   * The map method iterates through the collection and passes each value to the given callback.
   * The callback is free to modify the item and return it, thus forming a new collection of modified items.
   *
   * @template T
   * @param {<T>(...any) => T} fn 
   * @returns {Collection<T>} 
   * 
   * @memberof Collection
   */
  map<T>(fn: <T>(...any) => T): Collection<T>;

  /**
   * The mapWithKeys method iterates through the collection and passes each value to the given callback.
   * The callback should return an array where the first element represents the key
   * and the second element represents the value pair.
   *
   * @template T
   * @param {Function} fn 
   * @returns {Collection} 
   * 
   * @memberof Collection
   */
  mapWithKeys<T>(fn: Function): Collection<T>;

  /**
   * The max method returns the maximum value of a given key.
   * 
   * @param {string} [key] 
   * @returns {number} 
   * @memberof Collection
   */
  max(key?: string): number;

  /**
   * The median method returns the median value of a given key.
   * 
   * @template K 
   * @param {K} [key] 
   * @returns {Item}
   * 
   * @memberof Collection
   */
  median<K>(key?: K): Item;

  /**
   * The merge method merges the given object into the original collection.
   * If a key in the given object matches a key in the original collection,
   * the given objects value will overwrite the value in the original collection.
   * 
   * @template T
   * @param {Object} object 
   * @returns {Collection<T>} 
   * @memberof Collection
   */
  merge<T>(object: Object): Collection<T>;

  /**
   * The min method returns the minimum value of a given key.
   * 
   * @template K 
   * @param {K} [key] 
   * @returns {number} 
   * @memberof Collection
   */
  min<K>(key?: K): number;

  /**
   * The mode method returns the mode value of a given key.
   * 
   * @template K 
   * @param {K} [key] 
   * @returns {(Collection<Item> | null)} 
   * 
   * @memberof Collection
   */
  mode<K>(key?: K): Collection<Item> | null;

  /**
   * The nth method creates a new collection consisting of every n-th element.
   * 
   * @param {number} n 
   * @param {number} offset 
   * @returns {Collection<Item>} 
   * @memberof Collection
   */
  nth(n: number, offset?: number): Collection<Item>;

  /**
   * The only method returns the items in the collection with the specified keys.
   * 
   * @template K 
   * @param {K[]} properties 
   * @returns {Object} 
   * 
   * @memberof Collection
   */
  only<K>(properties: K[]): Object;

  /**
   * The partition method may be combined with destructuring to separate elements
   * that pass a given truth test from those that do not.
   * 
   * @param {(item: Item) => boolean} fn 
   * @returns {[Item[], Item[]]} 
   * @memberof Collection
   */
  partition(fn: (item: Item) => boolean): [Item[], Item[]];

  /**
   * The pipe method passes the collection to the given callback and returns the result.
   * 
   * @template U 
   * @param {(...any) => U} fn 
   * @returns {U} 
   * @memberof Collection
   */
  pipe<U>(fn: (...any) => U): U;

  /**
   * The pluck method retrieves all of the values for a given key.
   * 
   * @template T
   * @template K 
   * @template V 
   * @param {V} value 
   * @param {K} [key] 
   * @returns {Collection<T>} 
   * 
   * @memberof Collection
   */
  pluck<T, K, V>(value: V, key?: K): Collection<T>;

  /**
   * The pop method removes and returns the last item from the collection.
   * 
   * @template Item 
   * @returns {Item} 
   * @memberof Collection
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
   * @memberof Collection
   */
  prepend<K, V>(value: V, key?: K): this;

  /**
   * The pull method removes and returns an item from the collection by its key.
   * 
   * @template K 
   * @param {K} key 
   * @returns {(T | null)} 
   * 
   * @memberof Collection
   */
  pull<K>(key: K): Item | null;
  
  /**
   * The push method appends an item to the end of the collection.
   * 
   * @param {Item} item 
   * @returns {this} 
   * 
   * @memberof Collection
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
   * @memberof Collection
   */
  put<K, V>(key: K, value: V): this;
  /**
   * The random method returns a random item from the collection.
   * 
   * @param {number} [length] 
   * @returns {(this | Item)} 
   * @memberof Collection
   */
  random(length?: number): this | Item;
  
  /**
   * The reduce method reduces the collection to a single value,
   * passing the result of each iteration into the subsequent iteration.
   * 
   * @template T 
   * @param {((_carry: T | null, item: Item) => T)} fn 
   * @param {T} [carry] 
   * @memberof Collection
   */
  reduce<T>(fn: (_carry: T | null, item: Item) => T, carry?: T);

  /**
   * The reject method filters the collection using the given callback.
   * The callback should return true if the item should be removed from the resulting collection.
   * 
   * @param {(item: Item) => boolean} fn 
   * @returns {Collection<Item>} 
   * @memberof Collection
   */
  reject(fn: (item: Item) => boolean): Collection<Item>;

  /**
   * The reverse method reverses the order of the collection's items.
   * 
   * @returns {Collection<Item>} 
   * @memberof Collection
   */
  reverse(): Collection<Item>;

  /**
   * The search method searches the collection for the given value and returns its key if found.
   * If the item is not found, false is returned.
   * 
   * @param {Item} value
   * @param {any} strict 
   * @memberof Collection
   */
  search(value: Item, strict);

  /**
   * The search method searches the collection for the given value and returns its key if found.
   * If the item is not found, false is returned.
   * 
   * @param {(value: Item, key: number) => boolean} fn 
   * @param {any} strict 
   * @memberof Collection
   */
  search(fn: (value: Item, key: number) => boolean, strict);

  /**
   * The shift method removes and returns the first item from the collection.
   * 
   * @returns {Item} 
   * 
   * @memberof Collection
   */
  shift(): Item;

  /**
   * The shuffle method randomly shuffles the items in the collection.
   * 
   * @returns {this} 
   * @memberof Collection
   */
  shuffle(): this;

  /**
   * The slice method returns a slice of the collection starting at the given index.
   * 
   * @param {number} remove 
   * @param {number} [limit] 
   * @returns {Collection<Item>} 
   * @memberof Collection
   */
  slice(remove: number, limit?: number): Collection<Item>;
  
  /**
   * The sort method sorts the collection.
   * 
   * @param {(a: Item, b: Item) => number} [fn] 
   * @returns {Collection<Item>} 
   * @memberof Collection
   */
  sort(fn?: (a: Item, b: Item) => number): Collection<Item>;

  /**
   * The sortBy method sorts the collection by the given key.
   * The sorted collection keeps the original array keys.
   * 
   * @template V 
   * @param {V} value 
   * @returns {Collection<Item>} 
   * @memberof Collection
   */
  sortBy<V>(value: V): Collection<Item>;

  /**
   * The sortBy method sorts the collection by the given callback.
   * The sorted collection keeps the original array keys.
   * 
   * @param {(item: Item) => number} fn 
   * @returns {Collection<Item>} 
   * @memberof Collection
   */
  sortBy(fn: (item: Item) => number): Collection<Item>;

  /**
   * This method has the same signature as the sortBy method,
   * but will sort the collection in the opposite order.
   * 
   * @template V 
   * @param {V} value 
   * @returns {Collection<Item>} 
   * @memberof Collection
   */
  sortByDesc<V>(value: V): Collection<Item>;

  /**
   * This method has the same signature as the sortBy method,
   * but will sort the collection in the opposite order.
   * 
   * @param {(item: Item) => number} fn 
   * @returns {Collection<Item>} 
   * @memberof Collection
   */
  sortByDesc(fn: (item: Item) => number): Collection<Item>; 

  /**
   * The splice method removes and returns a slice of items starting at the specified index.
   * You may pass a second argument to limit the size of the resulting chunk.
   * 
   * @param {number} index 
   * @param {number} limit 
   * @param {Item[]} [replace] 
   * @returns {Collection<Item>} 
   * @memberof Collection
   */
  splice(index: number, limit: number, replace?: Item[]): Collection<Item>;

  /**
   * The split method breaks a collection into the given number of groups.
   * 
   * @param {number} numberOfGroups 
   * @returns {Item[]} 
   * @memberof Collection
   */
  split(numberOfGroups: number): Item[];
  
  /**
   * The sum method returns the sum of all items in the collection.
   * 
   * @template K 
   * @param {(K | Function)} [key] 
   * @returns {number | string}
   *
   * @memberof Collection
   */
  sum<K>(key?: K | ((item: Item) => number | string)): number | string;
  
  /**
   * The take method returns a new collection with the specified number of items:
   * You may also pass a negative integer to take the specified amount of items from the end of the collection.
   * 
   * @param {number} length 
   * @returns {Collection<Item>} 
   * @memberof Collection
   */
  take(length: number): Collection<Item>;
  
  /**
   * The tap method passes the collection to the given callback,
   * allowing you to "tap" into the collection at a specific point
   * and do something with the items while not affecting the collection itself.
   * 
   * @param {Function} fn 
   * @returns {this} 
   * @memberof Collection
   */
  tap(fn: Function): this;
    
  /**
   * The times method creates a new collection by invoking the callback a given amount of times.
   * 
   * @template T 
   * @param {number} times 
   * @param {(time: number) => T} fn 
   * @returns {T[]} 
   * @memberof Collection
   */
  times<T>(times: number, fn: (time: number) => T): T[];

  /**
   * The toArray method converts the collection into a plain array.
   * If the collection is an object, an array containing the values will be returned.
   * 
   * @template T
   * @returns {T[]} 
   * @memberof Collection
   */
  toArray<T>(): T[];

  /**
   * The toJson method converts the collection into JSON string.
   * 
   * @returns {string} 
   * @memberof Collection
   */
  toJson(): string;
  
  /**
   * The transform method iterates over the collection and calls the given callback with each item in the collection.
   * The items in the collection will be replaced by the values returned by the callback.
   * 
   * @template T 
   * @param {(item: Item) => T} fn 
   * @returns {this} 
   * @memberof Collection
   */
  transform<T>(fn: (item: Item) => T): this;
  
  /**
   * The union method adds the given array to the collection.
   * If the given array contains keys that are already in the original collection,
   * the original collection's values will be preferred.
   * 
   * @template T
   * @param {Object} object 
   * @returns {Collection<T>} 
   * @memberof Collection
   */
  union<T>(object: Object): Collection<T>;

  /**
   * The unique method returns all of the unique items in the collection.
   * 
   * @template K 
   * @param {K} [key] 
   * @returns {K[]}
   *
   * @memberof Collection
   */
  unique<K>(key?: K | Function): Collection<Item>;

  /**
   * The values method returns a new collection with the keys reset to consecutive integers.
   * 
   * @template T
   * @returns {Collection<T>}
   * @memberof Collection
   */
  values<T>(): Collection<T>;

  /**
   * The when method will execute the given callback when the first argument given to the method evaluates to true.
   * 
   * @param {boolean} condition 
   * @param {Function} fn 
   * @memberof Collection
   */
  when(condition: boolean, fn: Function): void;

  /**
   * The where method filters the collection by a given key / value pair.
   * 
   * @template K 
   * @template V 
   * @param {K} key 
   * @param {V} value 
   * @returns {Collection} 
   * 
   * @memberof Collection
   */
  where<K, V>(key: K, value: V): Collection<Item>;
  
  /**
   * The where method filters the collection by a given key / value pair.
   * 
   * @template K 
   * @template V 
   * @param {K} key 
   * @param {Operator} operator 
   * @param {V} value 
   * @returns {Collection} 
   * 
   * @memberof Collection
   */
  where<K, V>(key: K, operator: Operator, value: V): Collection<Item>;

  /**
   * The whereIn method filters the collection by a given key / value contained within the given array.
   * 
   * @template K 
   * @template V 
   * @param {K} key 
   * @param {V[]} values 
   * @returns {Collection} 
   * 
   * @memberof Collection
   */
  whereIn<K, V>(key: K, values: V[]): Collection<Item>;

  /**
   * The whereNotIn method filters the collection by a given key / value not contained within the given array.
   * 
   * @template K 
   * @template V 
   * @param {K} key 
   * @param {V[]} values 
   * @returns {Collection<Item>} 
   * @memberof Collection
   */
  whereNotIn<K, V>(key: K, values: V[]): Collection<Item>;

  /**
   * The zip method merges together the values of the given array with the values
   * of the original collection at the corresponding index.
   * 
   * @template T 
   * @param {T[]} array 
   * @returns {Collection<[Item, T]>}
   * @memberof Collection
   */
  zip<T>(array: T[]): Collection<[Item, T]>;

  [macroFn: string]: Function;
}

declare module 'collect.js' {
  export default function <T>(collection?: T[] | Object): Collection<T>;
}
