import React from 'react';
import './Calc.css';

function Calc({ children }) {
    return (
        <div className="container Calc">
            {children}
        </div>
    );
}

export default Calc;
