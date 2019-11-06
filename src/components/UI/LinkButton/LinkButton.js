import React from 'react';

import classes from './LinkButton.module.css';

export const LinkButtonType = {
    SUCCESS: 1,
    DANGER: 2
};


const onClick = (event, callback) => {
    // The default action of the event will not be triggered.
    // When placed on a form the form will not be submitted.
    event.preventDefault();
    if(callback) {
        callback(event);
    }
}

/** 
 * Displays link type button.
 * 
 *  @param {LinkButtonType} props.type - The type of the button. The color of the button changes
 *                                       depending on the style
 *  @param {boolean} props.disabled - If provided and if is 'true' then disables the button
 *  @param {function} props.onClick - Callback function to be notified for the click event
 *  @param {array} props.children - The JSX children to be rendered
*/
export default (props) => {
    let btnTypeClassName = null;


    switch(props.type) {
        case LinkButtonType.SUCCESS:
                btnTypeClassName = classes.Success;
            break;
        case LinkButtonType.DANGER:
                btnTypeClassName = classes.Danger;
            break;
        default:
            //TODO
            console.log('Button. [W] Unknown button type: ' + props.type);
            break;
    }

    return (
        <button
            disabled={props.disabled}
            className={[classes.Button, btnTypeClassName].join(' ')}
            onClick={ (event) => { onClick(event, props.onClick) } }
        >
            {props.children}
        </button>
    );
}