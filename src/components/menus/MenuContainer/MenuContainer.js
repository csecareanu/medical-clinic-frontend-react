// @flow

import * as React from 'react';
import { withRouter } from 'react-router-dom';
import type {RouterHistory} from 'react-router';

import { ClinicMenuItemType } from '../../../common/MenuItemTypes';
import { UserAuthType } from '../../../common/UserAuthType';
import {
    ClinicLinkLocationName,
    PatientLinkLocationName
} from '../../../common/LinkLocationNames';
import UIStateContext from '../../../react-context/UIState/UIState-context.js';

const menuContainer = {
    history: (null: null | RouterHistory),
    uiStateContext: (null: null | UIStateContext),
    userAuthStatus: (UserAuthType.UNAUTHENTICATED: UserAuthType),

    onClinicMenuItemSelect: (itemType: ClinicMenuItemType) => {
        if(menuContainer.uiStateContext == null) {
            console.log("MenuContainer. onClinicMenuItemSelect. uiStateContext not set");
            return;
        }
        const uiStateContext = menuContainer.uiStateContext; //added to get rid of flow warning

        if(menuContainer.history == null) {
            console.log("MenuContainer. onClinicMenuItemSelect. history not set");
            return;            
        }
        const history = menuContainer.history;

        switch (itemType) {
            case ClinicMenuItemType.USER_LOGIN:
                menuContainer.uiStateContext.setDisplayLoginComponent(true);
                break;
            case ClinicMenuItemType.USER_LOGOUT:
                uiStateContext.setUserAuthenticationStatus(UserAuthType.UNAUTHENTICATED);
                uiStateContext.setDisplayLogoutComponent(false);
                history.push({pathname: ClinicLinkLocationName.ROOT});
                break;
            case ClinicMenuItemType.CLINIC_HOME:
                history.push({pathname: ClinicLinkLocationName.ROOT});
                break;
            case ClinicMenuItemType.CLINIC_DOCTORS:
                history.push({pathname: ClinicLinkLocationName.DOCTORS});
                break;
            case ClinicMenuItemType.CLINIC_ABOUT:
                history.push({pathname: ClinicLinkLocationName.ABOUT});
                break;
            case ClinicMenuItemType.CLINIC_CONTACT:
                history.push({pathname: ClinicLinkLocationName.CONTACT});
                break;
            case ClinicMenuItemType.CLINIC_PRICES:
                history.push({pathname: ClinicLinkLocationName.PRICES});
                break;
            case ClinicMenuItemType.PATIENT_ACCOUNT:
                history.push({pathname: PatientLinkLocationName.MY_ACCOUNT});
                break;
            case ClinicMenuItemType.PATIENT_NEW_APPOINTMENT:
                history.push({pathname: PatientLinkLocationName.APPOINTMENT});
                break;
            default:
                console.log("MenuContainer. onClinicMenuItemSelect. Unknown item id: " + itemType);
                break;
        }
    }
}


type Props = {
    children: (containerData: typeof menuContainer) => React.Node,
    history: RouterHistory
}

const MenuContainer = (props: Props) => {
    const uiStateContext = React.useContext(UIStateContext);
    menuContainer.uiStateContext = uiStateContext;
    menuContainer.history = props.history;
    menuContainer.userAuthStatus = uiStateContext.userAuthStatus;

    return (props.children)(menuContainer);
}

export default withRouter(MenuContainer);