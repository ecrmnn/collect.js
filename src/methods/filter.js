'use strict';

module.exports = function filter(fn) {
  fn = fn || false;

  let collection = [];
  for (let i = 0; i < this.items.length; i ++) {
    const item = this.items[i];
    if ( fn ) {
      fn( item, i ) ? collection.push( item ) : null;
    } else if ( !!item && !( Array.isArray( item ) && !item.length ) ) {
      collection.push( item );
    }
  }

  return new this.constructor(collection);
};
