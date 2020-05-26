import React, { useState } from 'react';
import './App.css';
import Calc from './Calc';
import Display from './Display';
import Key from './Key';
import Results from './Results';

const clear = 'Clear';
const divisionSymbol = <span>&divide;</span>;
const multSymbol = <span>&times;</span>;
const plusSymbol = <span>+</span>;
const minusSymbol = <span>&minus;</span>;
const changeSignSymbol = <span>&plusmn;</span>
const equalSymbol = <span>=</span>
const legends = [
  { display: divisionSymbol, oper: '\u00f7', },
  { display: '7', oper: '7'},
  { display: '8', oper: '8'},
  { display: '9', oper: '9'},
  { display: multSymbol, oper: '\u00d7'},
  { display: '4', oper: '4'},
  { display: '5', oper: '5'},
  { display: '6', oper: '6' },
  { display: plusSymbol, oper: '+' },
  { display: '1', oper: '1' },
  { display: '2', oper: '2' },
  { display: '3', oper: '3' },
  { display: minusSymbol, oper: '\u2212' },
  { display: '0', oper: '0' },
  { display: '.', oper: '.' },
];

function App() {
  const [expression, updateExpression] = useState('');
  const handleClick = (key) => (event) => {
    updateExpression(expression + key);
  };
  const handleClear = () => updateExpression('');
  const handleSign = () => console.log('sign!');
  const calculate = () => {
    console.log('calculate!');
  };
  const keys = legends.map((legend, i) => {
    return <Key key={i} handleClick={handleClick(legend.oper)} legend={legend.display} />
  });
  return (
    <div className="App">
      <Calc>
        <Display expression={expression} />
        <Key key="Clear" width={2} handleClick={handleClear} legend={clear} />
        <Key key="Sign" handleClick={handleSign} legend={changeSignSymbol} />
        {keys}
        <Key key="Equals" width={2} handleClick={calculate} legend={equalSymbol} />
      </Calc>
      <Results />
    </div>
  );
}

export default App;
