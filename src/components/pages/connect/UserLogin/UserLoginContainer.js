// @flow
import * as React from 'react';
import UIStateContext from '../../../UIState/UIState-context';
import { UserAuthStatus } from '../../../common/UserAuthStatus';

const loginContainer = {
    uiStateContext: null,

    onAuthenticate: function (phoneNo: string, password: string) {
        if(phoneNo === "d" && password === "d") {
            this.uiStateContext.setUserAuthenticationStatus(UserAuthStatus.DOCTOR);
        }
        else if (phoneNo === "s" && password === "s") {
            this.uiStateContext.setUserAuthenticationStatus(UserAuthStatus.SITE_ADMIN);
        }
        else {
            this.uiStateContext.setUserAuthenticationStatus(UserAuthStatus.PATIENT);
        }

        this.uiStateContext.setDisplayLoginComponent(false);
    },

    onCreateAccount: function (/*accountInfo*/) {
        this.uiStateContext.setUserAuthenticationStatus(UserAuthStatus.PATIENT);
        this.uiStateContext.setDisplayLoginComponent(false);
    },

    onCancel: function () {
        this.uiStateContext.setDisplayLoginComponent(false);
    }
}

type Props = {
    children: (containerData: typeof loginContainer) => React.Node
}
export default (props: Props) => {
    loginContainer.uiStateContext = React.useContext(UIStateContext);
    return (props.children)(loginContainer);
}