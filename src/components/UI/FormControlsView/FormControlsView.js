import React from 'react';

import classes from './FormControlsView.module.css';

/**
 * This class contains controls used on a form.
 * It also has support for grouping controls and add a label to a group.
 */
const FormControlsView = () =>{return null;}

/**
 * Creates a group. 
 * The component renders its JSX children provided in @param props.children
 * 
 * @param name           text       the displayed name of the group. It can be null
 * @param stressedName   boolean    makes the name of the group to look like a header rather 
 *                                  than a normal text
 * @param contentPadding boolean    to add some space around the internal content 
 *                                  (the JSX children provided on props.children)
 * @param props.children            the JSX children to be rendered
 * @param noHorizontalSepAfter 
 *                      boolean     if is not specified an horizontal small space is added after 
 *                                  the group
 *                                     
 */
FormControlsView.Group = (props) => {
    const stressedNameClasses = [];
    if(props.stressedName) {
        stressedNameClasses.push(classes.StressedName);
    }

    const contentClasses = [];
    if(props.contentPadding) {
        contentClasses.push(classes.ContentPadding);
    }

    return (
        <React.Fragment>
            <div className={classes.Group}>
                { props.name?
                    <label className={stressedNameClasses.join(' ')}>{props.name}</label>
                    :
                    null
                }
            </div>
            <div className={contentClasses.join(' ')}>
                {props.children}
            </div>
            {/* setting some margin to the bottom */}
            {props.noHorizontalSepAfter? null : <FormControlsView.HorizontalSep1/>}
        </React.Fragment>
    );
}

/**
 * Displays an HTML input control of type text
 *
 * @param size                  the size attribute provided to the <input> control
 *                              this is the size of the control in characters
 * @param value                 the value attribute provided to the <input> control
 *                              this is the text content of the control
 * @param placeholder           the placeholder attribute provided to the <input> control
 * 
 * @param onChange function     callback provided as onChange attribute to the <input> control.
 *                              It is called when the input text changes
 *
 * @param noHorizontalSepAfter 
 *                 boolean      if is not specified an horizontal small space is added after 
 *                                  the control
 */
FormControlsView.Text = (props) => {
    let validationError = null;
    const inputClasses = [classes.TextElement];

    const inputElement = <input 
            type='text'
            className={inputClasses.join(' ')} 
            size={props.size}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />;
    return (
        <React.Fragment>
            {inputElement}
            {validationError}
            {/* setting some margin to the bottom */}
            {props.noHorizontalSepAfter? null : <FormControlsView.HorizontalSep1/>}
        </React.Fragment>
    );
};

/**
 * Displays a HTML radio control
 * 
 * @param name                      the name attribute provided to the <input> control
 * @param value                     the value attribute provided to the <input> control
 * @param props.children            the JSX children to be rendered (usually the text description
 *                                  for the control)
* @param noHorizontalSepAfter 
 *                      boolean      if is not specified an horizontal small space is added after 
 *                                   the control
 */
FormControlsView.Radio = (props) => {
    let validationError = null;

    return (
        <React.Fragment>
            <label className={classes.RadioElement}>
                <input className={classes.RadioElement}
                    type="radio"
                    name={props.name}
                    value={props.value}
                />
                {props.children}
            </label>
            {validationError}
            {/* setting some margin to the bottom */}
            {props.noHorizontalSepAfter? null : <FormControlsView.HorizontalSep1/>}            
        </React.Fragment>
    );    
}

/**
 * Adds an horizontal separator.
 * Useful when you want to add more space (than is default added) between elements.
 */
FormControlsView.HorizontalSep1 = (props) => {
    return (
        <div className={classes.ElementHrzSep}>
        </div>
    );
}

/**
 * Adds two horizontal separators.
 * Useful when you want to add more space (than is default added) between elements.
 */
FormControlsView.HorizontalSep2 = (props) => {
    return (
        <React.Fragment>
            <FormControlsView.HorizontalSep1/>
            <FormControlsView.HorizontalSep1/>
        </React.Fragment>
    );
}

/**
 * Adds three horizontal separators.
 * Useful when you want to add more space (than is default added) between elements.
 */
FormControlsView.HorizontalSep3 = (props) => {
    return (
        <React.Fragment>
            <FormControlsView.HorizontalSep1/>
            <FormControlsView.HorizontalSep1/>
            <FormControlsView.HorizontalSep1/>
        </React.Fragment>
    );
}

/**
 * Adds four horizontal separators.
 * Useful when you want to add more space (than is default added) between elements.
 */
FormControlsView.HorizontalSep4 = (props) => {
    return (
        <React.Fragment>
            <FormControlsView.HorizontalSep1/>
            <FormControlsView.HorizontalSep1/>
            <FormControlsView.HorizontalSep1/>
            <FormControlsView.HorizontalSep1/>            
        </React.Fragment>
    );
}

/**
 * Adds an vertical separator.
 * Useful when you want to add more space (than is default added) between elements.
 */
FormControlsView.VerticalSep1 = (props) => {
    return (
        <span className={classes.ElementVertSep}>
        </span>
    );
}

/**
 * Adds two vertical separators.
 * Useful when you want to add more space (than is default added) between elements.
 */
FormControlsView.VerticalSep2 = (props) => {
    return (
        <React.Fragment>
            <FormControlsView.VerticalSep1/>
            <FormControlsView.VerticalSep1/>
        </React.Fragment>
    );
}

export default FormControlsView;