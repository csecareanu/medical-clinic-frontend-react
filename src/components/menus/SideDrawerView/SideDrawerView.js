import React from 'react';

import classes from './SideDrawerView.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import BrandLargeView from '../../UI/BrandLargeView/BrandLargeView';
import SideDrawerToggleButton from './SideDrawerToggleButton/SideDrawerToggleButton';

export default (props) => {
    /* The SideDrawer is visible only on small screens */
    var attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <React.Fragment>
            <Backdrop show={props.open} clickHandler={props.closeHandler}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <BrandLargeView />
                </div>
                <SideDrawerToggleButton clickHandler={props.closeHandler}/>
                <nav>
                   {props.children}
                </nav>
            </div>
        </React.Fragment>
    );
}