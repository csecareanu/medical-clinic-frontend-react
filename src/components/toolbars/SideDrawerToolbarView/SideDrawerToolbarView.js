import React from 'react';

import classes from './SideDrawerToolbarView.module.css';
import SideDrawerToggleButton from '../../menus/SideDrawerView/SideDrawerToggleButton/SideDrawerToggleButton';

export default (props) => (
    <div className={classes.Toolbar}>
        <SideDrawerToggleButton clickHandler={props.showSideDrawerHandler}/>
    </div>
);