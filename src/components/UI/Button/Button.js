import React from 'react';

import classes from './Button.module.css';

export const ButtonType = {
    SUCCESS: 1,
    DANGER: 2
};

/*
 * Properties:
 *  type: ButtonType
 *  disabled: boolean
 *  clicked: callback function
 *  children: element array
 *  fullWidth: specify it if you want the button to take all the available width
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