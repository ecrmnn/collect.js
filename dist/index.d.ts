declare type Collectable = object[] | string[] | number[] | boolean[] | null[] | object | string | number | boolean | null;
declare type CollectedItems = {
    [key: string]: any;
};
declare class Collection {
    items: CollectedItems;
    constructor(collection: Collectable);
    all: () => CollectedItems;
    map: (fn: Function) => Collection;
}
declare const collect: (collection: Collectable) => Collection;
export { Collection, collect };
export default collect;
