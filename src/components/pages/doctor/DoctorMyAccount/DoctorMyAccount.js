// @flow

import React from 'react';

import NavContainer from '../../../NavContainer/NavContainer';
import DoctorMyAccountView from './DoctorMyAccountView';

const PatientAccount = () => (
    <NavContainer>
    {
        (navigationData) => (
            <DoctorMyAccountView
                userAuthStatus={navigationData.userAuthStatus}
                onNavigationItemSelect={ (itemType: number | Symbol) => {
                    navigationData.onClinicMenuItemSelect(itemType);
                }} 
            />
        )
    }
    </NavContainer>
)

export default PatientAccount;