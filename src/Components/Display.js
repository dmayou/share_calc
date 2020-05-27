import React from 'react';
import './Display.css';

function Display({ expression }) {
    const length = expression.length;
    let fontReduction;
    if (length > 10) {
        fontReduction = .2;
    }
    if (length > 16) {
        fontReduction = .4;
    }
    if (length > 20) {
        fontReduction = .6;
    }
    const style = {
        fontSize: 1 - fontReduction + 'em',
    };
    console.log(style);
    return (
        <div className="Display">
            <div className="bezel">
                <div className="expression" style={style}>
                    {expression}
                </div>
            </div>
        </div>
    );
}

export default Display;
