// @flow

import * as React from 'react';
import { withRouter } from 'react-router-dom';
import type { RouterHistory } from 'react-router';

import { 
    UserMenuItem,
    PatientMenuItem,
    DoctorMenuItem,
    ClinicMenuItem
    }  from '../../shared/MenuItemIdentifiers';
import { UserAuthType } from '../../shared/UserAuthType';
import {
    ClinicLinkLocationName,
    UserLinkLocationName,
    PatientLinkLocationName,
    DoctorLinkLocationName
} from '../../shared/LinkLocationNames';
import UIStateContext from '../../react-context/UIState/UIState-context.js';

const containerData = {
    history: (null: null | RouterHistory),
    _uiStateContext: (null: null | UIStateContext),
    userAuthStatus: (UserAuthType.UNAUTHENTICATED: number | Symbol),
    isUserConnectedToAPatientAccount: (false: boolean),

    onClinicMenuItemSelect: (itemType: number) => {
        if(containerData._uiStateContext == null) {
            console.log("NavContainer. onClinicMenuItemSelect. uiStateContext not set");
            return;
        }
        const uiStateContext = containerData._uiStateContext; //added to get rid of flow warning

        if(containerData.history == null) {
            console.log("NavContainer. onClinicMenuItemSelect. history not set");
            return;            
        }
        const history = containerData.history;

        switch (itemType) {
            case UserMenuItem.LOGIN:
                containerData._uiStateContext.setDisplayLoginComponent(true);
                break;
            case UserMenuItem.LOGOUT:
                uiStateContext.setUserAuthenticationStatus(UserAuthType.UNAUTHENTICATED);
                uiStateContext.setDisplayLogoutComponent(false);
                history.push({pathname: ClinicLinkLocationName.HOME});
                break;
            case UserMenuItem.MY_ACCOUNT:
                if (uiStateContext.userAuthStatus === UserAuthType.UNAUTHENTICATED) {
                    uiStateContext.setNavigateToURIOnSuccessfullyLogin(
                            UserLinkLocationName.MY_ACCOUNT);
                    uiStateContext.setDisplayLoginComponent(true);
                    break;
                }
                history.push({pathname: UserLinkLocationName.MY_ACCOUNT});            
                break;
            case ClinicMenuItem.HOME:
                history.push({pathname: ClinicLinkLocationName.HOME});
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
                if (uiStateContext.userAuthStatus === UserAuthType.UNAUTHENTICATED) {
                    uiStateContext.setNavigateToURIOnSuccessfullyLogin(
                            PatientLinkLocationName.NEW_APPOINTMENT);
                    uiStateContext.setDisplayLoginComponent(true);
                    break;
                }
                history.push({pathname: PatientLinkLocationName.NEW_APPOINTMENT});
                break;
            case DoctorMenuItem.MY_ACCOUNT:
                history.push({pathname: DoctorLinkLocationName.MY_ACCOUNT});
                break;
            default:
                console.log("NavContainer. onClinicMenuItemSelect. Unknown item id: " + 
                        itemType.toString());
                break;
        }
    }
}

type Props = {
    children: (containerData: typeof containerData) => React.Node,
    history: RouterHistory
}

/**
 * Container component used to navigate to site's resources by the all navigation 
 * components: menus, toolbar items, buttons. 
 * The container's scope is to keep the navigation items presentational components.
 * It provides all context information needed and also does the navigation.
 * If this component content will grow, more small navigation components will be created 
 * based on navigation type. 
 */

const NavContainer = (props: Props) => {
    const uiStateContext = React.useContext(UIStateContext);
    containerData._uiStateContext = uiStateContext;
    containerData.history = props.history;
    containerData.userAuthStatus = uiStateContext.userAuthStatus;
    containerData.isUserConnectedToAPatientAccount = uiStateContext.isUserConnectedToAPatientAccount;

    return (props.children)(containerData);
}

export default withRouter(NavContainer);