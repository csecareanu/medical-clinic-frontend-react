// @flow

import React from 'react';

import NavContainer from '../../../NavContainer/NavContainer';
import DoctorMyAccountView from './DoctorMyAccountView';

const PatientMyAccountPage = () => (
    <NavContainer>
    {
        (navigationData) => (
            <DoctorMyAccountView
                userAuthenticationStatus={navigationData.userAuthenticationStatus}
                onNavigationItemSelect={ (itemType: number | Symbol) => {
                    navigationData.onClinicMenuItemSelect(itemType);
                }} 
            />
        )
    }
    </NavContainer>
)

export default PatientMyAccountPage;