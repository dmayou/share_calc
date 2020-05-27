import React from 'react';
import './Results.css';

function Results({ results }) {
    const resultsDisplay = results.map( (result, i) => {
        return (
            <tr key={i}>
                <td>
                    {result}
                </td>
            </tr>
        );
    }) 
    return (
        <div className="container Results">
            <table>
                <tbody>
                    {resultsDisplay || ''}
                </tbody>
            </table>
        </div>
    );
}

export default Results;
