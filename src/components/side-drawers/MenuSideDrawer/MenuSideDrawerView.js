import React from 'react';

import commonClasses from '../../../common.module.css';
import SideDrawerView from '../SideDrawerView/SideDrawerView';
import DoctorMenuView from '../../menus/DoctorMenuView/DoctorMenuView';
import ClinicMenu from '../../menus/ClinicMenu/ClinicMenu';
import { UserAuthType } from '../../../shared/UserAuthType';

/**
 * Presentational component used to display the main menu in a side drawer window.
 * 
 * @param {boolean} props.userAuthStatus - True if the logged user is a doctor. 
 * The menu differs depending on user type.
 * @param {function} props.onClose - Callback used to notify the parent to close the side drawer.
 */
const MenuSideDrawerView = (props) => {
    return (
        <div className={commonClasses.SmallScreenOnly}>
            <SideDrawerView show onClose={props.onClose}>
            {props.userAuthStatus === UserAuthType.DOCTOR ? 
                <DoctorMenuView onItemSelect={props.onClose} /> 
                : 
                null
            }
            <ClinicMenu onItemSelect={props.onClose} />
            </SideDrawerView>
        </div>
    );
}

export default MenuSideDrawerView;