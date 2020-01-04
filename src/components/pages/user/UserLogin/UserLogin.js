// @flow

import React from 'react';

import UserLoginView from './UserLoginView';
import UserLoginContainer from './UserLoginContainer';

export const LoginStatus = {
    WaitingUserAction: 1,
    LoginExistingUser: 2,
    CreateNewAccount: 3
}

export type AuthenticationState = {
    loginStatus: number, //TODO: typeof LoginStatus,
    loginStates: {
        waitingUserAction: {

        },

        loginExistingUser: {

        },

        createNewAccount: {
            checkingSMSCode: boolean,
            isSMSCodeValid: boolean
        }
    }
}

type Props = {
}

/**
 * Displays a login window lying over the current displayed web page which becomes semi-transparent
 * This class uses settings parameters from the UIStateContext react context:
 *      displayLoginComponent - shows on the screen only if someone has set it
 *      navigateToURIOnCancelLogin - if set will navigate this URI when the user cancels the login
            process.
        navigateToURIOnSuccessfullyLogin - if set will navigate tho this URI when the user 
            authenticates successfully
 */
const UserLogin = (props: Props) => {
    //TODO log all user actions in order to reproduce all his/her steps at debug time

    return (
        <UserLoginContainer>
            {
                (containerData) => (
                    containerData.displayLoginComponent
                        ? (
                            <UserLoginView
                                authenticationState={containerData.authenticationState}
                                onAuthenticate={(phoneNo, password) => {
                                    containerData.onAuthenticate(phoneNo, password)
                                }}
                                onCreateAccount={(/*accountInfo*/) => {
                                    containerData.onCreateAccount(/*, accountInfo*/);
                                }}
                                onCancel={() => {
                                    containerData.onCancel();
                                }}
                            />
                        )
                        : null
                )
            }
        </UserLoginContainer>
    );
}

export default UserLogin;