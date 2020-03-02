// @flow

import React from 'react';

import type { ContainerData } from './UserAuthenticationContainer';
import UserAuthenticationView from './UserAuthenticationView';
import UserAuthenticationContainer from './UserAuthenticationContainer';

const hasSymbol = typeof Symbol === 'function';

export const UserAuthenticationFormType = {
    LOGIN_FORM: hasSymbol
        ? Symbol("LOGIN_FORM")
        : 1,
    CREATE_NEW_ACCOUNT_FORM: hasSymbol
        ? Symbol("CREATE_NEW_ACCOUNT_FORM")
        : 2
};

/**
 * Modal component used to authenticate a user. It can switch between different types of 
 * authentication forms (login existing account / create new account).
 * It does not alter the global state related to user logon. Rather the child components 
 * are in charge to update the global state when a user connects successfully (there are 
 * 'login existing account' and 'create new account' components).
 * The component may navigate to another URI on successful login.
 */
const UserAuthentication = () => (
    <UserAuthenticationContainer>
    {
        (userAuthData: ContainerData) => {
            if (userAuthData.displayUserAuthenticationModal === false) {
                return null;
            }

            return (
                <UserAuthenticationView
                    displayedForm={userAuthData.displayedForm}
                    onChangeDisplayedForm={userAuthData.onChangeDisplayedForm}
                    onUserAuthenticated={userAuthData.onUserAuthenticated}
                    onCancelAuthentication={userAuthData.onCancelAuthentication}
                />
            );
        }
    }
    </UserAuthenticationContainer>
);

export default UserAuthentication;