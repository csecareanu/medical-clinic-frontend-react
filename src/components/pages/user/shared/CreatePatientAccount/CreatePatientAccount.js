// @flow

import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import type { ContainerData } from './CreatePatientAccountContainer';
import CreatePatientAccountContainer from './CreatePatientAccountContainer';
import CreatePatientAccountView from './CreatePatientAccountView';
import CheckSMSCode from '../CheckSMSCode/CheckSMSCode';
import WrongSMSCode from '../../shared/CheckSMSCode/WrongSMSCode/WrongSMSCode';
import AccountCreated from './AccountCreated/AccountCreated';

const hasSymbol = typeof Symbol === 'function';

/**
 * Take a decision about how to register the new created account
 */
export const NewAccountRegMode = {
    AS_NEW_USER: hasSymbol
        ? Symbol("AS_NEW_USER")
        : 1,
    AS_PATIENT_ATTACHED_TO_DOCTOR_ACCOUNT: hasSymbol
        ? Symbol("AS_PATIENT_ATTACHED_TO_DOCTOR_ACCOUNT")
        : 2
}

export const CreateAccountStatus = {
    WAIT_USER_DATA: hasSymbol
        ? Symbol("WAIT_USER_DATA")
        : 1,
    CHECK_SMS_CODE: hasSymbol
        ? Symbol("CHECK_SMS_CODE")
        : 2,
    CHECK_SMS_CODE_VALIDATE_SUCCESS: hasSymbol
        ? Symbol("CHECK_SMS_CODE_VALIDATE_SUCCESS")
        : 3,
    CHECK_SMS_CODE_VALIDATE_WRONG: hasSymbol
        ? Symbol("CHECK_SMS_CODE_VALIDATE_WRONG")
        : 4
}

type Props = {
    userRegistrationMode: $Values<typeof NewAccountRegMode>,
    showAdminControls?: boolean,
    showCancelAuthenticationBtn?: boolean,
    renderHeaderWhenCreateActionNotInPending?: () => React.Node,
    renderFooterWhenCreateActionNotInPending?: () => React.Node,
    onAccountCreated: () => void,
    onCancelAuthentication?: () => void
}

const CreatePatientAccount = (props: Props) => {
    return (
        <CreatePatientAccountContainer
            userRegistrationMode={props.userRegistrationMode}
        >
        {
            (accountData: ContainerData) => (
                <React.Fragment>
                    { accountData.createAccountStatus === CreateAccountStatus.WAIT_USER_DATA
                        ?   
                            <CreatePatientAccountView 
                                renderHeaderWhenCreateActionNotInPending={
                                    props.renderHeaderWhenCreateActionNotInPending
                                }
                                renderFooterWhenCreateActionNotInPending={
                                    props.renderFooterWhenCreateActionNotInPending
                                }
                                showAdminControls={props.showAdminControls}
                                showCancelAuthenticationBtn={
                                    props.showCancelAuthenticationBtn
                                }
                                onCreateAccount={accountData.onCreateAccount}
                                onCancelAuthentication={props.onCancelAuthentication}
                            />
                        : null
                    }
                    { accountData.createAccountStatus === CreateAccountStatus.CHECK_SMS_CODE
                        ? <CheckSMSCode 
                              title={
                                 <FormattedMessage id="create-patient-account.phone-validation" />
                              }
                              phoneNoToCheck='44444444'
                              onCheckCode={accountData.onCheckSMSCode}
                              onCancel={accountData.onCancelCheckSMSCode}
                            />
                        : null
                    }
                    { accountData.createAccountStatus === 
                                CreateAccountStatus.CHECK_SMS_CODE_VALIDATE_WRONG
                        ?   <WrongSMSCode 
                                onClose={accountData.onCloseWrongSMSCode} 
                            />
                        : null
                    }
                    { accountData.createAccountStatus === 
                                CreateAccountStatus.CHECK_SMS_CODE_VALIDATE_SUCCESS
                        ?   <AccountCreated 
                                onClose={props.onAccountCreated} 
                            />
                        : null
                    }
                </React.Fragment>
            )
        }
        </CreatePatientAccountContainer>
    );
}

export default CreatePatientAccount;