import React from 'react';

import NavListView from '../../UI/NavListView/NavListView';
import NavItemView from '../../UI/NavListView/NavItemButton/NavItemButton';

export default () => (
    <NavListView>
        <NavItemView link="/doctor">ADMINISTRATION</NavItemView>
        <NavItemView link="/doctor/patient_login">LOG IN PATIENT ACCOUNT</NavItemView>
    </NavListView>
);