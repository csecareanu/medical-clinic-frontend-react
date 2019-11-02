import React from 'react';

import classes from './LinkButton.module.css';

export const LinkButtonType = {
    SUCCESS: 1,
    DANGER: 2
};


/**
 * Displays a button. The button can look like a normal button or a link.
 * 
 *  @param type         LinkButtonType  the type of the button. The color of the button changes
 *                                      depending on the style
 *  @param disabled     boolean         if provided and if is 'true' then disables the button
 *  @param clicked      function        callback function to be notified for click event
 *  @param children     array           the JSX children to be rendered
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
            onClick={props.clicked}
        >
            {props.children}
        </button>
    );
}