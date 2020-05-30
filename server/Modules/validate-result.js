const validateResult = equation => {
    // valid result is in the form of an equation:
    // <operand><operator><operand>=<result>
    // general strategy:
    //   - make general checks (length, presence of operator, equals)
    //   - remove all valid characters and patterns, then see if 
    //     anything is left

    // will still allow wrong things through, but seriously 
    // limits html injection

    const operatorReg = /[+\u{00f7}\u{00d7}\u{2212}]/u; // + / * -

    if (equation === '' // blank is invalid
        || !equation.includes('=') // must contain =
        || !operatorReg.test(equation) // must have an operator
       ) {
        return false;
    }

    // remove legal patterns and characters
    let str = equation
        .replace('e+', '').replace('e-', '') // exponential notation
        .replace(/[0-9.-]/g, '')    // numerals, radix points, negative
        .replace('NaN', '')
        .replace('Infinity', '')
        .replace(operatorReg, '')
        .replace('=', '');          // single '='

    return str === ''; // valid if nothing left
};

module.exports = validateResult;