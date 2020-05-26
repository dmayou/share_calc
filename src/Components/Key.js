import React from 'react';
import './Key.css';

function Key({ legend, width }) {
    const style = {
        flex: (width * 25) + '%',
    };
    return (
        <div className="Key" style={style}>
            <button className="Key__button">
                {legend}
            </button>
        </div>
    );
}

export default Key;
