
import React from 'react';

import NavListView from '../../UI/NavListView/NavListView';
import NavItemButton from '../../UI/NavListView/NavItemButton/NavItemButton';

export default () => (
    <NavListView>
        <NavItemButton link="/admin/doctors">DOCTORS</NavItemButton>
        <NavItemButton link="/admin/specialties">SPECIALTIES</NavItemButton>
        <NavItemButton link="/admin/services">SERVICES</NavItemButton>
        <NavItemButton link="/admin/doctor_to_svcs">ATTACHING SERVICES</NavItemButton>
        <NavItemButton link="/admin/log_events">LOG EVENTS</NavItemButton>
        <NavItemButton link="/admin/settings">SETTINGS</NavItemButton>
    </NavListView>
);
