
import React from 'react';
import { NavLink } from 'react-router-dom';


const onClick = (callback) => {
    if(callback) {
        callback();
    }
}

/**
 * Displays a link item menu and navigates to a specified route when pressed.
 * The class does not have its own CSS in order to allow different themes. 
 * 
 * @param {CSS} props.styleItem - The CSS style for the 'li' HTML element
 * @param {CSS} props.styleText - The CSS style fo the 'a' HTML element
 * @param {String} props.link - The route to navigate to
 * @param {boolean} props.exact -  When is 'true' apply the active class only when the path matches 
 *                                 the browser's URL
 * @param {function} props.onClick - Callback function to be notified for the click event
 * @param props.children - The JSX content to be rendered
 */
const NavItemButton = (props) => {
    return (
        <span className={props.styleItem}>
            <li>
                <span className={props.styleText}>
                    <NavLink
                        to={props.link}
                        exact={props.exact}
                        activeClassName={props.styleTextActive}
                        onClick={ () => {onClick(props.onClick);} }
                    >
                        {props.children}
                    </NavLink>
                </span>
            </li>
        </span>
    );
}

export default NavItemButton;