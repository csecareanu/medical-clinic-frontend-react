
import React from 'react';
import { FormattedMessage } from 'react-intl';

import classesMenuDesktop from '../desktop.module.css';
import NavListView from '../../UI/NavListView/NavListView';
import NavItem from '../../UI/NavListView/NavItemButton/NavItemButton';
import withProps from '../../hoc/withProps';

const NavItemButton = withProps(NavItem, {style: classesMenuDesktop});

export default () => (
    <NavListView style={classesMenuDesktop}>
        <NavItemButton link="/" exact >
            <FormattedMessage id="menu_home" defaultMessage={'HOME'}/>
        </NavItemButton>
        <NavItemButton link="/doctors" >
            <FormattedMessage id="menu_doctors" defaultMessage={'DOCTORS'}/>
        </NavItemButton>
        <NavItemButton link="/about" >
            <FormattedMessage id="menu_about_clinic" defaultMessage={'ABOUT CLINIC'}/>
        </NavItemButton>
        <NavItemButton link="/contact" >
            <FormattedMessage id="menu_contact" defaultMessage={'CONTACT'}/>
        </NavItemButton>
        <NavItemButton link="/prices" >
            <FormattedMessage id="menu_prices" defaultMessage={'PRICES'}/>
        </NavItemButton>
        <NavItemButton link="/appointment" >
            <FormattedMessage id="menu_new_appointment" defaultMessage={'NEW APPOINTMENT'}/>
        </NavItemButton>
        <NavItemButton link="/my_account" >
            <FormattedMessage id="menu_my_account" defaultMessage={'MY ACCOUNT'}/>
        </NavItemButton>
        <NavItemButton link="/login" >
            <FormattedMessage id="menu_login" defaultMessage={'LOGIN'}/>
        </NavItemButton>
        <NavItemButton link="/logout" >
            <FormattedMessage id="menu_logout" defaultMessage={'LOGOUT'}/>
        </NavItemButton>
    </NavListView>
);
