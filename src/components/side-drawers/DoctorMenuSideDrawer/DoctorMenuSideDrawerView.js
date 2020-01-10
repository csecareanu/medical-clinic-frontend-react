// @flow

import React from 'react';

import commonClasses from '../../../common.module.css';
import SideDrawerView from '../SideDrawerView/SideDrawerView';
import DoctorAdminMenu from '../../menus/DoctorAdminMenu/DoctorAdminMenu';

type Props = {
    onClose: () => void
}

/**
 * Presentational component used to display the doctor specific menu in a side drawer window.
 * 
 * @param {boolean} props.userAuthenticationStatus - True if the logged user is a doctor. 
 * The menu differs depending on user type.
 * @param {function} props.onClose - Callback used to notify the parent to close the side drawer.
 * The component doesn't send directly a close request to the user interface context because 
 * it should  be kept presentational. 
 */
const DoctorMenuSideDrawerView = (props: Props) => {
    return (
        <div className={commonClasses.SmallScreenOnly}>
            <SideDrawerView show onClose={props.onClose}>
                <DoctorAdminMenu onItemSelect={props.onClose} />
            </SideDrawerView>
        </div>
    );
}

export default DoctorMenuSideDrawerView;