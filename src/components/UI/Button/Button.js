import React from 'react';

import classes from './Button.module.css';

export const ButtonType = {
    SUCCESS: 1,
    DANGER: 2
};


/**
 * Displays a button. The button can look like a normal button or a link.
 * 
 *  @param type         ButtonType      the type of the button. The color of the button changes
 *                                      depending on the style
 *  @param disabled     boolean         if provided and if is 'true' then disables the button
 *  @param clicked      function        callback function to be notified for click event
 *  @param children     array           the JSX children to be rendered
 *  @param fullWidth    boolean         specify it if you want the button to take all the available 
 *                                      width
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
            onClick={props.clicked}
        >
            {props.children}
        </button>
    );
}