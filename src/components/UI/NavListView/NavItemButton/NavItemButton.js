// @flow

import * as React from 'react';
import {NavLink} from 'react-router-dom';


type Props = {
    styleItem: string,
    styleText: string,
    styleTextActive: string,
    id: number,
    link?: string,
    exact?: boolean,
    preventNav?: boolean,
    onClick: (itemId: number) => void,
    children: React.Node
}

/**
 * Displays a link item menu and navigates to a specified route when pressed.
 * The class does not have its own CSS in order to allow different themes. 
 * 
 * @param {CSS} props.styleItem - The CSS style for the 'li' HTML element
 * @param {CSS} props.styleText - The CSS style for the 'a' HTML element
 * @param {CSS} props.styleTextActive - The CSS style for the element which matches the current 
 * route.
 * @param {number} props.id - Item identifier. If provided it will be used as a parameter 
 * for the notification callback @param props.onClick
 * @param {String} props.link - This parameter is optional.
 * 1. The route to navigate to on click event (if not specified @param preventNav)
 * 2. The route used for adding styling attributes when it matches the current URL
 * @param {boolean} props.exact -  When is 'true' apply the active class only when the path matches 
 * the browser's URL
 * @param {boolean} preventNav - When is 'true' prevent the navigation to @param props.link when
 * the item is clicked
 * @param {function} props.onClick - Callback function to be notified for the click event
 * @param props.children - The JSX content to be rendered
 */
const NavItemButton = (props: Props) => {

    // The 'link' parameter for NavLink is not optional
    let link=props.link;
    let preventNav = props.preventNav;

    if (typeof link === 'undefined') {
        link = "";
        preventNav = true;
    }
    return (
        <span className={props.styleItem}>
            <li>
                <span className={props.styleText}>
                    <NavLink
                        to={link}
                        exact={props.exact}
                        activeClassName={props.styleTextActive}
                        onClick={ (event) => {
                            if(props.onClick) {
                                props.onClick(props.id)
                            }
                            if (preventNav) {
                                event.preventDefault();
                            }
                        }}
                    >
                        {props.children}
                    </NavLink>
                </span>
            </li>
        </span>
    );
}

export default NavItemButton;