import React from 'react';

import NavListView from '../../UI/NavListView/NavListView';
import NavItemButton from '../../UI/NavListView/NavItemButton/NavItemButton';

export default () => (
    <React.Fragment>
        <NavListView>
            <NavItemButton link="/">HOME</NavItemButton>
            {/*
        </NavListView>
        <NavListView>
            */}
            <NavItemButton link="/doctor/my_account">MY ACCOUNT</NavItemButton>
            <NavItemButton link="/doctor/appointments">APPOINTMENTS INFO</NavItemButton>
            <NavItemButton link="/doctor/working_time">WORKING TIME</NavItemButton>
            <NavItemButton link="/doctor/log_events">LOG EVENTS</NavItemButton>
            <NavItemButton link="/doctor/notification_msgs">NOTIFICATION MESSAGES</NavItemButton>
        </NavListView>
    </React.Fragment>
);