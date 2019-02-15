const expect = require('chai').expect;

const AlphaUMa = require('../dist/AlphaUMa').default;

describe('getObjPropertyByPath', () => {
    let params = {
        name: {
            fir: 'leno',
            mid: 'micheal',
            last: 'jane'
        }
    };
    it(`pass ( ${JSON.stringify(params)} , 'name/fir' ), should return leno`, () => {
        expect(AlphaUMa.obj.getObjPropertyByPath(params, 'name/fir')).to.eq('leno');
    });
    it(`pass ( ${JSON.stringify(params)} , 'name' ), should return ${JSON.stringify(params.name)}`, () => {
        expect(AlphaUMa.obj.getObjPropertyByPath(params, 'name')).to.eq(params.name);
    });
});

describe('isEmpty', () => {
    it('pass null, should throw error', () => {
        expect(() => AlphaUMa.obj.isEmpty(null)).to.throw('params must be an object');
    });

    it('pass undefined, should throw error', () => {
        expect(() => AlphaUMa.obj.isEmpty(undefined)).to.throw('params must be an object');
    });

    it('pass {}, should return true', () => {
        expect(AlphaUMa.obj.isEmpty({})).to.eq(true);
    });

    it('pass {a:1}, should return false', () => {
        expect(AlphaUMa.obj.isEmpty({})).to.eq(true);
    });
});