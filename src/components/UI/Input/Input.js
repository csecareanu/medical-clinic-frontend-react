import React from 'react';

import classes from './Input.module.css';

/*
Callbacks: 
    onChange
*/
export default (props) => {
    let inputElement = null;
    let validationError = null;
    const inputClasses = [classes.InputElement];

    switch (props.elementType) {
        case ('input'):
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.onChange}
                />;
            break;
        case ('only_label'):
            inputElement = null;
            break;
         default:
            //TODO
            console.log("Error. Unknown 'Input' element");
    }

    return (
        <div className={classes.Input}>
            { props.label? <label className={classes.Label}>{props.label}</label> : null }
            {inputElement}
            {validationError}
        </div>
    );
};