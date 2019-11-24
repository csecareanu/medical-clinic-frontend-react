import React from 'react';

import { UserAuthType } from '../../common/UserAuthType';

/**
 * Context provided by the UIState component
 * 
 * The following members and their values are only used for IDE IntelliSense and
 * to have an idea about how the interface looks like. 
 * The program compiles and works also without them.
 * 
 * @see UIState.js
 * 
 */
const UIStateContext = React.createContext({
    userAuthStatus: UserAuthType.UNAUTHENTICATED,
    // a doctor can connect to a patient account in order to create an appointment 
    // or change his/her personal data.
    isUserConnectedToAPatientAccount: false,
    displayLoginComponent: false,
    navigateToURIOnCancelLogin: null,
    navigateToURIOnSuccessfullyLogin: null,
    displayLogoutComponent: false,
    displayMenuSideDrawerComponent: false,
    setUserAuthenticationStatus: (userAuthStatus) => {},
    setUserConnectedToPatientAccount: (isConnected) => {},   
    setDisplayLoginComponent: (show) => {},
    setNavigateToURIOnCancelLogin: (uri) => {},
    setNavigateToURIOnSuccessfullyLogin: (uri) => {},
    setDisplayLogoutComponent: (show) => {},
    setDisplayMenuSideDrawerComponent: (show) => {}
});

export default UIStateContext;