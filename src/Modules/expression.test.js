import { buildExpression, containsOperator } from './expression';

const operatorTests = [
    { descr: `should find add`, input: '+', result: true },
    { descr: `should find divide`, input: '\u00f7', result: true },
    { descr: `should find multiply`, input: '\u00d7', result: true },
    { descr: `should find subtract`, input: '\u2212', result: true },
    { descr: `should find in expression`, input: '1234+5678', result: true },
    { descr: `should find in expression`, input: '1234\u00f75678', result: true },
    { descr: `should  not find if missing`, input: '134567890.98765443211', result: false },
    // { descr: `should  `, input: , result: false },
];

const expressionTests = [
    // { descr: `should concatenate inputs`, key: '1', expression: '', result: '1' },
    { descr: `should add digit`, key: '1', expression: '', result: '1' },
    { descr: `should add operator`, key: '+', expression: '1', result: '1+' },
    { descr: `should not add second operator`, key: '\u00f7', expression: '1+', result: '1+' },
// { descr: `should `, key: , expression: , result: '' },
];

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
    // it("should calculate sanity check correctly", () => {
    //     expect(1+1).toEqual(2);
    // });
    for (let { descr, key, expression, result } of expressionTests) {
        it(`should ${descr}`, () => {
            expect(buildExpression(key, expression)).toEqual(result);
        });
    }
});