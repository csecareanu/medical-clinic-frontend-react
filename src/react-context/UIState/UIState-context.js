import React from 'react';

import {UserAuthType} from '../../shared/UserAuthType';
import {LanguageType} from '../../shared/LanguageType';

/**
 * Context provided by the UIState component
 * 
 * The following members and their values are only used for IDE IntelliSense and
 * to have an idea about how the interface looks like. 
 * The code compiles and works also without them.
 * 
 * @see UIState.js
 * 
 */
const UIStateContext = React.createContext({
    userAuthenticationStatus: (UserAuthType.UNAUTHENTICATED: $Values<typeof UserAuthType>),
    // a doctor can connect to a patient account in order to create an appointment 
    // or change patient's personal data.
    isUserConnectedToAPatientAccount: (false: boolean),

    displayUserAuthenticationModal: (false: boolean),
    navigateToURIOnCancelAuth: (null: string | null),
    navigateToURIOnSuccessfullyAuth: (null: string | null),

    displayUserLogoutModal: (false: boolean),

    displayMenuSideDrawerModal: (false: boolean),

    language: (LanguageType.EN: $Values<typeof LanguageType>),

    setUserAuthenticationStatus: (userAuthenticationStatus: $Values<typeof UserAuthType>) => {},
    setUserConnectedToPatientAccount: (isConnected: boolean) => {},   
    setDisplayUserAuthenticationModal: (show: boolean) => {},
    setNavigateToURIOnCancelAuth: (uri: string | null) => {},
    setNavigateToURIOnSuccessfullyAuth: (uri: string | null) => {},
    setDisplayUserLogoutModal: (show: boolean) => {},
    setDisplayMenuSideDrawerModal: (show: boolean) => {},
    setLanguage: (lang: $Values<typeof LanguageType>) => {}
});

export default UIStateContext;