import React from 'react';

import SideDrawerView from '../SideDrawerView/SideDrawerView';
import DoctorMenuView from '../../menus/DoctorMenuView/DoctorMenuView';
import ClinicMenuView from '../../menus/ClinicMenuView/ClinicMenuView';

/**
 * Presentational component used to display the main menu in a side drawer window.
 * 
 * @param {boolean} props.isLoggedUserADoctor - True if the logged user is a doctor. 
 * The menu differs depending on user type.
 * @param {function} props.onClose - Callback used to notify the parent to close the side drawer.
 */
const MenuSideDrawerView = (props) => {
    return (
        <SideDrawerView show onClose={props.onClose}>
          {props.isLoggedUserADoctor ? 
              <DoctorMenuView onItemSelect={props.onClose} /> : null
          }
          <ClinicMenuView onItemSelect={props.onClose} />
        </SideDrawerView>
    );
}

export default MenuSideDrawerView;