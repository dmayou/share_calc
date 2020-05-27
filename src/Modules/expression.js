const changeSignKey = '\u00b1';

const buildExpression = (key, expression) => {
    const isOperator = containsOperator(key);
    // debugger;
    // do not add a second operator
    if (containsOperator(expression) && isOperator) {
        return expression;
    // change sign key: first operand    
    } else if (key === changeSignKey && hasOnlyFirstNumber(expression)) {
        // already negative, remove negative symbol
        if (expression[0] === '-') {
            return expression.slice(1);
        // not negative, add negative symbol
        } else {
            return '-' + expression;
        }
    } else if (key === changeSignKey && hasSecondNumber(expression)) {
        // change sign of second operand
        //    break expression at operator
        const operatorsReg = /[+\u{00f7}\u{00d7}\u{2212}]/u; // + / * -
        const { index: operatorIndex } = expression.match(operatorsReg);
        const expressionBeforeOperator = expression.slice(0, operatorIndex + 1);
        const secondOperand = expression.slice(operatorIndex + 1);
        if (secondOperand[0] === '-') {
            return expressionBeforeOperator + secondOperand.slice(1);
        } else {
            return expressionBeforeOperator + '-' + secondOperand;
        }
    } else if (!isOperator && key !== '.') {
        // replace '0'
        if (expression === '0') {
            return key;
        } else if (expression === '-0') {
            return '-' + key;
        } else {
            return expression + key;
        }
    } else {
        return expression + key;
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