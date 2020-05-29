const validateResult = require('./validate-result');

resultsTests = [
    { descr: ``, input: '', result: true },
    { descr: ``, input: '', result: true },
    { descr: ``, input: '', result: true },
    { descr: ``, input: '', result: true },
    { descr: ``, input: '', result: true },
    { descr: ``, input: '', result: true },

];

describe("Operand Checks", () => {
    it("should calculate sanity check correctly", () => {
        expect(1+1).toEqual(2);
    });
    for (let { descr, input, result } of resultsTests) {
        it(`should ${descr}`, () => {
            expect(validateResult(input)).toEqual(result);
        });
    }
});