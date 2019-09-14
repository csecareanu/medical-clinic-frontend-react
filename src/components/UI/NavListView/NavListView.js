import React from 'react';

export default (props) => (
    <div className={props.style}>
        <ul>
            {props.children}
        </ul>
    </div>
);