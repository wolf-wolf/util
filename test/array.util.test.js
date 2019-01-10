const expect = require('chai').expect;

const AlphaUMa = require('../dist/AlphaUMa');

describe('insertArrToArr', () => {
    it('should be [1, 2, \'a\', \'b\', \'c\', 3]', function () {
        let arr1 = [1, 2, 3];
        let arr2 = ['a', 'b', 'c'];

        expect(AlphaUMa.array.insertArrToArr(1, arr1, arr2)).to.deep.eq(['a', 'b', 1, 2, 3, 'c']);
    });
});


describe('createSpArray', () => {
    it('should be [{}, {}, {}, {}]', function () {
        expect(AlphaUMa.array.createSpArray(4, {})).to.deep.eq([{}, {}, {}, {}]);
    });

    it('should be [1,1,1,1]', function () {
        expect(AlphaUMa.array.createSpArray(4, 1)).to.deep.eq([1, 1, 1, 1]);
    });
});

describe('removeSpEle', () => {
    it('should be [\'b\', 1, 2, 3, \'c\']', function () {
        expect(AlphaUMa.array.removeSpEle(['a', 'b', 1, 2, 3, 'c'], 'a')).to.deep.eq(['b', 1, 2, 3, 'c']);
    });
});