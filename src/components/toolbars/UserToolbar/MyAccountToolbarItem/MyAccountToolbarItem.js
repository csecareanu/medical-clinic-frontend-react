// @flow

import React from 'react';

import NavContainer from '../../../NavContainer/NavContainer';
import MyAccountToolbarItemView from './MyAccountToolbarItemView';

const MyAccountToolbarItem = () => (
    <NavContainer>
    {
        (navigationData) => (
            <MyAccountToolbarItemView
                onClick={navigationData.onClinicItemSelect}
            />
        )
    }
    </NavContainer>
)

export default MyAccountToolbarItem;