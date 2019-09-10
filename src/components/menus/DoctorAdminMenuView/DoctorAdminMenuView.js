import React from 'react';

import NavListView from '../../UI/NavListView/NavListView';
import NavItemView from '../../UI/NavListView/NavItemButton/NavItemButton';

export default () => (
    <React.Fragment>
        <NavListView>
            <NavItemView link="/">HOME</NavItemView>
            {/*
        </NavListView>
        <NavListView>
            */}
            <NavItemView link="/doctor/my_account">MY ACCOUNT</NavItemView>
            <NavItemView link="/doctor/appointments">APPOINTMENTS INFO</NavItemView>
            <NavItemView link="/doctor/working_time">WORKING TIME</NavItemView>
            <NavItemView link="/doctor/log_events">LOG EVENTS</NavItemView>
            <NavItemView link="/doctor/notification_msgs">NOTIFICATION MESSAGES</NavItemView>
        </NavListView>
    </React.Fragment>
);