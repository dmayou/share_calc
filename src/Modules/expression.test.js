import { buildExpression, containsOperator, hasOnlyFirstNumber, hasSecondNumber } from './expression';

const firstNumberTests = [
    { descr: `find first number, no operator`, input: '123', result: true },
    { descr: `find first number with operator`, input: '123+', result: true },
    { descr: `find first number, with radix`, input: '1.23', result: true },
    { descr: `find first number, radix and operator`, input: '12.3+', result: true },
    { descr: `find first number`, input: '123', result: true },
    { descr: `find first number`, input: '123.', result: true },
    { descr: `find first number`, input: '0', result: true },
    { descr: `find first number`, input: '0.', result: true },
    { descr: `find first number`, input: '1.2345', result: true },
    { descr: `find first number`, input: '0.\u00f7', result: true },
    { descr: `find first number`, input: '1.05\u00d7', result: true },
    { descr: `find first number`, input: '123\u2212', result: true },
    { descr: `find first number negative`, input: '-123\u2212', result: true },
    { descr: `find first number negative decimal`, input: '-1.2\u2212', result: true },
    { descr: `reject with second number`, input: '123+456', result: false },
    { descr: `reject without first number`, input: '+456', result: false },
    { descr: `reject with only operator`, input: '+', result: false },
];

const secondNumberTests = [
    { descr: `find second number`, input: '123+456', result: true },
    { descr: `find second number`, input: '12.3+4', result: true },
    { descr: `find second number`, input: '123+4.', result: true },
    { descr: `find second number`, input: '123+4.', result: true },
    { descr: `find second number`, input: '123+-4.', result: true },
    { descr: `find second number`, input: '123+4.', result: true },
    { descr: `find second number`, input: '123+4.56', result: true },
    { descr: `find second number`, input: '-123+-4', result: true },
    { descr: `not find second number`, input: '123+', result: false },
    { descr: `not find second number`, input: '123', result: false },
    { descr: `not find second number`, input: '0', result: false },
    { descr: `not find second number`, input: '-0', result: false },
];

const operatorTests = [
    { descr: `find add`, input: '+', result: true },
    { descr: `find divide`, input: '\u00f7', result: true },
    { descr: `find multiply`, input: '\u00d7', result: true },
    { descr: `find subtract`, input: '\u2212', result: true },
    { descr: `find in expression`, input: '1234+5678', result: true },
    { descr: `find in expression`, input: '1234\u00f75678', result: true },
    { descr: `not find if missing`, input: '134567890.98765443211', result: false },
    // { descr: ` `, input: , result: false },
];

const expressionTests = [
    { descr: `add digit`, key: '1', expression: '', result: '1' },
    { descr: `add operator`, key: '+', expression: '1', result: '1+' },
    { descr: `not add second operator`, key: '\u00f7', expression: '1+', result: '1+' },
    { descr: `change sign of number`, key: '\u00b1', expression: '123', result: '-123' },
    { descr: `remove negative sign of number`, key: '\u00b1', expression: '-123', result: '123' },
    { descr: `replace zero placeholder`, key: '6', expression: '0', result: '6' },
    { descr: `remove zero placeholder of negative number`, key: '6', expression: '-0', result: '-6' },
// { descr: ``, key: , expression: , result: '' },
];

describe("Find First Number Checks", () => {
    for (let { descr, input, result } of firstNumberTests) {
        it(`should ${descr}`, () => {
            expect(hasOnlyFirstNumber(input)).toEqual(result);
        });
    }
});

describe("Find Second Number Checks", () => {
    for (let { descr, input, result } of secondNumberTests) {
        it(`should ${descr}`, () => {
            expect(hasSecondNumber(input)).toEqual(result);
        });
    }
});

describe("Operand Checks", () => {
    // it("should calculate sanity check correctly", () => {
    //     expect(1+1).toEqual(2);
    // });
    for (let { descr, input, result } of operatorTests) {
        it(`should ${descr}`, () => {
            expect(containsOperator(input)).toEqual(result);
        });
    }
});

describe("Expression Checks", () => {
    for (let { descr, key, expression, result } of expressionTests) {
        it(`should ${descr}`, () => {
            expect(buildExpression(key, expression)).toEqual(result);
        });
    }
});