// @flow

import * as React from 'react';
import { withRouter } from 'react-router-dom';
import type { RouterHistory } from 'react-router';

import { 
    UserMenuItem,
    PatientMenuItem,
    ClinicMenuItem
    }  from '../../common/MenuItemIdentifiers';
import { UserAuthType } from '../../common/UserAuthType';
import {
    ClinicLinkLocationName,
    PatientLinkLocationName
} from '../../common/LinkLocationNames';
import UIStateContext from '../../react-context/UIState/UIState-context.js';

const containerData = {
    history: (null: null | RouterHistory),
    uiStateContext: (null: null | UIStateContext),
    userAuthStatus: (UserAuthType.UNAUTHENTICATED: number | Symbol),

    onClinicItemSelect: (itemType: number) => {
        if(containerData.uiStateContext == null) {
            console.log("NavContainer. onClinicItemSelect. uiStateContext not set");
            return;
        }
        const uiStateContext = containerData.uiStateContext; //added to get rid of flow warning

        if(containerData.history == null) {
            console.log("NavContainer. onClinicItemSelect. history not set");
            return;            
        }
        const history = containerData.history;

        switch (itemType) {
            case UserMenuItem.USER_LOGIN:
                containerData.uiStateContext.setDisplayLoginComponent(true);
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
                if (uiStateContext.userAuthStatus === UserAuthType.UNAUTHENTICATED) {
                    uiStateContext.setNavigateToURIOnSuccessfullyLogin(
                            PatientLinkLocationName.NEW_APPOINTMENT);
                    uiStateContext.setDisplayLoginComponent(true);
                    break;
                }
                history.push({pathname: PatientLinkLocationName.NEW_APPOINTMENT});
                break;
            default:
                console.log("NavContainer. onClinicItemSelect. Unknown item id: " + 
                        itemType.toString());
                break;
        }
    }
}

/**
 * Container component used to navigate to site's resources. 
 * The navigation is intended to be done in container components in order to keep as presentational 
 * the components which trigger navigation.
 * If the component content will grow more small navigation  components will be created 
 * based on navigation type. 
 */

type Props = {
    children: (containerData: typeof containerData) => React.Node,
    history: RouterHistory
}

const NavContainer = (props: Props) => {
    const uiStateContext = React.useContext(UIStateContext);
    containerData.uiStateContext = uiStateContext;
    containerData.history = props.history;
    containerData.userAuthStatus = uiStateContext.userAuthStatus;

    return (props.children)(containerData);
}

export default withRouter(NavContainer);