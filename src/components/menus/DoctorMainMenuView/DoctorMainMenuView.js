import React from 'react';

import desktopMenuStyle from '../desktop.m'
import NavListView from '../../UI/NavListView/NavListView';
import NavItemButton from '../../UI/NavListView/NavItemButton/NavItemButton';

export default () => (
    <NavListView>
        <NavItemButton link="/doctor">ADMINISTRATION</NavItemButton>
        <NavItemButton link="/doctor/patient_login">LOG IN PATIENT ACCOUNT</NavItemButton>
    </NavListView>
);