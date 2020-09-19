'use strict';

module.exports = (it, expect, collect) => {
    it('should break the collection into multiple collections of elements', () => {
        const collection = collect(['A', 'A', 'B', 'B', 'C', 'C', 'C', 'D']);

        const chunksOf1 = collection.chunkWhile((current, key, chunk) => current === chunk.last());
        expect(chunksOf1.all()).to.eql([
            collect(['A', 'A']),
            collect(['B', 'B']),
            collect(['C', 'C', 'C']),
            collect(['D'])
        ]);

        const chunksOf2 = collection.chunkWhile((current, key, chunk) => current !== chunk.last());
        expect(chunksOf2.all()).to.eql([
            collect(['A']),
            collect(['A', 'B']),
            collect(['B', 'C']),
            collect(['C']),
            collect(['C', 'D'])
        ]);
    });

    it('should break the collection into multiple collections of contiguously increasing integers', () => {
        const collection = collect([1, 4, 9, 10, 11, 12, 15, 16, 19, 20, 21]);

        const chunks = collection.chunkWhile((current, key, chunk) => current === chunk.last() + 1);
        expect(chunks.all()).to.eql([
            collect([1]),
            collect([4]),
            collect([9, 10, 11, 12]),
            collect([15, 16]),
            collect([19, 20, 21])
        ]);
    });

    it('should break the collection into multiple collections of increasing order of elements', () => {
        const collection = collect([30, 32, 35, 20, 23, 29, 12, 14, 17]);

        const chunks = collection.chunkWhile((current, key, chunk) => current > chunk.last());
        expect(chunks.all()).to.eql([
            collect([30, 32, 35]),
            collect([20, 23, 29]),
            collect([12, 14, 17])
        ]);
    });

    it('should return a new collection, not modify the original', () => {
        const collection = collect([1, 2, 3, 4]);
        const chunks = collection.chunkWhile((current, key, chunk) => current === chunk.last());

        expect(chunks.all()).to.eql([
            collect([1]),
            collect([2]),
            collect([3]),
            collect([4]),
        ]);

        expect(collection.all()).to.eql([1, 2, 3, 4]);

        expect(chunks).to.not.eql(collection);
    });

    it('should return an empty collection when empty collection is passed', () => {
        const collection = collect([]);
        const chunks = collection.chunkWhile((current, key, chunk) => current === chunk.last());

        expect(chunks.all()).to.eql([]);
    });

    it('should return a new collection with specified value in chunk when a value is passed', () => {
        const collection = collect(1);
        const chunks = collection.chunkWhile((current, key, chunk) => current === chunk.last());

        expect(chunks.all()).to.eql([
            collect([1])
        ]);
    });

    it('should break the collection based on object into multiple collections of elements', () => {
        const collection = collect({
            first: 'A',
            second: 'A',
            third: 'B',
            fourth: 'B',
            fifth: 'C',
            sixth: 'C',
            seventh: 'C',
            eighth: 'D',
        });

        const chunksOf1 = collection.chunkWhile((current, key, chunk) => current === chunk.last());
        expect(chunksOf1.all()).to.eql([
            collect({
                first: 'A',
                second: 'A',
            }),
            collect({
                third: 'B',
                fourth: 'B',
            }),
            collect({
                fifth: 'C',
                sixth: 'C',
                seventh: 'C',
            }),
            collect({
                eighth: 'D',
            })
        ]);

        const chunksOf2 = collection.chunkWhile((current, key, chunk) => current !== chunk.last());
        expect(chunksOf2.all()).to.eql([
            collect({
                first: 'A',
            }),
            collect({
                second: 'A',
                third: 'B',
            }),
            collect({
                fourth: 'B',
                fifth: 'C',
            }),
            collect({
                sixth: 'C',
            }),
            collect({
                seventh: 'C',
                eighth: 'D',
            })
        ]);
    });

    it('should break the collection based on object into multiple collections of contiguously increasing integers', () => {
        const collection = collect({
            first: 1,
            second: 4,
            third: 9,
            fourth: 10,
            fifth: 11,
            sixth: 12,
            seventh: 15,
            eighth: 16,
            ninth: 19,
            tenth: 20,
            eleventh: 21,
        });

        const chunks = collection.chunkWhile((current, key, chunk) => current === chunk.last() + 1);
        expect(chunks.all()).to.eql([
            collect({
                first: 1,
            }),
            collect({
                second: 4,
            }),
            collect({
                third: 9,
                fourth: 10,
                fifth: 11,
                sixth: 12,
            }),
            collect({
                seventh: 15,
                eighth: 16,
            }),
            collect({
                ninth: 19,
                tenth: 20,
                eleventh: 21,
            })
        ]);
    });

    it('should break the collection based on object into multiple collections of increasing order of elements', () => {
        const collection = collect({
            first: 30,
            second: 32,
            third: 35,
            fourth: 20,
            fifth: 23,
            sixth: 29,
            seventh: 12,
            eighth: 14,
            ninth: 17,
        });

        const chunks = collection.chunkWhile((current, key, chunk) => current > chunk.last());
        expect(chunks.all()).to.eql([
            collect({
                first: 30,
                second: 32,
                third: 35,
            }),
            collect({
                fourth: 20,
                fifth: 23,
                sixth: 29,
            }),
            collect({
                seventh: 12,
                eighth: 14,
                ninth: 17,
            })
        ]);
    });

    it('should return an empty collection when empty collection based on object is passed', () => {
        const collection = collect({});
        const chunks = collection.chunkWhile((current, key, chunk) => current === chunk.last());

        expect(chunks.all()).to.eql({});
    });
};
