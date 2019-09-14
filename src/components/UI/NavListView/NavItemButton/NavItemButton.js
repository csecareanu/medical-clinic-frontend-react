
import React from 'react';
import { NavLink } from 'react-router-dom';


export default (props) => (
    <span className={props.styleItem}>
        <li>
            <span  className={props.styleText}>
                <NavLink
                    to={props.link}
                    exact={props.exact}
                    activeClassName={props.styleTextActive}
                >
                    {props.children}
                </NavLink>
            </span>
        </li>
    </span>
);