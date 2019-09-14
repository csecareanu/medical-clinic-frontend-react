import React from 'react';

import classesMenu from '../menu.module.css';
import NavListView from '../../UI/NavListView/NavListView';
import NavItemButton_NoStyle from '../../UI/NavListView/NavItemButton/NavItemButton';
import withProps from '../../hoc/withProps';

const NavItemButton = withProps(NavItemButton_NoStyle, 
    {
        styleItem: classesMenu.MenuItem, 
        styleText: classesMenu.MenuText, 
        styleTextActive: classesMenu.Active
    });

const NavItemButtonAdmin = withProps(NavItemButton_NoStyle, 
    {
        styleItem: classesMenu.MenuItem, 
        styleText: classesMenu.MenuTextAdmin, 
        styleTextActive: classesMenu.ActiveAdmin
    });

export default () => (
    <React.Fragment>
        <NavListView style={classesMenu.Menu}>
            <NavItemButton link="/" exact>HOME</NavItemButton>
        </NavListView>

        <NavListView style={classesMenu.Menu}>
            <NavItemButtonAdmin link="/doctor/my_account">MY ACCOUNT</NavItemButtonAdmin>
            <NavItemButtonAdmin link="/doctor/appointments">APPOINTMENTS INFO</NavItemButtonAdmin>
            <NavItemButtonAdmin link="/doctor/working_time">WORKING TIME</NavItemButtonAdmin>
            <NavItemButtonAdmin link="/doctor/log_events">LOG EVENTS</NavItemButtonAdmin>
            <NavItemButtonAdmin link="/doctor/notification_msgs">NOTIFICATION MESSAGES</NavItemButtonAdmin>
        </NavListView>
    </React.Fragment>
);