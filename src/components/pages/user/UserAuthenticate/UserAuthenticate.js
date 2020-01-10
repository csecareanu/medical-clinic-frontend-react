// @flow

import React from 'react';

// import type ContainerData from './UserAuthenticateContainer';
import UserAuthenticateView from './UserAuthenticateView';
import UserAuthenticateContainer from './UserAuthenticateContainer';

const UserAuthenticate = () => (
    <UserAuthenticateContainer>
    {
        (userAuthData/* ContainerData */) => {

            if (userAuthData.displayUserAuthenticateModal === false) {
                return null;
            }

            return (
                <UserAuthenticateView
                    navigateToURIOnSuccessfullyAuth={userAuthData.navigateToURIOnSuccessfullyAuth}
                    navigateToURIOnCancelAuth={userAuthData.navigateToURIOnCancelAuth}

                    loginUserPending={userAuthData.loginUserPending}
                    createAccountPending={userAuthData.createAccountPending}
                    
                    onCreateAccountPending={userAuthData.onCreateAccountPending}
                    onCancelCreateAccount={userAuthData.onCancelCreateAccount}

                    onLoginUserPending={userAuthData.onLoginUserPending}
                    onCancelLoginUser={userAuthData.onCancelLoginUser}

                    onUserAuthenticated={userAuthData.onUserAuthenticated}
                    onCancelAuthenticateProcess={userAuthData.onCancelAuthenticateProcess}
                />
            );
        }
    }
    </UserAuthenticateContainer>
);

export default UserAuthenticate;