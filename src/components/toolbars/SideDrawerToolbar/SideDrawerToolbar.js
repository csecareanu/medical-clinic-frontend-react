import React from 'react';

import classes from './SideDrawerToolbar.module.css';
import 
    SideDrawerToggleButton, 
    { SideDrawerButtonType }  
    from '../../side-drawers/SideDrawerView/SideDrawerToggleButton/SideDrawerToggleButton';

export default (props) => (
    <div className={classes.Toolbar}>
        <SideDrawerToggleButton 
            type={SideDrawerButtonType.OPEN}
            onClick={props.onShowSideDrawer}
        />
    </div>
);