// @flow

import React from 'react';

import classes from './SideDrawerToolbar.module.css';
import SideDrawerToggleButton, {SideDrawerButtonType}  
    from '../../side-drawers/SideDrawerView/SideDrawerToggleButton/SideDrawerToggleButton';

type Props = {
   onShowSideDrawer: () => void
}

const SideDrawerToolbar = (props: Props) => (
    <div className={classes.Toolbar}>
        <SideDrawerToggleButton 
            type={SideDrawerButtonType.OPEN}
            onClick={props.onShowSideDrawer}
        />
    </div>
);

export default SideDrawerToolbar;