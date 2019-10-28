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
*/
export default (props) => {
    let btnTypeClassName = null;
    switch(props.type) {
        case ButtonType.SUCCESS:
                btnTypeClassName = classes.Success;
            break;
        case ButtonType.DANGER:
                btnTypeClassName = classes.Danger;
            break;
        default:
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