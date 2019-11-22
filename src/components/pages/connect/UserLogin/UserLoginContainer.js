// @flow

import * as React from 'react';

import UIStateContext from '../../../../react-context/UIState/UIState-context';
import { UserAuthType } from '../../../../common/UserAuthType';

const containerData = {
    uiStateContext: (null: null | UIStateContext),
    userAuthStatus: (UserAuthType.UNAUTHENTICATED: number | Symbol),
    displayLoginComponent: (false: boolean),

    onAuthenticate: (phoneNo: string, password: string) : void => {

        if(containerData.uiStateContext == null) {
            console.log("UserLoginContainer. uiStateContext not set");
            return;
        }
        const uiStateContext = containerData.uiStateContext;

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
        if(containerData.uiStateContext == null) {
            console.log("onCreateAccount. uiStateContext not set");
            return;
        }
        const uiStateContext = containerData.uiStateContext; //added to get rid of flow warning        

        uiStateContext.setUserAuthenticationStatus(UserAuthType.PATIENT);
        uiStateContext.setDisplayLoginComponent(false);

    },

    onCancel: () : void => {
        if(containerData.uiStateContext == null) {
            console.log("onCancel. uiStateContext not set");
            return;
        }
        const uiStateContext = containerData.uiStateContext;
        uiStateContext.setDisplayLoginComponent(false);
    }
}

type Props = {
    children: (containerData: typeof containerData) => React.Node
}
export default (props: Props) => {
    let uiStateContext = React.useContext(UIStateContext);
    containerData.uiStateContext = uiStateContext;
    containerData.userAuthStatus = uiStateContext.userAuthStatus;
    containerData.displayLoginComponent = uiStateContext.displayLoginComponent;
    return (props.children)(containerData);
}