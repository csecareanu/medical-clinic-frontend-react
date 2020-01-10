// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import CreatePatientAccountView from './CreatePatientAccountView';
import CheckSMSCode from '../CheckSMSCode/CheckSMSCode';
import CreatePatientAccountContainer from './CreatePatientAccountContainer';

export type CreateNewAccountState = {
    waitingUserToEnterData: boolean,
    checkingSMSCode: boolean,
    isSMSCodeValid: boolean
}

type Props = {
    showAdminControls?: boolean,
    navigateToURIOnSuccessfullyAuth?: string,
    onCreateAccountPending: () => void,
    onCancelCreateAccount: () => void,
    onAccountCreated: () => void
}

const CreatePatientAccount = (props: Props) => {

    const checkSMSCodeComponentTitle = <FormattedMessage id="label_phone_no_check"
                            defaultMessage ={"Phone number validation"} />

    return (
        <CreatePatientAccountContainer
            navigateToURIOnSuccessfullyAuth={props.navigateToURIOnSuccessfullyAuth}
            onCreateAccountPending={props.onCreateAccountPending}
            onCancelCreateAccount={props.onCancelCreateAccount}
            onAccountCreated={props.onAccountCreated}
        >
        {
            (newAccountData) => (
                newAccountData.authenticationState.checkingSMSCode
                ? (
                    <CheckSMSCode 
                        title={checkSMSCodeComponentTitle}
                        phoneNoToCheck={newAccountData.onCreateAccount}
                        onCheckCode={ (code: string) => {} }
                        onCancel={ () => {}}
                    />
                ) : (
                    <CreatePatientAccountView 
                        showAdminControls={props.showAdminControls}
                        onCreateAccount={newAccountData.onCreateAccount}
                    />
                )

            )
        }
        </CreatePatientAccountContainer>
    );
}

export default CreatePatientAccount;