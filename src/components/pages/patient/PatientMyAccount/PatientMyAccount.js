// @flow

import React from 'react';

import NavContainer from '../../../NavContainer/NavContainer';
import PatientMyAccountView from './PatientMyAccountView';

const PatientAccount = () => (
    <NavContainer>
    {
        (navigationData) => (
            <PatientMyAccountView
                userAuthStatus={navigationData.userAuthStatus}
                isUserConnectedToAPatientAccount={navigationData.isUserConnectedToAPatientAccount}
                onNavigationItemSelect={ (itemType: number | Symbol) => {
                    navigationData.onClinicItemSelect(itemType);
                }} 
            />
        )
    }
    </NavContainer>
)

export default PatientAccount;