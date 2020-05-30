const validateResult = require('./validate-result');

const resultsTests = [
    { descr: `accept addition`, input: '1+1=2', result: true },
    { descr: `reject without equals`, input: '1+17', result: false },
    { descr: `reject with space character`, input: '1 + 1 = 2', result: false },
    { descr: `reject with multiple lines`, input: '1+1=2\n2+2', result: false },
    { descr: `reject blank`, input: '', result: false },
    { descr: `reject character strings`, input: 'have a nice day', result: false },
    { descr: `reject random`, input: 'fdghbae;ljwoij786tyrewqljlk', result: false },
    { descr: `accept division`, input: '2\u{00f7}2=1', result: true },
    { descr: `accept multiplication`, input: '121\u{00d7}2=242', result: true },
    { descr: `accept subtraction`, input: '15\u{2212}15=0', result: true },
    { descr: `accept radix point`, input: '0.1+0.55=0.65', result: true },
    { descr: `accept NaN`, input: '0\u{00f7}0=NaN', result: true },
    { descr: `accept Infinity`, input: '1\u{00f7}0=Infinity', result: true },
    { descr: `accept exponential notation`, input: '9999999999\u{00d7}99999999999=9.9999999998e+21', result: true },
    { descr: `accept exponential notation`, input: '1\u{00f7}99999999999999999999=1e-20', result: true },
    { descr: `accept negative values`, input: '-5+2=3', result: true },

    // { descr: ``, input: '', result: true },
];

describe("Result Checks", () => {
    for (let { descr, input, result } of resultsTests) {
        it(`should ${descr}`, () => {
            expect(validateResult(input)).toEqual(result);
        });
    }
});