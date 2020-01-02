// @flow

import * as React from 'react';

import UIStateContext from '../../../../react-context/UIState/UIState-context';
import { UserAuthType } from '../../../../shared/UserAuthType';
import type { RouterHistory } from 'react-router';

const AuthenticationStatus = {
    
}

const containerData = {
    _uiStateContext: (null: null | UIStateContext),
    displayLoginComponent: (false: boolean),

    onAuthenticate: (history: RouterHistory, phoneNo: string, password: string) : void => {

        if(containerData._uiStateContext == null) {
            console.log("UserLoginContainer. uiStateContext not set");
            return;
        }
        const uiStateContext = containerData._uiStateContext;

        let newAuthStatus = UserAuthType.UNAUTHENTICATED;

        if(phoneNo === "m" && password === "m") {
            newAuthStatus = UserAuthType.DOCTOR;
        }
        else if (phoneNo === "a" && password === "a") {
            newAuthStatus = UserAuthType.SITE_ADMIN;
        }
        else {
            newAuthStatus = UserAuthType.PATIENT;
        }

        uiStateContext.setUserAuthenticationStatus(newAuthStatus);
        uiStateContext.setDisplayLoginComponent(false);

        if (uiStateContext.navigateToURIOnSuccessfullyLogin) {
            history.push({pathname: uiStateContext.navigateToURIOnSuccessfullyLogin});
            uiStateContext.setNavigateToURIOnSuccessfullyLogin(null);
        }        
    },

    onCreateAccount: (history: RouterHistory /*, accountInfo*/) : void => {
        if(containerData._uiStateContext == null) {
            console.log("onCreateAccount. uiStateContext not set");
            return;
        }
        const uiStateContext = containerData._uiStateContext;

        uiStateContext.setUserAuthenticationStatus(UserAuthType.PATIENT);
        uiStateContext.setDisplayLoginComponent(false);

        if (uiStateContext.navigateToURIOnSuccessfullyLogin) {
            history.push({pathname: uiStateContext.navigateToURIOnSuccessfullyLogin});
            uiStateContext.setNavigateToURIOnSuccessfullyLogin(null);
        }
    },

    onCreateAccountCheckSMSCode: (code: string) : void => {

    },

    onCancel: (history: RouterHistory) : void => {
        if(containerData._uiStateContext == null) {
            console.log("onCancel. uiStateContext not set");
            return;
        }
        const uiStateContext = containerData._uiStateContext;
        uiStateContext.setDisplayLoginComponent(false);

        if (uiStateContext.navigateToURIOnCancelLogin) {
            history.push({pathname: uiStateContext.navigateToURIOnCancelLogin});
            uiStateContext.setNavigateToURIOnCancelLogin(null);
        }        
    }
}

type Props = {
    children: (containerData: typeof containerData) => React.Node
}
export default (props: Props) => {
    let uiStateContext = React.useContext(UIStateContext);
    containerData._uiStateContext = uiStateContext;
    containerData.displayLoginComponent = uiStateContext.displayLoginComponent;
    return (props.children)(containerData);
}