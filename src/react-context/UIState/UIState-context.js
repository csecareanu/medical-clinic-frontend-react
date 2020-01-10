import React from 'react';

import { UserAuthType } from '../../shared/UserAuthType';

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
    userAuthenticationStatus: UserAuthType.UNAUTHENTICATED,
    // a doctor can connect to a patient account in order to create an appointment 
    // or change patient's personal data.
    isUserConnectedToAPatientAccount: false,

    displayUserAuthenticateModal: false,
    navigateToURIOnCancelAuth: null,
    navigateToURIOnSuccessfullyAuth: null,

    displayLogoutComponent: false,

    displayMenuSideDrawerComponent: false,

    setUserAuthenticationStatus: (userAuthenticationStatus) => {},
    setUserConnectedToPatientAccount: (isConnected) => {},   
    setDisplayUserAuthenticateModal: (show) => {},
    setNavigateToURIOnCancelAuth: (uri) => {},
    setNavigateToURIOnSuccessfullyAuth: (uri) => {},
    setDisplayLogoutComponent: (show) => {},
    setDisplayMenuSideDrawerComponent: (show) => {}
});

export default UIStateContext;