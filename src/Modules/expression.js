const changeSignKey = '\u00b1';

const buildExpression = (key, expression) => {
    // determine state of expression
    const exprEmpty = expression === '0';
    const hasFirstOperand = hasOnlyFirstNumber(expression);
    const hasSecondOperand = hasSecondNumber(expression);
    const hasOperator = containsOperator(expression);
    // get index of operator, if available
    const operatorsReg = /[+\u{00f7}\u{00d7}\u{2212}]/u; // + / * -
    const { index: operatorIndex } = hasOperator && expression.match(operatorsReg);
    // detect negative numbers
    const firstNumberNegative = expression[0] === '-';
    const secondNumberNegative = hasSecondNumber && expression[operatorIndex + 1] === '-';
    // detect radix point
    const firstHasRadixPoint = expression.includes('.');
    const secondHasRadixPoint = hasSecondOperand && expression.slice(operatorIndex + 1).includes('.');
    // detect special keys
    const isOperator = containsOperator(key);
    const isChangeSign = key === changeSignKey;
    const isRadixPoint = key === '.';
    
    if (exprEmpty && isOperator) {
        return expression + key;
    } else if (hasOperator && isOperator) { // do not add a second operator
        return expression;
    } else if (isChangeSign && hasFirstOperand) {
        if (firstNumberNegative) { // remove negative symbol
            return expression.slice(1);
        } else { // add negative symbol
            return '-' + expression;
        }
    } else if (isChangeSign && hasSecondOperand) {
        // change sign of second operand
        //    break expression at operator, then reassemble
        const expressionBeforeOperator = expression.slice(0, operatorIndex + 1);
        const secondOperand = expression.slice(operatorIndex + 1);
        if (secondNumberNegative) {
            return expressionBeforeOperator + secondOperand.slice(1);
        } else {
            return expressionBeforeOperator + '-' + secondOperand;
        }
    } else if (!isRadixPoint) {
        // replace '0'
        if (exprEmpty && !isRadixPoint) {
            return key;
        } else if (expression === '-0') {
            return '-' + key;
        } else {
            return expression + key;
        }
    } else if (isRadixPoint) {
        if (exprEmpty) {
            return expression + key;
        } else if (hasFirstOperand && hasOperator) {
            return expression + '0' + key;
        } else if (hasFirstOperand && firstHasRadixPoint) {
            return expression;
        } if (secondHasRadixPoint) {
            return expression;
        } else {
            return expression + key;
        }
    }
}

const hasOnlyFirstNumber = (expression) => {
    const onlyFirstNumberReg = /^[-]{0,1}[\d]+[.]{0,1}[\d]{0,}[+\u{00f7}\u{00d7}\u{2212}]{0,1}$/ug;
    return onlyFirstNumberReg.test(expression);
}

const hasSecondNumber = (expression) => {
    const secondNumberReg = /^[-]{0,1}[\d]+[.]{0,1}[\d]{0,}[+\u{00f7}\u{00d7}\u{2212}]{1}[-]{0,1}[\d]+[.]{0,1}[\d]{0,}$/ug;
    return secondNumberReg.test(expression);
};

const containsOperator = (expression) => {
    const operatorsReg = /[+\u{00f7}\u{00d7}\u{2212}]/u; // + / * -
    return operatorsReg.test(expression);
}

export {
    hasOnlyFirstNumber,
    hasSecondNumber,
    buildExpression,
    containsOperator,
};