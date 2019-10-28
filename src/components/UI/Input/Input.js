import React from 'react';

export default (props) => {
    let inputElement = null;
    let validationError = null;
    const inputClasses = [];

    switch (props.elementType) {
        case ('input'):
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                />;
            break;
        default:
            //TODO
            console.log("Error. Unknown 'Input' element");
    }

    return (
        <div>
            {/*props.label? <label className={classes.Label}>{props.label}</label> : null*/}
            {inputElement}
            {validationError}
        </div>
    );
};