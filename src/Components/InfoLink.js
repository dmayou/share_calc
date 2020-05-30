import React from 'react';
import './InfoLink.css';

const InfoLink = () => {
    return (
        
        <div className="info">
            <a className="info__link" href="https://github.com/dmayou/share_calc"
                rel="noopener noreferrer" target="_blank">
                <img className="info__img" src="../GitHub-Mark-32px.png" alt="github logo"></img>
            </a>
        </div>
    );
}

export default InfoLink;