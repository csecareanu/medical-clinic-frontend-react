
import React from 'react';
import { FormattedMessage } from 'react-intl';

import classesMenu from '../menu.module.css';
import NavListView from '../../UI/NavListView/NavListView';
import NavItemButton_NoStyle from '../../UI/NavListView/NavItemButton/NavItemButton';
import withProps from '../../hoc/withProps';

const NavItemButton = withProps(NavItemButton_NoStyle, 
    {
        styleItem: classesMenu.MenuItem, 
        styleText: classesMenu.MenuTextAdmin, 
        styleTextActive: classesMenu.ActiveAdmin
    });

export default () => (
    <NavListView style={classesMenu.Menu}>
        <NavItemButton link="/admin/doctors">
            <FormattedMessage id="menu_sysadmin_doctors" defaultMessage={'DOCTORS'}/>
        </NavItemButton>
        <NavItemButton link="/admin/specialties">
            <FormattedMessage id="menu_sysadmin_specialties" defaultMessage={'SPECIALTIES'}/>
        </NavItemButton>
        <NavItemButton link="/admin/services">
            <FormattedMessage id="menu_sysadmin_services" defaultMessage={'SERVICES'}/>
        </NavItemButton>
        <NavItemButton link="/admin/doctor_to_svcs">
            <FormattedMessage id="menu_sysadmin_attach_services" defaultMessage={'ATTACHING SERVICES'}/>
        </NavItemButton>
        <NavItemButton link="/admin/log_events">
            <FormattedMessage id="menu_sysadmin_log_events" defaultMessage={'LOG EVENTS'}/>
        </NavItemButton>
        <NavItemButton link="/admin/settings">
            <FormattedMessage id="menu_sysadmin_setings" defaultMessage={'SETTINGS'}/>
        </NavItemButton>
    </NavListView>
);
