// @flow

import * as React from 'react';
import {FormattedMessage} from 'react-intl';

import classes from './FormControl.module.css';

/**
 * This class contains controls used on a form.
 * It also has support for grouping controls and add a label to a group.
 */
const FormControl = () =>{return null;}

/**
 * Creates a group. 
 * The component renders its JSX children provided in @param children
 * 
 * @param name           text       the displayed name of the group. It can be null
 * @param stressedName   boolean    makes the name of the group to look like a header rather 
 *                                  than a normal text
 * @param contentPadding boolean    to add some space around the internal content 
 *                                  (the JSX children provided on @param children)
 * @param children                  the JSX children to be rendered
 * @param noHorizontalSepAfter 
 *                      boolean     if is not specified an horizontal space is added after 
 *                                  the group
 *                                     
 */
 type GroupProps = {
    name?: typeof FormattedMessage,
    nameLine2?: typeof FormattedMessage,
    stressedName?: boolean,
    contentPadding?: boolean,
    noHorizontalSepAfter?: boolean,
    children?: React.Node
 }
FormControl.Group = (props: GroupProps) => {
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
                { props.name
                    ? <div className={stressedNameClasses.join(' ')}>{props.name}</div>
                    : null
                }
            </div>
            { props.nameLine2
                ? <div className={classes.Group}>
                    <div className={stressedNameClasses.join(' ')}>{props.nameLine2}</div>
                    </div>
                : null
            }
            <div className={contentClasses.join(' ')}>
                {props.children? props.children : null}
            </div>
            {/* setting some margin to the bottom */}
            {props.noHorizontalSepAfter? null : <FormControl.HorizontalSep/>}
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
 type TextProps = {
     size: number,
     placeholderMsgId?: string,
     value: string,
     autoFocus?: boolean,
     onChange: (event: SyntheticInputEvent<HTMLInputElement>) => void,
     noHorizontalSepAfter?: boolean
 }
FormControl.Text = (props: TextProps) => {
   let validationError = null;
   const inputClasses = [classes.TextElement];

   const placeholderMsgId = props.placeholderMsgId? props.placeholderMsgId : '<space>';

   const inputElement = 
      <FormattedMessage id={placeholderMsgId}>
      {
         (msg) => (
            <input
               type='text'
               className={inputClasses.join(' ')}
               size={props.size}
               placeholder={msg}
               value={props.value}
               autoFocus={props.autoFocus? props.autoFocus : false}
               onChange={props.onChange}
         />
         )
      }
   </FormattedMessage>
    return (
        <React.Fragment>
            {inputElement}
            {validationError}
            {/* setting some margin to the bottom */}
            {props.noHorizontalSepAfter? null : <FormControl.HorizontalSep/>}
        </React.Fragment>
    );
};

/**
 * Displays a HTML radio control
 * 
 * @param name                      the name attribute provided to the <input> control
 * @param value                     the value attribute provided to the <input> control
 * @param children                  the JSX children to be rendered (usually the text description
 *                                  for the control)
* @param noHorizontalSepAfter 
 *                      boolean      if is not specified an horizontal small space is added after 
 *                                   the control
 */
 type RadioProps = {
     name: string,
     value: string,
     noHorizontalSepAfter?: boolean,
     children: React.Node
 }
FormControl.Radio = (props: RadioProps) => {
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
            {props.noHorizontalSepAfter? null : <FormControl.HorizontalSep/>}            
        </React.Fragment>
    );    
}

/**
 * Adds one or more horizontal separators.
 * Useful when you want to add more space (than is default added) between elements.
 * 
 * @param repeat    number      if provided adds the horizontal space the number of times
 *                              specified. If not provided adds one horizontal space.
 */

type HorizontalSepProps = {
    repeat?: number
}

FormControl.HorizontalSep = (props: HorizontalSepProps) => {
    
    let separatorsArray = [''];

    if(props.repeat) {
        separatorsArray = new Array(parseInt(props.repeat)).fill(' ');
    }

    return (
        <React.Fragment>
            {separatorsArray.map( (elem, idx) => (
                <div key={idx} className={classes.ElementHrzSep}></div>
             ))}
        </React.Fragment>
    );
}


/**
 * Adds one or more vertical separators.
 * Useful when you want to add more space (than is default added) between elements.
 * 
 * @param repeat    number      if provided adds the vertical space the number of times
 *                              specified. If not provided adds one vertical space.
 */

type VerticalSepProps = {
    repeat?: number
}
FormControl.VerticalSep = (props: VerticalSepProps) => {
    let separatorsArray = [' '];

    if(props.repeat) {
        separatorsArray = new Array(parseInt(props.repeat)).fill(' ');
    }

    return (
        <React.Fragment>
            {separatorsArray.map( (elem, idx) => (
                <span key={idx} className={classes.ElementVertSep}></span>
             ))}
        </React.Fragment>
    );
}


export default FormControl;