// @flow

import React from 'react';

import NavContainer from '../../../NavContainer/NavContainer';
import NewAppointmentToolbarItemView from './NewAppointmentToolbarItemView';

const NewAppointmentToolbarItem = () => (
    <NavContainer>
    {
        (navigationData) => (
            <NewAppointmentToolbarItemView
                onClick={navigationData.onClinicItemSelect}
            />
        )
    }
    </NavContainer>
)

export default NewAppointmentToolbarItem;