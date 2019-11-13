import React from 'react';

import classes from './SideDrawerView.module.css';
import Backdrop from '../UI/Backdrop/Backdrop';
import BrandLargeView from '../UI/BrandLargeView/BrandLargeView';
import SideDrawerToggleButton, { SideDrawerButtonType } 
            from './SideDrawerToggleButton/SideDrawerToggleButton';

export default (props) => {
    /* The SideDrawer is visible only on small screens */
    var attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <React.Fragment>
            <Backdrop show={props.open} onClick={props.onClose}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <BrandLargeView />
                </div>
                <SideDrawerToggleButton 
                        type={SideDrawerButtonType.CLOSE} 
                        onClick={props.onClose}
                />
                <nav>
                   {props.children}
                </nav>
            </div>
        </React.Fragment>
    );
}