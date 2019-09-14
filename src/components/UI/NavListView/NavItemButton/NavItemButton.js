
import React from 'react';
import { NavLink } from 'react-router-dom';


export default (props) => (
    <li>
        <NavLink 
            to={props.link}
            exact={props.exact}
            activeClassName={props.style.active}
        >
            {props.children}
        </NavLink>
    </li>
);