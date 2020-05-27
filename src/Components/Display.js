import React from 'react';
import './Display.css';

function Display({ expression }) {
    return (
        <div className="Display">
            <div className="bezel">
                <div className="expression">
                    {expression}
                </div>
            </div>
        </div>
    );
}

export default Display;
