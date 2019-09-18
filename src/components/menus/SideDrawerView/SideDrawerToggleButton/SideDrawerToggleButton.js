import React from 'react';

import classes from './SideDrawerToggleButton.module.css';

export default (props) => (
    <div className={classes.MenuToggle}>
        <div className={classes.ToggleSign} onClick={props.clickHandler}>
            <div />
            <div />
            <div />
        </div>
    </div>
);