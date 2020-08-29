import React from 'react';
import './code.css';

const Code = props => {
    return (
        <div className="code-wrapper" id={props.id}>
            <pre>
                <code className="code-sample">
                    {props.sample} 
                </code>
            </pre>
        </div>
    )
};

export default Code;