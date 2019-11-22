// @flow

import * as React from 'react';
import { withRouter } from 'react-router-dom';
import type { RouterHistory } from 'react-router';

import { 
    UserMenuItem,
    PatientMenuItem,
    ClinicMenuItem
    }  from '../../../common/MenuItemIdentifiers';
import { UserAuthType } from '../../../common/UserAuthType';
import {
    ClinicLinkLocationName,
    PatientLinkLocationName
} from '../../../common/LinkLocationNames';
import UIStateContext from '../../../react-context/UIState/UIState-context.js';

const menuContainer = {
    history: (null: null | RouterHistory),
    uiStateContext: (null: null | UIStateContext),
    userAuthStatus: (UserAuthType.UNAUTHENTICATED: number | Symbol),

    onClinicMenuItemSelect: (itemType: number) => {
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
            case UserMenuItem.USER_LOGIN:
                menuContainer.uiStateContext.setDisplayLoginComponent(true);
                break;
            case UserMenuItem.USER_LOGOUT:
                uiStateContext.setUserAuthenticationStatus(UserAuthType.UNAUTHENTICATED);
                uiStateContext.setDisplayLogoutComponent(false);
                history.push({pathname: ClinicLinkLocationName.ROOT});
                break;
            case ClinicMenuItem.HOME:
                history.push({pathname: ClinicLinkLocationName.ROOT});
                break;
            case ClinicMenuItem.DOCTORS:
                history.push({pathname: ClinicLinkLocationName.DOCTORS});
                break;
            case ClinicMenuItem.ABOUT:
                history.push({pathname: ClinicLinkLocationName.ABOUT});
                break;
            case ClinicMenuItem.CONTACT:
                history.push({pathname: ClinicLinkLocationName.CONTACT});
                break;
            case ClinicMenuItem.PRICES:
                history.push({pathname: ClinicLinkLocationName.PRICES});
                break;
            case PatientMenuItem.MY_ACCOUNT:
                history.push({pathname: PatientLinkLocationName.MY_ACCOUNT});
                break;
            case PatientMenuItem.NEW_APPOINTMENT:
                //if (uiStateContext.userAuthStatus === UserAuthType.UNAUTHENTICATED) {
                    //authenticateUserBeforeToNavigate(PatientLinkLocationName.NEW_APPOINTMENT);
                //    break;
                //}
                history.push({pathname: PatientLinkLocationName.NEW_APPOINTMENT});
                break;
            default:
                console.log("MenuContainer. onClinicMenuItemSelect. Unknown item id: " + 
                        itemType.toString());
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