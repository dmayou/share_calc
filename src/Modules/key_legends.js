import React from 'react';

const keys = {
    clear: 'Clear',
    divisionSymbol: <span>&divide;</span>,
    multSymbol: <span>&times;</span>,
    plusSymbol: <span>+</span>,
    minusSymbol: <span>&minus;</span>,
    changeSignSymbol: <span>&plusmn;</span>,
    equalSymbol: <span>=</span>,
};

const legends = [
    { display: keys.changeSignSymbol, oper: '\u00b1', },
    { display: keys.divisionSymbol, oper: '\u00f7', },
    { display: '7', oper: '7' },
    { display: '8', oper: '8' },
    { display: '9', oper: '9' },
    { display: keys.multSymbol, oper: '\u00d7' },
    { display: '4', oper: '4' },
    { display: '5', oper: '5' },
    { display: '6', oper: '6' },
    { display: keys.plusSymbol, oper: '+' },
    { display: '1', oper: '1' },
    { display: '2', oper: '2' },
    { display: '3', oper: '3' },
    { display: keys.minusSymbol, oper: '\u2212' },
    { display: '0', oper: '0' },
    { display: '.', oper: '.' },
];

export {
    keys,
    legends,
};
