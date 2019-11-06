
import React from 'react';

const onClick = (event, callback) => {
    // prevent the navigation
    event.preventDefault();
    if(callback) {
        callback(event);
    }
}

/**
 * Displays a link item menu and runs a callback function when pressed.
 * The class does not have its own CSS in order to allow different themes. 
 * 
 * @param {CSS} props.styleItem - The CSS style for the 'li' HTML element
 * @param {CSS} props.styleText - The CSS style fo the 'a' HTML element
 * @param {function} props.onClick - Callback function to be notified for the click event
 * @param props.children - The JSX content to be rendered
 */
const LinkItemButton = (props) => {
    return (
        <span className={props.styleItem}>
            <li>
                <span className={props.styleText}>
                    {/* 'href' is added in order to avoid the following warning:
                      * 'The href attribute is required for an anchor'.
                      */} 
                    {/*
                      * Using '<a>' tag and not '<button>' in order to provide the same CSS class
                      * (in props.styleText) for both 'NavItemButton' and 'LinkItemButton'
                      * components. 
                      * 'NavItemButton' contains a 'NavLink' which behind has a '<a>' tag.
                      */}
                    <a href='no_link' onClick={ (event) => {onClick(event, props.onClick);} } >
                        {props.children}
                    </a>
                </span>
            </li>
        </span>
    );
}

export default LinkItemButton;