// @flow

import * as React from 'react';

import {ExistingAccountRegMode} from './LoginExistingAccount';
import UIStateContext from '../../../../../react-context/UIState/UIState-context';
import {UserAuthType} from '../../../../../shared/UserAuthType';

export type ContainerData = {
    onAuthenticate: (phoneNo: string, password: string) => void
}

type Props = {
    userRegistrationMode: $Values<typeof ExistingAccountRegMode>,
    onUserAuthenticated: () => void,

    children: (containerData: ContainerData) => React.Node
}

class LoginExistingAccountContainer extends React.Component<Props, void> {

    containerData: ContainerData;

    static contextType = UIStateContext;

    constructor () {
        super();

        this.containerData = {
            onAuthenticate: this.onAuthenticate
        }
    }

    onAuthenticate = (phoneNo: string, password: string) : void => {
        const uiStateContext = this.context;

        if (this.props.userRegistrationMode === ExistingAccountRegMode.AS_NEW_USER) {

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

        } else if (this.props.userRegistrationMode === 
                    ExistingAccountRegMode.AS_PATIENT_ATTACHED_TO_DOCTOR_ACCOUNT) {
            uiStateContext.setUserConnectedToPatientAccount(true);
        } else {
            console.log("LoginExistingAccountContainer. onAuthenticate. " +
                + "Unknown userRegistrationMode: ", this.props.userRegistrationMode);
            return;
        }

        this.props.onUserAuthenticated();
    }

    render() {
        return (this.props.children)(this.containerData);
    }
}

export default LoginExistingAccountContainer;