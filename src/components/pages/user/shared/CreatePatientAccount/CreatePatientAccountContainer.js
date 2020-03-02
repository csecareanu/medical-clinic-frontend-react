// @flow

import * as React from 'react';

import { CreateAccountStatus, NewAccountRegMode } from './CreatePatientAccount';
import UIStateContext from '../../../../../react-context/UIState/UIState-context';
import { UserAuthType } from '../../../../../shared/UserAuthType';

export type ContainerData = {
    createAccountStatus: $Values<typeof CreateAccountStatus>,
    onCreateAccount: () => void,
    onCheckSMSCode: (code: string) => void,
    onResendSMSCode: () => void,
    onCloseWrongSMSCode: () => void,
    onCancelCheckSMSCode: () => void
}

type Props = {
    registrationMode: $Values<typeof NewAccountRegMode>,
    children: (containerData: ContainerData) => React.Node
}

type State = {
    createAccountStatus: $Values<typeof CreateAccountStatus>
}

/**
 * This class is intended only to create a new account. It should not alter the UIStateContext
 * because it is in a 'shared' folder and it is not its scope to know if a patient wants to
 * log in creating a new account or a doctor wants to log in as a patient creating a new patient
 * account. 
 * Do not use UIStateContext (do not use code like 
 * 'uiStateContext.setUserAuthenticationStatus(UserAuthType.PATIENT);')
 */
class CreatePatientAccountContainer extends React.Component<Props, State> {
    containerData: ContainerData;

    static contextType = UIStateContext;

    constructor () {
        super();

        this.state = {
            createAccountStatus: CreateAccountStatus.WAIT_USER_DATA
        }

        this.containerData = {
            createAccountStatus: this.state.createAccountStatus,
            onCreateAccount: this.onCreateAccount,
            onCheckSMSCode: this.onCheckSMSCode,
            onResendSMSCode: this.onResendSMSCode,
            onCloseWrongSMSCode: this.onCloseWrongSMSCode,
            onCancelCheckSMSCode: this.onCancelCheckSMSCode
        }
    }

    onCreateAccount = (/*, accountInfo*/) : void => {
        this.setState({
            createAccountStatus: CreateAccountStatus.CHECK_SMS_CODE
        });
    }

    onCheckSMSCode = (code: string) => {
        const uiStateContext = this.context;

        if (code === '0') {
            this.setState({
                createAccountStatus: CreateAccountStatus.CHECK_SMS_CODE_VALIDATE_WRONG
            });
            return;
        }

        this.setState({
            createAccountStatus: CreateAccountStatus.CHECK_SMS_CODE_VALIDATE_SUCCESS
        });

        if (this.props.registrationMode === NewAccountRegMode.AS_NEW_USER) {

            let newAuthStatus = UserAuthType.UNAUTHENTICATED;

            if(code === "m") {
                newAuthStatus = UserAuthType.DOCTOR;
            }
            else if (code === "a") {
                newAuthStatus = UserAuthType.SITE_ADMIN;
            }
            else {
                newAuthStatus = UserAuthType.PATIENT;
            }

            uiStateContext.setUserAuthenticationStatus(newAuthStatus);

        } else if (this.props.registrationMode === 
                    NewAccountRegMode.AS_PATIENT_ATTACHED_TO_DOCTOR_ACCOUNT) {
            uiStateContext.setUserConnectedToPatientAccount(true);
        } else {
            console.log("CreatePatientAccountContainer. onCheckSMSCode. Unknown registrationMode: ", 
                this.props.registrationMode);
            return;
        }
    }

    onResendSMSCode = () => {
        this.setState({
            createAccountStatus: CreateAccountStatus.CHECK_SMS_CODE
        });
    }

    onCancelCheckSMSCode = () : void => {
        this.setState({
            createAccountStatus: CreateAccountStatus.WAIT_USER_DATA
        });
    }

    onCloseWrongSMSCode = () : void => {
        this.setState({
            createAccountStatus: CreateAccountStatus.CHECK_SMS_CODE
        });
    }

    render() {
        // Updating the container data parameter with the latest values
        this.containerData.createAccountStatus = this.state.createAccountStatus;
        return (this.props.children)(this.containerData);
    }
}

export default CreatePatientAccountContainer;