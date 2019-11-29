// @flow

import React from 'react';

import NavContainer from '../../NavContainer/NavContainer';
import UserToolbarView from './UserToolbarView';

const UserToolbar = () => (
    <NavContainer>
    {
        (navigationData) => (
            <UserToolbarView 
                userAuthStatus={navigationData.userAuthStatus}
                onClinicItemSelect={navigationData.onClinicItemSelect} 
            />
        )
    }
    </NavContainer>
);

export default UserToolbar;