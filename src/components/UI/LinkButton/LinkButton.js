// @flow

import * as React from 'react';

import classes from './LinkButton.module.css';

export const LinkButtonType = {
    SUCCESS: 1,
    DANGER: 2
};


const onClick = (event, callback) => {
    // The default action of the event will not be triggered. When placed on a form 
    // the form will not be submitted.
    event.preventDefault();
    if(callback) {
        callback();
    }
}

type Props = {
    type: number, //typeof LinkButtonType - TODO: flow error: Cannot create `LinkButton` element because  number [1] is incompatible with  object literal
    boldStyle?: boolean,
    disabled?: boolean,
    onClick?: () => void,
    children: React.Node
}

/** 
 * Displays link type button.
 * 
 *  @param {LinkButtonType} props.type  The type of the button. The color of the button changes
 *                                       depending on the style
 *  @param {boolean} props.boldStyle If specified and if it is true the displayed content
 * from @param props.children will be written using a bold font. 
 *  @param {boolean} props.disabled If specified and if it is 'true' then disables the button
 *  @param {function} props.onClick Callback function to be notified for the click event
 *  @param {array} props.children The JSX children to be rendered
*/
export default (props: Props) => {
    const btnTypeClassName = [classes.Button];


    switch(props.type) {
        case LinkButtonType.SUCCESS:
                btnTypeClassName.push(classes.Success);
            break;
        case LinkButtonType.DANGER:
                btnTypeClassName.push(classes.Danger);
            break;
        default:
            //TODO
            console.log('Button. [W] Unknown button type: ' + props.type.toString());
            break;
    }

    if (props.boldStyle) {
        btnTypeClassName.push(classes.BoldStyle);
    }

    return (
        <button
            disabled={props.disabled}
            className={btnTypeClassName.join(' ')}
            onClick={ (event) => { onClick(event, props.onClick) } }
        >
            {props.children}
        </button>
    );
}