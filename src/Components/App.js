import React, { useState, useEffect } from 'react';
import './App.css';
import Calc from './Calc';
import Display from './Display';
import Key from './Key';
import Results from './Results';
import calculate from '../Modules/calculate';
import { buildExpression } from '../Modules/expression';

import { keys, legends } from '../Modules/key_legends';

import io from 'socket.io-client';
const uri = 'localhost:5000';
let socket = io(uri);

const { clear, equalSymbol } = keys;

function App() {
  const initialExpression = '0';
  const [expression, updateExpression] = useState(initialExpression);
  const [results, updateResults] = useState([]);
  
  useEffect(() => {
    socket.on('all_results', (results) => updateResults(results));
    socket.on('disconnect', ()=> {
      socket.off('all_results');
      socket.off('disconnect');
    });
    socket.emit('get_results');
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
    if (result !== null) { // returns null for incomplete expression
      const sharedResult = expression + '=' + result;
      updateExpression(result);
      // send sharedResult to server
      socket.emit('new_result', sharedResult);
    }
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
