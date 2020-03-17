// @flow

import React from 'react';

import NavContainer from '../../../NavContainer/NavContainer';
import PatientMyAccountView from './PatientMyAccountView';

const PatientMyAccountPage = () => (
    <NavContainer>
    {
        (navigationData) => (
            <PatientMyAccountView
                userAuthenticationStatus={navigationData.userAuthenticationStatus}
                isUserConnectedToAPatientAccount={navigationData.isUserConnectedToAPatientAccount}
                onNavigationItemSelect={ (itemType: number | Symbol) => {
                    navigationData.onClinicMenuItemSelect(itemType);
                }} 
            />
        )
    }
    </NavContainer>
)

export default PatientMyAccountPage;