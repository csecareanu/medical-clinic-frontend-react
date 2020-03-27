import React from 'react';

import classes from './Button.module.css';

export const ButtonType = {
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
 * Displays a button. The button looks like a normal button. For a link button @see LinkButton.js
 * 
 * @param {ButtonType} props.type - The type of the button. The color of the button changes
 *                                  depending on the style
 * @param {boolean} props.disabled - If provided and if is 'true' then disables the button
 * @param {function} props.onClick - Callback function to be notified for the click event
 * @param {array} props.children - The JSX children to be rendered
 * @param {boolean} props.fullWidth - Specify it if you want the button to take all the available
 *                                    width
*/
export default (props) => {
    let btnTypeClassName = null;
    let fullWidthClassName = null;

    switch(props.type) {
        case ButtonType.SUCCESS:
                btnTypeClassName = classes.Success;
            break;
        case ButtonType.DANGER:
                btnTypeClassName = classes.Danger;
            break;
        default:
            //TODO
            console.log('Button. [W] Unknown button type: ' + props.type);
            break;
    }

    if (props.fullWidth) {
        fullWidthClassName = classes.FullWidth;
    }
    return (
        <button
            disabled={props.disabled}
            className={[classes.Button, btnTypeClassName, fullWidthClassName].join(' ')}
            onClick={ 
                props.onClick
                    ? (event) => { onClick(event, props.onClick) } 
                    : null
            }
        >
            {props.children}
        </button>
    );
}