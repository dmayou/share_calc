const calculate = (expression) => {
    if (expression === '' || expression === null) {
        return 'err';
    }
    // get first operand
    const operatorsReg = /[+\{u00f7}\u{00d7}\u{2212}]/; // "+ / * -""
    const { index, input: operator } = expression.match(operatorsReg);
    console.log('result:', index, operator);
    const firstOperand = expression.slice(0, index);
    const secondOperand = expression.slice(index);
    return firstOperand + secondOperand;
}

module.exports = calculate;