
import React from 'react';
import { NavLink } from 'react-router-dom';

const liStyle = {
        float: 'left'
    };

    const aStyle = {
        color: '#6B2022',
        display: 'block',
        textAlign: 'center',
        padding: '16px',
        textDecoration: 'none'
};


export default (props) => (
    <li style={liStyle}>
        <NavLink 
            style={aStyle}
            to={props.link}
            exact={props.exact}
        >
            {props.children}
        </NavLink>
    </li>
);