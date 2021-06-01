'use strict';

const { isArray, isObject } = require('../helpers/is');

module.exports = function chunkWhile(fn) {
    const chunks = [];
    let index = 0;

    if (isArray(this.items) && this.items.length === 0) {
        return new this.constructor([]);
    }

    if (isObject(this.items) && Object.keys(this.items).length === 0) {
        return new this.constructor({});
    }

    if (isArray(this.items)) {
        let chunk = new this.constructor([]);

        chunk.push(this.items[index]);

        index++;

        while (index < this.items.length) {
            if (!fn(this.items[index], index, chunk)) {
                chunks.push(chunk);

                chunk = new this.constructor([]);
            }

            chunk.push(this.items[index]);

            index++;
        }

        if (chunk.isNotEmpty()) {
            chunks.push(chunk);
        }

    } else if (isObject(this.items)) {
        const keys = Object.keys(this.items);

        let chunk = new this.constructor({});

        chunk.put(keys[index], this.items[keys[index]]);

        index++;

        while (index < keys.length) {
            if (!fn(this.items[keys[index]], keys[index], chunk)) {
                chunks.push(chunk);

                chunk = new this.constructor({});
            }

            chunk.put(keys[index], this.items[keys[index]]);

            index++;
        }

        if (chunk.isNotEmpty()) {
            chunks.push(chunk);
        }

    } else {
        chunks.push(new this.constructor([this.items]));
    }

    return new this.constructor(chunks);
};
