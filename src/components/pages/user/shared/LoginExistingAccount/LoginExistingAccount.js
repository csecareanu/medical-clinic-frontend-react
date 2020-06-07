// @flow
import * as React from 'react';

import type {ContainerData} from './LoginExistingAccountContainer';
import LoginExistingAccountContainer from './LoginExistingAccountContainer';
import LoginExistingAccountView from './LoginExistingAccountView';

const hasSymbol = typeof Symbol === 'function';

/**
 * Take a decision about how to register the new authenticated user
 */
export const ExistingAccountRegMode = {
    AS_NEW_USER: hasSymbol
        ? Symbol("AS_NEW_USER")
        : 1,
    AS_PATIENT_ATTACHED_TO_DOCTOR_ACCOUNT: hasSymbol
        ? Symbol("AS_PATIENT_ATTACHED_TO_DOCTOR_ACCOUNT")
        : 2
}

type Props = {
    userRegistrationMode: $Values<typeof ExistingAccountRegMode>,
    renderHeaderWhenLoginActionNotInPending?: () => React.Node,
    renderFooterWhenLoginActionNotInPending?: () => React.Node,
    onUserAuthenticated: () => void,
    onCancelAuthentication: () => void
}

const LoginExistingAccount = (props: Props) => (
    <LoginExistingAccountContainer
        userRegistrationMode={props.userRegistrationMode}
        onUserAuthenticated={props.onUserAuthenticated}
    >
    {
        (loginData: ContainerData) => (
            <LoginExistingAccountView 
                renderHeaderWhenLoginActionNotInPending={
                    props.renderHeaderWhenLoginActionNotInPending
                }
                renderFooterWhenLoginActionNotInPending={
                    props.renderFooterWhenLoginActionNotInPending
                }
                onAuthenticate={loginData.onAuthenticate}
                onCancelAuthentication={props.onCancelAuthentication}
            />
        )
    }
    </LoginExistingAccountContainer>
)

export default LoginExistingAccount;