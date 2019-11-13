import React from 'react';

import classes from './SideDrawerToolbarView.module.css';
import SideDrawerToggleButton, { SideDrawerButtonType }  
            from '../../SideDrawerView/SideDrawerToggleButton/SideDrawerToggleButton';

export default (props) => (
    <div className={classes.Toolbar}>
        <SideDrawerToggleButton 
            type={SideDrawerButtonType.OPEN} 
            onClick={props.onShowSideDrawer}
        />
    </div>
);