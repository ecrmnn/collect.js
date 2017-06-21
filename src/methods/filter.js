'use strict';

module.exports = function filter(fn) {
  fn = fn || false;

  let filteredArray = [];
  for (let i = 0; i < this.items.length; i++) {
    const item = this.items[ i ];
    if ( fn ) {
      fn ( item, i ) ? filteredArray.push( item ) : null;
    } else if ( Array.isArray( item ) ) {
      item.length ? filteredArray.push( item ) : null;
    } else if ( item !== undefined && item !== null && typeof item === 'object' ) {
      Object.keys(item).length ? filteredArray.push( item ) : null;
    } else if ( item ) {
      filteredArray.push( item );
    }
  }

  return new this.constructor( filteredArray );
};
