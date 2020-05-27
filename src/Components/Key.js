import React from 'react';
import './Key.css';

function Key(props) {
    const { legend, width, handleClick } = props;
    const style = {
        flex: (width * 25) + '%',
    };
    return (
        <div className="Key" style={style}>
            <button className="Key__button" onClick={handleClick} type="button">
                {legend}
            </button>
        </div>
    );
}

export default Key;
