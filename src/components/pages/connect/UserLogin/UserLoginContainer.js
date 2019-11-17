
import { useContext } from 'react';
import UIStateContext, { UserAuthStatus } from '../../../UIState/UIState-context';

const loginContainer = {
    uiStateContext: null,

    onAuthenticate: function (phoneNo, password) {
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

    onCreateAccount: function (/*, accountInfo*/) {
        this.uiStateContext.setUserAuthenticationStatus(UserAuthStatus.PATIENT);
        this.uiStateContext.setDisplayLoginComponent(false);
    },

    onCancel: function () {
        this.uiStateContext.setDisplayLoginComponent(false);
    }
}


export default (props) => {
    loginContainer.uiStateContext = useContext(UIStateContext);
    return (props.children)(loginContainer);
}