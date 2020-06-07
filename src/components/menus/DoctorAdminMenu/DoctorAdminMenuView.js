// @flow

import React from 'react';
import {FormattedMessage} from 'react-intl';

import classesMenu from '../menu.module.css';
import {
    DoctorMenuItem,
    ClinicMenuItem
} from '../../../shared/MenuItemIdentifiers';
import {
    ClinicLinkLocationName,
    DoctorLinkLocationName
} from '../../../shared/LinkLocationNames';
import NavListView from '../../UI/NavListView/NavListView';
import NavItemButton_NoStyle from '../../UI/NavListView/NavItemButton/NavItemButton';
import withProps from '../../hoc/withProps';

const NavItemButtonCSS = withProps(NavItemButton_NoStyle, 
    {
        styleItem: classesMenu.MenuItem, 
        styleText: classesMenu.MenuText, 
        styleTextActive: classesMenu.Active
    });

const NavItemButtonAdminCSS = withProps(NavItemButton_NoStyle, 
    {
        styleItem: classesMenu.MenuItem, 
        styleText: classesMenu.MenuTextAdmin, 
        styleTextActive: classesMenu.ActiveAdmin
    });

type Props = {
    onItemSelect?: (itemId: number) => void
};

const DoctorAdminMenu = (props: Props) => (
    <React.Fragment>
        <NavListView style={classesMenu.Menu}>
            <NavItemButtonCSS 
                id={ClinicMenuItem.HOME}
                link={ClinicLinkLocationName.HOME}
                exact
                onClick={props.onItemSelect}
            >
                <FormattedMessage id="doctor-admin-menu.home" />
            </NavItemButtonCSS>
        </NavListView>

        <NavListView style={classesMenu.Menu}>
            <NavItemButtonAdminCSS
                id={DoctorMenuItem.APPOINTMENTS}
                link={DoctorLinkLocationName.APPOINTMENTS}
                onClick={props.onItemSelect}
            >
                <FormattedMessage id="doctor-admin-menu.appts_info" />
            </NavItemButtonAdminCSS>

            <NavItemButtonAdminCSS
                id={DoctorMenuItem.WORKING_TIME}
                link={DoctorLinkLocationName.WORKING_TIME}
                onClick={props.onItemSelect}
            >
                <FormattedMessage id="doctor-admin-menu.working_time" />
            </NavItemButtonAdminCSS>

            <NavItemButtonAdminCSS
                id={DoctorMenuItem.LOG_EVENTS}
                link={DoctorLinkLocationName.LOG_EVENTS}
                onClick={props.onItemSelect}
            >
                <FormattedMessage id="doctor-admin-menu.log_events" />
            </NavItemButtonAdminCSS>

            <NavItemButtonAdminCSS
                id={DoctorMenuItem.NOTIFICATION_MESSAGES}
                link={DoctorLinkLocationName.NOTIFICATION_MESSAGES}
                onClick={props.onItemSelect}
            >
                <FormattedMessage id="doctor-admin-menu.notif-msgs" />
            </NavItemButtonAdminCSS>

        </NavListView>
    </React.Fragment>
);

export default DoctorAdminMenu;