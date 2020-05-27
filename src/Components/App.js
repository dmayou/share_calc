import React, { useState, useEffect } from 'react';
import './App.css';
import Calc from './Calc';
import Display from './Display';
import Key from './Key';
import Results from './Results';
import calculate from '../Modules/calculate';
import { buildExpression } from '../Modules/expression';

import io from 'socket.io-client';
const uri = 'localhost:5000';
let socket = io(uri);

const clear = 'Clear';
const divisionSymbol = <span>&divide;</span>;
const multSymbol = <span>&times;</span>;
const plusSymbol = <span>+</span>;
const minusSymbol = <span>&minus;</span>;
const changeSignSymbol = <span>&plusmn;</span>
const equalSymbol = <span>=</span>
const legends = [
  { display: changeSignSymbol, oper: '\u00b1', },
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
  const initialExpression = '0';
  const [expression, updateExpression] = useState(initialExpression);
  const [results, updateResults] = useState([]);
  useEffect(() => {
    // socket=io(uri);
    socket.on('all_results', (results) => updateResults(results));
    socket.on('disconnect', ()=> {
      socket.off('all_results');
      socket.off('disconnect');
    },[]);
    return () => socket = null; // cleanup/destructor
  }, []);
  const handleClick = (key) => (event) => {
    updateExpression(buildExpression(key, expression));
  };
  const handleClear = () => {
    updateExpression(initialExpression);
  };
  const handleCalculate = (e) => {
    const result = calculate(expression);
    const sharedResult = expression + '=' + result;
    updateExpression(result);
    // send sharedResult to server
    socket.emit('new_result', sharedResult);
  };
  const keys = legends.map((legend, i) => {
    return <Key key={i} handleClick={handleClick(legend.oper)} legend={legend.display} />
  });
  return (
    <div className="App">
      <Calc>
        <Display expression={expression} />
        <Key key="Clear" width={2} handleClick={handleClear} legend={clear} />
        {keys}
        <Key key="Equals" width={2} handleClick={handleCalculate} legend={equalSymbol} />
      </Calc>
      <Results results={results}/>
    </div>
  );
}

export default App;
