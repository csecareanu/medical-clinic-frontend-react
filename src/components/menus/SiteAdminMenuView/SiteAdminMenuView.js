
import React from 'react';
import {FormattedMessage} from 'react-intl';

import classesMenu from '../menu.module.css';
import NavListView from '../../UI/NavListView/NavListView';
import NavItemButton_NoStyle from '../../UI/NavListView/NavItemButton/NavItemButton';
import withProps from '../../hoc/withProps';
import {SiteAdminLinkLocationName} from '../../../shared/LinkLocationNames';


const NavItemButton = withProps(NavItemButton_NoStyle, 
    {
        styleItem: classesMenu.MenuItem, 
        styleText: classesMenu.MenuTextAdmin, 
        styleTextActive: classesMenu.ActiveAdmin
    });

export default () => (
    <NavListView style={classesMenu.Menu}>
        <NavItemButton link={SiteAdminLinkLocationName.DOCTORS}>
            <FormattedMessage id="site-admin-menu.doctors" />
        </NavItemButton>
        <NavItemButton link={SiteAdminLinkLocationName.SPECIALTIES}>
            <FormattedMessage id="site-admin-menu.specialties" />
        </NavItemButton>
        <NavItemButton link={SiteAdminLinkLocationName.SERVICES}>
            <FormattedMessage id="site-admin-menu.services" />
        </NavItemButton>
        <NavItemButton link={SiteAdminLinkLocationName.ASSIGN_SERVICES_TO_DOCTOR}>
            <FormattedMessage id="site-admin-menu.attach-services" />
        </NavItemButton>
        <NavItemButton link={SiteAdminLinkLocationName.LOG_EVENTS}>
            <FormattedMessage id="site-admin-menu.log-events" />
        </NavItemButton>
        <NavItemButton link={SiteAdminLinkLocationName.SETTINGS}>
            <FormattedMessage id="site-admin-menu.settings" />
        </NavItemButton>
    </NavListView>
);
