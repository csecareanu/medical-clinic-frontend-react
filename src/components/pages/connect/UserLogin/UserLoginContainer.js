// @flow

import * as React from 'react';

import UIStateContext from '../../../../react-context/UIState/UIState-context';
import { UserAuthType } from '../../../../common/UserAuthType';

const loginContainer = {
    uiStateContext: (null: null | UIStateContext),
    userAuthStatus: (UserAuthType.UNAUTHENTICATED: number | Symbol),

    onAuthenticate: (phoneNo: string, password: string) : void => {

        if(loginContainer.uiStateContext == null) {
            console.log("UserLoginContainer. uiStateContext not set");
            return;
        }
        const uiStateContext = loginContainer.uiStateContext; //added to get rid of flow warning

        let newAuthStatus = UserAuthType.UNAUTHENTICATED;

        if(phoneNo === "d" && password === "d") {
            newAuthStatus = UserAuthType.DOCTOR;
        }
        else if (phoneNo === "s" && password === "s") {
            newAuthStatus = UserAuthType.SITE_ADMIN;
        }
        else {
            newAuthStatus = UserAuthType.PATIENT;
        }

        uiStateContext.setUserAuthenticationStatus(newAuthStatus);
        uiStateContext.setDisplayLoginComponent(false);
    },

    onCreateAccount: (/*accountInfo*/) : void => {
        if(loginContainer.uiStateContext == null) {
            console.log("onCreateAccount. uiStateContext not set");
            return;
        }
        const uiStateContext = loginContainer.uiStateContext; //added to get rid of flow warning        

        uiStateContext.setUserAuthenticationStatus(UserAuthType.PATIENT);
        uiStateContext.setDisplayLoginComponent(false);

    },

    onCancel: () : void => {
        if(loginContainer.uiStateContext == null) {
            console.log("onCancel. uiStateContext not set");
            return;
        }
        const uiStateContext = loginContainer.uiStateContext;
        uiStateContext.setDisplayLoginComponent(false);
    }
}

type Props = {
    children: (containerData: typeof loginContainer) => React.Node
}
export default (props: Props) => {
    let uiStateContext = React.useContext(UIStateContext);
    loginContainer.uiStateContext = uiStateContext;
    loginContainer.userAuthStatus = uiStateContext.userAuthStatus;
    return (props.children)(loginContainer);
}