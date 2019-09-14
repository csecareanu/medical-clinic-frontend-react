import React from 'react';

export default (props) => (
    <div className={props.style.Menu}>
        <ul>
            {props.children}
        </ul>
    </div>
);