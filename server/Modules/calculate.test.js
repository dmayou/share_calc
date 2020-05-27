const calculate = require ('./calculate');

const tests = [
    { descr: `return 'err' for null`, input: null, result: 'err' },
    { descr: `return 'err' for empty`, input: '', result: 'err' },
    { descr: `calculate single-digit addition`, input: '2+3', result: '5' },
    { descr: `calculate multi-digit addition`, input: '123+456', result: '579' },
    // { descr: ``, input: , result: '' },
];

describe("Calculation Checks", () => {
    it("should return true", () => {
        expect(1+1).toEqual(2);
    });
    for (let { descr, input, result } of tests) {
        it(`should ${descr}`, () => {
            expect(calculate(input)).toEqual(result);
        });
    }
});