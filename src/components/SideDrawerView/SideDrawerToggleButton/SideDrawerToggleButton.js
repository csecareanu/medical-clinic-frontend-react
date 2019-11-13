import React from 'react';

import classes from './SideDrawerToggleButton.module.css';

 export const SideDrawerButtonType = {
    OPEN: 1,
    CLOSE: 2
}

/**
 * Displays a button used to open / close the sidebar component.
 * The button has different styles depending if the sidebar is opened or closed.
 * 
 * @param {SideDrawerButtonType} props.type - The type of the displayed button which determines 
 * the visual style.
 */
const SideDrawerToggleButton = (props) => {
    
    const buttonTypeStyle = (props.type === SideDrawerButtonType.OPEN)? 
                                        classes.TypeOpen : classes.TypeClose;

    return (
        <div className={classes.Button} onClick={props.clickHandler}>
            <div className={buttonTypeStyle}/>
            <div className={buttonTypeStyle}/>
            <div className={buttonTypeStyle}/>
        </div>
    )
}

export default SideDrawerToggleButton;