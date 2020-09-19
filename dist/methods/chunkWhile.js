'use strict';

var _require = require('../helpers/is'),
    isArray = _require.isArray,
    isObject = _require.isObject;

module.exports = function chunkWhile(fn) {
    var chunks = [];
    var index = 0;

    if (isArray(this.items) && this.items.length === 0) {
        return new this.constructor([]);
    }

    if (isObject(this.items) && Object.keys(this.items).length === 0) {
        return new this.constructor({});
    }

    if (isArray(this.items)) {
        var chunk = new this.constructor([]);

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
        var keys = Object.keys(this.items);

        var _chunk = new this.constructor({});

        _chunk.put(keys[index], this.items[keys[index]]);

        index++;

        while (index < keys.length) {
            if (!fn(this.items[keys[index]], keys[index], _chunk)) {
                chunks.push(_chunk);

                _chunk = new this.constructor({});
            }

            _chunk.put(keys[index], this.items[keys[index]]);

            index++;
        }

        if (_chunk.isNotEmpty()) {
            chunks.push(_chunk);
        }
    } else {
        chunks.push(new this.constructor([this.items]));
    }

    return new this.constructor(chunks);
};