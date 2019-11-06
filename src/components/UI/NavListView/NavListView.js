import React from 'react';

/**
 * Displays a navigable menu using a unordered list ('ul') tag.
 * The class does not have its own CSS in order to allow different themes. 
 * The style sheet is received on the @param props.style parameter.
 * 
 * It contains two kind of menu item: 
 *   - one used to navigate to a specified route on the click event: NavItemButton
 *   - one used to run a callback function on the click event: LinkItemButton
 * 
 * @param {CSS} props.style - The CSS style need for the 'ul' element.
 * @param props.children - The JSX content to be rendered
 */
export default (props) => (
    <div className={props.style}>
        <ul>
            {props.children}
        </ul>
    </div>
);