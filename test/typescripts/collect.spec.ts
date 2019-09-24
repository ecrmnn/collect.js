import { expect } from 'chai';
import { collect, Collection } from './../../dist';

describe('collect', function () {
    it('should be a function', function () {
        expect(typeof collect).equal('function');
    });
});

describe('collect initialization', function () {
    it('should be Collection class', function () {
        let collection: Collection = collect();
        expect(collection.constructor.name).equal('Collection');
    });
});
