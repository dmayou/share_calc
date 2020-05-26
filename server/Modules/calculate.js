const calculate = (expression) => {
    if (expression === '' || expression === null) {
        return 'err';
    }
    // get first operand
    const operatorsReg = /[+\{u00f7}\u{00d7}\u{2212}]/;
    const { index, input: operator } = expression.match(operatorsReg);
    console.log('result:', index, operator);

    return '';
}

module.exports = calculate;