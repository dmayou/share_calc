import buildExpression from './expression';

const tests = [
    { descr: `should concatenate inputs`, key: '1', expression: '', result: '1' },
    // { descr: `should `, key: , expression: , result: '' },
];

describe("Calculation Checks", () => {
    // it("should calculate sanity check correctly", () => {
    //     expect(1+1).toEqual(2);
    // });
    for (let { descr, key, expression, result } of tests) {
        it(`should ${descr}`, () => {
            expect(buildExpression(key, expression)).toEqual(result);
        });
    }
});