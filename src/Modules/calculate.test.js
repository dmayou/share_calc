import calculate from './calculate';

const tests = [
    { descr: `return null for null`, input: null, result: null },
    { descr: `return null for empty`, input: '', result: null },
    { descr: `return null for garbage input`, input: 'gsflkjh;lrtoiu', result: null },
    { descr: `return null if no operator`, input: '623.6', result: null },
    { descr: `calculate single-digit addition`, input: '2+3', result: '5' },
    { descr: `calculate multi-digit addition`, input: '123+456', result: '579' },
    { descr: `calculate decimal addition`, input: '1.23+4.5', result: '5.73' },
    { descr: `calculate division`, input: '121\u{00f7}11', result: '11' },
    { descr: `calculate decimal division`, input: '15.25\u{00f7}16.9', result: String(15.25/16.9).slice(0,18) },
    { descr: `return Infinity for divide by 0`, input: '121\u{00f7}0', result: 'Infinity' },
    { descr: `calculate multiplication`, input: '256\u{00d7}16', result: String(256 * 16) },
    { descr: `calculate subtraction`, input: '123.456\u{2212}765.4', result: String(123.456 - 765.4) },
    // { descr: ``, input: , result: '' },
];

describe("Calculation Checks", () => {
    // it("should calculate sanity check correctly", () => {
    //     expect(1+1).toEqual(2);
    // });
    for (let { descr, input, result } of tests) {
        it(`should ${descr}`, () => {
            expect(calculate(input)).toEqual(result);
        });
    }
});