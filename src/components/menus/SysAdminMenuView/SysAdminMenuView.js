
import React from 'react';

import NavListView from '../../UI/NavListView/NavListView';
import NavItemView from '../../UI/NavListView/NavItemButton/NavItemButton';

export default () => (
    <NavListView>
        <NavItemView link="/admin/doctors">DOCTORS</NavItemView>
        <NavItemView link="/admin/specialties">SPECIALTIES</NavItemView>
        <NavItemView link="/admin/services">SERVICES</NavItemView>
        <NavItemView link="/admin/doctor_to_svcs">ATTACHING SERVICES</NavItemView>
        <NavItemView link="/admin/log_events">LOG EVENTS</NavItemView>
        <NavItemView link="/admin/settings">SETTINGS</NavItemView>
    </NavListView>
);
