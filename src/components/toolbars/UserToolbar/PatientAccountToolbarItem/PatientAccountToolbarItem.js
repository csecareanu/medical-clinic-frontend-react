// @flow

import React from 'react';

import NavContainer from '../../../NavContainer/NavContainer';
import PatientAccountToolbarItemView from './PatientAccountToolbarItemView';

const MyAccountToolbarItem = () => (
    <NavContainer>
    {
        (navigationData) => (
            <PatientAccountToolbarItemView
                onClick={navigationData.onClinicItemSelect}
            />
        )
    }
    </NavContainer>
)

export default MyAccountToolbarItem;