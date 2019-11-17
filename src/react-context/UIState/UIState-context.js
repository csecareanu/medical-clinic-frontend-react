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
    // a doctor can log into any patient account in order to create an appointment for the patient
    loggedIntoPatientAccount: false,
    displayLoginComponent: false,
    displayLogoutComponent: false,
    displayMenuSideDrawerComponent: false,
    setUserAuthenticationStatus: (userAuthStatus) => {},
    setLoggedIntoPatientAccount: (isLoggedIn) => {},    
    setDisplayLoginComponent: (show) => {},
    setDisplayLogoutComponent: (show) => {},
    setDisplayMenuSideDrawerComponent: (show) => {}
});

export default UIStateContext;