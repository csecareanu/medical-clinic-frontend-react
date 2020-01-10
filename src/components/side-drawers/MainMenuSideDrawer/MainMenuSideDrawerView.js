import React from 'react';

import commonClasses from '../../../common.module.css';
import SideDrawerView from '../SideDrawerView/SideDrawerView';
import DoctorMainMenu from '../../menus/DoctorMainMenu/DoctorMainMenu';
import ClinicMenu from '../../menus/ClinicMenu/ClinicMenu';
import { UserAuthType } from '../../../shared/UserAuthType';

/**
 * Presentational component used to display the main menu in a side drawer window.
 * 
 * @param {boolean} props.userAuthenticationStatus - True if the logged user is a doctor. 
 * The menu differs depending on user type.
 * @param {function} props.onClose - Callback used to notify the parent to close the side drawer.
  * The component doesn't send directly a close request to the user interface context because 
 * it should  be kept presentational. 
 */
const MainMenuSideDrawerView = (props) => {
    return (
        <div className={commonClasses.SmallScreenOnly}>
            <SideDrawerView show onClose={props.onClose}>
                {props.userAuthenticationStatus === UserAuthType.DOCTOR 
                    ? <DoctorMainMenu onItemSelect={props.onClose} /> 
                    : null
                }
                <ClinicMenu onItemSelect={props.onClose} />
            </SideDrawerView>
        </div>
    );
}

export default MainMenuSideDrawerView;