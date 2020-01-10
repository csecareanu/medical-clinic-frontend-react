// @flow

import React from 'react';

import NavContainer from '../../../NavContainer/NavContainer';
import MyAccountView from './MyAccountView';

const PatientAccount = () => (
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

export default PatientAccount;