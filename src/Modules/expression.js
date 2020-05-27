const buildExpression = (key, expression) => {
    
    return expression + key;
}

const containsOperator = (expression) => {
    const operatorsReg = /[+\u{00f7}\u{00d7}\u{2212}]/u; // + / * -
    return operatorsReg.test(expression);
}

export {
    buildExpression,
    containsOperator,
};