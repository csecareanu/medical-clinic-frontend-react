// @flow
import React from 'react';

import UserLoginView from './UserLoginView';
import UserLoginContainer from './UserLoginContainer';


const UserLogin = () => {
    return (
        <UserLoginContainer>
            {
                (containerData) => (
                    <UserLoginView
                        onAuthenticate={(phoneNo, password) => {
                            containerData.onAuthenticate(phoneNo, password)
                        }}
                        onCreateAccount={(accountInfo) => {
                            containerData.onCreateAccount(accountInfo);
                        }}
                        onCancel={() => {
                            containerData.onCancel();
                        }}
                    />
                )
            }
        </UserLoginContainer>
    );
}

export default UserLogin;