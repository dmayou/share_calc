import React from 'react';
import './Calc.css';
import Display from './Display';
import Key from './Key';

function Calc() {
    const divisionSymbol = <span>&divide;</span>;
    const multSymbol = <span>&times;</span>;
    const minusSymbol = <span>&minus;</span>;
    const legends = [
        divisionSymbol,
        '7', '8', '9', multSymbol,
        '4', '5', '6', '+',
        '1', '2' ,'3', minusSymbol,
        '0', '.',
    ];
    const keys = legends.map(( legend, i ) => {
        return <Key key={i} legend={legend} />
    });
    return (
        <div className="container Calc">
            <Display expression="1 + 2" />
            <Key key="Clear" width={3} legend="Clear" />
            {keys}
            <Key key="Equals" width={2} legend="=" />
        </div>
    );
}

export default Calc;
