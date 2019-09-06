import React from 'react';

const ulStyle = {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        overflow: 'hidden'
};

export default (props) => (
    <ul style={ulStyle}>
        {props.children}
    </ul>
);
