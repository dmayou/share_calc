const maxLength = 20;

const calculate = (expression) => {
    if (expression === '' || expression === null) {
        return null;
    }
    // parse operator
    const operatorsReg = /[+\u{00f7}\u{00d7}\u{2212}]/u; // + / * -
    const operatorMatch = expression.match(operatorsReg);
    if (!operatorMatch) {
        return null; // don't calculate expression without operator
    }
    const { 0: operator, index } = operatorMatch;
    // parse operands
    const operand1 = Number(expression.slice(0, index));
    const operand2 = Number(expression.slice(index + 1));
    // perform calculation
    let result = 'err';
    switch (operator) {
        case '+': // addition
            result = operand1 + operand2;
            break;
        case '\u{00f7}': // division
            result = operand1 / operand2;
            break;
        case '\u{00d7}': // multiplication
            result = operand1 * operand2;
            break;
        case '\u{2212}': // subtraction
            result = operand1 - operand2;
            break;
        default:
            console.error('Error: Invalid operator', operator);
    }
    return String(result).slice(0, maxLength);
}

export default calculate;