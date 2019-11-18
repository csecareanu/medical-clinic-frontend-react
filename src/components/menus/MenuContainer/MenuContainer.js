// @flow

import * as React from 'react';
import { withRouter } from 'react-router-dom';
import type {RouterHistory} from 'react-router';

import { ClinicMenuItemType } from '../../../common/MenuItemTypes';
import { UserAuthType } from '../../../common/UserAuthType';
import UIStateContext from '../../../react-context/UIState/UIState-context.js';

const menuContainer = {
    props: (null: null | Props),
    uiStateContext: (null: null | UIStateContext),
    userAuthStatus: (UserAuthType.UNAUTHENTICATED: UserAuthType),

    onClinicMenuItemSelect: (itemType: ClinicMenuItemType) => {
        if(menuContainer.uiStateContext == null) {
            console.log("MenuContainer. onClinicMenuItemSelect. uiStateContext not set");
            return;
        }
        const uiStateContext = menuContainer.uiStateContext; //added to get rid of flow warning

        if(menuContainer.props == null) {
            console.log("MenuContainer. onClinicMenuItemSelect. props not set");
            return;            
        }
        const props = menuContainer.props;

        switch (itemType) {
            case ClinicMenuItemType.USER_LOGIN:
                menuContainer.uiStateContext.setDisplayLoginComponent(true);
                break;
            case ClinicMenuItemType.USER_LOGOUT:
                uiStateContext.setUserAuthenticationStatus(UserAuthType.UNAUTHENTICATED);
                uiStateContext.setDisplayLogoutComponent(false);
                props.history.push({pathname: '/'});
                break;
            case ClinicMenuItemType.CLINIC_HOME:
            case ClinicMenuItemType.CLINIC_DOCTORS:
            case ClinicMenuItemType.CLINIC_ABOUT:
            case ClinicMenuItemType.CLINIC_CONTACT:
            case ClinicMenuItemType.CLINIC_PRICES:
            case ClinicMenuItemType.PATIENT_NEW_APPOINTMENT:
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
    menuContainer.props = props;
    menuContainer.userAuthStatus = uiStateContext.userAuthStatus;

    return (props.children)(menuContainer);
}

export default withRouter(MenuContainer);