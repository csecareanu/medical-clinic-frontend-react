import React from 'react';

import classes from './SideDrawerView.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import BrandLarge from '../../UI/BrandLarge/BrandLarge';
import SideDrawerToggleButton, {SideDrawerButtonType} from './SideDrawerToggleButton/SideDrawerToggleButton';

/**
 * Displays a sidebar which contains a header (composed from a logo and a close button) and a 
 * body provided by the parent component.
 * 
 * @param {} props.show - Whether to show or hide the sidebar
 * @param {} props.onClose - Notify the parent to hide the sidebar
 * @param {array} props.children - The JSX children to be rendered as body
 */
const SideDrawerView = (props) => {
    var attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.show) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <React.Fragment>
            <Backdrop show={props.show} onClick={props.onClose}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <BrandLarge />
                </div>
                <SideDrawerToggleButton type={SideDrawerButtonType.CLOSE} onClick={props.onClose}/>
                <nav>
                   {props.children}
                </nav>
            </div>
        </React.Fragment>
    );
}

export default SideDrawerView;