const calculate = (expression) => {
    if (expression === '' || expression === null) {
        return 'err';
    }
    // find operator
    const operatorsReg = /[+\u{00f7}\u{00d7}\u{2212}]/u; // "+ / * -""
    const { 0: operator, index } = expression.match(operatorsReg);
    // find operands
    const firstOperand = Number(expression.slice(0, index));
    const secondOperand = Number(expression.slice(index + 1));

    let result = 'err';
    switch (operator) {
        case '+':
            result = String(firstOperand + secondOperand);
            break;
        default:
            console.error('Error: Invalid operator', operator);
    }
    return result;
}

module.exports = calculate;