// @flow

import React from 'react';

import NavContainer from '../../../NavContainer/NavContainer';
import MyAccountView from './MyAccountView';

const MyAccountPage = () => (
    <NavContainer>
    {
        (navigationData) => (
            <MyAccountView
                userAuthenticationStatus={navigationData.userAuthenticationStatus}
            />
        )
    }
    </NavContainer>
)

export default MyAccountPage;