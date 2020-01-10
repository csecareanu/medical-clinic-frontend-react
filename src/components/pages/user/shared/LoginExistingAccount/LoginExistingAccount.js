// @flow

import React from 'react';

import LoginExistingAccountContainer from './LoginExistingAccountContainer';
import LoginExistingAccountView from './LoginExistingAccountView';

type Props = {
    navigateToURIOnSuccessfullyAuth: string,
    onLoginUserPending: () => void,
    onCancelLoginUser: () => void,
    onUserAuthenticated: () => void
}

const LoginExistingAccount = (props: Props) => (
    <LoginExistingAccountContainer
        navigateToURIOnSuccessfullyAuth={props.navigateToURIOnSuccessfullyAuth}
        onLoginUserPending={props.onLoginUserPending}
        onCancelLoginUser={props.onCancelLoginUser}
        onUserAuthenticated={props.onUserAuthenticated}
    >
    {
        (loginData) => (
            <LoginExistingAccountView 
                onAuthenticate={loginData.onAuthenticate}
            />
        )
    }
    </LoginExistingAccountContainer>
    
)

export default LoginExistingAccount;