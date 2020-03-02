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

    displayUserAuthenticationModal: false,
    navigateToURIOnCancelAuth: null,
    navigateToURIOnSuccessfullyAuth: null,

    displayUserLogoutModal: false,

    displayMenuSideDrawerModal: false,

    setUserAuthenticationStatus: (userAuthenticationStatus) => {},
    setUserConnectedToPatientAccount: (isConnected) => {},   
    setDisplayUserAuthenticationModal: (show) => {},
    setNavigateToURIOnCancelAuth: (uri) => {},
    setNavigateToURIOnSuccessfullyAuth: (uri) => {},
    setDisplayUserLogoutModal: (show) => {},
    setDisplayMenuSideDrawerModal: (show) => {}
});

export default UIStateContext;