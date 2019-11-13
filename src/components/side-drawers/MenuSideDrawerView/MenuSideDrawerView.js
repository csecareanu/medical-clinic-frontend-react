import React, { useContext } from 'react';

import UIStateContext, { UserAuthStatus } from '../../UIState/UIState-context';
import SideDrawerView from '../SideDrawerView/SideDrawerView';
import DoctorMenuView from '../../menus/DoctorMenuView/DoctorMenuView';
import ClinicMenuView from '../../menus/ClinicMenuView/ClinicMenuView';

const onClose = (uiStateContext) => {
    uiStateContext.setDisplayMenuSideDrawerComponent(false);
}

const onMenuItemSelect = (uiStateContext) => {
    uiStateContext.setDisplayMenuSideDrawerComponent(false);
}

const MenuSideDrawerView = () => {
    const uiStateContext = useContext(UIStateContext);
    return (
        <SideDrawerView show onClose={ () => {onClose(uiStateContext)} }>
          {uiStateContext.userAuthStatus === UserAuthStatus.DOCTOR ? 
              <DoctorMenuView onItemSelect={ () => {onMenuItemSelect(uiStateContext)} } /> : null
          }
          <ClinicMenuView onItemSelect={ () => {onMenuItemSelect(uiStateContext)} } />
        </SideDrawerView>
    );
}

export default MenuSideDrawerView;