import { expect } from 'chai';
import collect, { Collection } from './../../dist';

describe('collect initialization', function() {
    it('should be Collection class after initialized', function() {
        let collection: Collection = collect();
        expect(collection.constructor.name).equal('Collection');
    });
});
