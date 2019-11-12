import React from 'react';
import { FormattedMessage } from 'react-intl';

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
            <NavItemButtonAdmin link="/doctor/my_account">
                <FormattedMessage id="menu_doctor_admin_my_account" defaultMessage={'MY ACCOUNT'}/>
            </NavItemButtonAdmin>
            <NavItemButtonAdmin link="/doctor/appointments">
                <FormattedMessage id="menu_doctor_admin_appts_info" defaultMessage={' APPOINTMENTS INFO'}/>
            </NavItemButtonAdmin>
            <NavItemButtonAdmin link="/doctor/working_time">
                <FormattedMessage id="menu_doctor_admin_working_time" defaultMessage={'WORKING TIME'}/>
            </NavItemButtonAdmin>
            <NavItemButtonAdmin link="/doctor/log_events">
                <FormattedMessage id="menu_doctor_admin_log_events" defaultMessage={'LOG EVENTS'}/>
            </NavItemButtonAdmin>
            <NavItemButtonAdmin link="/doctor/notifications_msgs">
                <FormattedMessage id="menu_doctor_admin_notif_msgs" defaultMessage={'NOTIFICATION MESSAGES'}/>
            </NavItemButtonAdmin>
        </NavListView>
    </React.Fragment>
);