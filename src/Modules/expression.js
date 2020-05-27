const buildExpression = (key, expression) => {
    // do not add a second operator
    if (containsOperator(expression) && containsOperator(key)) {
        return expression;
    } else {
        return expression + key;
    }
}

const containsOperator = (expression) => {
    const operatorsReg = /[+\u{00f7}\u{00d7}\u{2212}]/u; // + / * -
    return operatorsReg.test(expression);
}

export {
    buildExpression,
    containsOperator,
};