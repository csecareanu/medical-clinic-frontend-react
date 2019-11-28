// @flow

import React from 'react';

import NavContainer from '../../../NavContainer/NavContainer';
import MyAccountView from './MyAccountView';

const PatientAccount = () => (
    <NavContainer>
    {
        (navigationData) => (
            <MyAccountView
                userAuthStatus={navigationData.userAuthStatus}
            />
        )
    }
    </NavContainer>
)

export default PatientAccount;