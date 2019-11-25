// @flow

import React from 'react';

import NavContainer from '../../../NavContainer/NavContainer';
import MyAccountToolbarItemView from './MyAccountToolbarItemView';

const NewAppointmentToolbarItem = () => (
    <NavContainer>
    {
        (navigationData) => (
            <MyAccountToolbarItemView
                userAuthStatus={navigationData.userAuthStatus}
                onClick={navigationData.onClinicItemSelect}
            />
        )
    }
    </NavContainer>
)

export default NewAppointmentToolbarItem;